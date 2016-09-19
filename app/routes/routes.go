// GENERATED CODE - DO NOT EDIT
package routes

import "github.com/revel/revel"


type tCustomer struct {}
var Customer tCustomer


func (_ tCustomer) FindAll(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Customer.FindAll", args).Url
}

func (_ tCustomer) SearchCustomer(
		inputIDCustomer string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "inputIDCustomer", inputIDCustomer)
	return revel.MainRouter.Reverse("Customer.SearchCustomer", args).Url
}

func (_ tCustomer) AddWord(
		vp_criterial string,
		vp_id_obj string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_criterial", vp_criterial)
	revel.Unbind(args, "vp_id_obj", vp_id_obj)
	return revel.MainRouter.Reverse("Customer.AddWord", args).Url
}

func (_ tCustomer) Save(
		vp_customer string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_customer", vp_customer)
	return revel.MainRouter.Reverse("Customer.Save", args).Url
}

func (_ tCustomer) Update(
		vp_name string,
		vp_ativate int,
		vp_lang string,
		vp_flgfirst int,
		vp_datefirst string,
		vp_hourfirst string,
		vp_flglast int,
		vp_datelast string,
		vp_hourlast string,
		vp_flgonline int,
		vp_flgblog int,
		vp_flgimpresso int,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_name", vp_name)
	revel.Unbind(args, "vp_ativate", vp_ativate)
	revel.Unbind(args, "vp_lang", vp_lang)
	revel.Unbind(args, "vp_flgfirst", vp_flgfirst)
	revel.Unbind(args, "vp_datefirst", vp_datefirst)
	revel.Unbind(args, "vp_hourfirst", vp_hourfirst)
	revel.Unbind(args, "vp_flglast", vp_flglast)
	revel.Unbind(args, "vp_datelast", vp_datelast)
	revel.Unbind(args, "vp_hourlast", vp_hourlast)
	revel.Unbind(args, "vp_flgonline", vp_flgonline)
	revel.Unbind(args, "vp_flgblog", vp_flgblog)
	revel.Unbind(args, "vp_flgimpresso", vp_flgimpresso)
	return revel.MainRouter.Reverse("Customer.Update", args).Url
}

func (_ tCustomer) RmvWord(
		vp_id_criterial string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_id_criterial", vp_id_criterial)
	return revel.MainRouter.Reverse("Customer.RmvWord", args).Url
}


type tMidia struct {}
var Midia tMidia


func (_ tMidia) Fillallmedia(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Midia.Fillallmedia", args).Url
}

func (_ tMidia) Rmvmidia(
		vp_id string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_id", vp_id)
	return revel.MainRouter.Reverse("Midia.Rmvmidia", args).Url
}

func (_ tMidia) Findmidia(
		vp_id string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_id", vp_id)
	return revel.MainRouter.Reverse("Midia.Findmidia", args).Url
}

func (_ tMidia) New_midia(
		vp_id string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_id", vp_id)
	return revel.MainRouter.Reverse("Midia.New_midia", args).Url
}

func (_ tMidia) ListMidia(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Midia.ListMidia", args).Url
}

func (_ tMidia) Savemidia(
		vp_midia string,
		vp_icone string,
		vp_tipo string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_midia", vp_midia)
	revel.Unbind(args, "vp_icone", vp_icone)
	revel.Unbind(args, "vp_tipo", vp_tipo)
	return revel.MainRouter.Reverse("Midia.Savemidia", args).Url
}

func (_ tMidia) Editmidia(
		vp_midia string,
		vp_icone string,
		vp_tipo string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_midia", vp_midia)
	revel.Unbind(args, "vp_icone", vp_icone)
	revel.Unbind(args, "vp_tipo", vp_tipo)
	return revel.MainRouter.Reverse("Midia.Editmidia", args).Url
}


type tSource struct {}
var Source tSource


func (_ tSource) Listsource(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Source.Listsource", args).Url
}

func (_ tSource) Listcountry(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Source.Listcountry", args).Url
}

func (_ tSource) Listtypesource(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Source.Listtypesource", args).Url
}

