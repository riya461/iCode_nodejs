export const Welcome = ({onLogInClick, onSignUpClick}) =>{
    return(
        <div>
            Welcome
            <button onClick={onLogInClick}>Log In</button>
            <button onClick={onSignUpClick}>Sign Up</button>
        </div>
    )
}