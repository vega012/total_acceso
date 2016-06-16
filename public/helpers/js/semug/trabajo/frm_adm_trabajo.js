$(document).ready(function(){
	 $('#btnsave').click(frm_adm_trabajo.Register);
	 $('#btncancel').click(frm_adm_trabajo.Cancel);
	 $('#t_fec_ini,#t_fec_fin').datepicker({
		altFormat: formatDate,
		dateFormat: formatDate 
	});
});
frm_adm_trabajo={ 
	 listar_cbo_cod_tipo:function(value){ 
		 getList(pathController+'/trabajo/ListarTipTrabajo','cbo_cod_tipo',{
		 },{ 
		 finish:function(){ $('#cbo_cod_tipo').val(value); }
		 });
	},
	 listar_cbo_cod_cliente:function(value){ 
		 getList(pathController+'/trabajo/ListaCliente','cbo_cod_cliente',{
		 },{ 
		 finish:function(){ $('#cbo_cod_cliente').val(value); }
		 });
	},
	Cancel:function(){ 
		 location.href=pathController+"/trabajo/frmtrabajo"; 
	}, 
	Register:function(){ 
		if($.trim($('#t_codigo').val())==""){
			 frm_adm_trabajo.Save();
		}
		else{
			 frm_adm_trabajo.Edit();
		}
	},
	Save:function(){ 
			//validamos el combo cod_tipo
			 if(parseInt($('#cbo_cod_tipo').val())==0){
				 alert('Seleccione tipo de trabajo');
			 return false;
			}
			//validamos el combo cod_cliente
			 if(parseInt($('#cbo_cod_cliente').val())==0){
				 alert('Seleccione el cliente');
			 return false;
			}
			 $.ajax({
				 url:pathController+'/trabajo/Savetrabajo',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_des_trabajo:$('#t_des_trabajo').val(),
					vp_obs_trabajo:$('#t_obs_trabajo').val(),
					//vp_cod_empresa:$('#t_cod_empresa').val(),
					vp_cod_tipo:$('#cbo_cod_tipo').val(),
					vp_cod_cliente:$('#cbo_cod_cliente').val(),
					vp_fec_ini:$('#t_fec_ini').val(),
					vp_fec_fin:$('#t_fec_fin').val(),
					vp_presupuesto:$('#txtpresupuesto').val()
				 },
				 beforeSend:function(){
					 $.blockUI({ message: '<h3> Guardando datos...</h3>' });	
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
					 location.href=pathController+"/trabajo/frmtrabajo"; 
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
	},//fin save
	Edit:function(){ 
			//validamos el combo cod_tipo
			 if(parseInt($('#cbo_cod_tipo').val())==0){
				 alert('Seleccione tipo de trabajo');
			 return false;
			}
			//validamos el combo cod_cliente
			 if(parseInt($('#cbo_cod_cliente').val())==0){
				 alert('Seleccione el cliente');
			 return false;
			}
			 $.ajax({
				 url:pathController+'/trabajo/Edittrabajo',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_id:$('#t_codigo').val(),
					vp_des_trabajo:$('#t_des_trabajo').val(),
					vp_obs_trabajo:$('#t_obs_trabajo').val(),
					//vp_cod_empresa:$('#t_cod_empresa').val(),
					vp_cod_tipo:$('#cbo_cod_tipo').val(),
					vp_cod_cliente:$('#cbo_cod_cliente').val(),
					vp_fec_ini:$('#t_fec_ini').val(),
					vp_fec_fin:$('#t_fec_fin').val(),
					vp_estado:$('#cbo_cod_estado').val(),
					vp_presupuesto:$('#txtpresupuesto').val()
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
					 location.href=pathController+"/trabajo/frmtrabajo"; 
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
	} //fin update
}//fin clase