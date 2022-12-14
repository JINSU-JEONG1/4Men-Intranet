package kh.study.intranet.board.service;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kh.study.intranet.board.vo.BoardCategoryVO;
import kh.study.intranet.board.vo.BoardVO;

@Service("boardService")
public class BoardServiceImpl implements BoardService {

	@Autowired
	private SqlSessionTemplate sqlSession;

	//게시판 최신 공지사항 상단 고정
	@Override
	public List<BoardVO> selectNoticeBoardList(Map<String, Object> map) {
		return sqlSession.selectList("boardMapper.selectNoticeBoardList", map);
	}
	
	//게시판 추천글 상단 고정
	@Override
	public List<BoardVO> selectLikeBoardList(Map<String, Object> map) {
		return sqlSession.selectList("boardMapper.selectLikeBoardList", map);
	}
	
	//게시글 검색 및 목록 조회
	@Override
	public List<BoardVO> selectBoardListAndSearch(Map<String, Object> map) {
		return sqlSession.selectList("boardMapper.selectBoardListAndSearch", map);
	}
	
	//게시판 카테고리 조회
	@Override
	public List<BoardVO> selectBoardCate() {
		return sqlSession.selectList("boardMapper.selectBoardCate");
	}

	//게시글 상세조회
	@Override
	public BoardVO boardDetail(int boardNum) {
		return sqlSession.selectOne("boardMapper.selectBoardDetail", boardNum);
	}
	
	//게시글 조회수 증가
	@Override
	public void updateReadCnt(int boardNum) {
		sqlSession.update("boardMapper.updateReadCnt", boardNum);
	}
	
	//게시글 등록
	@Override
	public void regBoard(BoardVO boardVO) {
		sqlSession.insert("boardMapper.insertBoard", boardVO);
	}
	
	//게시글 수정
	@Override
	public void updateBoard(BoardVO boardVO) {
		sqlSession.update("boardMapper.updateBoard", boardVO);
	}
	
	//게시글 삭제
	@Override
	public void deleteBoard(BoardVO boardVO) {
		sqlSession.delete("boardMapper.deleteBoard", boardVO);
	}



	//게시글 총개수 조회
	@Override
	public int selectBoardCnt() {
		return sqlSession.selectOne("boardMapper.selectBoardCnt");
	}

	

	
}
	

	
	
	

