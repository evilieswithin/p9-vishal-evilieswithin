import HeaderLogin from '../signin/HeaderLogin';
import Signup from './Signup';

export default function SignupPage() {
  return (
    <>
      <HeaderLogin
        heading='Signup to create an account'
        paragraph='Already have an account? '
        linkName='Login'
        linkUrl='/'
      />
      <Signup />
    </>
  );
}
