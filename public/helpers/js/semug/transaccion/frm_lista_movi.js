$(document).ready(function(){
	 $('#btnguardarmov').click(frm_lista_movi.Save);
	 $('#btncerrar').click(frm_lista_movi.CerrarCaja);
	 
	 $('#t_fec_operacion').datepicker({
		altFormat: formatDate,
		dateFormat: formatDate 
	});
	frm_lista_movi.listar_cbo_cod_trabajo(0);
	frm_lista_movi.listar_cbo_cod_cate(0);
	$('#btnnuevomov,#btncerrar').attr('disabled',true);
	//frm_lista_movi.Fill();
});
frm_lista_movi={
	CerrarCaja:function(){ 
		 if(confirm('Seguro de realizar el cierre de caja?')){
			
			 $.ajax({
				 url:pathController+'/transaccion/CierreCaja',
				 type:'post',
				 dataType:'json',
				 data:{ 
					
				 },
				 beforeSend:function(){
					 $.blockUI({ message: '<h2> Guardando operaciones...</h2>' });	
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
					 alert('Se realizo el cierre satisfactoriamente'); 
					 frm_lista_movi.Fill();
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
	},//fin save 
	Save:function(){ 
		 if(checkInputs($('#t_des_mov,#t_total'))==0){
			//validamos el combo cod_trabajo
			 if(parseInt($('#cbo_cod_trabajo').val())==0){
				 alert('Seleccione el trabajo / obra');
			 return false;
			}
			//validamos el combo cod_cate
			 if(parseInt($('#cbo_cod_cate').val())==0){
				 alert('Seleccione la categoria');
			 return false;
			}
			//validamos el combo tipo_operacion
			 if(parseInt($('#cbo_tipo_operacion').val())==0){
				 alert('Seleccione la operación');
			 return false;
			}
			//validamos el combo moneda
			 if(parseInt($('#cbo_moneda').val())==0){
				 alert('Seleccione la moneda');
			 return false;
			}
			else{
				if($.trim($('#cbo_moneda').val())=="D"){
					 if($.trim($('#t_tc').val())==""){
						alert("Para moneda en dolares, es necesario ingresar el tipo de cambio.");
						return false;
					 }
				}
			}
			 $.ajax({
				 url:pathController+'/transaccion/Savetransaccion',
				 type:'post',
				 dataType:'json',
				 data:{ 
					//vp_cod_caja:$('#t_cod_caja').val(),
					vp_cod_trabajo:$('#cbo_cod_trabajo').val(),
					vp_fec_operacion:$('#t_fec_operacion').val(),
					vp_cod_cate:$('#cbo_cod_cate').val(),
					vp_des_mov:$('#t_des_mov').val(),
					//vp_src_sust:$('#t_src_sust').val(),
					vp_tipo_operacion:$('#cbo_tipo_operacion').val(),
					vp_moneda:$('#cbo_moneda').val(),
					vp_total:$('#t_total').val(),
					vp_tc:$('#t_tc').val()
					//vp_estado:$('#cbo_estado').val()
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
					 frm_lista_movi.Fill();
					 //location.href=pathController+"/transaccion/frmtransaccion"; 
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
	 listar_cbo_cod_trabajo:function(value){ 
		 getList(pathController+'/transaccion/ListaTrabajos','cbo_cod_trabajo',{
		 },{ 
		 finish:function(){ $('#cbo_cod_trabajo').val(value); }
		 });
	},
	 listar_cbo_cod_cate:function(value){ 
		 getList(pathController+'/transaccion/ListadoCategoria','cbo_cod_cate',{
		 },{ 
		 finish:function(){ $('#cbo_cod_cate').val(value); }
		 });
	},
	Fill:function(){
			if($.trim($('#cbocaja').val())=="0"){
				$('#btnnuevomov,#btncerrar').attr('disabled',false);
				return;
			}
			 $.ajax({
				 url:pathController+'/transaccion/listartransaccionescaja',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_caja:$('#cbocaja').val()
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
					var html='';
					html='<div class="row">';
					html+='<div class="col-md-2">'
					html+='<label for="cbo_estado">Administrado por: </label>';
					html+='</div>';	
					html+='<div class="col-md-10">'+result.adm_por+'</div>';
					html+='</div>';
					
					html+='<div class="row">';
					html+='<div class="col-md-2">'
					html+='<label for="cbo_estado">Ultimo Cierre: </label>';
					html+='</div>';	
					html+='<div class="col-md-10">'+result.ult_cierre+'</div>';
					html+='</div>';
					
					html+='<div class="row" >'	
					html+='<div class="col-md-12" style="background-color:#CCEBFF">'+result.des_caja+'</div>';
					html+='</div>';
					
					 $('#adicionales').empty().append(html);		
					 $('#btnnuevomov').attr('disabled',false);
					 if(result.data_count>0){
						$('#btncerrar').attr('disabled',false);
						frm_lista_movi.PintarDatos(result.data); 
					 }
					 else{
						frm_lista_movi.PintarDatos(''); 
						alert('La caja no tiene movimientos pendientes');
					 }
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
	NewReg:function(){ 
		 location.href=pathController+"/transaccion/New_transaccion/"; 
	},//fin NewReg
	Edit:function(id){ 
		 location.href=pathController+"/transaccion/Findtransaccion/"+id; 
	},//fin Edit
	Rmv:function(id){ 
			 if(confirm('Seguro de anular el registro')){
			 $.ajax({
				 url:pathController+'/transaccion/Rmvtransaccion',
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
		 newHtml+='<tr style="font-size:12px;">';
		 newHtml+='<th></th>';
		 newHtml+='<th>FECHA</th>';
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
				 if(fila.cod_cate==3){
					newHtml+='<td></td>';
				 }
				 else{
					newHtml+='<td><a href="javascript:frm_lista_movi.Rmv(\''+fila.cod_mov+'\')">Eliminar</a></td>';
				 }
				 newHtml+='<td align="center">'+fila.fec_operacion+'</td>';
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