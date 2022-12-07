package kh.study.intranet.reservation.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ReservationVO  {
	private String reserveCode;
	private String reserveUserId;
	private String reserveName;
	private String reserveComment;
	private String roomCode;
	private String reserveDate;
	private String reserveTime;
	private String reserveAvailable;
	
	private String startTime;
	private String endTime;
	
	private String roomName;
	
	
		
}
