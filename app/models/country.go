package models
import "gopkg.in/mgo.v2/bson"
type Country struct {
	ID		bson.ObjectId `bson:"_id,omitempty" json:"_id" xml:"_id"`
	Cod_country		string		`json:"cod_country"		bson:"cod_country"`
	Description		string		`json:"description"		bson:"description"`
	Status		int		`json:"status"		bson:"status"`
	User_reg		int		`json:"user_reg"		bson:"user_reg"`
	Date_reg		string		`json:"date_reg"		bson:"date_reg"`
	User_mod		int		`json:"user_mod"		bson:"user_mod"`
	Date_mod		string		`json:"date_mod"		bson:"date_mod"`
} 
