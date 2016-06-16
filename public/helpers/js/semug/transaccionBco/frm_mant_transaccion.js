$(document).ready(function(){
	 $('#btnsave').click(frm_mant_transaccion.Register);
	 $('#btncancel').click(frm_mant_transaccion.Cancel);
	 $('#t_fec_operacion').datepicker({
		altFormat: formatDate,
		dateFormat: formatDate 
	});
});
frm_mant_transaccion={ 
	 listar_cbo_cod_trabajo:function(value){ 
		 getList(pathController+'/transaccionbco/LstTrabajo','cbo_cod_trabajo',{
		 },{ 
		 finish:function(){ $('#cbo_cod_trabajo').val(value); }
		 });
	},
	Cancel:function(){ 
		 location.href=pathController+"/transaccionbco/frmtransaccionbco"; 
	}, 
	Register:function(){ 
		if($.trim($('#t_codigo').val())==""){
			 frm_mant_transaccion.Save();
		}
		else{
			 frm_mant_transaccion.Edit();
		}
	},
	Save:function(){ 
		 if(checkInputs($('#t_des_mov'))==0){
			//validamos el combo cod_trabajo
			 if(parseInt($('#cbo_cod_trabajo').val())==0){
				 alert('SELECCIONE cod_trabajo');
			 return false;
			}
			//validamos el combo tipo_operacion
			 if(parseInt($('#cbo_tipo_operacion').val())==0){
				 alert('SELECCIONE tipo_operacion');
			 return false;
			}
			 $.ajax({
				 url:pathController+'/transaccionbco/Savetransaccionbco',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_id_bcocta:$('#t_id_bcocta').val(),
					vp_cod_trabajo:$('#cbo_cod_trabajo').val(),
					vp_fec_operacion:$('#t_fec_operacion').val(),
					vp_des_mov:$('#t_des_mov').val(),
					vp_tipo_operacion:$('#cbo_tipo_operacion').val(),
					vp_total:$('#t_total').val()
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
					 location.href=pathController+"/transaccionbco/frmtransaccionbco"; 
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
		 if(checkInputs($('#t_des_mov'))==0){
			//validamos el combo cod_trabajo
			 if(parseInt($('#cbo_cod_trabajo').val())==0){
				 alert('SELECCIONE cod_trabajo');
			 return false;
			}
			//validamos el combo tipo_operacion
			 if(parseInt($('#cbo_tipo_operacion').val())==0){
				 alert('SELECCIONE tipo_operacion');
			 return false;
			}
			 $.ajax({
				 url:pathController+'/transaccionbco/Edittransaccionbco',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_id:$('#t_codigo').val(),
					vp_id_bcocta:$('#t_id_bcocta').val(),
					vp_cod_trabajo:$('#cbo_cod_trabajo').val(),
					vp_fec_operacion:$('#t_fec_operacion').val(),
					vp_des_mov:$('#t_des_mov').val(),
					vp_tipo_operacion:$('#cbo_tipo_operacion').val(),
					vp_total:$('#t_total').val()
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
					 location.href=pathController+"/transaccionbco/frmtransaccionbco"; 
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