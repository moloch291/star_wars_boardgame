import loginTextImg from "../../img/textImages/text_login.png";

const LoginForm = () => {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const submission = () => {
        const destination =  "http://localhost:8000/login";
        const payload = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                email: emailAddress,
                password: password
            })
        };
        fetch(destination, payload).then(function(res) {console.log(res)});
    };

    return (
        <div className="loginForm">
        <div className="loginWrapper">
            <img src={loginTextImg} alt="form title"/>
            <input type="email" id="user-email" name="user-email" placeholder="Email" required
                   onChange={(e) => {setEmailAddress(e.currentTarget.value)}}/>
            <input type="password" id="user-password" name="user-password" placeholder="Password" required
                   onChange={(e) => {setPassword(e.currentTarget.value)}}/>
                <p>.</p>
            <button className="formButton" onClick={() => {r2D2_3(); loading();}}>Login</button>
                <p>"New to the game?"</p>
            <button className="formButton" onClick={switching}>"Registration"</button>
        </div>
    </div> 
    );
};

export default LoginForm;