package kh.study.intranet.approval.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import kh.study.intranet.approval.service.ApprovalService;
import kh.study.intranet.approval.service.NomalApprovalService;
import kh.study.intranet.approval.service.VacationApprovalService;
import kh.study.intranet.approval.vo.AccountingVO;
import kh.study.intranet.approval.vo.AppCategoryVO;
import kh.study.intranet.approval.vo.ApprovalVO;
import kh.study.intranet.approval.vo.NomalVO;
import kh.study.intranet.approval.vo.VacationVO;
import kh.study.intranet.config.appDateUtil;
import kh.study.intranet.emp.vo.EmpVO;

@Controller
@RequestMapping("/approval")
public class ApprovalController {
	
	@Resource(name = "approvalService")
	private ApprovalService approvalService;
	
	@Resource(name = "vacationApprovalService")
	private VacationApprovalService vacationApprovalService;
	
	@Resource(name = "nomalApprovalService")
	private NomalApprovalService nomalApprovalService;
	
	
	//결재리스트게시판
	@RequestMapping("/approvalBoard")
	public String approvalBoard(@RequestParam Map<String, String> paramMap,Model model, ApprovalVO approvalVO) {
		
		
		model.addAttribute("appList", approvalService.selectApp(paramMap));
		
		//현재 날짜
		String nowDate = appDateUtil.getNowDateToString("-");//2020-10-10
		//한달 전날짜
		String beforeDate = appDateUtil.getBeforeMonthDateToString();
		
		//넘어오는 fromDate가 없다면 한달 전 날짜로 세팅
		if(paramMap.get("fromDate") == null) {
			paramMap.put("fromDate", beforeDate);
		}
		if(paramMap.get("toDate") == null){
			paramMap.put("toDate", nowDate);
		}
		
		model.addAttribute("paramMap", paramMap);
		
		
		System.out.println(approvalVO);
		System.out.println(approvalVO);
		System.out.println(approvalVO);
		
		model.addAttribute("appBoxList", approvalService.selectBoxList());
		return "pages/approval/approval_board";
	}
	/*
	 * //품의서별 게시판 출력
	 * 
	 * @ResponseBody
	 * 
	 * @PostMapping("/selectAppCate") public List<ApprovalVO>
	 * selectAppCate(ApprovalVO approvalVO) {
	 * 
	 * List<ApprovalVO>appCateBoard = approvalService.selectApp(approvalVO); return
	 * appCateBoard; }
	 */
	
	
	
	
	
	//---------결재양식작성페이지----------------------------------------------------------------
	
	
	//휴가신청 작성페이지
	@GetMapping("/vacationReport")
	public String vacationReport(ApprovalVO approvalVO, Model model,Authentication authentication,EmpVO empVO) {
		
		
		  User user = (User)authentication.getPrincipal();
		  empVO.setUserId(user.getUsername());
		  
		 model.addAttribute("empInfo", approvalService.selectAppEmp(empVO));
		 
		
		
		
		model.addAttribute("appSeq",approvalService.getAppSeq());
		
		
		 
		
		return "pages/approval/vacation_report";
	}
	//휴가신청서 등록
	@PostMapping("/regVacation")
	public String regVacation(VacationVO vacationVO,EmpVO empVO,ApprovalVO approvalVO,Authentication authentication,NomalVO nomalVO,AccountingVO accountingVO) {
		
		User user = (User)authentication.getPrincipal();
		approvalVO.setUserId(user.getUsername());
		vacationVO.setUserId(user.getUsername());
		  
		
		  approvalService.insertApproval(approvalVO,vacationVO,nomalVO,accountingVO);
		
		//vacationApprovalService.insertVacation(vacationVO);
		
		
		return "redirect:/approval/vacationReport";
	}
	//일반품의서 작성페이지
	@GetMapping("/nomalReport")
	public String nomalReport (Model model,Authentication authentication,EmpVO empVO) {
		
		User user = (User)authentication.getPrincipal();
		 empVO.setUserId(user.getUsername());
		 
		 model.addAttribute("empInfo", approvalService.selectAppEmp(empVO));
		 model.addAttribute("appSeq",approvalService.getAppSeq());
		
		return "pages/approval/nomal_report";
	}
	//일반품의서 등록
	@PostMapping("/regNomal")
	public String regNomal(VacationVO vacationVO,EmpVO empVO,ApprovalVO approvalVO,NomalVO nomalVO,Authentication athenAuthentication,AccountingVO accountingVO) {
		
		User user = (User)athenAuthentication.getPrincipal();
		approvalVO.setUserId(user.getUsername());
		nomalVO.setUserId(user.getUsername());
		
		 approvalService.insertApproval(approvalVO,vacationVO,nomalVO,accountingVO);
		
		return "redirect:/approval/nomalReport";
	}
	
	//회계품의서 작성페이지
	@GetMapping("/accountingReport")
	public String orderReport (EmpVO empVO,Authentication authentication, Model model ) {
		
		User user =(User)authentication.getPrincipal();
		empVO.setUserId(user.getUsername());
		
		model.addAttribute("empInfo", approvalService.selectAppEmp(empVO));
		model.addAttribute("appSeq", approvalService.getAppSeq());
		
		return "pages/approval/accounting_report";
	}
	//회계품의서 등록
	@PostMapping("/regAccounting")
	public String regAccounting(VacationVO vacationVO,EmpVO empVO,ApprovalVO approvalVO,NomalVO nomalVO,Authentication athenAuthentication,AccountingVO accountingVO) {
		
		User user = (User)athenAuthentication.getPrincipal();
		approvalVO.setUserId(user.getUsername());
		accountingVO.setUserId(user.getUsername());
		
		approvalService.insertApproval(approvalVO,vacationVO,nomalVO,accountingVO);
		
		
		return "redirect:/approval/accountingReport";
	}
	//결재 목록 승인페이지
	@GetMapping("/requestApproval")
	public String requestAPproval(ApprovalVO approvalVO,Model model) {
		
		
		return "pages/approval/request_approval";
	}
	
	
}
