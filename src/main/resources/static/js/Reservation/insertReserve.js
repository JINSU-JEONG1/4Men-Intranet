 function showRoomInfoAjax(dateStr) {

      //alert('ajax실행함수 실행 : ' + dateStr)
       
         
            $.ajax({
               url: '/', //요청경로
               type: 'post',
               data: new FormData(form), //필요한 데이터
               processData: false,
               contentType: false,
               cache: false,
               success: function(result) {
               		 //모달창띄운다
            $('#createEventModal').modal('show');
           
            
               			
               			
               			
               
               memberInfo.innerHTML ='';
               let str='';
               

               str +=   `        `
               str +=  `        `
               str +=  `        `
               str +=  `        `
               str +=   `        `
               str +=   `        `
               str +=   `        `  
               str +=  `        `
               str +=   `        `
               str +=   `        `
               str +=   `        `
               str +=  `        `
               str +=   `        `
               str +=   `        `
               str +=   `        `
               str +=  `        `
               str +=   `        `
               str +=   `        `
               str +=   `        `    
               str +=  `        `
               str +=   `        `
               str +=   `        `
               str +=   `        `
               str +=   `        `


                memberInfo.insertAdjacentHTML('afterbegin', str);
               },
               error: function() {
                  alert('ajax 실패');
         
               }
               
               
            });
      
          $('#createEventModal').modal('hide');
          
         
      }
      
function goReserve(){

	
	
	$.ajax({
               url: '/reservation/regReservation', //요청경로
               type: 'post',
               data: {}, //필요한 데이터
               
               success: function(result) {
            
           		alert('aaa');
            
               			
               			
               			
               
               },
               error: function() {
                  alert('ajax 실패');
         
               }
               
               
            });
	
	
	
	
}

      
      
      
      