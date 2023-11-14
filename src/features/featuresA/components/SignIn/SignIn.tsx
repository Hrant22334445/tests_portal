import { FC } from 'react'
import { auth } from '../../../../firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import styles from './SignIn.module.css';

 const SignIn: FC = () => {

    const signIn = async () => {
        const provider = new GoogleAuthProvider()
        try {
             await signInWithPopup(auth, provider);
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <button onClick={signIn} className={styles.google}>
        Sign In With Google
    </button>
  )
}

export default SignIn
