"use client";
import React from "react";

import { Form, Formik } from "formik";
import { FormikForm } from "@/components/FormikForm";
import PrimaryBtn from "@/components/UI/PrimaryBtn";

import { loginState } from "@/config/constants/initialValues";
import { useRouter } from "next/navigation";
import { TOAST_SUCCESS } from "@/utils/toast";

const Login = () => {
  const router = useRouter();

  const onSubmit = () => {
    TOAST_SUCCESS("Login Success")
    router.push("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="w-1/3 p-4 bg-white rounded-[4px]">
        <h1 className="text-2xl font-semibold mb-4 pb-2 border-b border-[#0000001A] text-[#000000B2]">
          Login
        </h1>
        <Formik
          initialValues={loginState}
          // validationSchema={profileValidationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div>
                <FormikForm.Input
                  label="Email"
                  placeholder="Enter your email address"
                  name="email"
                  type="email"
                />
                <FormikForm.PasswordInput
                  contaeinrStyle="mt-5"
                  label="Password"
                  placeholder="Enter your email address"
                  name="password"
                />
              </div>
              <PrimaryBtn
                type="submit"
                title="Submit"
                className="bg-[#2CB1BC] w-full text-white mt-6"
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
