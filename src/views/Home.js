import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { ContainerDiv, CustomButtonDiv, LabelDiv, PageTitleDiv } from '../components/style';
import { getAccountDetails, getDropOffPage, removeAccountDetails } from '../utils/cookies';

const LABEL = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  dob: 'Birthday',
};

const PATH = {
  firstName: '/personal',
  lastName: '/personal',
  email: '/personal',
  dob: '/dob',
};

const EditButtonDiv = styled.div`
  text-align: right;
  width: 10%;
  cursor: pointer;
  font-size: 12px;
  color: #0645AD;
`;

const HomePage = () => {
  const history = useHistory();
  const savedDetails = getAccountDetails();
  const dropOffPage = getDropOffPage();

  useEffect(() => {
    if (!savedDetails) {
      history.replace('/welcome');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickContinue = () => {
    history.push(dropOffPage);
  }

  const onClickNewAccount = () => {
    removeAccountDetails();
    history.replace('/welcome');
  }

  const onClickEdit = (key) => {
    history.push(PATH[key])
  }

  if (!savedDetails) {
    return null;
  }
  
  return (
    <ContainerDiv>
      <PageTitleDiv>Continue?</PageTitleDiv>
      <LabelDiv>You have uncompleted form. do you wish to continue?</LabelDiv>
      {Object.keys(savedDetails).map((key) => (
        savedDetails[key]
          && (
            <div key={key}>
              <LabelDiv>{LABEL[key]}</LabelDiv>
              <div style={{ float: 'left', display: 'inline-flex', width: '100%' }}>
                <LabelDiv style={{ color: 'black', fontSize: 14, width: '90%' }}>{savedDetails[key]}</LabelDiv>
                <EditButtonDiv onClick={() => onClickEdit(key)}>Edit</EditButtonDiv>
              </div>
            </div>
          )
      ))}

      <CustomButtonDiv onClick={onClickContinue}>
        CONTINUE
      </CustomButtonDiv>

      <CustomButtonDiv onClick={onClickNewAccount}>
        NEW ACCOUNT
      </CustomButtonDiv>
    </ContainerDiv>
  );
}

export default HomePage;
