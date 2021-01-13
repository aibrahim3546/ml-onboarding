import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

import { accountDetails } from '../utils/cookies';
import CustomInput from '../components/CustomInput';
import { ContainerDiv, CustomButtonDiv, PageTitleDiv, LabelDiv } from '../components/style';

const validateDate = (date) => {
  var dateRegex = /^\d{2}\/\d{2}\/\d{4}$/ ;
  return dateRegex.test(date);
}

const DobPage = () => {
  const history = useHistory();
  const [dob, setDob] = useState('');

  const savedDetails = accountDetails();

  useEffect(() => {
    if (savedDetails) {
      setDob(savedDetails.dob || '');
    } else {
      history.replace('/welcome');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeDob = (e) => {
    setDob(e.target.value);
  }

  const onClickContinue = () => {
    if (dob.trim() === '') {
      alert('All field are required!');
      return null;
    }

    if (!validateDate(dob)) {
      alert('Invalid date format!');
      return null;
    }

    savedDetails.dob = dob;
    Cookies.set('accountDetails', JSON.stringify(savedDetails));
    history.push('/agreement');
  }

  return (
    <div>
      <PageTitleDiv>
        What’s your date of birth?
      </PageTitleDiv>

      <ContainerDiv>
        <CustomInput
          value={dob}
          label="Your Birthday"
          placeholder="e.g 12/12/2000"
          onChange={onChangeDob}
        />
        <LabelDiv style={{ marginTop: -20 }}>MM/DD/YYYY</LabelDiv>
      </ContainerDiv>

      <CustomButtonDiv onClick={onClickContinue}>
        CONTINUE
      </CustomButtonDiv>
    </div>
  );
}

export default DobPage;
