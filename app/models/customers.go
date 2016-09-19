package models
import "gopkg.in/mgo.v2/bson"
type Customers struct {
	ID				bson.ObjectId `bson:"_id,omitempty" json:"_id" xml:"_id"`
	Razonsocial		string		`json:"razonsocial"			bson:"razonsocial"`
	Cnpj			string		`json:"cnpj"				bson:"cnpj"`
	End				string		`json:"end"					bson:"end"`
	Contato			string		`json:"contato"				bson:"contato"`
	Fone			string		`json:"fone"				bson:"fone"`
	Email			string		`json:"email"				bson:"email"`
	Obs				string		`json:"obs"					bson:"obs"`
	Status			int			`json:"status"				bson:"status"`
} 
