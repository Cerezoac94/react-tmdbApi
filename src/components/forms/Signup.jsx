import { useState, useEffect } from "react";
import useInput from "../../customHooks/useInput";
import { useNavigate } from "react-router-dom";
import FormContainer from "./FormStyled";


const Signup = () => {
  const navigate = useNavigate();
  const name = useInput("text", "name");
  const user = useInput("text", "userName");
  const email = useInput("email", "email");
  const pass = useInput("password", "pass");

  const [data, setData] = useState({});

  useEffect(() => {
    new Promise((resolve, reject) => {
      if (data.name) {
        resolve(data);
      }
    })
      .then((res) => sessionStorage.setItem("register", JSON.stringify(res)))
      .then(() => navigate("/login"));
  }, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      ...name.input,
      ...user.input,
      ...email.input,
      ...pass.input,
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
    <form >
        <label>
          NAME: 
          <input {...name} required />
        </label>
        <label >
          USER NAME: 
          <input {...user} required />
        </label>
        <label>
          EMAIL:
          <input {...email} />
        </label>
        <label>
          PASSWORD:
          <input {...pass} required/>
        </label>

       
        <button>Create Account</button>
      </form>
      </FormContainer>
  )
}

export default Signup