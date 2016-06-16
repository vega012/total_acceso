$(document).ready(function(){
	 $('#btnsave').click(frm_mant_cliente.Register);
	 $('#btncancel').click(frm_mant_cliente.Cancel);
});
frm_mant_cliente={ 
	 listar_cbo_doc_tipo:function(value){ 
		 getList(pathController+'/cliente/ListarTipoDocumento','cbo_doc_tipo',{
		 },{ 
		 finish:function(){ $('#cbo_doc_tipo').val(value); }
		 });
	},
	Cancel:function(){ 
		 location.href=pathController+"/cliente/frmcliente"; 
	}, 
	Register:function(){ 
		if($.trim($('#t_codigo').val())==""){
			 frm_mant_cliente.Save();
		}
		else{
			 frm_mant_cliente.Edit();
		}
	},
	Save:function(){ 
		 if(checkInputs($('#t_razon_social,#cbo_doc_tipo,#t_num_doc'))==0){
			//validamos el combo doc_tipo
			 if(parseInt($('#cbo_doc_tipo').val())==0){
				 alert('Seleccione el tipo de documento');
			 return false;
			}
			 $.ajax({
				 url:pathController+'/cliente/Savecliente',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_razon_social:$('#t_razon_social').val(),
					vp_doc_tipo:$('#cbo_doc_tipo').val(),
					vp_num_doc:$('#t_num_doc').val(),
					vp_direccion:$('#t_direccion').val(),
					vp_email:$('#t_email').val(),
					vp_contacto:$('#t_contacto').val()
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
					 location.href=pathController+"/cliente/frmcliente"; 
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
		 $.growlUI('', 'Ingrese los campos obligatorios');
		}//fin validation
	},//fin save
	Edit:function(){ 
		 if(checkInputs($('#t_razon_social,#cbo_doc_tipo,#t_num_doc'))==0){
			//validamos el combo doc_tipo
			 if(parseInt($('#cbo_doc_tipo').val())==0){
				 alert('Seleccione el tipo de documento');
			 return false;
			}
			 $.ajax({
				 url:pathController+'/cliente/Editcliente',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_id:$('#t_codigo').val(),
					vp_razon_social:$('#t_razon_social').val(),
					vp_doc_tipo:$('#cbo_doc_tipo').val(),
					vp_num_doc:$('#t_num_doc').val(),
					vp_direccion:$('#t_direccion').val(),
					vp_email:$('#t_email').val(),
					vp_contacto:$('#t_contacto').val()
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
					 location.href=pathController+"/cliente/frmcliente"; 
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
		 $.growlUI('', 'Ingrese los campos obligatorios');
		}//fin validation
	} //fin update
}//fin clase