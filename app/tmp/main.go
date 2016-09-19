// GENERATED CODE - DO NOT EDIT
package main

import (
	"flag"
	"reflect"
	"github.com/revel/revel"
	controllers1 "github.com/revel/modules/static/app/controllers"
	_ "github.com/revel/modules/testrunner/app"
	controllers0 "github.com/revel/modules/testrunner/app/controllers"
	_ "intranet/app"
	controllers "intranet/app/controllers"
	_ "intranet/app/mongo"
	tests "intranet/tests"
	"github.com/revel/revel/testing"
)

var (
	runMode    *string = flag.String("runMode", "", "Run mode.")
	port       *int    = flag.Int("port", 0, "By default, read from app.conf")
	importPath *string = flag.String("importPath", "", "Go Import Path for the app.")
	srcPath    *string = flag.String("srcPath", "", "Path to the source root.")

	// So compiler won't complain if the generated code doesn't reference reflect package...
	_ = reflect.Invalid
)

func main() {
	flag.Parse()
	revel.Init(*runMode, *importPath, *srcPath)
	revel.INFO.Println("Running revel server")
	
	revel.RegisterController((*controllers.Customer)(nil),
		[]*revel.MethodType{
			&revel.MethodType{
				Name: "FindAll",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "SearchCustomer",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "inputIDCustomer", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "AddWord",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_criterial", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_id_obj", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Save",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_customer", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Update",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_name", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_ativate", Type: reflect.TypeOf((*int)(nil)) },
					&revel.MethodArg{Name: "vp_lang", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_flgfirst", Type: reflect.TypeOf((*int)(nil)) },
					&revel.MethodArg{Name: "vp_datefirst", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_hourfirst", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_flglast", Type: reflect.TypeOf((*int)(nil)) },
					&revel.MethodArg{Name: "vp_datelast", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_hourlast", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_flgonline", Type: reflect.TypeOf((*int)(nil)) },
					&revel.MethodArg{Name: "vp_flgblog", Type: reflect.TypeOf((*int)(nil)) },
					&revel.MethodArg{Name: "vp_flgimpresso", Type: reflect.TypeOf((*int)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "RmvWord",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_id_criterial", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			
		})
	
	revel.RegisterController((*controllers.Midia)(nil),
		[]*revel.MethodType{
			&revel.MethodType{
				Name: "Fillallmedia",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Rmvmidia",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_id", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Findmidia",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_id", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "New_midia",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_id", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "ListMidia",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Savemidia",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_midia", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_icone", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_tipo", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Editmidia",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_midia", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_icone", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_tipo", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			
		})
	
	revel.RegisterController((*controllers.Source)(nil),
		[]*revel.MethodType{
			&revel.MethodType{
				Name: "Listsource",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Listcountry",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Listtypesource",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Rmvsource",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_id", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Findsource",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_id", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "New_source",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_id", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Savesource",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_domain", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_url", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_descrip", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_id_country", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_id_type", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Editsource",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_domain", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_url", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_descrip", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_id_country", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_id_type", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			
		})
	
	revel.RegisterController((*controllers.Submidia)(nil),
		[]*revel.MethodType{
			&revel.MethodType{
				Name: "Fillsubmidia",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "ListMedia",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Rmvsubmidia",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_id", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Findsubmidia",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_id", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "ListSubmidia",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "New_submidia",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Savesubmidia",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_idmidia", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_submidia", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Editsubmidia",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_idmidia", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_submidia", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			
		})
	
	revel.RegisterController((*controllers.App)(nil),
		[]*revel.MethodType{
			&revel.MethodType{
				Name: "Index",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
					15: []string{ 
					},
				},
			},
			&revel.MethodType{
				Name: "ValidateUser",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_inputUser", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_inputPassword", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "HomeUser",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Customer",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
					52: []string{ 
						"nombre",
						"opcion_seleccionada",
					},
				},
			},
			&revel.MethodType{
				Name: "HistoricoMigraciones",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
					59: []string{ 
						"nombre",
						"opcion_seleccionada",
					},
				},
			},
			&revel.MethodType{
				Name: "EstadisticaMigraciones",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
					66: []string{ 
						"nombre",
						"opcion_seleccionada",
					},
				},
			},
			&revel.MethodType{
				Name: "EstadisticaClientes",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
					75: []string{ 
						"nombre",
						"opcion_seleccionada",
					},
				},
			},
			&revel.MethodType{
				Name: "PeriocidadMigraciones",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
					82: []string{ 
						"nombre",
						"opcion_seleccionada",
					},
				},
			},
			&revel.MethodType{
				Name: "ExclusionFuentes",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
					89: []string{ 
						"nombre",
						"opcion_seleccionada",
					},
				},
			},
			&revel.MethodType{
				Name: "AsociacionFuentes",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
					96: []string{ 
						"nombre",
						"opcion_seleccionada",
					},
				},
			},
			
		})
	
	revel.RegisterController((*controllers.Channel)(nil),
		[]*revel.MethodType{
			&revel.MethodType{
				Name: "Fillchannel",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_idempresa", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Fillallword",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_codsubchannel", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Savewords",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_palavrachave", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_subchannelcod", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "FillSubchannel",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_channel", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Savesubchannel",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_canalcod", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_subcanal", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_ordemsubchannel", Type: reflect.TypeOf((*int)(nil)) },
					&revel.MethodArg{Name: "vp_detsubcanal", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Rmvchannel",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_id", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Findchannel",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_id", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "New_channel",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_id", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "ListChannel",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_id", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Savechannel",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_idempresa", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_canal", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_ordem", Type: reflect.TypeOf((*int)(nil)) },
					&revel.MethodArg{Name: "vp_canal_background_color", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_canal_font_family", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_canal_color", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_canal_font_size", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_canal_text_align", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_canal_font_weigh", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_canal_font_negrito", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Editchannel",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_idempresa", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_canal", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_ordem", Type: reflect.TypeOf((*int)(nil)) },
					&revel.MethodArg{Name: "vp_canal_background_color", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_canal_font_family", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_canal_color", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_canal_font_size", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_canal_text_align", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_canal_font_weigh", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_canal_font_negrito", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			
		})
	
	revel.RegisterController((*controllers.Concurrence)(nil),
		[]*revel.MethodType{
			&revel.MethodType{
				Name: "Fillallconcurrence",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "New_concurrence",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Rmvconcurrence",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_id", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Findconcurrence",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_id", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Saveconcurrence",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_start", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_end", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_concurre", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Editconcurrence",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_start", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_end", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_concurre", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			
		})
	
	revel.RegisterController((*controllers.Customers)(nil),
		[]*revel.MethodType{
			&revel.MethodType{
				Name: "Fill_customers",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "RmvCustomers",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_id", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "FindCustomers",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_id", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "New_Customers",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Findchannel",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Frm_list_customers",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "SaveCustomers",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_razonsocial", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_cnpj", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_end", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_contato", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_fone", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_email", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_obs", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "EditCustomers",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_razonsocial", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_cnpj", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_end", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_contato", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_fone", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_email", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_obs", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			
		})
	
	revel.RegisterController((*controllers.Orderservice)(nil),
		[]*revel.MethodType{
			&revel.MethodType{
				Name: "LstMediasubmedia",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Listorderservice",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Rmvorderservice",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_id", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Findorderservice",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_id", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "New_orderservice",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_id", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "FrmListOrder",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Saveorderservice",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Editorderservice",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "vp_id_customer", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_date_send", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_comer_send", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_flg_test", Type: reflect.TypeOf((*int)(nil)) },
					&revel.MethodArg{Name: "vp_flg_job", Type: reflect.TypeOf((*int)(nil)) },
					&revel.MethodArg{Name: "vp_flg_cliente", Type: reflect.TypeOf((*int)(nil)) },
					&revel.MethodArg{Name: "vp_name_fantasy", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_start", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_end", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_clipping_first", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_hour_send", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_period_send", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_sendrelatorio", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_cm2", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_valorac", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_audencia", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_sendcd", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_mailsaccess", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_mailperson", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_resum", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_grifo", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "vp_obs", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			
		})
	
	revel.RegisterController((*controllers0.TestRunner)(nil),
		[]*revel.MethodType{
			&revel.MethodType{
				Name: "Index",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
					72: []string{ 
						"testSuites",
					},
				},
			},
			&revel.MethodType{
				Name: "Suite",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "suite", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Run",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "suite", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "test", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
					125: []string{ 
					},
				},
			},
			&revel.MethodType{
				Name: "List",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			
		})
	
	revel.RegisterController((*controllers1.Static)(nil),
		[]*revel.MethodType{
			&revel.MethodType{
				Name: "Serve",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "prefix", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "filepath", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "ServeModule",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "moduleName", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "prefix", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "filepath", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			
		})
	
	revel.DefaultValidationKeys = map[string]map[int]string{ 
	}
	testing.TestSuites = []interface{}{ 
		(*tests.AppTest)(nil),
	}

	revel.Run(*port)
}
