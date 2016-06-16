$(document).ready(function(){
	 //$('#btnbuscar').click();
	 //$('#btnnuevo').click(frm_transacciones_bco.NewReg);
	 getList(pathController+'/transaccionbco/LstCta','cbo_id_bcocta',{
	 },''); 
$('#t_fec_operacion').datepicker({
		altFormat: formatDate,
		dateFormat: formatDate 
	});
	getList(pathController+'/transaccionbco/LstTrabajo','cbo_cod_trabajo',{
		 },{ 
		 finish:function(){  }
		 });
$('#btnguardarmov').click(frm_transacciones_bco.Save);
});
frm_transacciones_bco={ 
	Save:function(){ 
		 if(checkInputs($('#t_des_mov'))==0){			
			 $.ajax({
				 url:pathController+'/transaccionbco/Savetransaccionbco',
				 type:'post',
				 dataType:'json',
				 data:{ 
					//vp_id_bcocta:$('#t_id_bcocta').val(),
					vp_cod_trabajo:$('#cbo_cod_trabajo').val(),
					vp_fec_operacion:$('#t_fec_operacion').val(),
					vp_des_mov:$('#t_des_mov').val(),
					vp_tipo_operacion:$('#cbo_tipo_operacion').val(),
					vp_total:$('#t_total').val()
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
					 //location.href=pathController+"/transaccionbco/frmtransaccionbco"; 
					 frm_transacciones_bco.Fill();
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
		 alert('Ingrese la descripcion de la transaccion');
		}//fin validation
	},//fin save
	Fill:function(){ 
	if($.trim($('#cbo_id_bcocta').val())=="00"){
	return;
	}
			 $.ajax({
				 url:pathController+'/transaccionbco/listartransaccionbco',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_id_bcocta:$('#cbo_id_bcocta').val()
					//vp_estado:$('#t_estado').val()
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
				 $('#t_id_bcocta').val($('#cbo_id_bcocta :selected').text());
				 if(result.status==1){ 
					 frm_transacciones_bco.PintarDatos(result.data); 
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 frm_transacciones_bco.PintarDatos('');
				 }
				 $.unblockUI();
				 }
			 });
	},//fin Fill
	NewReg:function(){ 
		 location.href=pathController+"/transaccionbco/New_transaccionbco/"; 
	},//fin NewReg
	Edit:function(id){ 
		 location.href=pathController+"/transaccionbco/Findtransaccionbco/"+id; 
	},//fin Edit
	Rmv:function(id){ 
			 if(confirm('Seguro de anular el registro')){
			 $.ajax({
				 url:pathController+'/transaccionbco/Rmvtransaccionbco',
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
		 newHtml+='<th>PROYECTO OBRA</th>';
		 newHtml+='<th>FECHA MOV</th>';
		 newHtml+='<th>DESCRIPCIÓN</th>';
		 newHtml+='<th>OPERACIÓN</th>';
		 newHtml+='<th>MONTO</th>';		 
		 newHtml+='<th>SALDO</th>';
		 newHtml+='</tr>';
		 newHtml+='</thead>';
		 var cont=1;
		 newHtml+='<tbody>';
			 $.each(data,function(key,fila){
				 newHtml+='<tr id="tr'+fila.cod_mov+'">';
				 newHtml+='<td><a href="javascript:frm_transacciones_bco.Rmv(\''+fila.cod_mov+'\')">Eliminar</a></td>';
				 newHtml+='<td>'+fila.des_trabajo+'</td>';
				 newHtml+='<td>'+fila.fec_operacion+'</td>';
				 newHtml+='<td>'+fila.des_mov+'</td>';
				 newHtml+='<td>'+fila.tipo_operacion+'</td>';
				 newHtml+='<td>'+fila.total+'</td>';				 
				 newHtml+='<td>'+fila.saldo+'</td>';	
				 newHtml+='</tr>';
			 });
		 newHtml+='</tbody>';
		 newHtml+='</table>';
	 $('#listado').empty().append(newHtml);
	 oTable=$('#tabla').dataTable();
	}//fin PintarDatos
}//fin clase