func (_ tSource) Rmvsource(
		vp_id string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_id", vp_id)
	return revel.MainRouter.Reverse("Source.Rmvsource", args).Url
}

func (_ tSource) Findsource(
		vp_id string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_id", vp_id)
	return revel.MainRouter.Reverse("Source.Findsource", args).Url
}

func (_ tSource) New_source(
		vp_id string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_id", vp_id)
	return revel.MainRouter.Reverse("Source.New_source", args).Url
}

func (_ tSource) Savesource(
		vp_domain string,
		vp_url string,
		vp_descrip string,
		vp_id_country string,
		vp_id_type string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_domain", vp_domain)
	revel.Unbind(args, "vp_url", vp_url)
	revel.Unbind(args, "vp_descrip", vp_descrip)
	revel.Unbind(args, "vp_id_country", vp_id_country)
	revel.Unbind(args, "vp_id_type", vp_id_type)
	return revel.MainRouter.Reverse("Source.Savesource", args).Url
}

func (_ tSource) Editsource(
		vp_domain string,
		vp_url string,
		vp_descrip string,
		vp_id_country string,
		vp_id_type string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_domain", vp_domain)
	revel.Unbind(args, "vp_url", vp_url)
	revel.Unbind(args, "vp_descrip", vp_descrip)
	revel.Unbind(args, "vp_id_country", vp_id_country)
	revel.Unbind(args, "vp_id_type", vp_id_type)
	return revel.MainRouter.Reverse("Source.Editsource", args).Url
}


type tSubmidia struct {}
var Submidia tSubmidia


func (_ tSubmidia) Fillsubmidia(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Submidia.Fillsubmidia", args).Url
}

func (_ tSubmidia) ListMedia(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Submidia.ListMedia", args).Url
}

func (_ tSubmidia) Rmvsubmidia(
		vp_id string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_id", vp_id)
	return revel.MainRouter.Reverse("Submidia.Rmvsubmidia", args).Url
}

func (_ tSubmidia) Findsubmidia(
		vp_id string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_id", vp_id)
	return revel.MainRouter.Reverse("Submidia.Findsubmidia", args).Url
}

func (_ tSubmidia) ListSubmidia(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Submidia.ListSubmidia", args).Url
}

func (_ tSubmidia) New_submidia(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Submidia.New_submidia", args).Url
}

func (_ tSubmidia) Savesubmidia(
		vp_idmidia string,
		vp_submidia string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_idmidia", vp_idmidia)
	revel.Unbind(args, "vp_submidia", vp_submidia)
	return revel.MainRouter.Reverse("Submidia.Savesubmidia", args).Url
}

func (_ tSubmidia) Editsubmidia(
		vp_idmidia string,
		vp_submidia string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_idmidia", vp_idmidia)
	revel.Unbind(args, "vp_submidia", vp_submidia)
	return revel.MainRouter.Reverse("Submidia.Editsubmidia", args).Url
}


type tApp struct {}
var App tApp


func (_ tApp) Index(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("App.Index", args).Url
}

func (_ tApp) ValidateUser(
		vp_inputUser string,
		vp_inputPassword string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_inputUser", vp_inputUser)
	revel.Unbind(args, "vp_inputPassword", vp_inputPassword)
	return revel.MainRouter.Reverse("App.ValidateUser", args).Url
}

func (_ tApp) HomeUser(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("App.HomeUser", args).Url
}

func (_ tApp) Customer(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("App.Customer", args).Url
}

func (_ tApp) HistoricoMigraciones(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("App.HistoricoMigraciones", args).Url
}

func (_ tApp) EstadisticaMigraciones(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("App.EstadisticaMigraciones", args).Url
}

func (_ tApp) EstadisticaClientes(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("App.EstadisticaClientes", args).Url
}

func (_ tApp) PeriocidadMigraciones(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("App.PeriocidadMigraciones", args).Url
}

func (_ tApp) ExclusionFuentes(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("App.ExclusionFuentes", args).Url
}

func (_ tApp) AsociacionFuentes(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("App.AsociacionFuentes", args).Url
}


type tChannel struct {}
var Channel tChannel


