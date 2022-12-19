import React from "react";
import { FormContainer, Title } from "./styles";
import Button from "../button";
import { InputContainer } from "../input/styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IData } from "./types";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Deve ser um email válido")
      .required("email é obrigatório"),
    password: yup
      .string()
      .required("senha é obrigatório")
      .min(6, "Mínimo 6 caracteres"),
  })
  .required();

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IData>({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const onSubmit = async (data: IData) => {
    await console.log(data);
  };

  return (
    <div>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Title>Login</Title>
        <InputContainer>
          <input type="text" placeholder="E-mail" {...register("email")} />
          {errors.email ? <span>{errors.email?.message}</span> : null}
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password ? <span>{errors.password?.message}</span> : null}
        </InputContainer>
        <Button type="submit" isValid={isValid} />
      </FormContainer>
    </div>
  );
};

export default Form;
