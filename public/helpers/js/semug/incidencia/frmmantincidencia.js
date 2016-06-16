$(document).ready(function(){
	 $('#btnsave').click(frmmantincidencia.Register);
	 $('#btncancel').click(frmmantincidencia.Cancel);
	 $('#t_fec_venc').datepicker({		
		altFormat: formatDate,
		dateFormat: formatDate 
	});
});
frmmantincidencia={ 
	 listar_cbo_cod_trabajo:function(value){ 
		 getList(pathController+'/incidencia/ListarProyectos','cbo_cod_trabajo',{
		 },{ 
		 finish:function(){ $('#cbo_cod_trabajo').val(value); }
		 });
	},
	Cancel:function(){ 
		 location.href=pathController+"/incidencia/frmincidencia"; 
	}, 
	Register:function(){ 
		if($.trim($('#t_codigo').val())==""){
			 frmmantincidencia.Save();
		}
		else{
			 frmmantincidencia.Edit();
		}
	},
	Save:function(){ 
		 if(checkInputs($('#t_des_incidencia,#t_email_aviso'))==0){
			
			var flg_vencimiento=0;
			if(document.getElementsByName("chk_flg_venc")[0].checked){
				flg_vencimiento=1;
			}	
			 $.ajax({
				 url:pathController+'/incidencia/Saveincidencia',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_cod_trabajo:$('#cbo_cod_trabajo').val(),
					vp_des_incidencia:$('#t_des_incidencia').val(),
					vp_fec_venc:$('#t_fec_venc').val(),
					vp_avis_dias:$('#t_avis_dias').val(),
					vp_email_aviso:$('#t_email_aviso').val(),
					vp_estado:$('#cbo_estado').val(),
					vp_flg_venc:flg_vencimiento
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
					 location.href=pathController+"/incidencia/frmincidencia"; 
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
		 if(checkInputs($('#t_des_incidencia,#t_email_aviso'))==0){
			var flg_vencimiento=0;
			if(document.getElementsByName("chk_flg_venc")[0].checked){
				flg_vencimiento=1;
			}	
			 $.ajax({
				 url:pathController+'/incidencia/Editincidencia',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_id:$('#t_codigo').val(),
					vp_cod_trabajo:$('#cbo_cod_trabajo').val(),
					vp_des_incidencia:$('#t_des_incidencia').val(),
					vp_fec_venc:$('#t_fec_venc').val(),
					vp_avis_dias:$('#t_avis_dias').val(),
					vp_email_aviso:$('#t_email_aviso').val(),
					vp_estado:$('#cbo_estado').val(),
					vp_flg_venc:flg_vencimiento
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
					 location.href=pathController+"/incidencia/frmincidencia"; 
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