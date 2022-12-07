

var sysdate = 0;
		
 
//=======================================캘린더 출력, 이벤트적용  
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
            events:function(info, successCallback, failureCallback){
	                	$.ajax({
	                       type: 'POST'
	                       ,cache: false
	                       ,url: '/reservation/insertReserveAjax'
	                       ,dataType: 'json'
	                       ,processData: false
	                       ,contentType: false
	                       ,cache: false
	                       ,success: function(resultMap){
	                              var events = [];
	                              console.log(resultMap);
	                  
	                           //예약불가능한날 선택해서 색바꾸어준다
                              for(var date of resultMap.disDate){
	                              
	                              events.push({
	                                 title : 'ccc',
	                                 start : date,
	                                 end : date,
	                                 display: 'background',
	                                 backgroundColor: "#EB5353"
	                              })
	                           }
	                           //예약가능한 날 선택해서 색바꾸어준다
                              for(var date of resultMap.avaDate){
	                              
	                              events.push({
	                                 title : 'ccc',
	                                 start : date,
	                                 end : date,
	                                 display: 'background',
	                                 backgroundColor: "#0E3EDA"
	                              })
	                           }
	                          successCallback(events);
	                         }
	                     });
               },
               
               dateClick: function (info) {
                 
   //          //모달창띄운다
               $('#createEventModal').modal('show');
              
               showRoomInfoAjax(info.dateStr);
       
               sysdate = info.dateStr;
               },
           });
        
        calendar.render();
        
      });
       
      
      
      
      
 
 
 function showRoomInfoAjax(dateStr) {

 		var reservation;
            $.ajax({
               url: '/reservation/selectReserve', //요청경로
               type: 'post',
               data: {  'reserveDate' : dateStr },
//               processData: false,
//               contentType: false,
//               cache: false,
				async: false,
               success: function(result) {
                 reservation = result;
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
		
		//const roomCode = document.querySelectorAll('#roomCode').value;
		const reserveTime = document.querySelector('#reserveTime').value;
		const reserveName = document.querySelector('#reserveName').value;
		const reserveComment = document.querySelector('#reserveComment').value;
	
		if(reserveTime == 0 ,reserveTime ==''){
			alert('먼저 회의실을 선택해주세요');
			return;
		}
		
		$.ajax({
               url: '/reservation/regReservation', //요청경로
               type: 'post',
               data: {'roomCode':document.querySelector('#meetingRoom').value 
               ,'reserveTime':document.querySelector('#reserveTime').value
               ,'reserveDate':sysdate
               , 'reserveName' : reserveName
               , 'reserveComment' : reserveComment
               }, //필요한 데이터
               //async: false,
               success: function(result) {
           				Swal.fire({
      				  icon: 'success',
      				  title: '등록완료.',
      				  text: '',
      				});
      				console.log(result);
      				//삭제하고 예약목록 그려준다.
      				let reserveAjaxDiv = document.querySelector('#resrveAjax');
      				let str = '';
      				
      				
      				
		      		str+=`		<div class="col-2" style="padding-top: 4px;"> <span >${result.reserveName}</span> </div>     `
			      	str+=`		<div class="col-2" style="padding-top: 4px;"> <span >${result.roomCode}</span> </div>     `
			      	str+=`		<div class="col-2" style="padding-top: 4px;"> <span >${result.reserveDate}</span> </div>     `
			      	str+=`		<div class="col-2" style="padding-top: 4px;"> <span >${result.reserveTime}</span> </div>     `
			      	str+=`		<div class="col-2" style="padding-top: 4px;"> <span >${result.reserveComment}</span> </div>     `
			      	str+=`		<div class="col-2" align="right"> <button onclick="deleteReserve(this,[[${result.reserveCode}]])" class="btn btn-outline-info">취소</button> </div>`
               
               		reserveAjaxDiv.insertAdjacentHTML('afterbegin', str);
               },
               error: function() {
                  alert('ajax 실패');
               }
               
               
            });
            
            $('#reserveForm')[0].reset();
            $('#createEventModal').modal('hide');
           			
}


           			

//회의실 선택시 변경되는 함수
function selectChange(info){
	
	
	var roomCode = document.querySelector('#meetingRoom').value;
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
						//str+= `<option value="">예약 가능한 시간이 없습니다.</option>`
					}
						
           			
           			selectBox.insertAdjacentHTML('beforeend',str);
               
               },
               error: function() {
                  alert('ajax 실패');
         
               }
               
               
            });
	
               //$('#createEventModal').modal('hide');
	
	
}



function deleteReserve(event,reserveCode){
    		alert(reserveCode);
    		
    		$.ajax({
    			url: '/reservation/deleteReserve', //요청경로
    			type: 'post',
    			data: {'reserveCode' :  reserveCode}, //필요한 데이터
    			
    			success: function(userInfo) {
    				Swal.fire({
      				  icon: 'success',
      				  title: '예약을 취소하였습니다.',
      				  text: '',
      				});                                                                                                                         
      				return;                                                              
    			},                                                                                                                                                  
    			error: function() {         
    				Swal.fire({
    				  icon: 'error',
    				  title: '변경실패',
    				  text: '',
    				});                                                                                                                         
    				return;
    			}
    		});
    		
    		let deleteTag = event.parentNode.parentNode;
    		deleteTag.remove();
    		
    	}
      
      
      
      