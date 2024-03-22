import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const TitleInput = styled.input`
  display: block;
  width: 350px;
  height: 40px;
  padding: 9px 16px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid var(--light-gray-gray-300, #e1e1e8);
  background: var(--light-gray-gray-000, #fff);
  margin-bottom: 14px;
`;

const QuillWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
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
  const { register, setValue } = useForm();
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

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

    // Quill 내용이 변경될 때마다 폼의 값 업데이트
    quillInstance.current.on("text-change", () => {
      setValue("content", quillInstance.current.root.innerHTML);
    });
  }, [setValue]);

  return (
    <form>
      <TitleInput {...register("title")} placeholder="제목을 입력하세요" />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </form>
  );
};

export default Editor;
