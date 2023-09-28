import app from "../../../firebase.init";
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'

const LogIn = () => {
    const auth = getAuth(app)
    console.log(app)
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth,provider)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => {
            console.log('error',error.message)
        })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google LogIn</button>
        </div>
    );
};

export default LogIn;