func (_ tChannel) Fillchannel(
		vp_idempresa string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_idempresa", vp_idempresa)
	return revel.MainRouter.Reverse("Channel.Fillchannel", args).Url
}

func (_ tChannel) Fillallword(
		vp_codsubchannel string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_codsubchannel", vp_codsubchannel)
	return revel.MainRouter.Reverse("Channel.Fillallword", args).Url
}

func (_ tChannel) Savewords(
		vp_palavrachave string,
		vp_subchannelcod string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_palavrachave", vp_palavrachave)
	revel.Unbind(args, "vp_subchannelcod", vp_subchannelcod)
	return revel.MainRouter.Reverse("Channel.Savewords", args).Url
}

func (_ tChannel) FillSubchannel(
		vp_channel string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_channel", vp_channel)
	return revel.MainRouter.Reverse("Channel.FillSubchannel", args).Url
}

func (_ tChannel) Savesubchannel(
		vp_canalcod string,
		vp_subcanal string,
		vp_ordemsubchannel int,
		vp_detsubcanal string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_canalcod", vp_canalcod)
	revel.Unbind(args, "vp_subcanal", vp_subcanal)
	revel.Unbind(args, "vp_ordemsubchannel", vp_ordemsubchannel)
	revel.Unbind(args, "vp_detsubcanal", vp_detsubcanal)
	return revel.MainRouter.Reverse("Channel.Savesubchannel", args).Url
}

func (_ tChannel) Rmvchannel(
		vp_id string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_id", vp_id)
	return revel.MainRouter.Reverse("Channel.Rmvchannel", args).Url
}

func (_ tChannel) Findchannel(
		vp_id string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_id", vp_id)
	return revel.MainRouter.Reverse("Channel.Findchannel", args).Url
}

func (_ tChannel) New_channel(
		vp_id string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_id", vp_id)
	return revel.MainRouter.Reverse("Channel.New_channel", args).Url
}

func (_ tChannel) ListChannel(
		vp_id string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_id", vp_id)
	return revel.MainRouter.Reverse("Channel.ListChannel", args).Url
}

func (_ tChannel) Savechannel(
		vp_idempresa string,
		vp_canal string,
		vp_ordem int,
		vp_canal_background_color string,
		vp_canal_font_family string,
		vp_canal_color string,
		vp_canal_font_size string,
		vp_canal_text_align string,
		vp_canal_font_weigh string,
		vp_canal_font_negrito string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_idempresa", vp_idempresa)
	revel.Unbind(args, "vp_canal", vp_canal)
	revel.Unbind(args, "vp_ordem", vp_ordem)
	revel.Unbind(args, "vp_canal_background_color", vp_canal_background_color)
	revel.Unbind(args, "vp_canal_font_family", vp_canal_font_family)
	revel.Unbind(args, "vp_canal_color", vp_canal_color)
	revel.Unbind(args, "vp_canal_font_size", vp_canal_font_size)
	revel.Unbind(args, "vp_canal_text_align", vp_canal_text_align)
	revel.Unbind(args, "vp_canal_font_weigh", vp_canal_font_weigh)
	revel.Unbind(args, "vp_canal_font_negrito", vp_canal_font_negrito)
	return revel.MainRouter.Reverse("Channel.Savechannel", args).Url
}

func (_ tChannel) Editchannel(
		vp_idempresa string,
		vp_canal string,
		vp_ordem int,
		vp_canal_background_color string,
		vp_canal_font_family string,
		vp_canal_color string,
		vp_canal_font_size string,
		vp_canal_text_align string,
		vp_canal_font_weigh string,
		vp_canal_font_negrito string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_idempresa", vp_idempresa)
	revel.Unbind(args, "vp_canal", vp_canal)
	revel.Unbind(args, "vp_ordem", vp_ordem)
	revel.Unbind(args, "vp_canal_background_color", vp_canal_background_color)
	revel.Unbind(args, "vp_canal_font_family", vp_canal_font_family)
	revel.Unbind(args, "vp_canal_color", vp_canal_color)
	revel.Unbind(args, "vp_canal_font_size", vp_canal_font_size)
	revel.Unbind(args, "vp_canal_text_align", vp_canal_text_align)
	revel.Unbind(args, "vp_canal_font_weigh", vp_canal_font_weigh)
	revel.Unbind(args, "vp_canal_font_negrito", vp_canal_font_negrito)
	return revel.MainRouter.Reverse("Channel.Editchannel", args).Url
}


