import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import CustomInput from '../components/CustomInput';
import { ContainerDiv, CustomButtonDiv, PageTitleDiv, LabelDiv } from '../components/style';
import { getAccountDetails, setAccountDetails, setDropOffPage } from '../utils/cookies';

const validateDate = (date) => {
  var dateRegex = /^\d{2}\/\d{2}\/\d{4}$/ ;
  return dateRegex.test(date);
}

const DobPage = () => {
  const history = useHistory();
  const [dob, setDob] = useState('');

  const savedDetails = getAccountDetails();

  useEffect(() => {
    if (isSavedDetails()) {
      setDob(savedDetails.dob || '');
    } else {
      history.replace('/welcome');
    }

    setDropOffPage('/dob');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isSavedDetails = () => {
    if (!savedDetails) {
      return false;
    }

    let isDataEmpty = false;

    Object.keys(savedDetails).forEach((key) => {
      if (savedDetails[key] === '' && key !== 'dob') {
        isDataEmpty = true;
      }
    });

    return !isDataEmpty;
  }

  const onChangeDob = (e) => {
    setDob(e.target.value);
    savedDetails.dob = e.target.value;
    setAccountDetails(JSON.stringify(savedDetails));
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
    setAccountDetails(JSON.stringify(savedDetails));
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
