package models
import "gopkg.in/mgo.v2/bson"
type Type_source struct {
	ID		bson.ObjectId `bson:"_id,omitempty" json:"_id" xml:"_id"`
	Description		string		`json:"description"		bson:"description"`
	Status		int		`json:"status"		bson:"status"`
} 
