package kh.study.intranet.main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/main")
public class MainController {
	
	@RequestMapping("/mainPage")
	public String mainPage() {
		
		return "/main/mainPage";
	}

}
