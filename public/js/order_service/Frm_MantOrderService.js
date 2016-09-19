$(document).ready(function(){
	 $('#btnsave').click(Frm_MantOrderService.Register);
	 $('#btncancel').click(Frm_MantOrderService.Cancel);
	 //$('#btnadddet_email_clipping').click(Frm_MantOrderService.AddDet_email_clipping);
	 $('#t_date_send,#t_start,#t_end,#t_clipping_first,#t_enviada_em').datepicker({
		altFormat: formatDate,
		dateFormat: formatDate 
	});
	Frm_MantOrderService.FindAllCustomer();
	Frm_MantOrderService.LstMedia();
	
});

(function ($) {
    $.fn.serializeFormJSON = function () {

        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
})(jQuery);
Frm_MantOrderService={
	num_field:0,
	num_field_contact:0,
	FillWord:function(id){ 
			 $.ajax({
				 url:'/Channel/Fillallword',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_codsubchannel:id
				 },
				 beforeSend:function(){
					 $.blockUI({ message: '<h2> Please wait...</h2>' });	
				 },
				 error: function(jqXHR, exception) { 
					 if (jqXHR.status === 0) { 
						 alert('error url direction'); 
					 } else if (jqXHR.status == 404) { 
						 alert('Page not found'); 
					 } else if (jqXHR.status == 500) { 
						 alert('Internal error '); 
					 } else if (exception === 'parsererror') { 
						 alert('Requested JSON parse failed.'); 
					 } else if (exception === 'timeout') { 
						 alert('Error time out'); 
					 } else if (exception === 'abort') { 
						 alert('Query abort.'); 
					 } else { 
						 alert('Error: ' + jqXHR.responseText); 
					 } 
				 $.unblockUI();
				 }, 
				 success:function(result){
				 if(result.status==1){ 
						 newHtml='';
						 newHtml='<br>';
						 $.each(result.data,function(key,row){
							 newHtml+='<span class="label label-success" style="cursor:pointer" onmouseover="javascript:Frm_MantOrderService.SelectText(this);">'+row.description+'</span>&nbsp;&nbsp;&nbsp;';						 
						 });
						 newHtml+='<div class="alert alert-info" style="margin-top:10px;" role="alert">Double click key work for add o write in textbox</div>';
						 /*newHtml+='<div id="lstworks">';
						 newHtml+='</div>';
						 newHtml+='<input type="text" placeholder="click for add search expression" class="form-control" onclick="Frm_MantOrderService.AddExpression()" name="txtnewwork" />';*/
						 $('#lstkeywork').empty().append(newHtml);
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 FrmChannel.PaintDataWord('');
				 }
				 $.unblockUI();
				 }
			 });
	},//fin Fill
	SelectText:function(obj){
		var range = document.createRange();
		range.selectNodeContents(obj);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	},
	AddContact:function(){
		HTML='';
		HTML+='<div class="col-md-4 rowcontact'+Frm_MantOrderService.num_field_contact+'" >';
		HTML+="<input type='text' placeholder='contact name' name='t_contact_name' class='form-control' />";
		HTML+='</div>';
		HTML+='<div class="col-md-4 rowcontact'+Frm_MantOrderService.num_field_contact+'" >';
		HTML+="<input type='text' placeholder='contact fone' name='t_contact_fone' class='form-control' />";
		HTML+='</div>';
		HTML+='<div class="col-md-4 rowcontact'+Frm_MantOrderService.num_field_contact+'">';
		HTML+='<div class="input-group">';
		HTML+='<input type="text" data-word-code="" placeholder="contact email" class="form-control" style="z-index:1"  name="t_contact_email"><div onclick="Frm_MantOrderService.RmvContact(\'rowcontact'+Frm_MantOrderService.num_field_contact+'\')" class="input-group-addon" style="font-size:20px;cursor:pointer;">X</div>';
		HTML+='</div>';
		HTML+='</div>';
		$('#lstcontacts').append(HTML);
		Frm_MantOrderService.num_field_contact++
	},
	AddExpression:function(){
		if($('#cbosubchannel').val()=="0"){
			alert("Select subchannel");
			return;
		}
		HTML='';
		HTML+='<div class="col-md-2 crite'+Frm_MantOrderService.num_field+'" >';
		HTML+="<input type='hidden' name='subchannel' value='"+$('#cbosubchannel').val()+"'><input type='text' name='labelwork' class='form-control' value='"+$('#cbochannel :selected').text()+"/"+$('#cbosubchannel :selected').text()+"' readonly='true' style='background-color:silver;' />";
		HTML+='</div>';
		HTML+='<div class="col-md-10 crite'+Frm_MantOrderService.num_field+'">';
		HTML+='<div class="input-group">';
		HTML+='<input type="text" data-word-code="" class="form-control" style="z-index:1"  name="txtwork"><div onclick="Frm_MantOrderService.RmvCriterial(\'crite'+Frm_MantOrderService.num_field+'\')" class="input-group-addon" style="font-size:20px;cursor:pointer;">X</div>';
		HTML+='</div>';
		HTML+='</div>';
		$('#lstworks').append(HTML);
		Frm_MantOrderService.num_field++
	},
	RmvCriterial:function(id){
		if(id!=""){
			if(confirm('Confirm remove?')){
				$('.'+id).remove();
			}
		}
	},
	RmvContact:function(id){
		if(id!=""){
			if(confirm('Confirm remove?')){
				$('.'+id).remove();
			}
		}
	},
	
	FillSubChannel:function(id){ 
			 $.ajax({
				 url:'/Channel/FillSubchannel',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_channel:id
				 },
				 beforeSend:function(){
					 $.blockUI({ message: '<h2> Please wait...</h2>' });	
				 },
				 error: function(jqXHR, exception) { 
					 if (jqXHR.status === 0) { 
						 alert('error url direction'); 
					 } else if (jqXHR.status == 404) { 
						 alert('Page not found'); 
					 } else if (jqXHR.status == 500) { 
						 alert('Internal error '); 
					 } else if (exception === 'parsererror') { 
						 alert('Requested JSON parse failed.'); 
					 } else if (exception === 'timeout') { 
						 alert('Error time out'); 
					 } else if (exception === 'abort') { 
						 alert('Query abort.'); 
					 } else { 
						 alert('Error: ' + jqXHR.responseText); 
					 } 
				 $.unblockUI();
				 }, 
				 success:function(result){
				 if(result.status==1){ 
						 newHtml='';
						 newHtml+='<option value="0">Select</option>';
						 $.each(result.data,function(key,row){
							 newHtml+='<option value="'+row._id+'">'+row.description+'</option>';						 
						 });
						 $('#cbosubchannel').empty().append(newHtml);
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 FrmChannel.PaintDataSubChannel('');
				 }
				 $.unblockUI();
				 }
			 });
	},//fin 
	FillChannel:function(cod){ 
			 $.ajax({
				 url:'/Channel/Fillchannel',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_idempresa:cod
				 },
				 beforeSend:function(){
					 $.blockUI({ message: '<h2> Please wait...</h2>' });	
				 },
				 error: function(jqXHR, exception) { 
					 if (jqXHR.status === 0) { 
						 alert('error url direction'); 
					 } else if (jqXHR.status == 404) { 
						 alert('Page not found'); 
					 } else if (jqXHR.status == 500) { 
						 alert('Internal error '); 
					 } else if (exception === 'parsererror') { 
						 alert('Requested JSON parse failed.'); 
					 } else if (exception === 'timeout') { 
						 alert('Error time out'); 
					 } else if (exception === 'abort') { 
						 alert('Query abort.'); 
					 } else { 
						 alert('Error: ' + jqXHR.responseText); 
					 } 
				 $.unblockUI();
				 }, 
				 success:function(result){					  
					 if(result.status==1){ 
						 newHtml='';
						 newHtml+='<option value="0">Select</option>';
						 $.each(result.data,function(key,row){
							 newHtml+='<option value="'+row._id+'">'+row.canal+'</option>';						 
						 });
						 $('#cbochannel').empty().append(newHtml);
					 }
					 else if(result.status==2){
						 alert(result.msg);
					 }
					 else{
						 FrmChannel.PaintData('');
					 }
					 $.unblockUI();
				 }
			 });
	},//fin Fill	
