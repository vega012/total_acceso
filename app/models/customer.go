package models
import "gopkg.in/mgo.v2/bson"
type Customer struct {
	ID     bson.ObjectId `bson:"_id,omitempty" json:"_id" xml:"_id"`
    Name string ` json:"name" xml:"name" `
}