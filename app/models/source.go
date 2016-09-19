package models
import "gopkg.in/mgo.v2/bson"
type Source struct {
	ID			bson.ObjectId `bson:"_id,omitempty" json:"_id" xml:"_id"`
	Domain		string		`json:"domain"		bson:"domain"`
	Url			string		`json:"url"		bson:"url"`
	Descrip		string		`json:"descrip"		bson:"descrip"`
	Status		int		`json:"status"		bson:"status"`
	User_reg	int		`json:"user_reg"		bson:"user_reg"`
	Date_reg	string		`json:"date_reg"		bson:"date_reg"`
	User_mod	int		`json:"user_mod"		bson:"user_mod"`
	Date_mod	string		`json:"date_mod"		bson:"date_mod"`
	Id_country	string		`json:"id_country"		bson:"id_country"`
	Id_type		string		`json:"id_type"		bson:"id_type"`
} 
