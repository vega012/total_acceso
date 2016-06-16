$(document).ready(function(){
	$('#btnbuscarmov').click(frm_lista_movi.Fill);	
	 $('#t_fec_ini,#t_fec_fin').datepicker({
		altFormat: formatDate,
		dateFormat: formatDate 
	});
});
frm_lista_movi={
	Fill:function(){ 
			 $.ajax({
				 url:pathController+'/transaccion/ListarMovCajaHistorico',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_caja:$('#cbocaja').val(),
					vp_fec_ini:$('#t_fec_ini').val(),
					vp_fec_fin:$('#t_fec_fin').val()
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
					 frm_lista_movi.PintarDatos(result.data); 
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 frm_lista_movi.PintarDatos('');
				 }
				 $.unblockUI();
				 }
			 });
	},//fin Fill
	PintarDatos:function(data){ 
		 newHtml='';
		 newHtml='<table class="table table-striped table-bordered" cellspacing="0" width="100%" id="tabla">';
		 newHtml+='<thead>';
		 newHtml+='<tr style="font-size:12px;">';
		 newHtml+='<th>FECHA</th>';
		 newHtml+='<th>CIERRE</th>';
		 newHtml+='<th>PROYECTO / OBRA</th>';
		newHtml+='<th>CATEGORIA</th>';	
		 newHtml+='<th>DESCRIPCION</th>';
		 newHtml+='<th>TIPO</th>';
		 newHtml+='<th>MONEDA</th>';
		 newHtml+='<th>TC</th>';
		 newHtml+='<th>TOTAL</th>';
		 newHtml+='<th>SALDO SOL</th>';
		 newHtml+='<th>SALDO DOL</th>';
		 
		 newHtml+='</tr>';
		 newHtml+='</thead>';
		 var cont=1;
		 newHtml+='<tbody>';
			 $.each(data,function(key,fila){
				 newHtml+='<tr id="tr'+fila.cod_mov+'">';
				 newHtml+='<td align="center">'+fila.fec_operacion+'</td>';
				 newHtml+='<td align="center">'+fila.fec_cierre+'</td>';
				 newHtml+='<td>'+fila.des_trabajo+'</td>';
				 newHtml+='<td align="center">'+fila.des_cate+'</td>';
				 newHtml+='<td>'+fila.des_mov+'</td>';
				 newHtml+='<td align="center">'+fila.tipo_operacion+'</td>';
				 newHtml+='<td align="center">'+fila.moneda+'</td>';
				 newHtml+='<td align="center">'+fila.tipo_cambio+'</td>';
				 newHtml+='<td align="right">'+fila.total+'</td>';				 				 
				 newHtml+='<td align="right">'+fila.saldo_sol+'</td>';
				 newHtml+='<td align="right">'+fila.saldo_dol+'</td>';
				 newHtml+='</tr>';
			 });
		 newHtml+='</tbody>';
		 newHtml+='</table>';
	 $('#listado').empty().append(newHtml);
	 oTable=$('#tabla').dataTable({
		language: {
			url:pathController1+'aplicacion/helpers/plugin/DataTables-1.10.10/media/js/idioma.js'
		}
	 }); 
	}//fin PintarDatos
}//fin clase