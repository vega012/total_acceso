package controllers
import (
"gopkg.in/mgo.v2/bson"
"github.com/revel/revel"
"intranet/app/models"
"intranet/app/mongo"
)
type Submidia struct {
	*revel.Controller
	mongo.Mongo
}
func (c Submidia) Fillsubmidia() revel.Result {  
	var results []models.Submidia
	bd := c.MongoDatabase.C("submidia")
	err := bd.Find(bson.M{}).All(&results)
	if err != nil {
		panic(err)
	}
	data := make(map[string]interface{})
	if(len(results)>0){
		var results_all []models.Submidia
		for _,v:=range results {
			bdm := c.MongoDatabase.C("midia")
			obj_midia := models.Midia{}
			err:= bdm.Find(bson.M{"_id": bson.ObjectIdHex(v.Idmidia)}).One(&obj_midia)
			if err != nil {
				//panic(err)
			}
			results_all=append(results_all,models.Submidia{ID:v.ID,Submidia:v.Submidia,Idmidia:obj_midia.Midia,Status:v.Status})
		}
		data["data"]=results_all
		data["error"]=nil
		data["status"]=1
	} else{
		data["status"]=0
	}
	return c.RenderJson(data)
}
func (c Submidia) ListMedia() revel.Result {  
	var results []models.Midia
	bd := c.MongoDatabase.C("midia")
	err := bd.Find(bson.M{}).All(&results)
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

func (c Submidia) Rmvsubmidia(vp_id string) revel.Result{
	bd := c.MongoDatabase.C("submidia")
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
func (c Submidia) Findsubmidia(vp_id string) revel.Result{
	bd := c.MongoDatabase.C("submidia")
	obj_submidia := models.Submidia{}
	err := bd.Find(bson.M{"_id": bson.ObjectIdHex(vp_id)}).One(&obj_submidia)
	if err != nil {
		panic(err)
	}
	update :=1
	c.Session["Idsubmidia"] = vp_id
	c.Session.SetNoExpiration()
	c.RenderArgs["submidia"] =obj_submidia
	c.RenderArgs["update"] = update
	return c.RenderTemplate("Submidia/Frmmantmidia.html")
}
func (c Submidia) ListSubmidia() revel.Result{
	return c.RenderTemplate("Submidia/Frmlistsubmidia.html")
}
func (c Submidia) New_submidia() revel.Result{
	return c.RenderTemplate("Submidia/Frmmantmidia.html")
}
func (c Submidia) Savesubmidia(vp_idmidia string,vp_submidia string) revel.Result{
	bd := c.MongoDatabase.C("submidia")
	err := bd.Insert(&models.Submidia{Idmidia:vp_idmidia,Submidia:vp_submidia,Status:29})
	
	/*Who := bson.M{"_id" : bson.ObjectIdHex(vp_idmidia)}
	PushToArray := bson.M{"$push": bson.M{"subm": bson.M{"submidia": vp_submidia, "status": 29}}}
	err :=bd.Update(Who, PushToArray)*/

	data := make(map[string]interface{})
	if err != nil {
		data["status"]=2
		data["msg"]=err
	} else{ 
		data["status"]=1
	}
	return c.RenderJson(data)
}
func (c Submidia) Editsubmidia(vp_idmidia string,vp_submidia string) revel.Result{
	vp_id := c.Session["Idsubmidia"]
	bd := c.MongoDatabase.C("submidia")
	colQuerier := bson.M{"_id": bson.ObjectIdHex(vp_id)}
	change := bson.M{"$set": bson.M{"idmidia":vp_idmidia,"submidia":vp_submidia}}
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
