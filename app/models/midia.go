package models
import "gopkg.in/mgo.v2/bson"
type Midia struct {
	ID		bson.ObjectId `bson:"_id,omitempty" json:"_id" xml:"_id"`
	Midia		string		`json:"midia"		bson:"midia"`
	Icone		string		`json:"icone"		bson:"icone"`
	Tipo		string		`json:"tipo"		bson:"tipo"`
	Status		int			`json:"status"		bson:"status"`
} 
type Midiasubmedia struct {
	ID		bson.ObjectId `bson:"_id,omitempty" json:"_id" xml:"_id"`
	Midia		string		`json:"midia"		bson:"midia"`
	Icone		string		`json:"icone"		bson:"icone"`
	Tipo		string		`json:"tipo"		bson:"tipo"`
	Status		int			`json:"satus"		bson:"status"`
	Subm		[]Submidia
} 