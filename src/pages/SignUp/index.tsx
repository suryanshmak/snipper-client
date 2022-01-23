import { useForm } from "react-hook-form";
import SubmitButton from "../../components/Button";
import Input from "../../components/Input";
import { StyledForm } from "../CreatePage/styles";
import { required } from "../CreatePage";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserProvider";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const {
    register,
    formState: {
      errors: { name, password, email },
    },
    handleSubmit,
  } = useForm<FormValues>();
  const [error, setError] = useState<string | undefined>();
  let navigate = useNavigate();
  const { setIsSigned } = useContext(UserContext);

  const handleFormSubmit = async (data: FormValues) => {
    const response = await axios.post(
      "http://localhost:8080/user/sign-up",
      data
    );
    if (response.data) setError(`Email already exists. Login instead.`);
    else {
      setIsSigned(true);
      navigate("/");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        {...register("name", { required })}
        options={{ id: "name", label: "Name", shrink: name?.message }}
      />
      <Input
        {...register("email", { required })}
        {...{ type: "email" }}
        options={{
          id: "email",
          label: "Email",
          shrink: email?.message || error,
        }}
      />
      <Input
        {...register("password", { required, minLength: 8 })}
        {...{ type: "password" }}
        options={{
          id: "password",
          label: "Password(min characters: 8)",
          shrink: password?.message,
        }}
      />
      <SubmitButton value="Sign Up" />
    </StyledForm>
  );
};

export default SignUp;
