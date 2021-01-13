import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { CustomButtonDiv } from '../components/style';

const TitleDiv = styled.div`
	font-size: 72px;
	font-weight: bold;
	color: #000;
	padding-top: 100px;
	text-align: center;
`;

const DescDiv = styled.div`
	font-size: 36px;
	font-weight: 900;
	color: #000;
	padding-top: 50px;
	text-align: center;
	max-width: 600px;
	margin: auto;
	width: 100%;
`;

const WelcomePage = () => {
	const history = useHistory();

	const onClickApplyNow = () => {
		history.push('/personal');
	};

	return (
		<div>
			<TitleDiv>Say Hello to MoneyLion</TitleDiv>
			<DescDiv>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim, dui vitae fringilla condimentum, lorem neque semper urna, et aliquam.
			</DescDiv>

			<CustomButtonDiv onClick={onClickApplyNow}>
				APPLY NOW
			</CustomButtonDiv>
		</div>
	);
}

export default WelcomePage;