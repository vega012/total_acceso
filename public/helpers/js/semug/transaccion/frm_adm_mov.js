$(document).ready(function(){
	 $('#btnsave').click(frm_adm_mov.Register);
	 $('#btncancel').click(frm_adm_mov.Cancel);
$('#t_total').numeric(2);
	 $('#t_fec_operacion').datepicker({
		showOn: 'button',
		altFormat: formatDate,
		buttonImage: icoCalendar,
		buttonImageOnly: true,
		dateFormat: formatDate 
	});
});
frm_adm_mov={ 
	 listar_cbo_cod_trabajo:function(value){ 
		 getList(pathController+'/transaccion/ListaTrabajos','cbo_cod_trabajo',{
		 },{ 
		 finish:function(){ $('#cbo_cod_trabajo').val(value); }
		 });
	},
	 listar_cbo_cod_cate:function(value){ 
		 getList(pathController+'/transaccion/ListadoCategoria','cbo_cod_cate',{
		 },{ 
		 finish:function(){ $('#cbo_cod_cate').val(value); }
		 });
	},
	Cancel:function(){ 
		 location.href=pathController+"/transaccion/frmtransaccion"; 
	}, 
	Register:function(){ 
		if($.trim($('#t_codigo').val())==""){
			 frm_adm_mov.Save();
		}
		else{
			 frm_adm_mov.Edit();
		}
	},
	Save:function(){ 
		 if(checkInputs($(''))==0){
			//validamos el combo cod_trabajo
			 if(parseInt($('#cbo_cod_trabajo').val())==0){
				 alert('SELECCIONE cod_trabajo');
			 return false;
			}
			//validamos el combo cod_cate
			 if(parseInt($('#cbo_cod_cate').val())==0){
				 alert('SELECCIONE cod_cate');
			 return false;
			}
			//validamos el combo tipo_operacion
			 if(parseInt($('#cbo_tipo_operacion').val())==0){
				 alert('SELECCIONE tipo_operacion');
			 return false;
			}
			//validamos el combo moneda
			 if(parseInt($('#cbo_moneda').val())==0){
				 alert('SELECCIONE moneda');
			 return false;
			}
			//validamos el combo estado
			 if(parseInt($('#cbo_estado').val())==0){
				 alert('SELECCIONE estado');
			 return false;
			}
			 $.ajax({
				 url:pathController+'/transaccion/Savetransaccion',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_cod_caja:$('#t_cod_caja').val(),
					vp_cod_trabajo:$('#cbo_cod_trabajo').val(),
					vp_fec_operacion:$('#t_fec_operacion').val(),
					vp_cod_cate:$('#cbo_cod_cate').val(),
					vp_des_mov:$('#t_des_mov').val(),
					vp_src_sust:$('#t_src_sust').val(),
					vp_tipo_operacion:$('#cbo_tipo_operacion').val(),
					vp_moneda:$('#cbo_moneda').val(),
					vp_total:$('#t_total').val(),
					vp_estado:$('#cbo_estado').val()
				 },
				 beforeSend:function(){
					 $.blockUI({ message: '<h2> Guardando datos...</h2>' });	
				 },
				 error: function(jqXHR, exception) { 
					 if (jqXHR.status === 0) { 
						 alert('No se pudo conectar a la direccion destino.'); 
					 } else if (jqXHR.status == 404) { 
						 alert('Pagina no existe'); 
					 } else if (jqXHR.status == 500) { 
						 alert('Error interno en el servidor '); 
					 } else if (exception === 'parsererror') { 
						 alert('Requested JSON parse failed.'); 
					 } else if (exception === 'timeout') { 
						 alert('Fuera de tiempo de espera.'); 
					 } else if (exception === 'abort') { 
						 alert('Consulta abortada.'); 
					 } else { 
						 alert('Error desconocido: ' + jqXHR.responseText); 
					 } 
				 $.unblockUI();
				 }, 
				 success:function(result){
				 if(result.status==1){ 
					 alert('SE GRABO  SATISFACTORIAMENTE'); 
					 location.href=pathController+"/transaccion/frmtransaccion"; 
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 alert('PROBLEMAS AL EJECUTAR LA TRANSACCION');
				 }
				 $.unblockUI();
				 }
			 });
		 }
		else{
		 $('#message').fadeIn(1500).fadeOut(1500);
		}//fin validation
	},//fin save
	Edit:function(){ 
		 if(checkInputs($(''))==0){
			//validamos el combo cod_trabajo
			 if(parseInt($('#cbo_cod_trabajo').val())==0){
				 alert('SELECCIONE cod_trabajo');
			 return false;
			}
			//validamos el combo cod_cate
			 if(parseInt($('#cbo_cod_cate').val())==0){
				 alert('SELECCIONE cod_cate');
			 return false;
			}
			//validamos el combo tipo_operacion
			 if(parseInt($('#cbo_tipo_operacion').val())==0){
				 alert('SELECCIONE tipo_operacion');
			 return false;
			}
			//validamos el combo moneda
			 if(parseInt($('#cbo_moneda').val())==0){
				 alert('SELECCIONE moneda');
			 return false;
			}
			//validamos el combo estado
			 if(parseInt($('#cbo_estado').val())==0){
				 alert('SELECCIONE estado');
			 return false;
			}
			 $.ajax({
				 url:pathController+'/transaccion/Edittransaccion',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_id:$('#t_codigo').val(),
					vp_cod_caja:$('#t_cod_caja').val(),
					vp_cod_trabajo:$('#cbo_cod_trabajo').val(),
					vp_fec_operacion:$('#t_fec_operacion').val(),
					vp_cod_cate:$('#cbo_cod_cate').val(),
					vp_des_mov:$('#t_des_mov').val(),
					vp_src_sust:$('#t_src_sust').val(),
					vp_tipo_operacion:$('#cbo_tipo_operacion').val(),
					vp_moneda:$('#cbo_moneda').val(),
					vp_total:$('#t_total').val(),
					vp_estado:$('#cbo_estado').val()
				 },
				 beforeSend:function(){
					 $.blockUI({ message: '<h2> Actualizando datos...</h2>' });	
				 },
				 error: function(jqXHR, exception) { 
					 if (jqXHR.status === 0) { 
						 alert('No se pudo conectar a la direccion destino.'); 
					 } else if (jqXHR.status == 404) { 
						 alert('Pagina no existe'); 
					 } else if (jqXHR.status == 500) { 
						 alert('Error interno en el servidor '); 
					 } else if (exception === 'parsererror') { 
						 alert('Requested JSON parse failed.'); 
					 } else if (exception === 'timeout') { 
						 alert('Fuera de tiempo de espera.'); 
					 } else if (exception === 'abort') { 
						 alert('Consulta abortada.'); 
					 } else { 
						 alert('Error desconocido: ' + jqXHR.responseText); 
					 } 
				 $.unblockUI();
				 }, 
				 success:function(result){
				 if(result.status==1){ 
					 alert('SE ACTUALIZO  SATISFACTORIAMENTE'); 
					 location.href=pathController+"/transaccion/frmtransaccion"; 
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 alert('PROBLEMAS AL EJECUTAR LA TRANSACCION');
				 }
				 $.unblockUI();
				 }
			 });
		 }
		else{
		 $('#message').fadeIn(1500).fadeOut(1500);
		}//fin validation
	} //fin update
}//fin clase