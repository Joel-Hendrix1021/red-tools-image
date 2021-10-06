import axios from "axios";
import { useContext,  useState } from "react";
import { GlobalUserContext } from "../../context/provider/GobalUserProvider";

const Signup = () => {

  const [user, setUser] = useState({
    username:'',
    email: '',
    password: '',
    token: ''
  })

  const {signUpUser, errorMessage} = useContext(GlobalUserContext)

  const handleChange=(e)=> {
    setUser({
      ...user, [e.target.name]: e.target.value
    })
  }

  const handleSubmit=(e)=> {
    e.preventDefault();
    signUpUser(user)
  }
 

  return (
    <div className="d-flex justify-content-center ">
      <div className="row justify-content-md-center col-md-4">
        <h1>SingUp</h1>
        {errorMessage && (
          <div
            className="alert alert-danger text-center rounded-0"
            role="alert"
          >
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} >
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              username
            </label>
            <input
              value={user.username}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="username"
              name="username"
              aria-describedby="emailHelp"
            />
          </div>
          
            <div className="mb-3">
            <label htmlFor="email" className="form-label">
              email
            </label>
            <input
              value={user.email}
              onChange={handleChange}
              type="email"
              name="email"
              className="form-control"
              id="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input
              value={user.password}
              onChange={handleChange}
              type="password"
              name="password"
              className="form-control"
              id="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
              submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
