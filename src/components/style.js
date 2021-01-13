import styled from 'styled-components';

const CustomButtonDiv = styled.div`
	background: #2ECFBF;
	font-weight: 700;
	border-radius: 6px;
	color: #FFF;
	padding: 15px 0px;
	text-align: center;
	max-width: 325px;
	width: 100%;
	margin: 40px auto 20px;
	cursor: pointer;

	:hover {
		opacity: 0.8;
	}
`;

const PageTitleDiv = styled.div`
  font-size: 32px;
  font-weight: 900;
  color: #000;
  text-align: center;
  padding: 105px 0px 30px;
`;

const LabelDiv = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #6F8086;
  padding-bottom: 20px;
  text-align: left;
`;

const ContainerDiv = styled.div`
  max-width: 375px;
  width: 100%;
  margin: 0 auto;
`;

export {
  CustomButtonDiv,
  PageTitleDiv,
  ContainerDiv,
  LabelDiv
};