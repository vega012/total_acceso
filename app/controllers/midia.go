package controllers
import (
"gopkg.in/mgo.v2/bson"
"github.com/revel/revel"
"intranet/app/models"
"intranet/app/mongo"
)
type Midia struct {
	*revel.Controller
	mongo.Mongo
}
func (c Midia) Fillallmedia() revel.Result {  
	var results []models.Midia
	bd := c.MongoDatabase.C("midia")
	err := bd.Find(bson.M{"status":29}).All(&results)
	if err != nil {
		panic(err)
	}
	data := make(map[string]interface{})
	if(len(results)>0){
		data["data"]=results
		data["error"]=nil
		data["status"]=1
	} else{
		data["status"]=0
	}
	return c.RenderJson(data)
}
func (c Midia) Rmvmidia(vp_id string) revel.Result{
	bd := c.MongoDatabase.C("midia")
	colQuerier := bson.M{"_id": bson.ObjectIdHex(vp_id)}
	change := bson.M{"$set": bson.M{"status":80}}
	err := bd.Update(colQuerier, change)
	data := make(map[string]interface{})
	if err != nil {
		data["status"]=2
		data["msg"]=err
	} else{
		data["status"]=1
	}
	return c.RenderJson(data)
}
func (c Midia) Findmidia(vp_id string) revel.Result{
	bd := c.MongoDatabase.C("midia")
	obj_midia := models.Midia{}
	err := bd.Find(bson.M{"_id": bson.ObjectIdHex(vp_id)}).One(&obj_midia)
	if err != nil {
		panic(err)
	}
	update :=1
	c.Session["Idmidia"] = vp_id
	c.Session.SetNoExpiration()
	c.RenderArgs["midia"] =obj_midia
	c.RenderArgs["update"] = update
	return c.RenderTemplate("Midia/Frmmantmedia.html")
}
func (c Midia) New_midia(vp_id string) revel.Result{
	return c.RenderTemplate("Midia/Frmmantmedia.html")
}
func (c Midia) ListMidia() revel.Result{
	return c.RenderTemplate("Midia/Frmlistmedia.html")
}
func (c Midia) Savemidia(vp_midia string,vp_icone string,vp_tipo string) revel.Result{
	bd := c.MongoDatabase.C("midia")
	err := bd.Insert(&models.Midia{Midia:vp_midia,Icone:vp_icone,Tipo:vp_tipo,Status:29})
	data := make(map[string]interface{})
	if err != nil {
		data["status"]=2
		data["msg"]=err
	} else{ 
		data["status"]=1
	}
	return c.RenderJson(data)
}
func (c Midia) Editmidia(vp_midia string,vp_icone string,vp_tipo string) revel.Result{
	vp_id := c.Session["Idmidia"]
	bd := c.MongoDatabase.C("midia")
	colQuerier := bson.M{"_id": bson.ObjectIdHex(vp_id)}
	change := bson.M{"$set": bson.M{"midia":vp_midia,"icone":vp_icone,"tipo":vp_tipo,"status":29}}
	err := bd.Update(colQuerier, change)
	data := make(map[string]interface{})
	if err != nil {
		data["status"]=2
		data["msg"]=err
	} else{
		data["status"]=1
	}
	return c.RenderJson(data) 
}
