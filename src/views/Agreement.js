import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import https from '../utils/https';
import { ContainerDiv, CustomButtonDiv, PageTitleDiv } from '../components/style';
import CustomCheckbox from '../components/CustomCheckbox';
import { getAccountDetails, removeAccountDetails, setDropOffPage } from '../utils/cookies';

const LabelDiv = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #6F8086;
  padding-bottom: 20px;
  text-align: left;
  margin-top: -20px;
`;

const CustomTable = styled.table`
  tbody {
    vertical-align: top
  };

  td {
    padding-bottom: 30px;
  };
`;

const MainTextDiv = styled.div`
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 5px;
  color: #6F8086;
  text-align: left;
  padding-left: 15px;
`;

const LinkTextDiv = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #2ECFBF;
  text-align: left;
  padding-left: 15px;
  padding-bottom: 5px;
  cursor: pointer;
`;

const AgreementPage = () => {
  const history = useHistory();

  const [isAgreementOne, setIsAgreementOne] = useState(false);
  const [isAgreementTwo, setIsAgreementTwo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const savedDetails = getAccountDetails();

  useEffect(() => {
    setDropOffPage('/agreement');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickAgree = async () => {
    if (isLoading) {
      return null;
    }

    if (isAgreementTwo) {
      setIsLoading(true);

      try {
        const response = await https.post(
          'https://5f79819fe402340016f93139.mockapi.io/api/user',
          {
            ...savedDetails,
            agreement1: isAgreementOne,
            agreement2: isAgreementTwo,
          }
        );

        console.log('response => ', response);
        setIsLoading(false);
        alert('Account successfully created!');
        removeAccountDetails();
        history.push('/welcome');
      } catch (err) {
        setIsLoading(false);
        console.log('err => ', err);
      };
    } else {
      alert('Please agree to all the agreements!');
    }
  }

  return (
    <div>
      <PageTitleDiv>
        One last step!
      </PageTitleDiv>

      <ContainerDiv>
        <LabelDiv style={{ marginTop: 10 }}>Agreement</LabelDiv>

        <CustomTable>
          <tbody>
            <tr>
              <td>
                <CustomCheckbox
                  isActive={isAgreementOne}
                  onToggle={(isActive) => setIsAgreementOne(isActive)}
                />
              </td>
              <td>
                <MainTextDiv>I agree to the</MainTextDiv>
                <LinkTextDiv>
                  Electronic Transaction Esign Consent
                </LinkTextDiv>
              </td>
            </tr>
            <tr>
              <td>
                <CustomCheckbox
                  isActive={isAgreementTwo}
                  onToggle={(isActive) => setIsAgreementTwo(isActive)}
                />
              </td>
              <td>
                <MainTextDiv>I agree to the folowing agreements:</MainTextDiv>
                <LinkTextDiv>
                  Privacy Notice
                </LinkTextDiv>
                <LinkTextDiv>
                  Terms and Conditions
                </LinkTextDiv>
                <LinkTextDiv>
                  Membership Agreement
                </LinkTextDiv>
              </td>
            </tr>
          </tbody>
        </CustomTable>
      </ContainerDiv>

      <CustomButtonDiv onClick={onClickAgree}>
        {isLoading ? 'Loading...' : 'AGREE & CREATE ACCOUNT'}
      </CustomButtonDiv>
    </div>
  );
}

export default AgreementPage;
