$(document).ready(function(){
	 $('#btnsave').click(frm_adm_categoria.Register);
	 $('#btncancel').click(frm_adm_categoria.Cancel);
});
frm_adm_categoria={ 
	Cancel:function(){ 
		 location.href=pathController+"/categoria/frmcategoria"; 
	}, 
	Register:function(){ 
		if($.trim($('#t_codigo').val())==""){
			 frm_adm_categoria.Save();
		}
		else{
			 frm_adm_categoria.Edit();
		}
	},
	Save:function(){ 
		 if(checkInputs($('#t_des_cate'))==0){
			//validamos el combo estado
			 if(parseInt($('#cbo_estado').val())==0){
				 alert('SELECCIONE estado');
			 return false;
			}
			 $.ajax({
				 url:pathController+'/categoria/Savecategoria',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_des_cate:$('#t_des_cate').val(),
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
					 location.href=pathController+"/categoria/frmcategoria"; 
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
		 if(checkInputs($('#t_des_cate'))==0){
			//validamos el combo estado
			 if(parseInt($('#cbo_estado').val())==0){
				 alert('SELECCIONE estado');
			 return false;
			}
			 $.ajax({
				 url:pathController+'/categoria/Editcategoria',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_id:$('#t_codigo').val(),
					vp_des_cate:$('#t_des_cate').val(),
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
					 location.href=pathController+"/categoria/frmcategoria"; 
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