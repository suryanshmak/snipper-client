import { useForm } from "react-hook-form";
import SubmitButton from "../../components/Button";
import Input from "../../components/Input";
import { StyledForm } from "../CreatePage/styles";
import { required } from "../CreatePage";
import axios from "axios";
import { useContext, useState } from "react";
import { Error } from "./styles";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserProvider";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors: { email, password },
    },
  } = useForm<FormValues>();
  const [error, setError] = useState<string>("");
  let navigate = useNavigate();
  const { setIsSigned } = useContext(UserContext);

  const handleFormSubmit = async (data: FormValues) => {
    const response = await axios.post(
      "http://localhost:8080/user/login",
      data,
      {
        withCredentials: true,
      }
    );
    if (response.data) setError("Email or Password is incorrect!");
    else {
      setIsSigned(true);
      navigate("/");
      setError("");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
      {error && <Error>{error}</Error>}
      <Input
        {...register("email", { required })}
        {...{ type: "email" }}
        options={{ id: "email", label: "Email", shrink: email?.message }}
      />
      <Input
        {...register("password", { required })}
        {...{ type: "password" }}
        options={{
          id: "password",
          label: "Password",
          shrink: password?.message,
        }}
      />
      <SubmitButton value="Login" />
    </StyledForm>
  );
};

export default LoginForm;
