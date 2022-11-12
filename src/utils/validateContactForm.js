export const validateContactForm = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length < 2) {
    errors.firstName = 'Must be at least 2 characters.'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less.'
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length < 2) {
    errors.lastName = 'Must be at least 2 characters.'
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less.'
  }

  const reg = /^\d{10}$/;
  if (!values.phoneNum) {
    errors.phoneNum = 'Required';
  } else if (!reg.test(values.phoneNum)) {
    errors.phoneNum = 'The phone number should only contain numbers(10 total including area code).'
  }

  const reg2 =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if(!values.email) {
    errors.email = 'Required';
  } else if (!reg2.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  return errors;
};