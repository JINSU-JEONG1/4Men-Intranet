//캘린더~~~~~~~~~~~~~~~~~
var sysdate = 0;
		
    
      document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        
        
        
        
        var calendar = new FullCalendar.Calendar(calendarEl, {
        	
        	
        	
            
        	locale : 'ko',
        	
        	headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              },
         	
          //initialView: 'dayGridMonth',
          
          height: '550px',
          
          expandRows: true ,
          
          dateClick: function (info) {
              
//          //모달창띄운다
            $('#createEventModal').modal('show');
           
            showRoomInfoAjax(info.dateStr);
    
            sysdate = info.dateStr;
              
              
              
              
              
      }
      
         
              
              
        });
        calendar.render();
      });
 
 
 function showRoomInfoAjax(dateStr) {

 		var reservation;
      //alert('ajax실행함수 실행 : ' + dateStr)
       		
         //alert(dateStr);
            $.ajax({
               url: '/reservation/selectReserve', //요청경로
               type: 'post',
               data: {  'reserveDate' : dateStr },
//               processData: false,
//               contentType: false,
//               cache: false,
				async: false,
               success: function(result) {
               		 //모달창띄운다
               		 
                 reservation = result;
	           	   
	           //document.querySelector('select').value;   
	           	   
               
//               memberInfo.innerHTML ='';
              	//let str='';
              	 //str +=   `        `;

//               str +=  `        `
//               str +=  `        `
//               str +=  `        `
//               str +=   `        `
//               str +=   `        `
//               str +=   `        `  
//               str +=  `        `
//               str +=   `        `
//               str +=   `        `
//               str +=   `        `
//               str +=  `        `
//               str +=   `        `
//               str +=   `        `
//               str +=   `        `
//               str +=  `        `
//               str +=   `        `
//               str +=   `        `
//               str +=   `        `    
//               str +=  `        `
//               str +=   `        `
//               str +=   `        `
//               str +=   `        `
//               str +=   `        `
//
//
//                memberInfo.insertAdjacentHTML('afterbegin', str);
               },
               error: function() {
                  alert('ajax 실패');
         
               }
               
               
            });
            
      $('#createEventModal').modal('show');
      console.log(reservation);
      return reservation;
      
      
//          $('#createEventModal').modal('hide');
          
         
      }
 
//등록 눌렀을시 실행되는 함수      
function goReserve(){
		
		//alert(sysdate);
		
		//alert(selectedTag);
		//alert('aaa');
		//var formTag = $("#regReserve").serialize();
		//alert(formTag);
		
		//alert(roomCode);
		
		//alert(reserveTime);
	
		
		$.ajax({
               url: '/reservation/regReservation', //요청경로
               type: 'post',
               data: {'roomCode':document.querySelector('#meetingRoom').value 
               ,'reserveTime':document.querySelector('#reserveTime').value
               ,'reserveDate':sysdate}, //필요한 데이터
               //async: false,
               success: function(result) {
           			alert('등록완료');
           			
           		
           			
           			
               },
               error: function() {
                  alert('ajax 실패');
         
               }
               
               
            });
               $('#createEventModal').modal('hide');
           			
}
           			
           			
            
           		
           		
            
               			
               			
               			
               

//회의실 선택시 변경되는 함수
function selectChange(info){
	
	
	var roomCode = document.querySelector('#meetingRoom').value;
	
	//alert("roomCode : " + roomCode);
	//alert(sysdate);
	
	
	$.ajax({
               url: '/reservation/selectChange', //요청경로
               type: 'post',
               data: {'roomCode': roomCode,
               		  'reserveDate' : sysdate}, //필요한 데이터
               
               success: function(result) {
           			
           		
           			const selectBox = document.querySelector('#reserveTime');
           		    
           		   
           		    
           		    selectBox.innerHTML = '';
           		    
           		    
           		    $("#reserveTime option").remove();
           		    
           		    
           		    let str = '';
           		    
           		    for(let reserve of result){
						
						str += `<option value="${reserve.reserveTime}">${reserve.reserveTime}</option>`;
					}
           			
           			selectBox.insertAdjacentHTML('beforeend',str);
           			
           			
           			
               
               },
               error: function() {
                  alert('ajax 실패');
         
               }
               
               
            });
	
               //$('#createEventModal').modal('hide');
	
	
}

      
      
      
      