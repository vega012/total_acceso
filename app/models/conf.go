package models
import "gopkg.in/mgo.v2/bson"
type Conf struct {
	ID		bson.ObjectId `bson:"_id,omitempty" json:"_id" xml:"_id"`
} 
