$(document).ready(function(){
	 $('#btnsave').click(frm_adm_concurrence.Register);
	 $('#btncancel').click(frm_adm_concurrence.Cancel);
});
frm_adm_concurrence={ 
	Cancel:function(){ 
		 location.href=pathController+"/Concurrence/Frmocurrence"; 
	}, 
	Register:function(){ 
		if($.trim($('#t_codigo').val())==""){
			 frm_adm_concurrence.Save();
		}
		else{
			 frm_adm_concurrence.Edit();
		}
	},
	Save:function(){ 
		 if(checkInputs($('#t_start,#t_end,#t_concurre'))==0){
			 $.ajax({
				 url:'/Concurrence/Saveconcurrence',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_start:$('#t_start').val(),
					vp_end:$('#t_end').val(),
					vp_concurre:$('#t_concurre').val()
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
					 document.location.href="/App/PeriocidadMigraciones"; 
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
		 if(checkInputs($('#t_start,#t_end,#t_concurre'))==0){
			 $.ajax({
				 url:'/Concurrence/Editconcurrence',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_id:$('#t_codigo').val(),
					vp_start:$('#t_start').val(),
					vp_end:$('#t_end').val(),
					vp_concurre:$('#t_concurre').val()
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
					 document.location.href="/App/PeriocidadMigraciones"; 
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