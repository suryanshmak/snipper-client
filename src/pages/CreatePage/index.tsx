import React from "react";
import { StyledForm, StyledTxt } from "./styles";
import { StyledDiv, StyledLabel, Error } from "../../components/Input/styles";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import Input from "../../components/Input";
import SubmitButton from "../../components/Button";
import { useNavigate } from "react-router-dom";

type FormValues = {
  title: string;
  content: string;
  expires: number;
};

export const required = "This field cannot be blank";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors: { title, expires, content },
    },
  } = useForm<FormValues>();
  let navigate = useNavigate();

  const handleFormSubmit: SubmitHandler<FormValues> = async (data) => {
    const response = await axios.post(
      "http://localhost:8080/snippet/create",
      data
    );
    navigate(`/snippet/${response.data.id}`, { replace: true });
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        {...register("title", { required })}
        {...{ spellCheck: true }}
        options={{ id: "title", label: "Title", shrink: title?.message }}
      />
      <StyledDiv>
        <StyledLabel htmlFor="content">Content:</StyledLabel>
        {content && <Error>{content.message}</Error>}
        <StyledTxt
          {...register("content", { required })}
          id="content"
          aria-invalid={!!content}
        />
      </StyledDiv>
      <Input
        {...register("expires", { required, max: 365, min: 1 })}
        {...{ type: "number" }}
        options={{
          id: "delete",
          label: "(In Days) Delete in",
          shrink: expires?.message,
        }}
      />
      <SubmitButton value="Create Snippet" />
    </StyledForm>
  );
};

export default Form;
