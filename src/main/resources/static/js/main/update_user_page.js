//==============회원정보변경 모달 실행-===================
function launchModal(keyVariable){
	//클릭시 함수실행
	$('#launchModal').modal('show');
	
	//매개변수따라서 다르게 실행시켜줌
	switch(keyVariable) {
		
	  case 'password': 
	  	    $('#launchModalLabel').html('비밀번호를 변경해주세요');
	  	    $('#modal-text').html('변경하실 비밀번호를 입력해주세요:');
	  	    $('input[name=keyVariable]').val('USER_PW');
	  	    $('input[name=valueVariable]').attr('onclick','()');
	  		break;
	
	  case 'name':  
	  		$('#launchModalLabel').html('이름을 변경해주세요');
	  		$('#modal-text').html('변경하실 이름을 입력해주세요:');
	  		$('input[name=keyVariable]').val('EMP_NAME');
	  		$('input[name=valueVariable]').attr('onclick','()');
	   		break;
	
	  case 'addr':  
	  		$('#launchModalLabel').html('주소를 변경해주세요');
	  		$('#modal-text').html('변경하실 주소를 입력해주세요:');
	  		$('input[name=keyVariable]').val('EMP_ADDR');
	  		$('input[name=valueVariable]').attr('onclick','searchAddr();');
	    	break;
	
	  case 'detailAddr':  
	  		$('#launchModalLabel').html('상세주소를 변경해주세요');
	  		$('#modal-text').html('변경하실 상세주소를 입력해주세요:');
	  		$('input[name=keyVariable]').val('EMP_DETAIL_ADDR');
	  		$('input[name=valueVariable]').attr('onclick','()');
	    	break;
	
	  case 'email':  
	  		$('#launchModalLabel').html('이메일을 변경해주세요');
	  		$('#modal-text').html('변경하실 이메일을 입력해주세요:');
	  		$('input[name=keyVariable]').val('EMP_EMAIL');
	  		$('input[name=valueVariable]').attr('onclick','()');
	    	break;
	
	  default: 
	  		alert('다시다시다시')
	   		break;
	}
}




