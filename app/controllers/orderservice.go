package controllers
import (
"gopkg.in/mgo.v2/bson"
"github.com/revel/revel"
"intranet/app/models"
"intranet/app/mongo"
)
type Orderservice struct {
	*revel.Controller
	mongo.Mongo
}

func (c Orderservice) LstMediasubmedia() revel.Result {  
	var results []models.Midiasubmedia
	bd := c.MongoDatabase.C("midia")
	err := bd.Find(bson.M{"status":29}).All(&results)
	if err != nil {
		panic(err)
	}
	data := make(map[string]interface{})
	if(len(results)>0){
		var results_all []models.Midiasubmedia
		
		var cadena string
		for _,v:=range results {
			bdsm := c.MongoDatabase.C("submidia")			
			var obj_submidia []models.Submidia
			err:= bdsm.Find(bson.M{"status":29,"idmidia": bson.ObjectId(v.ID).Hex()}).All(&obj_submidia)
			cadena=bson.ObjectId(v.ID).Hex()
			if err != nil {
				//panic(err)
			}
			results_all=append(results_all,models.Midiasubmedia{ID:v.ID,Midia:v.Midia,Subm:obj_submidia})
		}
		data["data"]=results_all
		data["error"]=nil
		data["status"]=1
		data["cadena"]=cadena
	} else{
		data["status"]=0
	}
	return c.RenderJson(data)
}
func (c Orderservice) Listorderservice() revel.Result {  
	var results []models.Orderservice
	bd := c.MongoDatabase.C("orderservice")
	err := bd.Find(bson.M{"status":29}).All(&results)
	if err != nil {
		panic(err)
	}
	data := make(map[string]interface{})
	if(len(results)>0){
		var results_all []models.Orderservice
		for _,v:=range results {
			bdm := c.MongoDatabase.C("customers")
			obj_customer := models.Customers{}
			err:= bdm.Find(bson.M{"_id": bson.ObjectIdHex(v.Id_customer)}).One(&obj_customer)
			if err != nil {
				//panic(err)
			}
			results_all=append(results_all,models.Orderservice{ID:v.ID,Id_customer:obj_customer.Razonsocial,Date_send:v.Date_send,Name_fantasy:v.Name_fantasy,Name_contact:v.Name_contact,Email:v.Email})
		}
		data["data"]=results_all
		data["error"]=nil
		data["status"]=1
	} else{
		data["status"]=0
	}	
	return c.RenderJson(data)
}
func (c Orderservice) Rmvorderservice(vp_id string) revel.Result{
	bd := c.MongoDatabase.C("orderservice")
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
func (c Orderservice) Findorderservice(vp_id string) revel.Result{
	var lst_Orderword []models.Orderword
	var lst_Ordermidia []models.Ordermidia
	var lst_Ordercontact []models.Ordercontact
	bd := c.MongoDatabase.C("orderservice")
	obj_orderservice := models.Orderservice{}
	err := bd.Find(bson.M{"_id": bson.ObjectIdHex(vp_id)}).One(&obj_orderservice)
	if err != nil {
		panic(err)
	}
	bd = c.MongoDatabase.C("orderword")
	err = bd.Find(nil).All(&lst_Orderword)
	if err != nil {
		panic(err)
	}
	bd = c.MongoDatabase.C("ordermidia")
	err = bd.Find(bson.M{"id_order": bson.ObjectIdHex(vp_id)}).All(&lst_Ordermidia)
	if err != nil {
		panic(err)
	}
	bd = c.MongoDatabase.C("ordercontact")
	err = bd.Find(bson.M{"id_order": bson.ObjectIdHex(vp_id)}).All(&lst_Ordercontact)
	if err != nil {
		panic(err)
	}
	update :=1
	c.RenderArgs["update"] = update
	c.RenderArgs["orderservice"] = obj_orderservice
	c.RenderArgs["orderword"] = lst_Orderword
	c.RenderArgs["ordermidia"] = lst_Ordermidia
	c.RenderArgs["ordercontacts"] = lst_Ordercontact
	return c.RenderTemplate("Order_service/Frm_mantorderservice.html")
}
func (c Orderservice) New_orderservice(vp_id string) revel.Result{
	return c.RenderTemplate("Order_service/Frm_mantorderservice.html")
}
func (c Orderservice) FrmListOrder() revel.Result{
	return c.RenderTemplate("Order_service/Frm_listorderservice.html")
}
func (c Orderservice) Saveorderservice() revel.Result{
	data := make(map[string]interface{})

	var vp_flg_test string=""	
	if(c.Request.Form["chk_flg_test"]!=nil){
			vp_flg_test="1"
	}
	var vp_flg_job string=""
	if(c.Request.Form["chk_flg_job"]!=nil){
		vp_flg_job="1"
	}
	var vp_flg_cliente string=""
	if(c.Request.Form["chk_flg_cliente"]!=nil){	
		vp_flg_cliente="1"
	}
	vp_id_customer := c.Request.Form["t_id_customer_cod"][0]	
	vp_comer_send := c.Request.Form["t_comer_send"][0]	
	vp_name_fantasy := c.Request.Form["t_name_fantasy"][0]
	vp_date_send := c.Request.Form["t_date_send"][0]
	vp_start := c.Request.Form["t_start"][0]
	vp_end := c.Request.Form["t_end"][0]
	vp_clipping_first := c.Request.Form["t_clipping_first"][0]
	vp_hour_send := c.Request.Form["t_hour_send"][0]	
	vp_period_send := c.Request.Form["cbo_period_send"][0]

	var vp_sendrelatorio string=""
	if(c.Request.Form["chk_sendrelatorio"]!=nil){	
		vp_sendrelatorio= "1"
	}
	var vp_cm2 string=""
	if(c.Request.Form["chk_cm2"]!=nil){	
		vp_cm2 ="1"
	}
	var vp_valorac string=""
	if(c.Request.Form["chk_valorac"]!=nil){	
		vp_valorac="1"
	}
	var vp_audencia string=""
	if(c.Request.Form["chk_audencia"]!=nil){	
		vp_audencia="1"
	}
	var vp_sendcd string=""
	if(c.Request.Form["chk_sendcd"]!=nil){	
		vp_sendcd="1"
	}
	var vp_mailsaccess string=""
	if(c.Request.Form["chk_mailsaccess"]!=nil){	
		vp_mailsaccess ="1"
	}
	var vp_mailperson string=""
	if(c.Request.Form["chk_mailperson"]!=nil){	
		vp_mailperson="1"
	}
	var vp_resum string=""
	if(c.Request.Form["chk_resum"]!=nil){	
		vp_resum ="1"
	}
	var vp_grifo string=""
	if(c.Request.Form["chk_grifo"]!=nil){
		vp_grifo="1"
	}	
	vp_obs := c.Request.Form["t_obs"][0]	
	vp_enviada_em := c.Request.Form["t_enviada_em"][0]
	vp_enviada_comercial := c.Request.Form["t_enviada_comercial"][0]
	vp_p_gerencia := c.Request.Form["t_p_gerencia"][0]
	
	id_orderService:=bson.NewObjectId()
	
	bd := c.MongoDatabase.C("orderservice")
	err := bd.Insert(&models.Orderservice{ID:id_orderService,Id_customer:vp_id_customer,Date_send:vp_date_send,Comer_send:vp_comer_send,Flg_test:vp_flg_test,Flg_job:vp_flg_job,Flg_cliente:vp_flg_cliente,Name_fantasy:vp_name_fantasy,Start:vp_start,End:vp_end,Clipping_first:vp_clipping_first,Hour_send:vp_hour_send,Period_send:vp_period_send,Sendrelatorio:vp_sendrelatorio,Cm2:vp_cm2,Valorac:vp_valorac,Audencia:vp_audencia,Sendcd:vp_sendcd,Mailsaccess:vp_mailsaccess,Mailperson:vp_mailperson,Resum:vp_resum,Grifo:vp_grifo,Obs:vp_obs,Status:29,EnviadaEM:vp_enviada_em,EnviadaCom:vp_enviada_comercial,P_Gerencia:vp_p_gerencia})
	if err != nil {
		data["status"]=2
		data["msg"]=err
	} else{
		if(c.Request.Form["chkmedia[]"]!=nil){
			chkmidias := c.Request.Form["chkmedia[]"]
			for i:= range chkmidias {
				bdw := c.MongoDatabase.C("ordermidia")
				err= bdw.Insert(&models.Ordermidia{Id_Order:string(id_orderService),Id_Midia:chkmidias[i],Status:29})
				if err != nil {
					data["status"]=2
					data["msg"]=err
					return c.RenderJson(data)
					break
				}else{
					data["status"]=1
				}
			}			
		}else{
			if(c.Request.Form["chkmedia"]!=nil){
				chkmidias := c.Request.Form["chkmedia"][0]
					bdw := c.MongoDatabase.C("ordermidia")
					err= bdw.Insert(&models.Ordermidia{Id_Order:string(id_orderService),Id_Midia:chkmidias,Status:29})
					if err != nil {
						data["status"]=2
						data["msg"]=err
						return c.RenderJson(data)
					}else{
						data["status"]=1
					}		
			}		
		}
		if(c.Request.Form["txtwork[]"]!=nil){
			txtworks := c.Request.Form["txtwork[]"]
			subchannels := c.Request.Form["subchannel[]"]
			for i:= range txtworks {
				bdw := c.MongoDatabase.C("orderword")
				err= bdw.Insert(&models.Orderword{Id_Order:string(id_orderService),Word:txtworks[i],Id_Subchannel:subchannels[i],Status:29})
				if err != nil {
					data["status"]=2
					data["msg"]=err
					return c.RenderJson(data)
					break
				}else{
					data["status"]=1
				}
			}
		}else{
			if(c.Request.Form["txtwork"]!=nil){
				txtworks := c.Request.Form["txtwork"][0]
				subchannels := c.Request.Form["subchannel"][0]				
				bdw := c.MongoDatabase.C("orderword")
				err= bdw.Insert(&models.Orderword{Id_Order:string(id_orderService),Word:txtworks,Id_Subchannel:subchannels,Status:29})
				if err != nil {
					data["status"]=2
					data["msg"]=err
					return c.RenderJson(data)
				}else{
					data["status"]=1
				}
			}
		}
		if(c.Request.Form["t_contact_name[]"]!=nil){
			t_contact_names := c.Request.Form["t_contact_name[]"]
			t_contact_fones := c.Request.Form["t_contact_fone[]"]
			t_contact_email := c.Request.Form["t_contact_email[]"]
			
			for i:= range t_contact_names {
				bdw := c.MongoDatabase.C("ordercontact")
				err= bdw.Insert(&models.Ordercontact{Id_Order:string(id_orderService),ContactName:t_contact_names[i],ContactFone:t_contact_fones[i],ContactEmail:t_contact_email[i],Status:29})
				if err != nil {
					data["status"]=2
					data["msg"]=err
					return c.RenderJson(data)
					break
				}else{
					data["status"]=1
				}
			}
		}else{
			if(c.Request.Form["t_contact_name"]!=nil){
				t_contact_names := c.Request.Form["t_contact_name"][0]
				t_contact_fones := c.Request.Form["t_contact_fone"][0]
				t_contact_email := c.Request.Form["t_contact_email"][0]
				
				bdw := c.MongoDatabase.C("ordercontact")
				err= bdw.Insert(&models.Ordercontact{Id_Order:string(id_orderService),ContactName:t_contact_names,ContactFone:t_contact_fones,ContactEmail:t_contact_email,Status:29})
				if err != nil {
					data["status"]=2
					data["msg"]=err
					return c.RenderJson(data)
				}else{
					data["status"]=1
				}
			}
		}
	}
	return c.RenderJson(data)
}
func (c Orderservice) Editorderservice(vp_id_customer string,vp_date_send string,vp_comer_send string,vp_flg_test int,vp_flg_job int,vp_flg_cliente int,vp_name_fantasy string,vp_start string,vp_end string,vp_clipping_first string,vp_hour_send string,vp_period_send string,vp_sendrelatorio string,vp_cm2 string,vp_valorac string,vp_audencia string,vp_sendcd string,vp_mailsaccess string,vp_mailperson string,vp_resum string,vp_grifo string,vp_obs string) revel.Result{
	vp_id := c.Session["Idorderservice"]
	bd := c.MongoDatabase.C("orderservice")
	colQuerier := bson.M{"_id": bson.ObjectIdHex(vp_id)}
	change := bson.M{"$set": bson.M{"id_customer":vp_id_customer,"date_send":vp_date_send,"comer_send":vp_comer_send,"flg_test":vp_flg_test,"flg_job":vp_flg_job,"flg_cliente":vp_flg_cliente,"name_fantasy":vp_name_fantasy,"start":vp_start,"end":vp_end,"clipping_first":vp_clipping_first,"hour_send":vp_hour_send,"period_send":vp_period_send,"sendrelatorio":vp_sendrelatorio,"cm2":vp_cm2,"valorac":vp_valorac,"audencia":vp_audencia,"sendcd":vp_sendcd,"mailsaccess":vp_mailsaccess,"mailperson":vp_mailperson,"resum":vp_resum,"grifo":vp_grifo,"obs":vp_obs}}
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