import { useRef, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import styled from "styled-components";

const TitleInput = styled.input`
  display: block; /* flex 대신 block 사용 */
  width: 350px; /* 길이 조정 */
  height: 40px;
  padding: 9px 16px;
  box-sizing: border-box; /* 패딩과 테두리 포함 너비 */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--light-gray-gray-300, #e1e1e8);
  background: var(--light-gray-gray-000, #fff);
  margin-bottom: 14px;
`;

const QuillWrapper = styled.div`
  width: 100%;
  margin: 0 auto; /* 중앙 정렬 */
  width: 350px;
  height: 280px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #e1e1e8;
  background: #fff;
  margin-top: 20px;

  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

const Editor = () => {
  const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
  const quillInstance = useRef(null); // Quill 인스턴스를 설정

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "bubble",
      placeholder: "내용을 입력하세요.",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block", "link", "image"],
        ],
      },
    });
  }, []);

  return (
    <div>
      <TitleInput placeholder="제목을 입력하세요" />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </div>
  );
};

export default Editor;
