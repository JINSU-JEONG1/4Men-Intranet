package kh.study.intranet.chat.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ChatMessageVO {
	
	// 송신자 id
	private int messageNum;

	// 수신자 id
    private String userId;

    // 메시지 내용
    private String message;

    
    // 채팅방 id
    private String roomId;
    
    // 메세지 시간
    private String messageTime;
}

