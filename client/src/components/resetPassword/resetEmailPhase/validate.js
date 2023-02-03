export default function validateInfo(email) {
  let error;
  
  if (!email) {
    error = 'Email required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    error = 'Email is invalid';
  }
  return error;
}
