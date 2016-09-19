package controllers
import (
"gopkg.in/mgo.v2/bson"
"github.com/revel/revel"
"intranet/app/models"
"intranet/app/mongo"
)
type Customers struct {
	*revel.Controller
	mongo.Mongo
}
func (c Customers) Fill_customers() revel.Result { 
	var results []models.Customers
	bd := c.MongoDatabase.C("customers")
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
func (c Customers) RmvCustomers(vp_id string) revel.Result{
	bd := c.MongoDatabase.C("customers")
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
func (c Customers) FindCustomers(vp_id string) revel.Result{
	bd := c.MongoDatabase.C("customers")
	obj_Customers := models.Customers{}
	err := bd.Find(bson.M{"_id": bson.ObjectIdHex(vp_id)}).One(&obj_Customers)
	if err != nil {
		panic(err)
	}
	update :=1
	c.Session["IdCustomers"] = vp_id
	c.Session.SetNoExpiration()
	c.RenderArgs["customers"] =obj_Customers
	c.RenderArgs["update"] = update
	return c.RenderTemplate("Customers/Frm_mant_customer.html")
}
func (c Customers) New_Customers() revel.Result{
	return c.RenderTemplate("Customers/Frm_mant_customer.html")
}
func (c Customers) Findchannel() revel.Result{
	return c.RenderTemplate("Customers/Frm_mant_channel.html")
}
func (c Customers) Frm_list_customers() revel.Result{
	return c.RenderTemplate("Customers/Frm_list_customers.html")
}
func (c Customers) SaveCustomers(vp_razonsocial string,vp_cnpj string,vp_end string,vp_contato string,vp_fone string,vp_email string,vp_obs string) revel.Result{
	bd := c.MongoDatabase.C("customers")
	data := make(map[string]interface{})
	err := bd.Insert(&models.Customers{Razonsocial:vp_razonsocial,Cnpj:vp_cnpj,End:vp_end,Contato:vp_contato,Fone:vp_fone,Email:vp_email,Obs:vp_obs,Status:29})
	if err != nil {
		data["status"]=2
		data["msg"]=err
	} else{
		data["status"]=1
	} 
	return c.RenderJson(data)
}
func (c Customers) EditCustomers(vp_razonsocial string,vp_cnpj string,vp_end string,vp_contato string,vp_fone string,vp_email string,vp_obs string) revel.Result{
	vp_id := c.Session["IdCustomers"]
	bd := c.MongoDatabase.C("customers")
	colQuerier := bson.M{"_id": bson.ObjectIdHex(vp_id)}
	change := bson.M{"$set": bson.M{"razonsocial":vp_razonsocial,"cnpj":vp_cnpj,"end":vp_end,"contato":vp_contato,"fone":vp_fone,"email":vp_email,"obs":vp_obs}}
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