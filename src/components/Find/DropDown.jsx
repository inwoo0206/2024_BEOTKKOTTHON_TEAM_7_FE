import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DropDownContainer = styled.div`
  position: fixed;
  width: 100px;
  bottom: 150px;
  left: 275px;
  z-index: 1000;
`;

const DropDownButton = styled.button`
  position: absolute;
  width: 42px;
  height: 42px;

  left: 50px;
  justify-content: center;
  background: #39af37;
  border-radius: 100px;
  color: white;
`;

const ArticleList = styled.div`
  position: relative;

  margin-top: 10px; // 버튼과 드롭다운 메뉴 사이의 공간을 추가합니다.
`;

const ArticleButton = styled.button`
  display: flex;
  width: 100px;
  height: 30px;
  padding: 9px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #39af37;
  color: #fff;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 12px;
`;

export default function DropDown() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const articleTypeList = [
    { name: "멘토 등록", path: "/find-mentoti/register" },
    { name: "멘토 리스트", path: "/find-mentoti/list" },
    { name: "멘토링 글 작성", path: "/find-mentoti/create" },
  ];

  const articleBtnExpandHandler = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <DropDownContainer>
      {!isExpanded && ( // isExpanded가 false일 때만 버튼을 표시
        <DropDownButton onClick={articleBtnExpandHandler}>
          <MoreHorizIcon />
        </DropDownButton>
      )}

      {isExpanded && (
        <ArticleList onClick={articleBtnExpandHandler}>
          {articleTypeList.map((item, idx) => (
            <Link to={item.path} key={item.name}>
              <ArticleButton>
                {item.name}
                {idx !== articleTypeList.length - 1}
              </ArticleButton>
            </Link>
          ))}
          <DropDownButton
            onClick={articleBtnExpandHandler}
            style={
              isExpanded
                ? { background: "none", color: "#39af37" }
                : { background: "#39af37", color: "white" }
            }
          >
            <MoreHorizIcon />
          </DropDownButton>
        </ArticleList>
      )}
    </DropDownContainer>
  );
}
