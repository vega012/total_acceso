$(document).ready(function(){
	 $('#btnsave').click(frm_adm_usuarios.Register);
	 $('#btncancel').click(frm_adm_usuarios.Cancel);
});
frm_adm_usuarios={ 
	Cancel:function(){ 
		 location.href=pathController+"/usuario/frmusuario"; 
	}, 
	Register:function(){ 
		if($.trim($('#t_codigo').val())==""){
			 frm_adm_usuarios.Save();
		}
		else{
			 frm_adm_usuarios.Edit();
		}
	},
	Save:function(){ 
		 if(checkInputs($('#t_des_usuario,#t_log_usuario,#t_email'))==0){
			var flg_acceso=0;
			if(document.getElementsByName("chk_flg_acceso")[0].checked){
				flg_acceso=1;
			}	
			 $.ajax({
				 url:pathController+'/usuario/Saveusuario',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_des_usuario:$('#t_des_usuario').val(),
					vp_log_usuario:$('#t_log_usuario').val(),
					vp_email:$('#t_email').val(),
					vp_estado:$('#cbo_estado').val(),
					vp_pwd_usuario:$('#t_pwd_usuario').val(),
					vp_tipo:$('#cbo_tipo').val(),
					vp_flg_acceso:flg_acceso
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
					 location.href=pathController+"/usuario/frmusuario"; 
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
			//alert('sdv');
			 $.growlUI('', 'Ingrese los campos obligatorios');
		}//fin validation
	},//fin save
	Edit:function(){ 
		 if(checkInputs($('#t_des_usuario,#t_log_usuario,#t_email'))==0){
			var flg_acceso=0;
			if(document.getElementsByName("chk_flg_acceso")[0].checked){
				flg_acceso=1;
			}	
			 $.ajax({
				 url:pathController+'/usuario/Editusuario',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_id:$('#t_codigo').val(),
					vp_des_usuario:$('#t_des_usuario').val(),
					vp_log_usuario:$('#t_log_usuario').val(),
					vp_email:$('#t_email').val(),
					vp_estado:$('#cbo_estado').val(),
					vp_pwd_usuario:$('#t_pwd_usuario').val(),
					vp_tipo:$('#cbo_tipo').val(),
					vp_flg_acceso:flg_acceso
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
					 location.href=pathController+"/usuario/frmusuario"; 
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