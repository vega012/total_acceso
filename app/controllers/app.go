package controllers

import (
    "gopkg.in/mgo.v2/bson"
	"github.com/revel/revel"
	"intranet/app/models"
	"intranet/app/mongo"
)

type App struct {
	*revel.Controller
	mongo.Mongo
}
func (c App) Index() revel.Result {
	return c.Render()
}

func (c App) ValidateUser(vp_inputUser string,vp_inputPassword string) revel.Result {	
	bd := c.MongoDatabase.C("users")
	result := models.User{}
	err := bd.Find(bson.M{"log_user": vp_inputUser,"pwd_user":vp_inputPassword}).One(&result)
	if err != nil {
			//log.Fatal(err)
	}
	data := make(map[string]interface{})
	if(result.Name==""){
		data["status"]=0
	}else{
		c.Session["UserName"] = result.Name
		c.Session["LogName"] = result.Log_user
		c.Session.SetNoExpiration()
		data["status"]=1
	}
	return c.RenderJson(data)
}
func (c App) HomeUser() revel.Result {
	var nombre string
	nombre =c.Session["UserName"]
	if(nombre!=""){
		c.RenderArgs["nombre"] =nombre
		return c.RenderTemplate("App/ValidateUser.html")
	}else{
		return c.Redirect(App.Index)
	}
}

func (c App) Customer() revel.Result {
	var nombre,opcion_seleccionada string
	nombre =c.Session["UserName"]
	opcion_seleccionada="Customer"
	
	return c.Render(nombre,opcion_seleccionada)
}
func (c App) HistoricoMigraciones() revel.Result {
	var nombre,opcion_seleccionada string
	nombre =c.Session["UserName"]
	opcion_seleccionada="Historico migraciones"
	
	return c.Render(nombre,opcion_seleccionada)
}
func (c App) EstadisticaMigraciones() revel.Result {
	var nombre,opcion_seleccionada string
	nombre =c.Session["UserName"]
	opcion_seleccionada="Estadistica migraciones"
	
	return c.Render(nombre,opcion_seleccionada)
}


func (c App) EstadisticaClientes() revel.Result {
	var nombre,opcion_seleccionada string
	nombre =c.Session["UserName"]
	opcion_seleccionada="Estadistica de clientes"
	
	return c.Render(nombre,opcion_seleccionada)
}
func (c App) PeriocidadMigraciones() revel.Result {
	var nombre,opcion_seleccionada string
	nombre =c.Session["UserName"]
	opcion_seleccionada="Periocidad de migraciones"
	
	return c.Render(nombre,opcion_seleccionada)
}
func (c App) ExclusionFuentes() revel.Result {
	var nombre,opcion_seleccionada string
	nombre =c.Session["UserName"]
	opcion_seleccionada="Exclusion de fuentes"
	
	return c.Render(nombre,opcion_seleccionada)
}
func (c App) AsociacionFuentes() revel.Result {
	var nombre,opcion_seleccionada string
	nombre =c.Session["UserName"]
	opcion_seleccionada="Asociacion de fuentes"
	
	return c.Render(nombre,opcion_seleccionada)
}
