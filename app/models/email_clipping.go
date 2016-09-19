package models
import "gopkg.in/mgo.v2/bson"
type Email_clipping struct {
	ID		bson.ObjectId `bson:"_id,omitempty" json:"_id" xml:"_id"`
	Email		string		`json:"email"		bson:"email"`
	Contact		string		`json:"contact"		bson:"contact"`
	Fone		string		`json:"fone"		bson:"fone"`
	Status		int			`json:"status"		bson:"status"`
	Id_order	int			`json:"id_order"	bson:"id_order"`
} 
