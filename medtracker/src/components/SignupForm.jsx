function signupFormSubmitted(event){
    event.preventDefault();
    console.log("Hello");
}
function SignupForm(){
    return (<div>
        <form onSubmit={signupFormSubmitted}>
        <div className="mb-3">
            <label className="form-label">First Name</label>
             <input type="email" className="form-control" id="firstname"></input>
            </div>
            <div className="mb-3">
            <label className="form-label">Last Name</label>
             <input type="email" className="form-control" id="lastname"></input>
            </div>
            <div className="mb-3">
            <label className="form-label">Email address</label>
             <input type="email" className="form-control" id="username"></input>
            </div>
            <div class="mb-3">
            <label className="form-label">Password</label>
            <input type="password" class="form-control" id="password"></input>
            </div>
            <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
    </div>);
}

export default SignupForm;