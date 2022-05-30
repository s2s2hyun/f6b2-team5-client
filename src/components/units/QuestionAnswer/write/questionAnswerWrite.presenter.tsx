import Dropdown02 from "../../../commons/dropdown/02/dropdown02";
import * as S from "./questionAnswerWrite.styles";
import Alert from "../../../commons/modal/alert/alert";
import ErrorAlert from "../../../commons/modal/errorModal/alert";

export default function QuestionAnswerWriteUI(props: any) {
    return (
        <>
            {props.alertModal && (
                <Alert
                    onClick={props.onClickAlertModal}
                    onClickExit={props.onClickExitSubmitModal}
                    contents={props.modalContents}
                />
            )}
            {props.errorAlertModal && (
                <ErrorAlert
                    onClick={props.onClickAlertModal}
                    onClickExit={props.onClickExitErrorModal}
                    contents={props.modalContents}
                />
            )}
            <S.Wrapper>
                <S.Container onSubmit={props.handleSubmit(props.CreateNewQusetionBoard)}>
                    <S.Title>문의 글 등록하기</S.Title>
                    <S.InputWrapper>
                        <Dropdown02 />
                        <S.Question
                            {...props.register("title")}
                            placeholder="제목을 입력해 주세요."
                        ></S.Question>
                    </S.InputWrapper>
                    <S.Content
                        placeholder="문의 내용을 입력해 주세요."
                        {...props.register("contents")}
                    ></S.Content>
                    <S.Button>문의 하기</S.Button>
                </S.Container>
                {/* </form> */}
            </S.Wrapper>
        </>
    );
}