type tConcurrence struct {}
var Concurrence tConcurrence


func (_ tConcurrence) Fillallconcurrence(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Concurrence.Fillallconcurrence", args).Url
}

func (_ tConcurrence) New_concurrence(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Concurrence.New_concurrence", args).Url
}

func (_ tConcurrence) Rmvconcurrence(
		vp_id string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_id", vp_id)
	return revel.MainRouter.Reverse("Concurrence.Rmvconcurrence", args).Url
}

func (_ tConcurrence) Findconcurrence(
		vp_id string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_id", vp_id)
	return revel.MainRouter.Reverse("Concurrence.Findconcurrence", args).Url
}

func (_ tConcurrence) Saveconcurrence(
		vp_start string,
		vp_end string,
		vp_concurre string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_start", vp_start)
	revel.Unbind(args, "vp_end", vp_end)
	revel.Unbind(args, "vp_concurre", vp_concurre)
	return revel.MainRouter.Reverse("Concurrence.Saveconcurrence", args).Url
}

func (_ tConcurrence) Editconcurrence(
		vp_start string,
		vp_end string,
		vp_concurre string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_start", vp_start)
	revel.Unbind(args, "vp_end", vp_end)
	revel.Unbind(args, "vp_concurre", vp_concurre)
	return revel.MainRouter.Reverse("Concurrence.Editconcurrence", args).Url
}


type tCustomers struct {}
var Customers tCustomers


func (_ tCustomers) Fill_customers(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Customers.Fill_customers", args).Url
}

func (_ tCustomers) RmvCustomers(
		vp_id string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_id", vp_id)
	return revel.MainRouter.Reverse("Customers.RmvCustomers", args).Url
}

func (_ tCustomers) FindCustomers(
		vp_id string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_id", vp_id)
	return revel.MainRouter.Reverse("Customers.FindCustomers", args).Url
}

func (_ tCustomers) New_Customers(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Customers.New_Customers", args).Url
}

func (_ tCustomers) Findchannel(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Customers.Findchannel", args).Url
}

func (_ tCustomers) Frm_list_customers(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Customers.Frm_list_customers", args).Url
}

func (_ tCustomers) SaveCustomers(
		vp_razonsocial string,
		vp_cnpj string,
		vp_end string,
		vp_contato string,
		vp_fone string,
		vp_email string,
		vp_obs string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_razonsocial", vp_razonsocial)
	revel.Unbind(args, "vp_cnpj", vp_cnpj)
	revel.Unbind(args, "vp_end", vp_end)
	revel.Unbind(args, "vp_contato", vp_contato)
	revel.Unbind(args, "vp_fone", vp_fone)
	revel.Unbind(args, "vp_email", vp_email)
	revel.Unbind(args, "vp_obs", vp_obs)
	return revel.MainRouter.Reverse("Customers.SaveCustomers", args).Url
}

func (_ tCustomers) EditCustomers(
		vp_razonsocial string,
		vp_cnpj string,
		vp_end string,
		vp_contato string,
		vp_fone string,
		vp_email string,
		vp_obs string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_razonsocial", vp_razonsocial)
	revel.Unbind(args, "vp_cnpj", vp_cnpj)
	revel.Unbind(args, "vp_end", vp_end)
	revel.Unbind(args, "vp_contato", vp_contato)
	revel.Unbind(args, "vp_fone", vp_fone)
	revel.Unbind(args, "vp_email", vp_email)
	revel.Unbind(args, "vp_obs", vp_obs)
	return revel.MainRouter.Reverse("Customers.EditCustomers", args).Url
}


type tOrderservice struct {}
var Orderservice tOrderservice


func (_ tOrderservice) LstMediasubmedia(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Orderservice.LstMediasubmedia", args).Url
}

func (_ tOrderservice) Listorderservice(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Orderservice.Listorderservice", args).Url
}

