import { useState, useEffect } from "react";
import useInput from "../../customHooks/useInput";
import FormContainer from "./FormStyled";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const user = useInput("text", "userName");
  const pass = useInput("password", "pass");
  const [data, setData] = useState({});

  useEffect(() => {
    new Promise((resolve, reject) => {
      let register = JSON.parse(sessionStorage.getItem("register"));
      if (data.userName === register.userName && data.pass === register.pass) {
        resolve(true);
      }
    })
      .then((res) => sessionStorage.setItem("user", res))
      .then(() => navigate("/"))
  }, [data, navigate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      ...user.input,
      ...pass.input,
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
    <form>
        <label >
          USER NAME: 
          <input {...user} required/>
        </label>
        <label >
          PASSWORD: 
          <input {...pass} required/>
        </label>
        <span>Forgot Password?</span>
        <button>Login</button>
      </form>
      </FormContainer>
  )
}

export default Login