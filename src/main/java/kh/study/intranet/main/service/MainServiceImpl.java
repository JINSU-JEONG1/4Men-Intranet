package kh.study.intranet.main.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.study.intranet.approval.vo.ApprovalVO;
import kh.study.intranet.board.vo.BoardVO;
import kh.study.intranet.main.vo.UserVO;

@Service("mainService")
public class MainServiceImpl implements MainService {

	
	@Autowired
	SqlSessionTemplate sqlSession;
	
	//최근5개 게시글 조회
	@Override
	public List<BoardVO> selectRecentBoard() {
		return sqlSession.selectList("mainMapper.selectRecentBoard");
	}
	
	@Override
	public List<BoardVO> noticeBoard() {
		return sqlSession.selectList("mainMapper.noticeBoard");
	}
	
	//결재해야핧문서조회
	@Override
	public List<ApprovalVO> documentsToBeApproved(UserVO userVO) {
		return sqlSession.selectList("mainMapper.documentsToBeApproved", userVO);
	}

	@Override
	public List<ApprovalVO> documentsFromBeApprov(UserVO userVO) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("mainMapper.documentsFromBeApprov", userVO);
	}


}
