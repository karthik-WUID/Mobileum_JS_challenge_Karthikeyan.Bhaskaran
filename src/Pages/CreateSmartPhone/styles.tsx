import styled from "styled-components";

export const CreateSmartPhoneFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h2`
  padding: 10px 10px 0px 25px;
  color: ${({ theme }) => theme.menuColor};
`;

export const FormContainer = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  & form {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

export const FormRow = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  position: relative;

  & label {
    font-size: 10pt;
    flex: 1;
    color: ${({ theme }) => theme.menuColor};
  }
  & input {
    flex: 4;
    font-size: 10pt;
    padding: 5px;
    color: ${({ theme }) => theme.menuColor};
  }
`;

export const ErrorContainer = styled.div`
  color: #ff0000;
  font-size: 9pt;
  position: absolute;
  right: 10px;
  bottom: -5px;
`;

export const SubmitButton = styled.div`
  display: flex;
  justify-content: flex-end;
  & button {
    width: 150px;

    color: #333333;
    padding: 5px;
    cursor: pointer;
    margin-right: -10px;
  }
`;

export const SuccessContainer = styled.div`
  display: flex;
  color: #333333;
  font-weight: bold;
  text-align: center;
  justify-content: space-around;
`;
