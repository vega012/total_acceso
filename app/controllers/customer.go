package controllers
import (
    "gopkg.in/mgo.v2/bson"
	"github.com/revel/revel"
	"intranet/app/models"
	"intranet/app/mongo"
)
type Customer struct {
	*revel.Controller
	mongo.Mongo
}

func (c Customer) FindAll() revel.Result {
	var results []models.Customer
	bd := c.MongoDatabase.C("customer")
	err := bd.Find(nil).All(&results)
    if err != nil {
        panic(err)
    }	
	data := make(map[string]interface{})
	data["data"]=results
	data["error"]=nil
    return c.RenderJson(data)
}
func (c Customer) Save(vp_customer string) revel.Result {
	bd := c.MongoDatabase.C("customer")
	result := models.Customer{}
	err := bd.Find(bson.M{"name": vp_customer}).One(&result)
	data := make(map[string]interface{})
	if result.Name!=""{
		data["status"]=2
		data["msg"]="Customer exists"
	} else{
		err = bd.Insert(&models.Customer{Name:vp_customer})
		if err != nil {
			data["status"]=3
			panic(err);
			data["msg"]=err
		} else{
			data["status"]=1
		}
	}
    return c.RenderJson(data)
}