import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdAddPhotoAlternate } from 'react-icons/md';
import CircularProgress from '@mui/material/CircularProgress';

const dashedImageBorder =
  'data:image/svg+xml,%3csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3crect width=\'100%25\' height=\'100%25\' fill=\'none\' rx=\'100\' ry=\'100\' stroke=\'%23FF6700FF\' stroke-width=\'7\' stroke-dasharray=\'50%25%2c 13%25\' stroke-dashoffset=\'86\' stroke-linecap=\'round\'/%3e%3c/svg%3e';

export const ContentRight = styled.div`
  position: relative;
  background: #010606;
`;

export const Form = styled.form`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1rem;
  text-align: start;
  width: 80%;
  margin-bottom: 1rem;
  color: #fff;
`;

export const FormInputs = styled.div`
  margin-bottom: 0.5rem;
  width: 80%;
`;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 6px;
  color: #fff;
`;

export const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 20px;
  height: 40px;
  width: 100%;
  border: none;

  &::placeholder {
    color: #595959;
    font-size: 12px;
  }
`;

export const FormTextarea = styled.textarea`
  display: block;
  padding: 10px;
  outline: none;
  border-radius: 20px;
  height: 250px;
  width: 100%;
  resize: none;
  border: none;

  &::placeholder {
    color: #595959;
    font-size: 12px;
  }
`;

export const FormInputBtnWrapper = styled.div`
  width: 80%;
  height: 50px;
  margin-top: 10px;
  cursor: pointer;
`;
export const FormInputLogin = styled.span`
  font-size: 0.8rem;
  margin-top: 10px;
  color: #fff;
  width: 80%;
  text-align: center;
`;
export const ErrorText = styled.p`
  font-size: 0.74rem;
  margin-top: 0.5rem;
  color: #f00;
`;

export const MainLink = styled(Link)`
  text-decoration: none;
  color: #ff6700;
`;

export const CheckboxWrapper = styled.div`
  border: ${({ required, error }) =>
    required && error ? '2px solid #f00' : 'none'};
  color: #fff;
  font-size: 0.8rem;
  width: 80%;
  padding: 8px 0;
`;
export const TermsLink = styled(Link)`
  text-decoration: none;
  color: #ff6700;
`;

export const Checkbox = styled.input`
  cursor: pointer;
`;

export const CheckboxLabel = styled.label`
  cursor: pointer;
`;

export const FormTerms = styled.label`
  margin-top: 10px;
  color: #fff;
  font-size: 0.8rem;
`;

export const Terms = styled(Link)`
  color: #ff6700;
  text-decoration: none;
`;

export const ImageInput = styled.input.attrs({
  type: 'file',
})`
  display: none;
`;

export const ImageUploadLabel = styled.label`
    height: 100%;
    width: 100%;
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #ff6700;
    border-radius: 200px;
    background-image: url("${({ userImage }) =>
    userImage ? userImage : dashedImageBorder}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 0.2s;

    &:hover {
        ${({ userImage }) =>
    !userImage &&
          `
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23FF944CFF' stroke-width='7' stroke-dasharray='50%25%2c 13%25' stroke-dashoffset='86' stroke-linecap='round'/%3e%3c/svg%3e");
        color: #ff944c;
  `}
`;

export const ImageUploadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin-bottom: 0.5rem;
`;

export const AddPictureIcon = styled(MdAddPhotoAlternate)`
  height: 70px;
  width: 70px;
`;

export const FormInputButtonsWrapper = styled.div`
  display: flex;
  width: 80%;
  gap: 10px;
`;

export const RadioButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  min-height: 50px;
  gap: 10px;
`;

export const LoaderIcon = styled(CircularProgress)`
  .MuiCircularProgress-svg {
    color: ${(props) => props.theme.colors.primary};
  }
`;
