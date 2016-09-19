package controllers
import (
"gopkg.in/mgo.v2/bson"
"github.com/revel/revel"
"intranet/app/models"
"intranet/app/mongo"
)
type Concurrence struct {
	*revel.Controller
	mongo.Mongo
}
func (c Concurrence) Fillallconcurrence() revel.Result {
	var results []models.Concurrence
	bd := c.MongoDatabase.C("concurrence")
	err := bd.Find(bson.M{"status":"29"}).All(&results)
	if err != nil {
		panic(err)
	}
	data := make(map[string]interface{})
	if(len(results)>0){
		data["data"]=results
		data["error"]=nil
		data["status"]=1
	} else{
		data["error"]=nil
		data["status"]=0	
	}
	return c.RenderJson(data)
}
func (c Concurrence) New_concurrence() revel.Result{
	return c.RenderTemplate("Concurrence/frm_adm_concurrence.html")
}
func (c Concurrence) Rmvconcurrence(vp_id string) revel.Result{
	bd := c.MongoDatabase.C("concurrence")
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
func (c Concurrence) Findconcurrence(vp_id string) revel.Result{
	bd := c.MongoDatabase.C("concurrence")
	obj_concurrence := models.Concurrence{}
	err := bd.Find(bson.M{"_id": bson.ObjectIdHex(vp_id)}).One(&obj_concurrence)
	if err != nil {
		panic(err)
	}
	update :=1
	c.Session["Idconcurrence"] = vp_id
	c.Session.SetNoExpiration()
	c.RenderArgs["concurrence"] =obj_concurrence
    c.RenderArgs["update"] = update
	return c.RenderTemplate("Concurrence/frm_adm_concurrence.html")
}
func (c Concurrence) Saveconcurrence(vp_start string,vp_end string,vp_concurre string) revel.Result{
	bd := c.MongoDatabase.C("concurrence")
	err := bd.Insert(&models.Concurrence{Start:vp_start,End:vp_end,Concurre:vp_concurre,Status:"29"})
	data := make(map[string]interface{})
	if err != nil {
		data["status"]=2
		data["msg"]=err
	} else{ 
		data["status"]=1
	} 
	return c.RenderJson(data)
}
func (c Concurrence) Editconcurrence(vp_start string,vp_end string,vp_concurre string) revel.Result{
	vp_id := c.Session["Idconcurrence"]
	bd := c.MongoDatabase.C("concurrence")	
	colQuerier := bson.M{"_id": bson.ObjectIdHex(vp_id)}
	change := bson.M{"$set": bson.M{"start":vp_start,"end":vp_end,"concurre":vp_concurre}}
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