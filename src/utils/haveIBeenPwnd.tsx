import sha1 from 'sha1'

async function checkPassword(password:string) {
  const PREFIX_LENGTH = 5;
  const API_URL = 'https://api.pwnedpasswords.com/range/';

  const result = {
    error: '',
    count: 0
  };

  if (typeof password !== 'string') {
    result.error = 'Password must be a string'
  }
  if (!password.length) {
    result.error = 'Password cannot be empty'
  }
 
  let hashedPassword = sha1(password);
  if (typeof hashedPassword !== 'string') {
    // @ts-ignore
    hashedPassword = hashedPassword.join()
  }
  const hashedPasswordPrefix = hashedPassword.substr(0, PREFIX_LENGTH);
  const hashedPasswordSuffix = hashedPassword.substr(PREFIX_LENGTH);
  const url = API_URL + hashedPasswordPrefix;

  try {
    const call = await fetch(url)
    .then(response => response.text())
    .then((text) => {
      result.count = text.split('\n')
        .map((line) => line.split(':'))
        .filter((filtered) => filtered[0].toLowerCase() === hashedPasswordSuffix)
        .map((mapped) => Number(mapped[1]))
        .shift() || 0;
    })
  } catch (e) {
    if (typeof e.message === 'string' && e.message.length) {
      result.error = e.message
    } else {
      result.error = 'Something went wrong while checking if this password was leaked'
    }
  }

  return result;
}

export default checkPassword;