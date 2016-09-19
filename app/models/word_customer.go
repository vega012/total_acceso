package models
import "gopkg.in/mgo.v2/bson"
type Word_customer struct {
	ID		bson.ObjectId `bson:"_id,omitempty" json:"_id" xml:"_id"`
	Description		string		`json:"description"		bson:"description"`
	Status			int			`json:"status"		bson:"status"`
	Id_customer		string		`json:"id_customer"		bson:"id_customer"`
} 
