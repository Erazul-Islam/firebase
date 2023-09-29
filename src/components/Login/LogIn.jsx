import { useState } from "react";
import app from "../../../firebase.init";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'

const LogIn = () => {

    const [user, setUser] = useState();

    const auth = getAuth(app)
    console.log(app)
    const googleProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser)
                setUser(loggedInUser)
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    const handlegithub = () => {
        signInWithPopup(auth,githubAuthProvider)
        .then( result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            {user ? <button onClick={handleSignOut}>Sign Out</button> :
                <div>
                    <button onClick={handleGoogleSignIn}>Google LogIn</button>
                    <button onClick={handlegithub}>Github Login</button>
                </div>

            }
            {user &&
                <div>
                    <h3>user: {user?.displayName}</h3>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default LogIn;