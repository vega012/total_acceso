package controllers

import (
	"log"
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

func (c App) ValidateUser(inputUser string,inputPassword string) revel.Result {
    c.Validation.Required(inputUser).Message("Input the username!")
	c.Validation.Required(inputPassword).Message("Input the password!")
    if c.Validation.HasErrors() {
        c.Validation.Keep()
        c.FlashParams()
        return c.Redirect(App.Index)
    }
	
	bd := c.MongoDatabase.C("users")
	result := models.User{}
	err := bd.Find(bson.M{"log_user": inputUser,"pwd_user":inputPassword}).One(&result)
	if err != nil {
			log.Fatal(err)
	}
	//return c.RenderJson(result)
	var name,option_select string
	name =result.Name
	c.Session["UserName"] = result.Name
	c.Session["LogName"] = result.Log_user
    c.Session.SetNoExpiration()
	if(name==""){
		return c.Redirect(App.Index)
	}
	option_select="Home"
    return c.Render(name,option_select)
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
