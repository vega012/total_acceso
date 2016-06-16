$(document).ready(function(){
	 $('#btnbuscar').click(frm_lista_caja_chica.Fill);
	 $('#btnnuevo').click(frm_lista_caja_chica.NewReg);
});
frm_lista_caja_chica={ 
	Fill:function(){ 
			 $.ajax({
				 url:pathController+'/caja_chica/listar_caja_chica',
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
					 frm_lista_caja_chica.PintarDatos(result.data); 
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 frm_lista_caja_chica.PintarDatos('');
				 }
				 $.unblockUI();
				 }
			 });
	},//fin Fill
	NewReg:function(){ 
		 location.href=pathController+"/caja_chica/New_caja_chica/"; 
	},//fin NewReg
	Edit:function(id){ 
		 location.href=pathController+"/caja_chica/Findcaja_chica/"+id; 
	},//fin Edit
	Rmv:function(id){ 
			 if(confirm('Seguro de anular el registro')){
			 $.ajax({
				 url:pathController+'/caja_chica/Rmvcaja_chica',
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
		 newHtml+='<th>Descripción</th>';
		 newHtml+='<th>Usuario asignado</th>';
		 newHtml+='<th>Usuario administra</th>';
		 newHtml+='<th>Estado</th>';
		 newHtml+='</tr>';
		 newHtml+='</thead>';
		 var cont=1;
		 newHtml+='<tbody>';
			 $.each(data,function(key,fila){
				 newHtml+='<tr id="tr'+fila.cod_caja+'">';
				 //newHtml+='<td><a href="javascript:frm_lista_caja_chica.Edit(\''+fila.cod_caja+'\')">Editar</a>&nbsp;&nbsp;<a href="javascript:frm_lista_caja_chica.Rmv(\''+fila.cod_caja+'\')">Eliminar</a></td>';
				 newHtml+='<td><a href="javascript:frm_lista_caja_chica.Edit(\''+fila.cod_caja+'\')">Editar</a></td>';
				 //newHtml+='<td>'+fila.cod_caja+'</td>';
				 newHtml+='<td>'+fila.des_caja+'</td>';
				 newHtml+='<td>'+fila.des_usuario+'</td>';
				 newHtml+='<td>'+fila.adm_por+'</td>';
				 newHtml+='<td>'+fila.estado+'</td>';
				 newHtml+='</tr>';
			 });
		 newHtml+='</tbody>';
		 newHtml+='</table>';
	 $('#listado').empty().append(newHtml);
	 oTable=$('#tabla').dataTable(); 
	}//fin PintarDatos
}//fin clase