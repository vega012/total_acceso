package models
import "gopkg.in/mgo.v2/bson"
type Subchannel struct {
	ID		bson.ObjectId `bson:"_id,omitempty" json:"_id" xml:"_id"`
	IdChannel		string		`json:"idchannel"		bson:"idchannel"`
	Description		string		`json:"description"		bson:"description"`
	Order			int			`json:"order"			bson:"order"`
	Status			string		`json:"status"			bson:"status"`
	Datahorai		string		`json:"datahorai"		bson:"datahorai"`
	Datahoraa		string		`json:"datahoraa"		bson:"datahoraa"`
	Detsubcanal		string		`json:"detsubcanal"		bson:"detsubcanal"`
} 