import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

import CustomInput from '../components/CustomInput';
import { ContainerDiv, CustomButtonDiv, PageTitleDiv } from '../components/style';
import { accountDetails } from '../utils/cookies';

const validateEmail = (email)  => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const PersonalPage = () => {
  const history = useHistory();

  const defaultPersonalDetails = {
    firstName: '',
    lastName: '',
    email: '',
  };
  const [personalDetails, setPersonalDetails] = useState(defaultPersonalDetails);
  const savedDetails = accountDetails();

  useEffect(() => {
    if (savedDetails) {
      setPersonalDetails({
        firstName: savedDetails.firstName,
        lastName: savedDetails.lastName,
        email: savedDetails.email,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeDetails = (e, details) => {
    personalDetails[details] = e.target.value;
    setPersonalDetails({ ...personalDetails });
  }

  const onClickContinue = () => {
    let isEmpty = false;

    Cookies.set('accountDetails', JSON.stringify({ ...savedDetails, ...personalDetails }));

    Object.keys(personalDetails).forEach((key) => {
      if (personalDetails[key].trim() === '') {
        isEmpty = true;
      }
    });

    if (isEmpty) {
      alert('All field are required!');
      return null;
    }
    
    if (!validateEmail(personalDetails.email)) {
      alert('Invalid email format!');
      return null;
    }

    history.push('/dob');
  }

  return (
    <div>
      <PageTitleDiv>
        Create Your Account
      </PageTitleDiv>

      <ContainerDiv>
        <CustomInput
          value={personalDetails.firstName}
          label="First Name"
          placeholder="e.g John"
          onChange={(e) => onChangeDetails(e, 'firstName')}
        />

        <CustomInput
          value={personalDetails.lastName}
          label="Last Name"
          placeholder="e.g Doe"
          onChange={(e) => onChangeDetails(e, 'lastName')}
        />

        <CustomInput
          value={personalDetails.email}
          label="Email"
          placeholder="e.g john@doe.com"
          onChange={(e) => onChangeDetails(e, 'email')}
        />
        
      </ContainerDiv>

      <CustomButtonDiv onClick={onClickContinue}>
        CONTINUE
      </CustomButtonDiv>
    </div>
  );
}

export default PersonalPage;
