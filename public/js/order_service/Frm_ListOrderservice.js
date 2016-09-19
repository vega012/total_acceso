$(document).ready(function(){
	 Frm_ListOrderservice.Fill();
	 $('#btnnew').click(Frm_ListOrderservice.NewReg);
});
Frm_ListOrderservice={ 
	Fill:function(){ 
			 $.ajax({
				 url:'/Orderservice/Listorderservice',
				 type:'post',
				 dataType:'json',
				 data:{ 

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
					 Frm_ListOrderservice.PaintData(result.data); 
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 Frm_ListOrderservice.PaintData('');
				 }
				 $.unblockUI();
				 }
			 });
	},//fin Fill
	NewReg:function(){ 
		 location.href="/Orderservice/New_orderservice/"; 
	},//fin NewReg
	Edit:function(id){ 
		 location.href="/Orderservice/Findorderservice?vp_id="+id; 
	},//fin Edit
	Rmv:function(id){ 
			 if(confirm('confirm delete information')){
			 $.ajax({
				 url:'/Orderservice/Rmvorderservice',
				 type:'post',
				 dataType:'json',
				 data:{ 
					 vp_id:id
				 },
				 beforeSend:function(){
					 $.blockUI({ message: '<h2> Delete data...</h2>' });	
				 },
				 error: function(jqXHR, exception) { 
					 if (jqXHR.status === 0) { 
						 alert('error direction'); 
					 } else if (jqXHR.status == 404) { 
						 alert('Page not found'); 
					 } else if (jqXHR.status == 500) { 
						 alert('Internal error'); 
					 } else if (exception === 'parsererror') { 
						 alert('Requested JSON parse failed.'); 
					 } else if (exception === 'timeout') { 
						 alert('Error time out.'); 
					 } else if (exception === 'abort') { 
						 alert('Query abort.'); 
					 } else { 
						 alert('Error: ' + jqXHR.responseText); 
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
					 alert('Transaction problem');
				 }
				 $.unblockUI();
				 }
			 });
			 }
	},//fin Rmv
	PaintData:function(data){ 
		 newHtml='';
		 newHtml='<table class="table table-striped table-bordered" cellspacing="0" width="100%" id="table">';
		 newHtml+='<thead>';
		 newHtml+='<tr>';
		 newHtml+='<th></th>';
		 newHtml+='<th>CUSTOMER</th>';
		 newHtml+='<th>DATE SEND</th>';
		 newHtml+='<th>NAME FANTASY</th>';
		 newHtml+='<th>CONTACT</th>';
		 newHtml+='<th>EMAIL</th>';
		 newHtml+='</tr>';
		 newHtml+='</thead>';
		 var cont=1;
		 newHtml+='<tbody>';
			 $.each(data,function(key,row){
				 newHtml+='<tr id="tr'+row._id+'">';
				 newHtml+='<td><a href="javascript:Frm_ListOrderservice.Edit(\''+row._id+'\')">Edit</a>&nbsp;&nbsp;<a href="javascript:Frm_ListOrderservice.Rmv(\''+row._id+'\')">Delete</a></td>';
				 newHtml+='<td>'+row.id_customer+'</td>';
				 newHtml+='<td>'+row.date_send+'</td>';
				 newHtml+='<td>'+row.name_fantasy+'</td>';
				 newHtml+='<td>'+row.name_contact+'</td>';
				 newHtml+='<td>'+row.email+'</td>';
				 newHtml+='</tr>';
			 });
		 newHtml+='</tbody>';
		 newHtml+='</table>';
	 $('#list').empty().append(newHtml);
	 oTable=$('#table').dataTable();
	}//fin PintarDatos
}//fin clase