//==============회원정보 변경하고 화면 다시뿌려줌==================
function updateUserInfo() {
	let form = $('#updateInfo')[0];
	
		$.ajax({
			url: '/user/updateUserInfo', //요청경로
			type: 'post',
			data: new FormData(form), //필요한 데이터
			
			processData: false,
			contentType: false,
			cache: false,
			success: function(userInfo) {
//			
//			
//			// 회원정보 만들어줌
//			let userInfoPage = document.querySelector('#userInfo');
//				
//			userInfoPage.innerHTML ='';
//			let str='';
//			
//			
//				str = `<div class="col-4 memDiv" style="text-align: center; padding-top: 7%;">사진</div>                                                        `
//			    str += ` <div class="col-4 memDiv"> <img id="empImg" alt="" src="/imgs/user/${userInfo.empPictureRefileName}" style="width: 100%; height: 100%;"> </div>        `
//			    str += ` <div class="col-4 memDiv" style="text-align: center; padding-top: 6%;" >  																`
//			    str += ` 	<input class="btn btn-outline-info" type="button" value="변경" onclick="regPictureModal()">  										`
//			    str += ` </div>    																																`
//		        str += `                                                                                                                                        `
//				str += `<div class="col-4 memDiv">아이디</div>                                                                                                  `
//			    str += `<div class="col-4 memDiv">${userInfo.userId} </div>                                                                                  	`
//			    str += `<div class="col-4 memDiv">&nbsp;</div>                                                                                                  `
//			    str += `                                                                                                                                         `
//				str += `<div class="col-4 memDiv">비밀번호</div>                                                                                                `
//				str += `<div class="col-4 memDiv">&nbsp;</div>                                                                                                  `
//				str += `<div class="col-4 memDiv"> <input class="btn btn-outline-info" type="button" value="변경" onclick="launchModal('password')"> </div>     `
//			    str += `                                                                                                                                        `
//				str += `<div class="col-4 memDiv">이름</div>                                                                                                    `
//				str += `<div class="col-4 memDiv">${userInfo.empName}</div>                                                                                 	`
//				str += `<div class="col-4 memDiv"> <input class="btn btn-outline-info" type="button" value="변경" onclick="launchModal('name')"> </div>         `
//			    str += `                                                                                                                                        `
//				str += `                                                                                                                                        `
//				str += `<div class="col-4 memDiv">직급</div>                                                                                                    `
//				str += `<div class="col-4 memDiv">${userInfo.empPosition}</div>                                                                             	`
//				str += `<div class="col-4 memDiv">&nbsp;</div>  `
//				
//				str += `<div class="col-4 memDiv">소속부서</div>                                                                                                `
//				str += `<div class="col-4 memDiv">${userInfo.deptName}</div>                                                                                	`
//				str += `<div class="col-4 memDiv">&nbsp;</div>                                                                                                  `
//				
//				str += `<div class="col-4 memDiv">주소</div>                                                                                                    `
//				str += `<div class="col-4 memDiv">${userInfo.empAddr}</div>                                                                                 	`
//				str += `<div class="col-4 memDiv"> <input class="btn btn-outline-info" type="button" value="변경" onclick="launchModal('addr')"> </div>         `
//			    str += `                                                                                                                                        `
//				str += `<div class="col-4 memDiv">상세주소</div>                                                                                                `
//				str += `<div class="col-4 memDiv">${userInfo.empDetailAddr}</div>                                                                          		`
//				str += `<div class="col-4 memDiv"> <input class="btn btn-outline-info" type="button" value="변경" onclick="launchModal('detailAddr')"> </div>   `
//			    str += `                                                                                                                                        `
//				str += `<div class="col-4 memDiv">이메일</div>                                                                                                  `
//				str += `<div class="col-4 memDiv">${userInfo.empEmail}</div>                                                                                	`
//				str += `<div class="col-4 memDiv"> <input class="btn btn-outline-info" type="button" value="변경" onclick="launchModal('email')">  </div>       `
//				str += `                                                                                                                                        `
//				str += `                                                                                                                                        `
//				str += `<div class="col-4 memDiv">입사일</div>                                                                                                  `
//				str += `<div class="col-4 memDiv">${userInfo.empHireDate}</div>                                                                                 `
//				str += `<div class="col-4 memDiv">&nbsp;</div>                                                                                                  `
//                                                                       
//                                                                                                                                                                
//			userInfoPage.insertAdjacentHTML('afterbegin', str);       
//			
			                                                                                        
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
		
	Swal.fire({
	  icon: 'success',
	  title: '변경성공',
	  text: '',
	}).then((result) => {
       location.href="/user/updateUserForm";
        }); 
//	$('#launchModal').modal('hide');
	
	
}

//주소변경
function searchAddr(){
	 new daum.Postcode({
        oncomplete: function(data) {
			//도로명 주소
        	const roadAddr = data.roadAddress;
        	document.querySelector('#valueVariable').value = roadAddr;
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
            // 예제를 참고하여 다양한 활용법을 확인해 보세요.d
        }
    }).open();
}
//사진등록모달
function regPictureModal(){
	
	//클릭시 모달실행
	$('#regPictureModal').modal('show');
	
}


			     

function regPicture(){
	
//	let imgform = $('#regPicture')[0];
	let imgform = document.querySelector('#regPicture');
	
	
	console.log(imgform);
	
	$.ajax({
			url: '/user/regPicture', //요청경로
			type: 'post',
			enctype: 'multipart/form-data',
			processData: false,
			contentType: false,
			cache: false,
			data: new FormData(imgform), //필요한 데이터
			success: function(result) {
			
			// 회원정보 만들어줌
//			$('#empImg').attr('src','/imgs/user/' + result.empPictureRefileName);
			
                                                                                          
			},                                                                                                                                                  
			error: function() {                                                                                                                                 
				alert('ajax 실패');                                                                                                                             
	
			}
		});
		
		Swal.fire({
		  icon: 'success',
		  title: '변경성공',
		  text: '',
		}).then((result) => {
	       location.href="/user/updateUserForm";
	        }); 
		
//		$('#regPictureModal').modal('hide');
}




//관리자모달
function adminhModal(keyVariable){
	
	//클릭시 모달실행
	$('#adminhModal').modal('show');
	
	let adminModalSelect = document.querySelector('#adminModalSelect');
	let str= '';
	
	switch(keyVariable) {
		
	  case 'empRole': 
	  	    $('#adminModalLabel').html('권한을 설정해주세요');
	  	    $('#admin-modal-text').html('변경하실 권한을 선택해주세요:');
	  	    
	  	    $('input[id=adminUpdateKey]').val('EMP_ROLE');

	  	    
	  	    adminModalSelect.innerHTML = '';
	  	    
	  	    	str = `<option value ="ADMIN">ADMIN</option>           `
			    str += `  <option value ="MANAGER">MANAGER</option>    `
			    str += `  <option value ="EMPLOYEE">EMPLOYEE</option>  `
		             
	  	    adminModalSelect.insertAdjacentHTML('afterbegin', str);  
	  	    
	  		break;
	
	  case 'position':  
	  		$('#adminModalLabel').html('직급을 변경해주세요');
	  		$('#admin-modal-text').html('변경하실 직급을 선택해주세요:');
	  		
	  		$('input[id=adminUpdateKey]').val('EMP_POSITION');
	  	    
	  	    adminModalSelect.innerHTML = '';
	  	    
	  	    	str = `<option value ="사원">사원</option>     `
			    str += `  <option value ="대리">대리</option>  `
			    str += `  <option value ="과장">과장</option>  `
			    str += `  <option value ="팀장">팀장</option>  `
			    str += `  <option value ="부장">부장</option>  `
			    str += `  <option value ="회장">회장</option>  `
		             
	  	    adminModalSelect.insertAdjacentHTML('afterbegin', str);  
	  		
	   		break;
	
	  case 'dept':  
	  		$('#adminModalLabel').html('부서를 변경해주세요');
	  		$('#admin-modal-text').html('변경하실 부서를 선택해주세요:')
	  		
	  		$('input[id=adminUpdateKey]').val('DEPT_CODE');
	  	    
	  	    adminModalSelect.innerHTML = '';
	  	    
	  	    	str = `<option value ="DEPT_000">관리자부</option>           `
			    str += `  <option value ="DEPT_001">영업1부</option>    `
			    str += `  <option value ="DEPT_002">영업2부</option>  `
			    str += `  <option value ="DEPT_003">영업3부</option>  `
		             
	  	    adminModalSelect.insertAdjacentHTML('afterbegin', str);  
	  		
	    	break;
	
	  default: 
	  		alert('다시다시다시')
	   		break;
	}
	
}


function adminUpdateUser(){
	let form = $('#adminUpdateUserForm')[0];
	let userId;
	
		$.ajax({
			url: '/admin/adminUpdateUser', //요청경로
			type: 'post',
			data: new FormData(form), //필요한 데이터
			
			processData: false,
			contentType: false,
			cache: false,
			async:false,
			success: function(userInfo) {
			
			userId = userInfo.userId;
			// 회원정보 만들어줌
//			let userInfoPage = document.querySelector('#userInfo');
				
//			userInfoPage.innerHTML ='';
//			userInfoPage.insertAdjacentHTML('afterbegin', str);       
			
			                                                                                        
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
		
//		Swal.fire({
//          title: '변경되었습니다',
//          icon: 'warning',
//          showCancelButton: true,
//          confirmButtonColor: '#3085d6',
//          cancelButtonColor: '#FFFFFF',
//          confirmButtonText: '확인',
//          cancelButtonText: ''
//        }).then((result) => {
//          if (result.isConfirmed) {
//           location.href="/admin/adminUpdateUserForm?userId=" + userId;
//            
//          }
//        })
		
	Swal.fire({
	  icon: 'success',
	  title: '변경성공',
	  text: '',
	}).then((result) => {
       location.href="/admin/adminUpdateUserForm?userId=" + userId;
        }); 	
//	alert(userId);
//	location.href="/admin/adminUpdateUserForm?userId=" + userId;
//	$('#launchModal').modal('hide');
	
	
}                                                                                         