package kh.study.intranet.main.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

import kh.study.intranet.board.vo.BoardVO;
import kh.study.intranet.chat.service.ChatService;
import kh.study.intranet.main.service.MainService;
import kh.study.intranet.main.service.UserService;
import kh.study.intranet.main.vo.UserVO;

@Controller
@RequestMapping("/main")
public class MainController {
	
	
	@Resource(name="userService")
	UserService userService;
	
	@Resource(name="mainService")
	MainService mainService;
	
	@Resource(name="chatService")
	ChatService chatService;
	
	@RequestMapping("/mainPage")
	public String mainPage(UserVO userVO,Authentication authentication, Model model,HttpSession session) {
		
		
		User user = (User)authentication.getPrincipal();
		userVO.setUserId(user.getUsername());
		
		//유저정보 보내줌
		model.addAttribute("userInfo", userService.selectUserInfo(userVO));
		
		
		
		//최근5개 게시글 보여줌
		model.addAttribute("recentBoard", mainService.selectRecentBoard());
		
		
		//공지사항 보여줌
		model.addAttribute("noticeBoard", mainService.noticeBoard());
		
		
		
		//최근 결재할 문서목록 보여줌
		model.addAttribute("documentsToBeApproved", mainService.documentsToBeApproved(userVO));
		
		
		//채팅방 목록 내보내준다.
		model.addAttribute("chatRoomList", chatService.selectChatRoomList());
		return "/main/mainPage";
	}
	
	@RequestMapping("/index")
	public String indexPage() {
		
		return "/main/index";
	}
	
	
	
	
	

}
