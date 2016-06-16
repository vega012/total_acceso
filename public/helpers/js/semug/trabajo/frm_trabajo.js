$(document).ready(function(){
	 $('#btnbuscar').click(frm_trabajo.Fill);
	 $('#btnnuevo').click(frm_trabajo.NewReg);
	 getList(pathController+'/trabajo/Listar_Clentes','cbo_cod_cliente',{
	 },''); 
	 getList(pathController+'/trabajo/ListarTipo','cbo_cod_tipo',{
	 },''); 
	 $('#t_fec_ini,#t_fec_fin').datepicker({
		altFormat: formatDate,
		dateFormat: formatDate 
	});
});
frm_trabajo={ 
	Fill:function(){ 
			 $.ajax({
				 url:pathController+'/trabajo/listartrabajo',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_cod_empresa:$('#t_cod_empresa').val(),
					vp_cod_cliente:$('#cbo_cod_cliente').val(),
					vp_cod_tipo:$('#cbo_cod_tipo').val(),
					vp_fec_ini:$('#t_fec_ini').val(),
					vp_fec_fin:$('#t_fec_fin').val(),
					vp_estado:$('#cbo_cod_estado').val()
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
					 frm_trabajo.PintarDatos(result.data); 
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 frm_trabajo.PintarDatos('');
				 }
				 $.unblockUI();
				 }
			 });
	},//fin Fill
	NewReg:function(){ 
		 location.href=pathController+"/trabajo/New_trabajo/"; 
	},//fin NewReg
	Edit:function(id){ 
		 location.href=pathController+"/trabajo/Findtrabajo/"+id; 
	},//fin Edit
	Rmv:function(id){ 
			 if(confirm('Seguro de anular el registro')){
			 $.ajax({
				 url:pathController+'/trabajo/Rmvtrabajo',
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
		 newHtml+='<th>CLIENTE</th>';
		 newHtml+='<th>TIPO</th>';
		 newHtml+='<th>DESCRIPCIÓN</th>';
		 newHtml+='<th>FECHA INICIO</th>';
		 newHtml+='<th>FECHA FIN</th>';
		 newHtml+='<th>PRESUPUESTO</th>';
		 newHtml+='<th>ESTADO</th>';
		 //newHtml+='<th>EMPRESA</th>';
		 newHtml+='</tr>';
		 newHtml+='</thead>';
		 var cont=1;
		 newHtml+='<tbody>';
			 $.each(data,function(key,fila){
				 newHtml+='<tr id="tr'+fila.cod_trabajo+'">';
				 //newHtml+='<td><a href="javascript:frm_trabajo.Edit(\''+fila.cod_trabajo+'\')">Editar</a>&nbsp;&nbsp;<a href="javascript:frm_trabajo.Rmv(\''+fila.cod_trabajo+'\')">Eliminar</a></td>';
				 newHtml+='<td><a href="javascript:frm_trabajo.Edit(\''+fila.cod_trabajo+'\')">Editar</a></td>';
				 //newHtml+='<td>'+fila.cod_trabajo+'</td>';
				 newHtml+='<td>'+fila.razon_social+'</td>';
				 newHtml+='<td>'+fila.des_tipo+'</td>';
				 newHtml+='<td>'+fila.des_trabajo+'</td>';
				 newHtml+='<td align="center">'+fila.fec_ini+'</td>';
				 newHtml+='<td align="center">'+fila.fec_fin+'</td>';
				 newHtml+='<td align="right">'+fila.presupuesto+'</td>';
				 newHtml+='<td align="center">'+fila.estado+'</td>';
				 //newHtml+='<td>'+fila.des_empresa+'</td>';
				 newHtml+='</tr>';
			 });
		 newHtml+='</tbody>';
		 newHtml+='</table>';
	 $('#listado').empty().append(newHtml);
	 $('#tabla').DataTable();
	 /*oTable=$('#tabla').dataTable( { 
	 "bPaginate": false, 
	 "bFilter": true,
	 "bJQueryUI": true, 
	 "aaSorting": [[ 1, "desc" ]] 
 	 } ); */
	}//fin PintarDatos
}//fin clase