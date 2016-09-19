package models
import "gopkg.in/mgo.v2/bson"
type Channel struct {
    ID		bson.ObjectId `bson:"_id,omitempty" json:"_id" xml:"_id"`
    Idempresa               string		`json:"idempresa"		bson:"idempresa"`
    Idclassificacao         string		`json:"idclassificacao"		bson:"idclassificacao"`
    Canal                   string	`json:"canal"                   bson:"canal"`
    Ordem                   int		`json:"ordem"                   bson:"ordem"`
    Canal_background_color  string	`json:"canal_background_color"	bson:"canal_background_color"`
    Canal_font_family       string	`json:"canal_font_family"	bson:"canal_font_family"`
    Canal_color             string	`json:"canal_color"		bson:"canal_color"`
    Canal_font_size         string	`json:"canal_font_size"		bson:"canal_font_size"`
    Canal_text_align        string	`json:"canal_text_align"	bson:"canal_text_align"`
    Canal_font_weigh        string	`json:"canal_font_weigh"	bson:"canal_font_weigh"`
    Canal_font_negrito      string	`json:"canal_font_negrito"	bson:"canal_font_negrito"`
    Datahorai               string	`json:"datahorai"		bson:"datahorai"`
    Datahoraa               string	`json:"datahoraa"		bson:"datahoraa"`
    status                  int		`json:"status"                  bson:"status"`
}