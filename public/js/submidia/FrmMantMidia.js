$(document).ready(function(){
	 $('#btnsave').click(FrmMantMidia.Register);
	 $('#btncancel').click(FrmMantMidia.Cancel);
});
FrmMantMidia={ 
	FillMedia:function(id_media){ 
			 $.ajax({
				 url:'/Submidia/ListMedia',
				 type:'post',
				 dataType:'json',
				 data:{ 
					//vp_status:$('#t_status').val()
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
					var newHtml='';
					$.each(result.data,function(key,row){
						 newHtml+='<option value="'+row._id+'">'+row.midia+'</option>';
					 });
					 $('#cbo_idmidia').append(newHtml);
					 $('#cbo_idmidia').val(id_media);
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 //FrmListSource.PaintData('');
					 alert('not found midia');
				 }
				 $.unblockUI();
				 }
			 });
	},//fin Fill
	Cancel:function(){ 
		 document.location.href="/Submidia/ListSubmidia"; 
	}, 
	Register:function(){ 
		if($.trim($('#t_codigo').val())==""){
			 FrmMantMidia.Save();
		}
		else{
			 FrmMantMidia.Edit();
		}
	},
	Save:function(){ 
		 if(checkInputs($('#cbo_idmidia,#t_submidia'))==0){
			//validamos el combo idmidia
			 if(parseInt($('#cbo_idmidia').val())==0){
				 alert('Select  Midia');
			 return false;
			}
			 $.ajax({
				 url:'/Submidia/Savesubmidia',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_idmidia:$('#cbo_idmidia').val(),
					vp_submidia:$('#t_submidia').val()
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
					 document.location.href="/Submidia/ListSubmidia"; 
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
		 if(checkInputs($('#cbo_idmidia,#t_submidia'))==0){
			//validamos el combo idmidia
			 if(parseInt($('#cbo_idmidia').val())==0){
				 alert('SELECCIONE idmidia');
			 return false;
			}
			 $.ajax({
				 url:'/Submidia/Editsubmidia',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_id:$('#t_codigo').val(),
					vp_idmidia:$('#cbo_idmidia').val(),
					vp_submidia:$('#t_submidia').val()
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
					 location.href="/Submidia/ListSubmidia"; 
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