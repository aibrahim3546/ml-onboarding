import Cookies from 'js-cookie';

const getAccountDetails = () => {
  const savedDetails = Cookies.get('accountDetails');
  let details;

  if (savedDetails) {
    details = JSON.parse(savedDetails);
  }

  return details;
}

const setAccountDetails = (value) => {
  Cookies.set('accountDetails', value);
}

const removeAccountDetails = () => {
  Cookies.remove('accountDetails');
}

const setDropOffPage = (pageName) => {
  Cookies.set('dropOffPage', pageName);
}

const getDropOffPage = () => {
  return Cookies.get('dropOffPage');
}

export {
  getAccountDetails,
  setAccountDetails,
  removeAccountDetails,
  setDropOffPage,
  getDropOffPage,
};