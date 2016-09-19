$(document).ready(function(){
	 $('#btnsave').click(FrmMantSource.Register);
	 $('#btncancel').click(FrmMantSource.Cancel);
	 //FrmMantSource.FillCountry();
	 //FrmMantSource.FillTypeSource();
});
FrmMantSource={
	FillTypeSource:function(id_type){ 
			 $.ajax({
				 url:'/Source/Listtypesource',
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
						 newHtml+='<option value="'+row.description+'">'+row.description+'</option>';
					 });
					 $('#cbo_id_type').append(newHtml);
					 $('#cbo_id_type').val(id_type)
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 //FrmListSource.PaintData('');
					 alert('not found countries');
				 }
				 $.unblockUI();
				 }
			 });
	},//fin Fill
	FillCountry:function(id_country){ 
			 $.ajax({
				 url:'/Source/Listcountry',
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
						 newHtml+='<option value="'+row.description+'">'+row.description+'</option>';
					 });
					 $('#cbo_id_country').append(newHtml);
					 $('#cbo_id_country').val(id_country);
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 //FrmListSource.PaintData('');
					 alert('not found countries');
				 }
				 $.unblockUI();
				 }
			 });
	},//fin Fill
	Cancel:function(){ 
		 document.location.href="/Source/Frmsource"; 
	}, 
	Register:function(){ 
		if($.trim($('#t_codigo').val())==""){
			 FrmMantSource.Save();
		}
		else{
			 FrmMantSource.Edit();
		}
	},
	Save:function(){ 
		 if(checkInputs($('#t_domain,#t_url'))==0){			
			 $.ajax({
				 url:'/Source/Savesource',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_domain:$('#t_domain').val(),
					vp_url:$('#t_url').val(),
					vp_descrip:$('#t_descrip').val(),
					vp_id_country:$('#cbo_id_country').val(),
					vp_id_type:$('#cbo_id_type').val()
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
					 document.location.href="/App/ExclusionFuentes"; 
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
		 if(checkInputs($('#t_domain,#t_url'))==0){			
			 $.ajax({
				 url:'/Source/Editsource',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_id:$('#t_codigo').val(),
					vp_domain:$('#t_domain').val(),
					vp_url:$('#t_url').val(),
					vp_descrip:$('#t_descrip').val(),
					vp_id_country:$('#cbo_id_country').val(),
					vp_id_type:$('#cbo_id_type').val()
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
					 location.href="/App/ExclusionFuentes"; 
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