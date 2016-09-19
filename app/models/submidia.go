package models
import "gopkg.in/mgo.v2/bson"
type Submidia struct {
	ID		bson.ObjectId `bson:"_id,omitempty" json:"_id" xml:"_id"`
	Idmidia		string		`json:"idmidia"		bson:"idmidia"`
	Submidia	string	`json:"submidia"	bson:"submidia"`
	Status		int		`json:"status"		bson:"status"`
}