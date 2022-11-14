package kh.study.intranet.approval.service;

import kh.study.intranet.approval.vo.AccountingVO;
import kh.study.intranet.approval.vo.ApprovalVO;
import kh.study.intranet.approval.vo.NomalVO;
import kh.study.intranet.approval.vo.VacationVO;
import kh.study.intranet.emp.vo.EmpVO;

public interface ApprovalService {
	
	ApprovalVO getAppSeq();
	
	EmpVO selectAppEmp(EmpVO empVO);
	
	void insertApproval(ApprovalVO approvalVO,VacationVO vacatioVO,NomalVO nomalVO
			, AccountingVO accountingVO);
	
	
	
	
	

}
