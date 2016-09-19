package controllers
import (
    "gopkg.in/mgo.v2/bson"
    "github.com/revel/revel"
    "intranet/app/models"
    "intranet/app/mongo"
)
type Channel struct {
    *revel.Controller
    mongo.Mongo
}
func (c Channel) Fillchannel(vp_idempresa string) revel.Result {  
    var results []models.Channel
    bd := c.MongoDatabase.C("channel")
    err := bd.Find(bson.M{"idempresa":vp_idempresa}).All(&results)
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
func (c Channel) Fillallword(vp_codsubchannel string) revel.Result {  
	var results []models.Palavrachave
	bd := c.MongoDatabase.C("palavrachave")
	err := bd.Find(bson.M{"idsubchannel":vp_codsubchannel}).All(&results)
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
 func (c Channel) Savewords(vp_palavrachave string,vp_subchannelcod string) revel.Result{
	bd := c.MongoDatabase.C("palavrachave")
	err := bd.Insert(&models.Palavrachave{Description:vp_palavrachave,IdSubChannel:vp_subchannelcod,Habilitado:"1"})
	data := make(map[string]interface{})
	if err != nil {
		data["status"]=2
		data["msg"]=err
	} else{ 
			data["status"]=1
		 } 
	return c.RenderJson(data)
 }
func (c Channel) FillSubchannel(vp_channel string) revel.Result { 
	var results []models.Subchannel
	bd := c.MongoDatabase.C("subchannel")
	err := bd.Find(bson.M{"idchannel":vp_channel}).All(&results)
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
func (c Channel) Savesubchannel(vp_canalcod string,vp_subcanal string,vp_ordemsubchannel int,vp_detsubcanal string) revel.Result{
	bd := c.MongoDatabase.C("subchannel")
	err := bd.Insert(&models.Subchannel{Description:vp_subcanal,IdChannel:vp_canalcod,Detsubcanal:vp_detsubcanal,Order:vp_ordemsubchannel})
	data := make(map[string]interface{})
	if err != nil {
		data["status"]=2
		data["msg"]=err
	} else{ 
		data["status"]=1
	} 
	return c.RenderJson(data)
}
func (c Channel) Rmvchannel(vp_id string) revel.Result{
    bd := c.MongoDatabase.C("channel")
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
func (c Channel) Findchannel(vp_id string) revel.Result{
    bd := c.MongoDatabase.C("channel")
    obj_channel := models.Channel{}
    err := bd.Find(bson.M{"_id": bson.ObjectIdHex(vp_id)}).One(&obj_channel)
    if err != nil {
        panic(err)
    }
    update :=1
    c.Session["Idchannel"] = vp_id
    c.Session.SetNoExpiration()
    c.RenderArgs["concurrence"] =obj_channel
    c.RenderArgs["update"] = update
    return c.RenderTemplate("Channel/Frmadmchannel.html")
}
func (c Channel) New_channel(vp_id string) revel.Result{
        return c.RenderTemplate("Channel/Frmadmchannel.html")
}
func (c Channel) ListChannel(vp_id string) revel.Result{
	obj_Customers := models.Customers{}
	bd := c.MongoDatabase.C("customers")
	err := bd.Find(bson.M{"_id": bson.ObjectIdHex(vp_id)}).One(&obj_Customers)
	if err != nil {
		panic(err)
	}
	c.RenderArgs["customers"] =obj_Customers
	c.RenderArgs["cod_empresa"] = vp_id
    return c.RenderTemplate("Channel/FrmChannel.html")
}
func (c Channel) Savechannel(vp_idempresa string,vp_canal string,vp_ordem int,vp_canal_background_color string,vp_canal_font_family string,vp_canal_color string,vp_canal_font_size string,vp_canal_text_align string,vp_canal_font_weigh string,vp_canal_font_negrito string) revel.Result{
    bd := c.MongoDatabase.C("channel")
    err := bd.Insert(&models.Channel{Idempresa:vp_idempresa,Canal:vp_canal,Ordem:vp_ordem,Canal_background_color:vp_canal_background_color,Canal_font_family:vp_canal_font_family,Canal_color:vp_canal_color,Canal_font_size:vp_canal_font_size,Canal_text_align:vp_canal_text_align,Canal_font_weigh:vp_canal_font_weigh,Canal_font_negrito:vp_canal_font_negrito})
    data := make(map[string]interface{})
	if err != nil {
        data["status"]=2
        data["msg"]=err
    } else{ 
        data["status"]=1
    } 
    return c.RenderJson(data)
}
func (c Channel) Editchannel(vp_idempresa string,vp_canal string,vp_ordem int,vp_canal_background_color string,vp_canal_font_family string,vp_canal_color string,vp_canal_font_size string,vp_canal_text_align string,vp_canal_font_weigh string,vp_canal_font_negrito string) revel.Result{
    vp_id := c.Session["Idchannel"]
    bd := c.MongoDatabase.C("channel")
    colQuerier := bson.M{"_id": bson.ObjectIdHex(vp_id)}
    change := bson.M{"$set": bson.M{"idempresa":vp_idempresa,"canal":vp_canal,"ordem":vp_ordem,"canal_background_color":vp_canal_background_color,"canal_font_family":vp_canal_font_family,"canal_color":vp_canal_color,"canal_font_size":vp_canal_font_size,"canal_text_align":vp_canal_text_align,"canal_font_weigh":vp_canal_font_weigh,"canal_font_negrito":vp_canal_font_negrito}}
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