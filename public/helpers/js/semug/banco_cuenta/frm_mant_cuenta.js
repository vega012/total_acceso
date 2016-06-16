$(document).ready(function(){
	 $('#btnsave').click(frm_mant_cuenta.Register);
	 $('#btncancel').click(frm_mant_cuenta.Cancel);
});
frm_mant_cuenta={ 
	Cancel:function(){ 
		 location.href=pathController+"/banco_cuenta/frmbanco_cuenta"; 
	}, 
	Register:function(){ 
		if($.trim($('#t_codigo').val())==""){
			 frm_mant_cuenta.Save();
		}
		else{
			 frm_mant_cuenta.Edit();
		}
	},
	Save:function(){ 
		 if(checkInputs($('#t_nom_bco,#t_num_cta,#cbo_moneda'))==0){			
			 $.ajax({
				 url:pathController+'/banco_cuenta/Savebanco_cuenta',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_nom_bco:$('#t_nom_bco').val(),
					vp_num_cta:$('#t_num_cta').val(),
					vp_moneda:$('#cbo_moneda').val()
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
					 location.href=pathController+"/banco_cuenta/frmbanco_cuenta"; 
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
		 if(checkInputs($('#t_nom_bco,#t_num_cta,#cbo_moneda'))==0){
			//validamos el combo moneda
			 if(parseInt($('#cbo_moneda').val())==0){
				 alert('SELECCIONE moneda');
			 return false;
			}
			 $.ajax({
				 url:pathController+'/banco_cuenta/Editbanco_cuenta',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_id:$('#t_codigo').val(),
					vp_nom_bco:$('#t_nom_bco').val(),
					vp_num_cta:$('#t_num_cta').val(),
					vp_moneda:$('#cbo_moneda').val()
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
					 location.href=pathController+"/banco_cuenta/frmbanco_cuenta"; 
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