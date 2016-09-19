package models
import "gopkg.in/mgo.v2/bson"
type Concurrence struct {
	ID     			bson.ObjectId `bson:"_id,omitempty" json:"_id" xml:"_id"`
	Start			string				`json:"start"				bson:"start"`
	End				string				`json:"end"					bson:"end"`
	Concurre		string				`json:"concurre"			bson:"concurre"`
	Status			string				`json:"status"				bson:"status"`
	User_reg		int					`json:"user_reg"			bson:"user_reg"`
	Date_register	string				`json:"date_register"		bson:"date_register"`
	User_mod		int					`json:"user_mod"			bson:"user_mod"`
	Date_mod		string				`json:"date_mod"			bson:"date_mod"`
} 
