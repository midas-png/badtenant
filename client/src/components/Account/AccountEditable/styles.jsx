import styled from 'styled-components';

export const AccountEditableWrapper = styled.div`
  display: flex;
  background: linear-gradient(
    180deg,
    rgb(255, 103, 0) 0%,
    rgb(255, 255, 255) 100%
  );
  margin-top: 80px;
  min-height: 600px;
`;

export const MainInfoWrapper = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  min-height: 600px;
  width: 100%;
`;

export const MainInfoTitle = styled.h2`
  color: #fff;
`;

export const MainInfoHR = styled.hr`
  border: none;
  width: 70%;
  height: 3px;
  border-radius: 2px;
  margin-top: 5px;
  background: #fff;
`;

export const MainWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  height: 500px;
  width: 80%;
`;

export const ProfilePicture = styled.img`
  height: 300px;
  width: 300px;
  background: #fff;
  border-radius: 150px;
`;

export const EditableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  min-width: 200px;
`;

export const EditableInput = styled.input.attrs((props) => ({
  type: props.password ? 'password' : 'text',
}))`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 20px;
  height: 40px;
  width: 300px;
  border: none;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);

  &::placeholder {
    color: #595959;
    font-size: 12px;
  }
`;

export const DescriptionItem = styled.textarea`
  width: 300px;
  resize: none;
  padding: 15px;
  border-radius: 20px;
  outline: none;
  border: 0;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  height: 150px;
`;

export const AccountWrapper = styled.div`
  // display: flex;
  // flex-direction: column;
  margin: 80px 0;
  width: 100%;
`;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 6px;
  margin-left: 5px;
  color: #fff;
`;

export const FormInput = styled.div`
  margin-bottom: 0.5rem;
  width: 80%;
`;
