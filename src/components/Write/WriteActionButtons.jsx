import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  border-radius: 10px;
  border: 1px solid #fff;
  width: 150px;
  height: 55px;
  flex-shrink: 0;
  background: #dadada;
  background: ${(props) =>
    props.color === "#359C3A"
      ? "#359C3A"
      : props.color === "#dadada"
      ? "#dadada"
      : "#dadada"};
`;

const WriteActionButtonsBlock = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
  button + button {
    margin-left: 0.5rem;
  }
`;

const WriteActionButtons = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(-1);
  };
  return (
    <WriteActionButtonsBlock>
      <Button onClick={onClick}>취소하기</Button>
      <Button color="#359C3A" onClick={onClick}>
        등록하기
      </Button>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;
