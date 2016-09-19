package models
import "gopkg.in/mgo.v2/bson"
type Palavrachave struct {
	ID		bson.ObjectId `bson:"_id,omitempty" json:"_id" xml:"_id"`
	IdSubChannel	string		`json:"idsubchannel"	bson:"idsubchannel"`
	Habilitado		string		`json:"habilitado"		bson:"habilitado"`
	Description		string		`json:"description"		bson:"description"`
	Datahorai		string		`json:"datahorai"		bson:"datahorai"`
	Datahoraa		string		`json:"datahoraa"		bson:"datahoraa"`
	Idusuarioi		string		`json:"idusuarioi"		bson:"idusuarioi"`
	Idusuarioa		string		`json:"idusuarioa"		bson:"idusuarioa"`
	Tipo			string		`json:"tipo"			bson:"tipo"`
} 
