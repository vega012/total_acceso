package models
import "gopkg.in/mgo.v2/bson"
type User struct {
	ID        bson.ObjectId `bson:"_id,omitempty"`
	Log_user      string
	Pwd_user      string
	Name		  string
}