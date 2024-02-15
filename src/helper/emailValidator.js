const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
function validateEmail(string) {
  if (!regex.test(string)) {
    return false;
  }
  return true;
}

export default validateEmail;
