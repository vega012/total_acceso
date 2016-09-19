package controllers
import (
"gopkg.in/mgo.v2/bson"
"github.com/revel/revel"
"intranet/app/models"
"intranet/app/mongo"
)
type Source struct {
	*revel.Controller
	mongo.Mongo
}
func (c Source) Listsource() revel.Result {  
	var results []models.Source
	bd := c.MongoDatabase.C("source")
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
func (c Source) Listcountry() revel.Result {  
	var results []models.Country
	bd := c.MongoDatabase.C("country")
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
func (c Source) Listtypesource() revel.Result {  
	var results []models.Type_source
	bd := c.MongoDatabase.C("type_source")
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
func (c Source) Rmvsource(vp_id string) revel.Result{
	bd := c.MongoDatabase.C("source")
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
func (c Source) Findsource(vp_id string) revel.Result{
	bd := c.MongoDatabase.C("source")
	obj_source := models.Source{}
	err := bd.Find(bson.M{"_id": bson.ObjectIdHex(vp_id)}).One(&obj_source)
	if err != nil {
		panic(err)
	}
	update :=1
	c.Session["Idsource"] = vp_id
	c.Session.SetNoExpiration()
	c.RenderArgs["source"] =obj_source
	c.RenderArgs["update"] = update
	return c.RenderTemplate("Source/Frmmantsource.html")
}
func (c Source) New_source(vp_id string) revel.Result{
	return c.RenderTemplate("Source/Frmmantsource.html")
}
func (c Source) Savesource(vp_domain string,vp_url string,vp_descrip string,vp_id_country string,vp_id_type string) revel.Result{
	bd := c.MongoDatabase.C("source")
	err := bd.Insert(&models.Source{Domain:vp_domain,Url:vp_url,Descrip:vp_descrip,Id_country:vp_id_country,Id_type:vp_id_type,Status:29})
	data := make(map[string]interface{})
	if err != nil {
		data["status"]=2
		data["msg"]=err
	} else{ 
		data["status"]=1
	} 
	return c.RenderJson(data)
}
func (c Source) Editsource(vp_domain string,vp_url string,vp_descrip string,vp_id_country string,vp_id_type string) revel.Result{
	vp_id := c.Session["Idsource"]
	bd := c.MongoDatabase.C("source")
	colQuerier := bson.M{"_id": bson.ObjectIdHex(vp_id)}
	change := bson.M{"$set": bson.M{"domain":vp_domain,"url":vp_url,"descrip":vp_descrip,"id_country":vp_id_country,"id_type":vp_id_type}}
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
