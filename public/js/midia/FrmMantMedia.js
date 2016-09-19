$(document).ready(function(){
	 $('#btnsave').click(FrmMantMedia.Register);
	 $('#btncancel').click(FrmMantMedia.Cancel);
});
FrmMantMedia={ 
	Cancel:function(){ 
		 document.location.href="/Midia/ListMidia"; 
	}, 
	Register:function(){ 
		if($.trim($('#t_codigo').val())==""){
			 FrmMantMedia.Save();
		}
		else{
			 FrmMantMedia.Edit();
		}
	},
	Save:function(){ 
		 if(checkInputs($('#t_midia'))==0){
			 $.ajax({
				 url:'/Midia/Savemidia',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_midia:$('#t_midia').val(),
					vp_icone:$('#t_icone').val(),
					vp_tipo:$('#t_tipo').val()
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
					 document.location.href="/Midia/ListMidia"; 
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
		 if(checkInputs($('#t_midia'))==0){
			 $.ajax({
				 url:'/Midia/Editmidia',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_id:$('#t_codigo').val(),
					vp_midia:$('#t_midia').val(),
					vp_icone:$('#t_icone').val(),
					vp_tipo:$('#t_tipo').val()
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
					 location.href="/Midia/ListMidia"; 
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