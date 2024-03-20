import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function ModalPage({ setModalOpen }) {
  const closeModal = (e) => {
    e.stopPropagation();
    setModalOpen(false);
    console.log("pushed");
  };
  return (
    <ModalContainer>
      <button onClick={closeModal}>
        <GoBackIcon />
      </button>
    </ModalContainer>
  );
}
export default ModalPage;

const ModalContainer = styled.div`
  width: 334px;
  height: 334px;
  background: white;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fafafa;
  border: 1px solid #dadada;
  border-radius: 8px;
`;

const GoBackIcon = styled(ArrowBackIosNewIcon)`
  position: absolute; /* 절대 위치 설정 */
  top: 10px; /* 상단에서 얼마나 떨어질지 설정 */
  left: 10px; /* 좌측에서 얼마나 떨어질지 설정 */
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  color: #919eb6;
  background: transparent; /* 배경 투명 */
  border: none; /* 테두리 없음 */
`;
