$(document).ready(function(){
	 $('#btnsave').click(Frm_mant_customer.Register);
	 $('#btncancel').click(Frm_mant_customer.Cancel);
	 $('#t_end').datepicker({
		altFormat: formatDate,
		dateFormat: formatDate 
	});
});
Frm_mant_customer={ 
	Cancel:function(){ 
		 document.location.href="/Customers/Frmcustomers"; 
	}, 
	Register:function(){ 
		if($.trim($('#t_codigo').val())==""){
			 Frm_mant_customer.Save();
		}
		else{
			 Frm_mant_customer.Edit();
		}
	},
	Save:function(){ 
		 if(checkInputs($('#t_razonsocial,#t_cnpj'))==0){
			 $.ajax({
				 url:'/Customers/Savecustomers',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_razonsocial:$('#t_razonsocial').val(),
					vp_cnpj:$('#t_cnpj').val(),
					vp_end:$('#t_end').val(),
					vp_contato:$('#t_contato').val(),
					vp_fone:$('#t_fone').val(),
					vp_email:$('#t_email').val(),
					vp_obs:$('#t_obs').val()
				 },
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
					 document.location.href="/Customers/Frm_list_customers"; 
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
		 }
		else{
		 $('#message').fadeIn(1500).fadeOut(1500);
		}//fin validation
	},//fin save
	Edit:function(){ 
		 if(checkInputs($('#t_razonsocial,#t_cnpj'))==0){
			 $.ajax({
				 url:'/Customers/Editcustomers',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_id:$('#t_codigo').val(),
					vp_razonsocial:$('#t_razonsocial').val(),
					vp_cnpj:$('#t_cnpj').val(),
					vp_end:$('#t_end').val(),
					vp_contato:$('#t_contato').val(),
					vp_fone:$('#t_fone').val(),
					vp_email:$('#t_email').val(),
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
					 location.href="/Customers/Frm_list_customers"; 
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
		 }
		else{
		 $('#message').fadeIn(1500).fadeOut(1500);
		}//fin validation
	} //fin update
}//fin clase