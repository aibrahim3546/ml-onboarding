import Cookies from 'js-cookie';

const accountDetails = () => {
  const savedDetails = Cookies.get('accountDetails');
  let details;

  if (savedDetails) {
    details = JSON.parse(savedDetails);
  }

  return details;
};

export {
  accountDetails,
};