AddSubMedia:function(midia,submidia){
	alert(midia+'--'+submidia);
},	
 LstMedia:function(){
			 $.ajax({
				 url:'/Orderservice/LstMediasubmedia',
				 type:'post',
				 dataType:'json',
				 data:{ 
				 },
				 beforeSend:function(){
				 },
				 error: function(jqXHR, exception) { 
					 if (jqXHR.status === 0) { 
						 alert('error url direction'); 
					 } else if (jqXHR.status == 404) { 
						 alert('Page not found'); 
					 } else if (jqXHR.status == 500) { 
						 alert('Internal Error '); 
					 } else if (exception === 'parsererror') { 
						 alert('Requested JSON parse failed.'); 
					 } else if (exception === 'timeout') { 
						 alert('Time out.'); 
					 } else if (exception === 'abort') { 
						 alert('Abort query'); 
					 } else { 
						 alert('Error: ' + jqXHR.responseText); 
					 } 
				 }, 
				 success:function(result){
				 if(result.status==1){ 
					 Frm_MantOrderService.PaintMidia(result.data); 
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 alert('Problems load details');
				 }
				 }
			 });	 
 },	
 PaintMidia:function(data){
	i=1; 
	newHtml='';
	$.each(data,function(key,fila){		
		if(fila.Subm!=null){
			if(i==1){
				newHtml+='<div class="row">';
			}
			newHtml+='<div class="col-md-3">';
				newHtml+='<div class="panel panel-primary">';
					newHtml+='<div class="panel-heading">';
						newHtml+='<h3 class="panel-title"><input type="checkbox" name="chkmedia" onclick="javascript:Frm_MantOrderService.CheckAll(\''+fila._id+'\',this);" value="'+fila._id+'">&nbsp;&nbsp;'+fila.midia+'</h3>';
					newHtml+='</div>';
					newHtml+='<div class="panel-body">';					
						$.each(fila.Subm,function(key_d,fila_d){
							newHtml+='<div><input type="checkbox" readonly="yes" disabled onclick="javascript:Frm_MantOrderService.CheckSubmidia(\''+fila._id+'\',\''+fila_d._id+'\',this);" class="'+fila._id+'">&nbsp;&nbsp;'+fila_d.submidia+"</div>";
						});
					newHtml+='</div>';
				newHtml+='</div>';
			newHtml+='</div>';
			i++;
			if(i==4){
				newHtml+='</div>';
				newHtml+='<div class="row">';
				i=1;
			}
		}		
	});	
	newHtml+='</div>';	
	$('#red').append(newHtml);
 },
 CheckAll:function(obj,this_obj){
	$("."+obj).prop('checked', this_obj.checked); 
 },
 CheckSubmidia:function(obj_class,id,obj){
	 if(!obj.checked){
		 document.getElementsByName(obj_class)[0].checked=false;
	 }
 },
 FindAllCustomer:function(){
	 $.ajax({
	   url: '/Customers/Fill_customers',
	   type: 'post',
	   dataType: 'json',
	   data : { },
	   success : function(result) {
		var customer = new Array();
		num=0;
		$.each(result.data,function(key,fila){
			var obj = new Object();
			obj.label=fila.razonsocial;
			obj.value=fila.razonsocial;
			obj.id=fila._id;
			 customer[num]=obj;
			 num++;
		 });	   
		  console.log(customer);
		  $( "#t_id_customer" ).autocomplete({
				source: customer,
				select: function( event, ui ){
					if($.trim(ui.item.id)!=""){
						$('#t_id_customer_cod').val(ui.item.id);
						Frm_MantOrderService.FillChannel(ui.item.id);
					}
				}							
			});
	   },
	 });
},	
	Cancel:function(){ 
		 document.location.href="/Orderservice/FrmListOrder";
	}, 
	Register:function(){
		if($.trim($('#t_codigo').val())==""){
			 Frm_MantOrderService.Save();
		}
		else{
			 Frm_MantOrderService.Edit();
		}
	},
	CargaDet_email_clipping:function(){ 
			 $.ajax({
				 url:'/Orderservice/Cargadet_email_clipping',
				 type:'post',
				 dataType:'json',
				 data:{ 
				 },
				 beforeSend:function(){
				 },
				 error: function(jqXHR, exception) { 
					 if (jqXHR.status === 0) { 
						 alert('error url direction'); 
					 } else if (jqXHR.status == 404) { 
						 alert('Page not found'); 
					 } else if (jqXHR.status == 500) { 
						 alert('Internal Error '); 
					 } else if (exception === 'parsererror') { 
						 alert('Requested JSON parse failed.'); 
					 } else if (exception === 'timeout') { 
						 alert('Time out.'); 
					 } else if (exception === 'abort') { 
						 alert('Abort query'); 
					 } else { 
						 alert('Error: ' + jqXHR.responseText); 
					 } 
				 }, 
				 success:function(result){
				 if(result.status==1){ 
					 Frm_MantOrderService.Paintdet_email_clipping(result.data); 
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 alert('Problems load details');
				 }
				 }
			 });
	},//fin Cargadet
	AddDet_email_clipping:function(){ 
		 if(checkInputs($('#t_email,#tmp_email,#t_contact,#tmp_contact,#t_fone,#tmp_fone'))==0){
			 $.ajax({
				 url:'/Orderservice/Adddet_email_clipping',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_email:$('#t_email').val(),
					vp_contact:$('#t_contact').val(),
					vp_fone:$('#t_fone').val()
				 },
				 beforeSend:function(){
				 },
				 error: function(jqXHR, exception) { 
					 if (jqXHR.status === 0) { 
						 alert('error url direction.'); 
					 } else if (jqXHR.status == 404) { 
						 alert('Page not found'); 
					 } else if (jqXHR.status == 500) { 
						 alert('Internal error '); 
					 } else if (exception === 'parsererror') { 
						 alert('Requested JSON parse failed.'); 
					 } else if (exception === 'timeout') { 
						 alert('time out'); 
					 } else if (exception === 'abort') { 
						 alert('Abort query'); 
					 } else { 
						 alert('Error: ' + jqXHR.responseText); 
					 } 
				 }, 
				 success:function(result){
				 if(result.status==1){ 
					 Frm_MantOrderService.Paintdet_email_clipping(result.data); 
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 alert('Register Problem');
				 }
				 }
			 });
		 }
		else{
		 $('#message').fadeIn(1500).fadeOut(1500);
		}//fin validation
	},//fin save
	Paintdet_email_clipping:function(data){ 
		 newHtml='';
		 newHtml='<table class="table table-striped table-bordered" cellspacing="0"  width="100%"  id="tabla_email_clipping">';
		 newHtml+='<thead>';
		 newHtml+='<tr>';
		 newHtml+='<th></th>';
		 newHtml+='<th>EMAIL</th>';
		 newHtml+='<th>CONTACT</th>';
		 newHtml+='<th>FONE</th>';
		 newHtml+='</tr>';
		 newHtml+='</thead>';
		 var cont=1;
		 newHtml+='<tbody>';
			 $.each(data,function(key,fila){
				 newHtml+='<tr id="tr'+key+'">';
				 newHtml+='<td><a href="javascript:Frm_MantOrderService.RmvDet_email_clipping(\''+key+'\')">Eliminar</a></td>';
				 newHtml+='<td>'+fila.email+'</td>';
				 newHtml+='<td>'+fila.contact+'</td>';
				 newHtml+='<td>'+fila.fone+'</td>';
				 newHtml+='</tr>';
			 });
		 newHtml+='</tbody>';
		 newHtml+='</table>';
	 $('#listado_det_email_clipping').empty().append(newHtml);
	 oTable=$('#tabla_email_clipping').dataTable();
	},//fin PintarDatos
	RmvDet_email_clipping:function(id){ 
			 $.ajax({
				 url:'/Orderservice/Rmvdet_email_clipping',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_id:id 
				 },
				 beforeSend:function(){
				 },
				 error: function(jqXHR, exception) { 
					 if (jqXHR.status === 0) { 
						 alert('error url direction.'); 
					 } else if (jqXHR.status == 404) { 
						 alert('Page not found'); 
					 } else if (jqXHR.status == 500) { 
						 alert('Internal Error '); 
					 } else if (exception === 'parsererror') { 
						 alert('Requested JSON parse failed.'); 
					 } else if (exception === 'timeout') { 
						 alert('Time out'); 
					 } else if (exception === 'abort') { 
						 alert('Abort Query'); 
					 } else { 
						 alert('Error: ' + jqXHR.responseText); 
					 } 
				 }, 
				 success:function(result){
				 if(result.status==1){ 
					 Frm_MantOrderService.Paintdet_email_clipping(result.data) 
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 alert('Transaction problem');
				 }
				 }
			 });
	},//fin RmvDet
	Save:function(){ 
		if($.trim($('#t_id_customer_cod').val())==""){
			alert("Select customer");
			return false;
		}
		if($.trim($('#t_comer_send').val())==""){
			alert("Input comer send");
			return false;
		}
		if($.trim($('#t_name_fantasy').val())==""){
			alert("Input name fantasy");
			return false;
		}
		if($.trim($('#t_date_send').val())==""){
			alert("Select date send");
			return false;
		}
		if($.trim($('#t_start').val())==""){
			alert("Select date start");
			return false;
		}
		if($.trim($('#t_end').val())==""){
			alert("Select date end");
			return false;
		}
		
		 var datos = $("form").serializeFormJSON();
		 /*if(checkInputs($('#t_id_customer,#t_date_send'))==0){
			
			 if(parseInt($('#cbo_period_send').val())==0){
				 alert('SELECCIONE period_send');
			 return false;
			}*/
			alert(datos);
			 $.ajax({
				 url:'/Orderservice/Saveorderservice',
				 type:'post',
				 dataType:'json',
				 data:datos,
				 beforeSend:function(){
					 $.blockUI({ message: '<h2> save data...</h2>' });	
				 },
				 error: function(jqXHR, exception) { 
					 if (jqXHR.status === 0) { 
						 alert('error url direction.'); 
					 } else if (jqXHR.status == 404) { 
						 alert('Page not found'); 
					 } else if (jqXHR.status == 500) { 
						 alert('Internal Error '); 
					 } else if (exception === 'parsererror') { 
						 alert('Requested JSON parse failed.'); 
					 } else if (exception === 'timeout') { 
						 alert('Time out'); 
					 } else if (exception === 'abort') { 
						 alert('Abort query'); 
					 } else { 
						 alert('Error: ' + jqXHR.responseText); 
					 } 
				 $.unblockUI();
				 }, 
				 success:function(result){
				 if(result.status==1){ 
					 alert('register success'); 
					 document.location.href="/Orderservice/FrmListOrder"; 
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 alert('Transaction problem');
				 }
				 $.unblockUI();
				 }
			 });
		 /*}
		else{
		 $('#message').fadeIn(1500).fadeOut(1500);
		}*/
	},//fin save
	Edit:function(){ 
		if($.trim($('#t_id_customer_cod').val())==""){
			alert("Select customer");
			return false;
		}
		if($.trim($('#t_comer_send').val())==""){
			alert("Input comer send");
			return false;
		}
		if($.trim($('#t_name_fantasy').val())==""){
			alert("Input name fantasy");
			return false;
		}
		if($.trim($('#t_date_send').val())==""){
			alert("Select date send");
			return false;
		}
		if($.trim($('#t_start').val())==""){
			alert("Select date start");
			return false;
		}
		if($.trim($('#t_end').val())==""){
			alert("Select date end");
			return false;
		}
			 $.ajax({
				 url:'/Orderservice/Editorderservice',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_id:$('#t_codigo').val(),
					vp_id_customer:$('#t_id_customer').val(),
					vp_date_send:$('#t_date_send').val(),
					vp_comer_send:$('#t_comer_send').val(),
					vp_name_fantasy:$('#t_name_fantasy').val(),
					vp_start:$('#t_start').val(),
					vp_end:$('#t_end').val(),
					vp_clipping_first:$('#t_clipping_first').val(),
					vp_hour_send:$('#t_hour_send').val(),
					vp_period_send:$('#cbo_period_send').val(),
					vp_obs:$('#t_obs').val()
				 },
				 beforeSend:function(){
					 $.blockUI({ message: '<h2> update data...</h2>' });	
				 },
				 error: function(jqXHR, exception) { 
					 if (jqXHR.status === 0) { 
						 alert('error url direction.'); 
					 } else if (jqXHR.status == 404) { 
						 alert('Page not found'); 
					 } else if (jqXHR.status == 500) { 
						 alert('Internal Error '); 
					 } else if (exception === 'parsererror') { 
						 alert('Requested JSON parse failed.'); 
					 } else if (exception === 'timeout') { 
						 alert('Time out'); 
					 } else if (exception === 'abort') { 
						 alert('Abort query'); 
					 } else { 
						 alert('Error: ' + jqXHR.responseText); 
					 } 
				 $.unblockUI();
				 }, 
				 success:function(result){
				 if(result.status==1){ 
					 alert('update success'); 
					 location.href="/Orderservice/FrmListOrder"; 
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 alert('Transaction problem');
				 }
				 $.unblockUI();
				 }
			 });		 
	} //fin update
}//fin clase