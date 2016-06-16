$(document).ready(function(){
	 $('#btnbuscar').click(frm_lista_usuario.Fill);
	 $('#btnnuevo').click(frm_lista_usuario.NewReg);
});
frm_lista_usuario={ 
	Fill:function(){ 
			 $.ajax({
				 url:pathController+'/usuario/listar_usuarios',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_estado:$('#cbo_estado').val()
				 },
				 beforeSend:function(){
					 $.blockUI({ message: '<h2> Buscando datos...</h2>' });	
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
					 frm_lista_usuario.PintarDatos(result.data); 
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 frm_lista_usuario.PintarDatos('');
				 }
				 $.unblockUI();
				 }
			 });
	},//fin Fill
	NewReg:function(){ 
		 location.href=pathController+"/usuario/New_usuario/"; 
	},//fin NewReg
	Edit:function(id){ 
		 location.href=pathController+"/usuario/Findusuario/"+id; 
	},//fin Edit
	Rmv:function(id){ 
			 if(confirm('Seguro de anular el registro')){
			 $.ajax({
				 url:pathController+'/usuario/Rmvusuario',
				 type:'post',
				 dataType:'json',
				 data:{ 
					 vp_id:id
				 },
				 beforeSend:function(){
					 $.blockUI({ message: '<h2> Eliminando registro...</h2>' });	
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
					 $('#tr'+id).remove(); 
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
	},//fin Rmv
	PintarDatos:function(data){ 
		 newHtml='';
		 newHtml='<table class="table table-striped table-bordered" cellspacing="0" width="100%" id="tabla">';
		 newHtml+='<thead>';
		 newHtml+='<tr>';
		 newHtml+='<th></th>';
		 //newHtml+='<th>CODIGO</th>';
		 newHtml+='<th>USUARIO</th>';
		 newHtml+='<th>LOGIN</th>';
		 newHtml+='<th>EMAIL</th>';
		 newHtml+='<th>TIPO</th>';
		 newHtml+='<th>ACCESO</th>';
		 newHtml+='</tr>';
		 newHtml+='</thead>';
		 var cont=1;
		 newHtml+='<tbody>';
			 $.each(data,function(key,fila){
				 newHtml+='<tr id="tr'+fila.cod_usuario+'">';
				 //newHtml+='<td><a href="javascript:frm_lista_usuario.Edit(\''+fila.cod_usuario+'\')">Editar</a>&nbsp;&nbsp;<a href="javascript:frm_lista_usuario.Rmv(\''+fila.cod_usuario+'\')">Eliminar</a></td>';
				 newHtml+='<td><a href="javascript:frm_lista_usuario.Edit(\''+fila.cod_usuario+'\')">Editar</a></td>';
				 //newHtml+='<td>'+fila.cod_usuario+'</td>';
				 newHtml+='<td>'+fila.des_usuario+'</td>';
				 newHtml+='<td>'+fila.log_usuario+'</td>';
				 newHtml+='<td>'+fila.email+'</td>';
				 newHtml+='<td>'+fila.tipo+'</td>';
				 newHtml+='<td>'+fila.flg_acceso+'</td>';
				 newHtml+='</tr>';
			 });
		 newHtml+='</tbody>';
		 newHtml+='</table>';
	 $('#listado').empty().append(newHtml);
	 oTable=$('#tabla').dataTable(); 
	}//fin PintarDatos
}//fin clase