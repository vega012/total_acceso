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
func (c Customer) SearchCustomer(inputIDCustomer string) revel.Result {
	bd := c.MongoDatabase.C("customer")
	result := models.Customer{}
	err := bd.Find(bson.M{"_id": bson.ObjectIdHex(inputIDCustomer)}).One(&result)
	if err != nil {
		panic(err)
	}
	data := make(map[string]interface{})
	if(result.ID==""){
		data["status"]=0
	}else{
		bdw := c.MongoDatabase.C("word_customer")
		var result_word []models.Word_customer
		err = bdw.Find(bson.M{"id_customer":inputIDCustomer,"status":29}).All(&result_word)
		if err != nil {
			panic(err)
		}		
		data["status"]=1
		data["customer"]=result
		data["words"]=result_word
		data["count_words"]=len(result_word)
		c.Session["IdCustomer"] = inputIDCustomer
		c.Session.SetNoExpiration()
	}
	data["error"]=nil
    return c.RenderJson(data)
}
func (c Customer) AddWord(vp_criterial string,vp_id_obj string) revel.Result {
	var results []models.Conf
	bd := c.MongoDatabase.C("config")
	err := bd.Find(nil).All(&results)
	
	bd = c.MongoDatabase.C("word_customer")
	code_customer:=c.Session["IdCustomer"]
	data := make(map[string]interface{})
	
	if(vp_id_obj==""){		
		i := bson.NewObjectId()		
		err=bd.Insert(&models.Word_customer{ID:i,Description:vp_criterial,Status:19,Id_customer:code_customer})
		data["code_word"]=i
	} else{
		colQuerier := bson.M{"_id": bson.ObjectIdHex(vp_id_obj)}
		change := bson.M{"$set": bson.M{"description":vp_criterial}}
		err=bd.Update(colQuerier, change)
		data["code_word"]=vp_id_obj
	}	
	if err != nil {
		data["status"]=2
		data["status"]=err
	} else{
		data["status"]=1	
	}
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
		err = bd.Insert(&models.Customer{Name:vp_customer,Ativate:1,Lang:"en",FlgFirst:1,DateFirst:"",HourFirst:"",FlgLast:0,DateLast:"",HourLast:"",FlgOnline:1,FlgBlog:1,FlgImpresso:1})
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
func (c Customer) Update(vp_name string,vp_ativate int,vp_lang string,vp_flgfirst int,vp_datefirst string,vp_hourfirst string,vp_flglast int,vp_datelast string,vp_hourlast string,vp_flgonline int,vp_flgblog int,vp_flgimpresso int) revel.Result {
	IdCustomer:=c.Session["IdCustomer"]
	bdw := c.MongoDatabase.C("word_customer")
	colQuerier := bson.M{"id_customer": IdCustomer,"status":19}
	change:= bson.M{"$set": bson.M{"status":29}}
	info,err:= bdw.UpdateAll(colQuerier, change)
	if info!=nil {
		//panic(err)
	}
	bd := c.MongoDatabase.C("customer")
	colQuerier = bson.M{"_id": bson.ObjectIdHex(IdCustomer)}
	change = bson.M{"$set": bson.M{"name":vp_name,"ativate":vp_ativate,"lang":vp_lang,"flgfirst":vp_flgfirst,"datefirst":vp_datefirst,"hourfirst":vp_hourfirst,"flglast":vp_flglast,"datelast":vp_datelast,"hourlast":vp_hourlast,"flgonline":vp_flgonline,"flgblog":vp_flgblog,"flgimpresso":vp_flgimpresso}}
	err= bd.Update(colQuerier, change)

	
	data := make(map[string]interface{})
	if err != nil {
		data["status"]=3
		panic(err);
		data["msg"]=err
	} else{
		data["status"]=1
	}
    return c.RenderJson(data)
}
func (c Customer) RmvWord(vp_id_criterial string) revel.Result {
	bdw := c.MongoDatabase.C("word_customer")
	colQuerier := bson.M{"_id": bson.ObjectIdHex(vp_id_criterial)}
	change:= bson.M{"$set": bson.M{"status":80}}
	err:= bdw.Update(colQuerier, change)
	data := make(map[string]interface{})
	if err != nil {
		data["status"]=3
		panic(err);
		data["msg"]=err
	} else{
		data["status"]=1
	}
    return c.RenderJson(data)
}