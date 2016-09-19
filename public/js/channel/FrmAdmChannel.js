$(document).ready(function(){
	 $('#btnsave').click(FrmAdmChannel.Register);
	 $('#btncancel').click(FrmAdmChannel.Cancel);
});
FrmAdmChannel={ 
	Cancel:function(){ 
		 document.location.href=/Channel/Frmchannel"; 
	}, 
	Register:function(){ 
		if($.trim($('#t_codigo').val())==""){
			 FrmAdmChannel.Save();
		}
		else{
			 FrmAdmChannel.Edit();
		}
	},
	Save:function(){ 
		 if(checkInputs($('#t_idempresa,#t_canal,#t_ordem'))==0){
			 $.ajax({
				 url:'/Channel/Savechannel',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_idempresa:$('#t_idempresa').val(),
					vp_canal:$('#t_canal').val(),
					vp_ordem:$('#t_ordem').val(),
					vp_canal_background_color:$('#t_canal_background_color').val(),
					vp_canal_font_family:$('#t_canal_font_family').val(),
					vp_canal_color:$('#t_canal_color').val(),
					vp_canal_font_size:$('#t_canal_font_size').val(),
					vp_canal_text_align:$('#t_canal_text_align').val(),
					vp_canal_font_weigh:$('#t_canal_font_weigh').val(),
					vp_canal_font_negrito:$('#t_canal_font_negrito').val()
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
					 document.location.href="/Channel/Frmchannel"; 
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
		 if(checkInputs($('#t_idempresa,#t_canal,#t_ordem'))==0){
			 $.ajax({
				 url:'/Channel/Editchannel',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_id:$('#t_codigo').val(),
					vp_idempresa:$('#t_idempresa').val(),
					vp_canal:$('#t_canal').val(),
					vp_ordem:$('#t_ordem').val(),
					vp_canal_background_color:$('#t_canal_background_color').val(),
					vp_canal_font_family:$('#t_canal_font_family').val(),
					vp_canal_color:$('#t_canal_color').val(),
					vp_canal_font_size:$('#t_canal_font_size').val(),
					vp_canal_text_align:$('#t_canal_text_align').val(),
					vp_canal_font_weigh:$('#t_canal_font_weigh').val(),
					vp_canal_font_negrito:$('#t_canal_font_negrito').val()
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
					 location.href="/Channel/Frmchannel"; 
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