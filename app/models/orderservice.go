package models
import "gopkg.in/mgo.v2/bson"
type Orderservice struct {
	ID		bson.ObjectId `bson:"_id,omitempty" json:"_id" xml:"_id"`
	Id_customer		string		`json:"id_customer"		bson:"id_customer"`
	Date_send		string		`json:"date_send"		bson:"date_send"`	
	EnviadaEM		string		`json:"enviada_em"		bson:"enviada_em"`
	EnviadaCom		string		`json:"enviada_em"		bson:"enviada_em"`
	P_Gerencia		string		`json:"p_gerencia"		bson:"p_gerencia"`	
	Comer_send		string		`json:"comer_send"		bson:"comer_send"`
	Flg_test		string		`json:"flg_test"		bson:"flg_test"`
	Flg_job			string		`json:"flg_job"			bson:"flg_job"`
	Flg_cliente		string		`json:"flg_cliente"		bson:"flg_cliente"`
	Name_fantasy	string		`json:"name_fantasy"	bson:"name_fantasy"`
	Name_contact	string		`json:"name_contact"	bson:"name_contact"`
	Fone			string		`json:"fone"			bson:"fone"`
	Email			string		`json:"email"			bson:"email"`
	Start			string		`json:"start"			bson:"start"`
	End				string		`json:"end"				bson:"end"`
	Clipping_first	string		`json:"clipping_first"	bson:"clipping_first"`
	Hour_send		string		`json:"hour_send"		bson:"hour_send"`
	Period_send		string		`json:"period_send"		bson:"period_send"`
	Sendrelatorio	string		`json:"sendrelatorio"	bson:"sendrelatorio"`
	Cm2				string		`json:"cm2"				bson:"cm2"`
	Valorac			string		`json:"valorac"			bson:"valorac"`
	Audencia		string		`json:"audencia"		bson:"audencia"`
	Sendcd			string		`json:"sendcd"			bson:"sendcd"`
	Mailsaccess		string		`json:"mailsaccess"		bson:"mailsaccess"`
	Mailperson		string		`json:"mailperson"		bson:"mailperson"`
	Resum			string		`json:"resum"			bson:"resum"`
	Grifo			string		`json:"grifo"			bson:"grifo"`
	Obs				string		`json:"obs"				bson:"obs"`
	Status			int			`json:"status"			bson:"status"`
}

type Orderword struct {
	ID		bson.ObjectId `bson:"_id,omitempty" json:"_id" xml:"_id"`
	Id_Order		string		`json:"id_order"		bson:"id_order"`
	Id_Subchannel	string		`json:"id_subchannel"	bson:"id_subchannel"`
	Word			string		`json:"word"			bson:"word"`
	Status			int			`json:"status"			bson:"status"`
}
type Ordermidia struct {
	ID		bson.ObjectId `bson:"_id,omitempty" json:"_id" xml:"_id"`
	Id_Order		string		`json:"id_order"		bson:"id_order"`
	Id_Midia		string		`json:"id_midia"	bson:"id_midia"`
	Status			int			`json:"status"			bson:"status"`
}
type Ordercontact struct {
	ID		bson.ObjectId `bson:"_id,omitempty" json:"_id" xml:"_id"`
	Id_Order		string		`json:"id_order"		bson:"id_order"`
	ContactName		string		`json:"contactname"		bson:"contacname"`
	ContactFone		string		`json:"contactfone"		bson:"contactfone"`
	ContactEmail	string		`json:"contactemail"	bson:"contactemail"`
	Status			int			`json:"status"			bson:"status"`
}