func (_ tOrderservice) Rmvorderservice(
		vp_id string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_id", vp_id)
	return revel.MainRouter.Reverse("Orderservice.Rmvorderservice", args).Url
}

func (_ tOrderservice) Findorderservice(
		vp_id string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_id", vp_id)
	return revel.MainRouter.Reverse("Orderservice.Findorderservice", args).Url
}

func (_ tOrderservice) New_orderservice(
		vp_id string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_id", vp_id)
	return revel.MainRouter.Reverse("Orderservice.New_orderservice", args).Url
}

func (_ tOrderservice) FrmListOrder(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Orderservice.FrmListOrder", args).Url
}

func (_ tOrderservice) Saveorderservice(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("Orderservice.Saveorderservice", args).Url
}

func (_ tOrderservice) Editorderservice(
		vp_id_customer string,
		vp_date_send string,
		vp_comer_send string,
		vp_flg_test int,
		vp_flg_job int,
		vp_flg_cliente int,
		vp_name_fantasy string,
		vp_start string,
		vp_end string,
		vp_clipping_first string,
		vp_hour_send string,
		vp_period_send string,
		vp_sendrelatorio string,
		vp_cm2 string,
		vp_valorac string,
		vp_audencia string,
		vp_sendcd string,
		vp_mailsaccess string,
		vp_mailperson string,
		vp_resum string,
		vp_grifo string,
		vp_obs string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "vp_id_customer", vp_id_customer)
	revel.Unbind(args, "vp_date_send", vp_date_send)
	revel.Unbind(args, "vp_comer_send", vp_comer_send)
	revel.Unbind(args, "vp_flg_test", vp_flg_test)
	revel.Unbind(args, "vp_flg_job", vp_flg_job)
	revel.Unbind(args, "vp_flg_cliente", vp_flg_cliente)
	revel.Unbind(args, "vp_name_fantasy", vp_name_fantasy)
	revel.Unbind(args, "vp_start", vp_start)
	revel.Unbind(args, "vp_end", vp_end)
	revel.Unbind(args, "vp_clipping_first", vp_clipping_first)
	revel.Unbind(args, "vp_hour_send", vp_hour_send)
	revel.Unbind(args, "vp_period_send", vp_period_send)
	revel.Unbind(args, "vp_sendrelatorio", vp_sendrelatorio)
	revel.Unbind(args, "vp_cm2", vp_cm2)
	revel.Unbind(args, "vp_valorac", vp_valorac)
	revel.Unbind(args, "vp_audencia", vp_audencia)
	revel.Unbind(args, "vp_sendcd", vp_sendcd)
	revel.Unbind(args, "vp_mailsaccess", vp_mailsaccess)
	revel.Unbind(args, "vp_mailperson", vp_mailperson)
	revel.Unbind(args, "vp_resum", vp_resum)
	revel.Unbind(args, "vp_grifo", vp_grifo)
	revel.Unbind(args, "vp_obs", vp_obs)
	return revel.MainRouter.Reverse("Orderservice.Editorderservice", args).Url
}


type tTestRunner struct {}
var TestRunner tTestRunner


func (_ tTestRunner) Index(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("TestRunner.Index", args).Url
}

func (_ tTestRunner) Suite(
		suite string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "suite", suite)
	return revel.MainRouter.Reverse("TestRunner.Suite", args).Url
}

func (_ tTestRunner) Run(
		suite string,
		test string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "suite", suite)
	revel.Unbind(args, "test", test)
	return revel.MainRouter.Reverse("TestRunner.Run", args).Url
}

func (_ tTestRunner) List(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("TestRunner.List", args).Url
}


type tStatic struct {}
var Static tStatic


func (_ tStatic) Serve(
		prefix string,
		filepath string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "prefix", prefix)
	revel.Unbind(args, "filepath", filepath)
	return revel.MainRouter.Reverse("Static.Serve", args).Url
}

func (_ tStatic) ServeModule(
		moduleName string,
		prefix string,
		filepath string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "moduleName", moduleName)
	revel.Unbind(args, "prefix", prefix)
	revel.Unbind(args, "filepath", filepath)
	return revel.MainRouter.Reverse("Static.ServeModule", args).Url
}


