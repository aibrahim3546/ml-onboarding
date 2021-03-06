import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as LogoSvg } from '../assets/logo.svg';
import { getAccountDetails } from '../utils/cookies';

const ContainerDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #FFF;
`;

const ShadowLineDiv = styled.div`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid #979797;
  height: 1px;
`;

const ProgressLineContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -1px;
`;

const ProgressLineDiv = styled.div`
  height: ${props => (props.isActive ? '4px' : '1px')};
  background-color: ${props => (props.isActive ? '#2ECFBF' : 'transparent')};
  flex: 1;
`;

const PROGRESS_STAGE = {
  '/personal': 1,
  '/dob': 2,
  '/agreement': 3,
};

const ProgressHeaderBar = () => {
  const location = useLocation();
  const history = useHistory();
  const savedDetails = getAccountDetails();
  const stage = PROGRESS_STAGE[location.pathname] || 0;

  useEffect(() => {
    if (savedDetails) {
      history.replace('/');
    } else {
      history.replace('/welcome');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  const onClickLogo = (e) => {
    e.preventDefault();
    history.push('/welcome');
  }

  return (
    <>
      <ContainerDiv>
        <div style={{ padding: 20 }}>
          <LogoSvg onClick={onClickLogo} style={{ cursor: 'pointer' }} />
        </div>
        <ShadowLineDiv />
        <ProgressLineContainerDiv>
          {[1, 2, 3 ].map((each) => (
            <ProgressLineDiv key={each} isActive={stage >= each} />
          ))}
        </ProgressLineContainerDiv>
      </ContainerDiv>
      <div style={{ marginTop: 100 }} />
    </>
  );
}

export default ProgressHeaderBar;
