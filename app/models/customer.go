package models
import "gopkg.in/mgo.v2/bson"
type Customer struct {
	ID     		bson.ObjectId `bson:"_id,omitempty" json:"_id" xml:"_id"`
    Name 		string ` json:"name" xml:"name" `
	Ativate 	int ` json:"ativate" xml:"ativate" `
	Lang 		string ` json:"lang" xml:"lang" `	
	FlgFirst 	int ` json:"flgfirst" xml:"flgfirst" `
	DateFirst 	string ` json:"datefirst" xml:"datefirst" `
	HourFirst 	string ` json:"hourfirst" xml:"hourfirst" `
	FlgLast 	int ` json:"flglast" xml:"flglast" `
	DateLast  	string ` json:"datelast" xml:"datelast" `
	HourLast 	string ` json:"hourlast" xml:"hourlast" `
	FlgOnline 	int ` json:"flgonline" xml:"flgonline" `
	FlgBlog 	int ` json:"flgblog" xml:"flgblog" `
	FlgImpresso int ` json:"flgimpresso" xml:"flgimpresso" `
}