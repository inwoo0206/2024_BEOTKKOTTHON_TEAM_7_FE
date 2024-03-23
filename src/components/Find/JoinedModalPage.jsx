import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

function JoinedModalPage({ setModalOpen, isJoined }) {
  const closeModal = (e) => {
    e.stopPropagation();
    setModalOpen(false);
  };
  return (
    <ModalContainer onClick={closeModal}>
      <ModalBox>
        <button onClick={closeModal}>
          <GoBackIcon />
        </button>
        <ModalText>{isJoined}</ModalText>
      </ModalBox>
    </ModalContainer>
  );
}
export default JoinedModalPage;

const ModalContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalBox = styled.div`
  width: 334px;
  height: 100px;
  background: white;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fafafa;
  border: 1px solid #dadada;
  border-radius: 8px;
  padding-top: 20px;
  justify-content: center;
  align-content: center;
`;

const ModalText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoBackIcon = styled(CloseIcon)`
  position: absolute; /* 절대 위치 설정 */
  top: 10px; /* 상단에서 얼마나 떨어질지 설정 */
  left: 15px; /* 좌측에서 얼마나 떨어질지 설정 */
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  color: #919eb6;
  background: transparent; /* 배경 투명 */
  border: none; /* 테두리 없음 */
`;
