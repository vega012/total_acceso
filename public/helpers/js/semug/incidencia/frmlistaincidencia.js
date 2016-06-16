$(document).ready(function(){
	 $('#btnbuscar').click(frmlistaincidencia.Fill);
	 $('#btnnuevo').click(frmlistaincidencia.NewReg);
});
frmlistaincidencia={ 
	Fill:function(){ 
			 $.ajax({
				 url:pathController+'/incidencia/listaincidencia',
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
					 frmlistaincidencia.PintarDatos(result.data); 
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 frmlistaincidencia.PintarDatos('');
				 }
				 $.unblockUI();
				 }
			 });
	},//fin Fill
	NewReg:function(){ 
		 location.href=pathController+"/incidencia/New_incidencia/"; 
	},//fin NewReg
	Edit:function(id){ 
		 location.href=pathController+"/incidencia/Findincidencia/"+id; 
	},//fin Edit
	Rmv:function(id){ 
			 if(confirm('Seguro de anular el registro')){
			 $.ajax({
				 url:pathController+'/incidencia/Rmvincidencia',
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
		 newHtml+='<th>CODIGO</th>';
		 newHtml+='<th>PROYECTO / OBRA</th>';
		 newHtml+='<th>DESCRIPCION</th>';
		 newHtml+='<th>VENCIMIENTO</th>';
		 newHtml+='<th>DIAS AVISO</th>';
		 newHtml+='</tr>';
		 newHtml+='</thead>';
		 var cont=1;
		 newHtml+='<tbody>';
			 $.each(data,function(key,fila){
				 newHtml+='<tr id="tr'+fila.cod_incidencia+'">';
				 newHtml+='<td><a href="javascript:frmlistaincidencia.Edit(\''+fila.cod_incidencia+'\')">Editar</a>&nbsp;&nbsp;<a href="javascript:frmlistaincidencia.Rmv(\''+fila.cod_incidencia+'\')">Eliminar</a></td>';
				 newHtml+='<td>'+fila.cod_incidencia+'</td>';
				 newHtml+='<td>'+fila.des_trabajo+'</td>';
				 newHtml+='<td>'+fila.des_incidencia+'</td>';
				 newHtml+='<td>'+fila.fec_venc+'</td>';
				 newHtml+='<td>'+fila.avis_dias+'</td>';
				 newHtml+='</tr>';
			 });
		 newHtml+='</tbody>';
		 newHtml+='</table>';
	 $('#listado').empty().append(newHtml);
	 oTable=$('#tabla').dataTable(); 
	}//fin PintarDatos
}//fin clase