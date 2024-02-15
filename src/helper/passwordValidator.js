const regex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+-={}[\]|\\:;"'<>,.?/~`])[a-zA-Z0-9!@#$%^&*()_+-={}[\]|\\:;"'<>,.?/~`]{8,}$/;
function validatePassword(string) {
  if (string.length < 8) {
    return false;
  }
  if (!regex.test(string)) {
    return false;
  }
  return true;
}

export default validatePassword;
