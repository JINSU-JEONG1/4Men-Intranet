package kh.study.intranet.reservation.service;

import java.util.List;

import kh.study.intranet.main.vo.UserVO;
import kh.study.intranet.reservation.vo.MeetingRoomVO;
import kh.study.intranet.reservation.vo.ReservationVO;

public interface ReservationService {
	
	
	
	//회의실 조회
	List<MeetingRoomVO> selectMeetingRoom();
	
	void regReservation(ReservationVO reservationVO);
	
	//내 예약 정보
	List<ReservationVO> selectMyReserve(UserVO userVO);
	
	//내 예약 삭제
	void deleteReserve(ReservationVO reservationVO);
	
	//날짜정보
	List<ReservationVO> selectReservation(String reserveDate);
	
	
	void reserveUpdate(ReservationVO reservationVO);
	
	//사용 가능 회의실
	List<ReservationVO> selectAvailableReservation(ReservationVO reservationVO);
	
	
	//예약정보
	//List<ReservationVO> selectReserve();
	
	//모든 정보 조회
	List<ReservationVO> selectReserveAll();
	
	//<!-- 날짜에 사용가능한 예약 조회 -->
	List<ReservationVO> availableReserve();
		
	//예약가능날짜조회
    List<Object> availableDay();
   
    //예약불가능 날짜 조회
    List<Object> disAvailableDay();
    
    //자동insert
    void insertReserveTime(MeetingRoomVO meetingRoom);
   
	
	
	
}
