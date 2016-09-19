$(document).ready(function(){
	 frm_list_customers.Fill();
	 $('#btnnew').click(frm_list_customers.NewReg);
});
frm_list_customers={ 
	Fill:function(){ 
			 $.ajax({
				 url:'/Customers/Fill_customers',
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
					 frm_list_customers.PaintData(result.data); 
				 }
				 else if(result.status==2){
					 alert(result.msg);
				 }
				 else{
					 frm_list_customers.PaintData('');
				 }
				 $.unblockUI();
				 }
			 });
	},//fin Fill
	NewReg:function(){ 
		 location.href="/Customers/New_customers/"; 
	},//fin NewReg
	Edit:function(id){ 
		 location.href="/Customers/Findcustomers?vp_id="+id; 
	},//fin Edit
	Channel:function(id){ 
		 location.href="/Channel/ListChannel?vp_id="+id; 
	},//fin Edit
	Rmv:function(id){ 
			 if(confirm('confirm delete information')){
			 $.ajax({
				 url:'/Customers/Rmvcustomers',
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
		 newHtml+='<th>Cliente</th>';
		 newHtml+='<th>CNPJ</th>';
		 newHtml+='<th>Fone</th>';
		 newHtml+='<th>Email</th>';
		 newHtml+='</tr>';
		 newHtml+='</thead>';
		 var cont=1;
		 newHtml+='<tbody>';
			 $.each(data,function(key,row){
				 newHtml+='<tr id="tr'+row._id+'">';
				 newHtml+='<td><a href="javascript:frm_list_customers.Edit(\''+row._id+'\')">Edit</a>&nbsp;&nbsp;<a href="javascript:frm_list_customers.Rmv(\''+row._id+'\')">Delete</a>&nbsp;&nbsp;<a href="javascript:frm_list_customers.Channel(\''+row._id+'\')">Channel</a></td>';
				 newHtml+='<td>'+row.razonsocial+'</td>';
				 newHtml+='<td>'+row.cnpj+'</td>';
				 newHtml+='<td>'+row.fone+'</td>';
				 newHtml+='<td>'+row.email+'</td>';
				 newHtml+='</tr>';
			 });
		 newHtml+='</tbody>';
		 newHtml+='</table>';
	 $('#list').empty().append(newHtml);
	 oTable=$('#table').dataTable();
	}//fin PintarDatos
}//fin clase