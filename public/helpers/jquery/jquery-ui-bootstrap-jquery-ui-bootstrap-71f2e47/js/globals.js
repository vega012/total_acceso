var path_recursos='http://data.alsaperu.pe/sistema_web/intranet/aplicacion/views/';
var formatDate='dd/mm/yy';
var pathIco=path_recursos+'css/ico/';
var icoCalendar=path_recursos+'css/ico/btnfecha.jpg';
var newHtml=null;
var loadMessage='<option>Cargando...</option>'
var _data=[];
var _items=[];
var err=0;
destroyButtonCloseUI=function(){
    $(this).parents('.ui-dialog:first').find('.ui-dialog-titlebar-close').remove(); //remove close btn
};
getHour=function(){
    var hora = new Date();
    return hora.getHours()+':'+hora.getMinutes()+':'+hora.getSeconds();
};
implode=function(obj,union){
	tmp='';
	$.each(obj,function(key,item){
		tmp=tmp+$('#'+item).val()+union;
	});
	
	return tmp.substr(0,tmp.length-1);
};
inObject=function(obj,elt,index){
	stop=false;
	$.each(obj,function(key,field){		
		if(field[index]==elt){
			stop=true;
		}
	});
	return stop; 
};
String.prototype.renew = function(value){
    if(this.indexOf('%')!=-1){
        return (this.replace('%',value));
    }return this;
}
checkInputs=function(objs){
    var err=0;
    var id='';
    $('.required_color').css('color','').removeClass('required_color');
    $.each(objs,function(key,obj){
        id=$(obj).attr('id').slice(2);
    if($(obj).attr('type')=='text' || $(obj).attr('type')=='textarea'){
      if($(obj).val()=='' || $(obj).val()==0){
	   $('#e_'+id).css('color','red').addClass('required_color');
        err++;                    
      }
    }
    if(obj.type=='select-one' && (obj.value)=='00'){
            $('#e_'+id).css('color','red').addClass('required_color');
            err++;
    }

    if(obj.type=='checkbox' && obj.cheched==false){
            $('#e_'+id).css('color','red').addClass('required_color');
      err++;
    }
   });
  return err;
};
EventRange = function(input) {
       if (input.id == 't_fecfin') {
         return {
            minDate: jQuery('#t_fecini').datepicker("getDate")
       };}
   return this;
};
FechaActual=function(){
    var newdate=new Date();
    dia=newdate.getDate();
	if(dia<10){
		dia="0"+dia;
	}
    var mes = (newdate.getMonth()+1);
    if(mes<10){
        mes="0"+mes;
    }
    return (dia)+'/'+mes+'/'+newdate.getFullYear();
}
validar_hora=function(hora){
	if(hora>='00:00' && hora<='23:59'){
            return true;
	}
	else{
		return false;
	}
}
getList=function(path,obj,dataJSON,extras){
    $.ajax({
            url:path,
            type:'post',
            dataType:'json',
            data:dataJSON,
            beforeSend:function(){
                    $('#'+obj).html('<option></option>').attr('disabled',true);
                    if (typeof extras != 'undefined' && extras == 'object') {
            if (typeof extras.before != 'undefined'  && typeof extras.before=='function') {
                            extras.before();
                    }
              }
            },
            success:function(result){
                if(result.status==1 && result.data.length>0){
                    if(extras=='TODOS'){
                        loadList(obj,result.data,1);
                    }
                    else{
                        loadList(obj,result.data,0);
                    }
                }else{
                    $('#'+obj).empty().append('<option>SIN DATOS</option>').attr('disabled',true);
                }
            },
            complete:function(){
                if(typeof extras!='undefined' && typeof extras=='object'){
                    if(typeof extras.selected!='undefined'){
                         $('#'+obj).val(extras.selected);
                    }

                    if(typeof extras.trigger!='undefined' && typeof extras.trigger=='function'){
                         $('#'+obj).trigger('change');
                    }

                    if(typeof extras.finish!='undefined' && typeof extras.finish=='function'){
                         extras.finish();
                    }
                    if(typeof extras!='undefined' && typeof extras=='TODOS'){
                         $('#'+obj+' option:eq(0)').html('TODOS');
                    }
                }
            }
    });
};
loadList=function(obj,data,indica){
    obj=$('#'+obj);
    if(indica==1){
        newHtml='<option value="00">TODOS</option>';
    }
    else{
        newHtml='<option value="00">[SELECCIONE]</option>';
    }
    $.each(data,function(key, field){
        _index=0;
        $.each(field,function(key,item){
                _items[_index]=item;
                _index++;
        });
        newHtml+='<option value="'+_items[0]+'">'+$.trim(_items[1])+'</option>';
    });
    obj.empty().append(newHtml).attr('disabled',false);
};
var LOAD_APPLICATION='CARGANDO APLICACION, ESPERE UN MOMENTO...';
var LOAD_DATA='CARGANDO DATOS, ESPERE UN MOMENTO...';
var LOAD_DATA_SUCCESS='DATOS CARGADOS CORRECTAMENTE.';
var LOAD_DATA_FAILED='NO SE LOGRO CARGAR LOS DATOS.';
var ERR_DATA_SEND='LOS CAMPOS DE COLOR ROJO, SON OBLIGATORIOS';
var QRY_SUCCESS='SE ENCONTRARON [%] REGISTROS.'
var QRY_FAILED='NO SE LOGRO PROCESAR LA CONSULTA';
var QRY_NOROWS='NO SE ENCONTRARON REGISTROS PARA SU CONSULTA';
var SAVE_DATA='GUARDANDO DATOS, ESPERE UN MOMENTO...';
var SAVE_SUCCESS='DATOS GUARDADOS CORRECTAMENTE.';
var SAVE_FAILED='NO SE LOGRO GUARDAR LOS DATOS.';
var QUESTION_SAVE='�SEGURO QUE LOS DATOS SON CORRECTOS.?';
var QUESTION_DELETE='�SEGURO QUE DESEA BORRAR EL REGISTRO [%]?';