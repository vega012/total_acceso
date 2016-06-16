$(document).ready(function(){
	 $('#btnbuscar').click(frm_adm_cli.Fill);
	 $('#btnnuevo').click(frm_adm_cli.NewReg);
});
frm_adm_cli={ 
	Fill:function(){ 
			 $.ajax({
				 url:pathController+'/cliente/fillclientes',
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
					 frm_adm_cli.PintarDatos(result.data); 
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 frm_adm_cli.PintarDatos('');
				 }
				 $.unblockUI();
				 }
			 });
	},//fin Fill
	NewReg:function(){ 
		 location.href=pathController+"/cliente/New_cliente/"; 
	},//fin NewReg
	Edit:function(id){ 
		 location.href=pathController+"/cliente/Findcliente/"+id; 
	},//fin Edit
	Rmv:function(id){ 
			 if(confirm('Seguro de anular el registro')){
			 $.ajax({
				 url:pathController+'/cliente/Rmvcliente',
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
		 newHtml='<table  class="table table-striped table-bordered" cellspacing="0" width="100%" id="tabla">';
		 newHtml+='<thead>';
		 newHtml+='<tr>';
		 newHtml+='<th></th>';
		 newHtml+='<th>CLIENTE</th>';
		 newHtml+='<th>TIPO DOC.</th>';
		 newHtml+='<th>NUM. DOC.</th>';
		 newHtml+='<th>ESTADO</th>';
		 newHtml+='</tr>';
		 newHtml+='</thead>';
		 var cont=1;
		 newHtml+='<tbody>';
			 $.each(data,function(key,fila){
				 newHtml+='<tr id="tr'+fila.cod_cliente+'">';
				 newHtml+='<td><a href="javascript:frm_adm_cli.Edit(\''+fila.cod_cliente+'\')">Editar</a>&nbsp;&nbsp;<a href="javascript:frm_adm_cli.Rmv(\''+fila.cod_cliente+'\')">Eliminar</a></td>';
				 //newHtml+='<td>'+fila.cod_cliente+'</td>';
				 newHtml+='<td>'+fila.razon_social+'</td>';
				 newHtml+='<td>'+fila.doc_tipo+'</td>';
				 newHtml+='<td>'+fila.num_doc+'</td>';
				 newHtml+='<td>'+fila.estado+'</td>';
				 newHtml+='</tr>';
			 });
		 newHtml+='</tbody>';
		 newHtml+='</table>';
	 $('#listado').empty().append(newHtml);
	 oTable=$('#tabla').dataTable(); 
	}//fin PintarDatos
}//fin clase