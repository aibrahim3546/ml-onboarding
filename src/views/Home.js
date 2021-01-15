import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { ContainerDiv, CustomButtonDiv, LabelDiv, PageTitleDiv } from '../components/style';
import { getAccountDetails, getDropOffPage, removeAccountDetails } from '../utils/cookies';

const LABEL = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  dob: 'Birthday'
};

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

  if (!savedDetails) {
    return null;
  }
  
  return (
    <ContainerDiv>
      <PageTitleDiv>Continue?</PageTitleDiv>
      <LabelDiv>You have uncompleted form. do you wish to continue?</LabelDiv>
      {Object.keys(savedDetails).map((key) => (
        <div key={key}>
          <LabelDiv>{LABEL[key]}</LabelDiv>
          <LabelDiv style={{ color: 'black', fontSize: 14 }}>{savedDetails[key]}</LabelDiv>
        </div>
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
