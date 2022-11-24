package kh.study.intranet.reservation.controller;



import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


import kh.study.intranet.main.vo.UserVO;
import kh.study.intranet.reservation.service.ReservationService;
import kh.study.intranet.reservation.vo.MeetingRoomVO;
import kh.study.intranet.reservation.vo.ReservationVO;

@Controller
@RequestMapping("/reservation")
public class ReservationController {
	
	@Resource(name = "reservationService")
	private ReservationService reservationService;
	
	@RequestMapping("/insertReserveAjax")
   @ResponseBody
   public Map<String, List<Object>> insertReserveAjX(){

      Map<String, List<Object>> dateList = new HashMap<>();
      
      //이용가능한 날짜
      dateList.put("avaDate", reservationService.availableDay());
      //이용 불가능한 날짜
      dateList.put("disDate", reservationService.disAvailableDay());
      
      
      return dateList;
   }

	
	
	
	@RequestMapping("/insertReserve")
	public String insertReserve(MeetingRoomVO meetingRoomVO,Model model,ReservationVO reservationVO,Authentication authentication,UserVO userVO) {
		
		
		
		
		
		//User user = (User)authentication.getPrincipal();
		
		//reservationVO.setReserveUserId(user.getUsername());
		
		//reservationService.regReservation(meetingRoomVO);
		
		
		//model.addAttribute("reservation", reservationService.selectReservationInfo());
		//model.addAttribute("reserve", reservationService.selectReserve());
		
		model.addAttribute("available", reservationService.availableReserve());
		
		
		//---회의실 조회---//
		model.addAttribute("meetingRoom", reservationService.selectMeetingRoom());
		
		//System.out.println(reservationService.selectMeetingRoom());
		//System.out.println(reservationService.selectMeetingRoom());
		
		return "pages/reservation/insertReserve";
	
	}
	
	
	@ResponseBody
	@PostMapping("/selectReserve")
	public List<ReservationVO> selectReserve(String reserveDate, Model model,String roomCode) {
		
		
		//System.out.println(reserveDate);
		
		
//		System.out.println("@@@@@@@@");
//		System.out.println(meetingRoomVO);
//		System.out.println(reservationVO);
//		System.out.println(reservationService.selectReservation(reserveDate));

		//System.out.println(reservationService.selectReservation(reserveDate));
		
		
		
		return reservationService.selectReservation(reserveDate);
		
		
	}
	
	
	//회의실 선택시 변경되는 ajax
	@ResponseBody
	@PostMapping("/selectChange")
	public List<ReservationVO> selectChange(ReservationVO reservationVO,Authentication authentication) {
//		System.out.println("!!!!!!!");
//		System.out.println(reservationVO);
//		System.out.println(reservationVO);
		
		
		
		List<ReservationVO> list = reservationService.selectAvailableReservation(reservationVO);
		
		//System.out.println(list);
		//User user = (User)authentication.getPrincipal();
		
		return list;
		
		
		
		
	}
	
	
	//등록 눌렀을때 실행되는 ajax
	@ResponseBody
	@PostMapping("/regReservation")
	public void regReservation(MeetingRoomVO meetingRoomVO,ReservationVO reservationVO,Authentication authentication) {
		
		//System.out.println("!!!!");
//		System.out.println(meetingRoomVO);
		//System.out.println(meetingRoomVO);
		//System.out.println(reservationVO);
		
		User user = (User)authentication.getPrincipal();
		
		reservationVO.setReserveUserId(user.getUsername());
		//reservationVO.setReserveDate();
		
		
		 //System.out.println("!!!!!!!!");
		 
		 //reservationService.regReservation(reservationVO);
		 reservationService.reserveUpdate(reservationVO); 
		
		 System.out.println(reservationVO);
		
		
	}
	
	//회의실 예약조회 눌렀을시 페이지 이동
	@GetMapping("/selectReserve")
	public String selectReserve() {
		
		
		return "pages/reservation/selectReserve";
	}
	
	//회의실 예약현황 조회하고 ajax
	@ResponseBody
	@RequestMapping("/selectAjax")
	public Map<String, List<ReservationVO>> selectAjax() {
		
		Map<String, List<ReservationVO>> listMap = new HashMap<>();
		
	
        List<ReservationVO> reservedList = new ArrayList<>();
        reservedList = reservationService.selectReserveAll();
		
        String[] date;
		for(ReservationVO e : reservedList ){
			
			date = e.getReserveTime().split("-");
			e.setStartTime(date[0]);
			e.setEndTime(date[1]);
			
//			System.out.println(e);
		}
		
		listMap.put("reservedList", reservedList);
       
//        for(ReservationVO e : reservationService.selectReserveAll()) {
//        	System.out.println(e);
//        	System.out.println(e.getReserveTime());
//        }
//        reserveList.put("reserveList", reservationService.selectReserveAll());
        
		
		
		
		
		//System.out.println(reservationService.selectReserveAll());
		
		return listMap;
		
		//System.out.println(map);
		
		//System.out.println(reservationVO);
		
		
		
		
		
		
		
		
	}
	
	
	
	
}
