$(document).ready(function(){
	 $('#btnsave').click(frm_adm_caja_chica.Register);
	 $('#btncancel').click(frm_adm_caja_chica.Cancel);
});
frm_adm_caja_chica={ 
	 listar_cbo_crea_para:function(value){ 
		 getList(pathController+'/caja_chica/ListaUsuario','cbo_crea_para',{
		 },{ 
		 finish:function(){ $('#cbo_crea_para').val(value); }
		 });
	},
	 listar_cbo_adm_por:function(value){ 
		 getList(pathController+'/caja_chica/ListarUsuario','cbo_adm_por',{
		 },{ 
		 finish:function(){ $('#cbo_adm_por').val(value); }
		 });
	},
	Cancel:function(){ 
		 location.href=pathController+"/caja_chica/frmcaja_chica"; 
	}, 
	Register:function(){ 
		if($.trim($('#t_codigo').val())==""){
			 frm_adm_caja_chica.Save();
		}
		else{
			 frm_adm_caja_chica.Edit();
		}
	},
	Save:function(){ 
		 if(checkInputs($('#t_des_caja'))==0){
			//validamos el combo crea_para
			 if(parseInt($('#cbo_crea_para').val())==0){
				 alert('Seleccione para quien sera creado la caja chica');
			 return;
			}
			//validamos el combo adm_por
			 if(parseInt($('#cbo_adm_por').val())==0){
				 alert('Seleccione quien administrara la caja chica');
			 return;
			}
			 $.ajax({
				 url:pathController+'/caja_chica/Savecaja_chica',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_des_caja:$('#t_des_caja').val(),
					vp_crea_para:$('#cbo_crea_para').val(),
					vp_adm_por:$('#cbo_adm_por').val(),
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
					 location.href=pathController+"/caja_chica/frmcaja_chica"; 
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
		 if(checkInputs($('#t_des_caja'))==0){
			//validamos el combo crea_para
			 if(parseInt($('#cbo_crea_para').val())==0){
				 alert('Seleccione para quien sera creado la caja chica');
			 return;
			}
			//validamos el combo adm_por
			 if(parseInt($('#cbo_adm_por').val())==0){
				 alert('Seleccione quien administrara la caja chica');
			 return;
			}
			 $.ajax({
				 url:pathController+'/caja_chica/Editcaja_chica',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_id:$('#t_codigo').val(),
					vp_des_caja:$('#t_des_caja').val(),
					vp_crea_para:$('#cbo_crea_para').val(),
					vp_adm_por:$('#cbo_adm_por').val(),
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
					 location.href=pathController+"/caja_chica/frmcaja_chica"; 
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