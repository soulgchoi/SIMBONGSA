package com.react.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.react.vo.Category;

@Repository
public class CateDao {
	@Autowired
	SqlSession session;
	
	public boolean addCate(Category cate) throws Exception {//모든 직원 정보
		System.out.println("????");
		return session.insert("volunteer.addCate", cate) >0;
	}
	
	public String prin() {
		return "와 뭐야";
	}

}
