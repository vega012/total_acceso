$(document).ready(function(){
	 FrmChannel.Fill();
	 $('#btnsave').click(FrmChannel.Save);	
	 $('#btnsavesubchannel').click(FrmChannel.SaveSubChannel);
	 $('#btnsaveword').click(FrmChannel.SaveWord);
});

FrmChannel={ 
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
					 FrmChannel.PaintDataWord(result.data); 
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
					 FrmChannel.PaintDataSubChannel(result.data); 
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
	Fill:function(){ 
			 $.ajax({
				 url:'/Channel/Fillchannel',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_idempresa:$('#t_idempresacod').val()
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
				 FrmChannel.PaintDataSubChannel('');	 
				 FrmChannel.PaintDataWord('');	 
				 if(result.status==1){ 
					 FrmChannel.PaintData(result.data); 
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
	NewReg:function(){
		 location.href="/Channel/New_channel/"; 
	},//fin NewReg
	Edit:function(id){ 
		 location.href="/Channel/Findchannel?vp_id="+id; 
	},//fin Edit
	AddSubChannel:function(id){
		$("#t_canalcod").val(id);
		$("#myModalSubchannel").modal() 
	},//fin Edit
	AddWord:function(id){
		$("#t_subchannelcod").val(id);
		$("#myModalWord").modal() 
	},//fin Edit
	PaintDataWord:function(data){ 
		 newHtml='';
		 newHtml='<table class="table table-striped table-bordered" cellspacing="0" width="100%" id="tableword">';
		 newHtml+='<thead>';
		 newHtml+='<tr>';
		 newHtml+='<th></th>';
		 //newHtml+='<th>CODE</th>';
		 newHtml+='<th>Word</th>';
		 newHtml+='</tr>';
		 newHtml+='</thead>';
		 var cont=1;
		 newHtml+='<tbody>';
			 $.each(data,function(key,row){
				 newHtml+='<tr id="tr'+row._id+'">';
				 newHtml+='<td><a href="javascript:FrmListWord.Edit(\''+row._id+'\')"><img alt="Edit Word" src="/public/img/edit.png"></a>&nbsp;&nbsp;<a href="javascript:FrmListWord.Rmv(\''+row._id+'\')"><img alt="Remove Word" src="/public/img/remove.png"></a></td>';
				 //newHtml+='<td>'+row._id+'</td>';
				 newHtml+='<td>'+row.description+'</td>';
				 newHtml+='</tr>';
			 });
		 newHtml+='</tbody>';
		 newHtml+='</table>';
	 $('#listwords').empty().append(newHtml);
	 oTable=$('#tableword').dataTable(
		 {
			 "paging": false,
			 "lengthChange": false,
			 "info": false,
			 "searching": false
		 }

	 );
	},//fin PintarDatos	
	SaveWord:function(){ 
		 if(checkInputs($('#t_palavrachave'))==0){
			 $.ajax({
				 url:'/Channel/Savewords',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_palavrachave:$('#t_palavrachave').val(),
					vp_subchannelcod:$('#t_subchannelcod').val()
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
					 FrmChannel.FillWord($('#t_subchannelcod').val()); 
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
	Rmv:function(id){ 
			 if(confirm('confirm delete information')){
			 $.ajax({
				 url:'/Channel/Rmvchannel',
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
		 //newHtml+='<th>IDCANAL</th>';
		 newHtml+='<th>Channel</th>';
		 newHtml+='<th>Order</th>';
		 newHtml+='</tr>';
		 newHtml+='</thead>';
		 var cont=1;
		 newHtml+='<tbody>';
			 $.each(data,function(key,row){
				 newHtml+='<tr id="tr'+row.idCanal+'">';
				 newHtml+='<td><a href="javascript:FrmChannel.AddSubChannel(\''+row._id+'\')"><img alt="Add SubChannel" src="/public/img/add.png"></a>&nbsp;&nbsp;<a href="javascript:FrmChannel.FillSubChannel(\''+row._id+'\')"><img alt="View SubChannel" src="/public/img/detail.png"></a>&nbsp;&nbsp;<a href="javascript:FrmChannel.Edit(\''+row._id+'\')"><img alt="Edit Channel" src="/public/img/edit.png"></a>&nbsp;&nbsp;<a href="javascript:FrmChannel.Rmv(\''+row._id+'\')"><img alt="Remove Channel" src="/public/img/remove.png"></a></td>';
				 //newHtml+='<td>'+row._id+'</td>';
				 newHtml+='<td>'+row.canal+'</td>';
				 newHtml+='<td>'+row.ordem+'</td>';
				 newHtml+='</tr>';
			 });
		 newHtml+='</tbody>';
		 newHtml+='</table>';
	 $('#list').empty().append(newHtml);
	 oTable=$('#table').dataTable(
	 {
		 "paging": false,
		 "lengthChange": false,
		 "info": false,
		 "searching": false
	 }
	 );
	 $('#table tbody').on( 'click', 'tr', function () {
			if ( $(this).hasClass('selected') ) {
				$(this).removeClass('selected');
			}
			else {
				oTable.$('tr.selected').removeClass('selected');
				$(this).addClass('selected');
			}
		} );
	},//fin PintarDatos
	PaintDataSubChannel:function(data){ 
		 newHtml='';
		 newHtml='<table class="table table-striped table-bordered" cellspacing="0" width="100%" id="tablesubchannel">';
		 newHtml+='<thead>';
		 newHtml+='<tr>';
		 newHtml+='<th></th>';
		 //newHtml+='<th>IDSUBCANAL</th>';
		 newHtml+='<th>SChannel</th>';
		 newHtml+='<th>Order</th>';
		 newHtml+='</tr>';
		 newHtml+='</thead>';
		 var cont=1;
		 newHtml+='<tbody>';
			 $.each(data,function(key,row){
				 newHtml+='<tr id="tr'+row._id+'">';
				 newHtml+='<td><a href="javascript:FrmChannel.AddWord(\''+row._id+'\')"><img alt="Add Word" src="/public/img/add.png"></a>&nbsp;&nbsp;<a href="javascript:FrmChannel.FillWord(\''+row._id+'\')"><img alt="View Words" src="/public/img/detail.png"></a>&nbsp;&nbsp;<a href="javascript:FrmChannel.Edit(\''+row._id+'\')"><img alt="Edit SubChannel" src="/public/img/edit.png"></a>&nbsp;&nbsp;<a href="javascript:FrmChannel.Rmv(\''+row._id+'\')"><img alt="Add Word" src="/public/img/remove.png"></a></td>';
				 //newHtml+='<td>'+row._id+'</td>';
				 newHtml+='<td>'+row.description+'</td>';
				 newHtml+='<td>'+row.order+'</td>';
				 newHtml+='</tr>';
			 });
		 newHtml+='</tbody>';
		 newHtml+='</table>';
		 $('#listsubchannel').empty().append(newHtml);
		 oTable=$('#tablesubchannel').dataTable(
		 {
			 "paging": false,
			 "lengthChange": false,
			 "info": false,
			 "searching": false
		 }
		 );
		$('#tablesubchannel tbody').on( 'click', 'tr', function () {
			if ( $(this).hasClass('selected') ) {
				$(this).removeClass('selected');
			}
			else {
				oTable.$('tr.selected').removeClass('selected');
				$(this).addClass('selected');
			}
		} );
	},//fin PintarDatos
	Save:function(){ 
		 if(checkInputs($('#t_idempresa,#t_canal,#t_ordem'))==0){
			 $.ajax({
				 url:'/Channel/Savechannel',
				 type:'post',
				 dataType:'json',
				 data:{ 
					vp_idempresa:$('#t_idempresacod').val(),
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
					 //document.location.href="/Channel/Frmchannel"; 
					 FrmChannel.Fill();
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
	SaveSubChannel:function(){ 
		 if(checkInputs($('#t_subcanal,#t_ordemsubchannel'))==0){
			 $.ajax({
				 url:'/Channel/Savesubchannel',
				 type:'post',
				 dataType:'json',
				 data:{ 
				 
					vp_canalcod:$('#t_canalcod').val(),
					vp_subcanal:$('#t_subcanal').val(),
					vp_ordemsubchannel:$('#t_ordemsubchannel').val(),
					vp_detsubcanal:$('#t_detsubcanal').val()
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
					 FrmChannel.FillSubChannel($('#t_canalcod').val()); 
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
	}//fin save
}//fin clase