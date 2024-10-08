import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./style.css";

const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

const AuthForm = () => {
    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-image bg-cover bg-no-repeat bg-center p-4 relative">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative w-full max-w-md lg:max-w-5xl h-[700px] lg:h-[500px] z-10 overflow-hidden">
                <div
                    className={`absolute top-0 left-0 w-full h-full flex transition-all duration-700 ease-in-out transform
                        ${
                            isRegistering
                                ? "-translate-x-full"
                                : "translate-x-0"
                        }`}
                >
                    {/* Login Section */}
                    <div className="w-full h-full flex flex-col lg:flex-row">
                        <div className="w-full h-full flex flex-col lg:flex-row -mr-4 pr-4">
                            <div className="w-full lg:w-1/2 h-3/5 lg:h-full bg-white bg-opacity-25 backdrop-filter backdrop-blur-sm p-4 lg:p-8 flex flex-col justify-center items-center rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none shadow-lg">
                                <div className="w-full max-w-sm mx-auto">
                                    <h2 className="text-3xl font-bold text-white mb-6 text-center lg:text-left">
                                        Welcome Back
                                    </h2>
                                    <Formik
                                        initialValues={{
                                            email: "",
                                            password: "",
                                        }}
                                        validationSchema={SignInSchema}
                                        onSubmit={(
                                            values,
                                            { setSubmitting }
                                        ) => {
                                            console.log(values);
                                            setSubmitting(false);
                                        }}
                                    >
                                        {({ errors, touched }) => (
                                            <Form className="space-y-4">
                                                <div>
                                                    <Field
                                                        name="email"
                                                        type="email"
                                                        placeholder="Email"
                                                        className="w-full p-3 rounded-lg bg-white bg-opacity-25 border border-white border-opacity-40 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-60 transition text-white placeholder-white placeholder-opacity-75"
                                                    />
                                                    {errors.email &&
                                                    touched.email ? (
                                                        <div className="text-red-300 text-sm mt-1">
                                                            {errors.email}
                                                        </div>
                                                    ) : null}
                                                </div>
                                                <div>
                                                    <Field
                                                        name="password"
                                                        type="password"
                                                        placeholder="Password"
                                                        className="w-full p-3 rounded-lg bg-white bg-opacity-25 border border-white border-opacity-40 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-60 transition text-white placeholder-white placeholder-opacity-75"
                                                    />
                                                    {errors.password &&
                                                    touched.password ? (
                                                        <div className="text-red-300 text-sm mt-1">
                                                            {errors.password}
                                                        </div>
                                                    ) : null}
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="w-full bg-white bg-opacity-35 hover:bg-opacity-45 text-white py-3 rounded-lg font-semibold transition mt-4"
                                                >
                                                    Sign In
                                                </button>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 h-2/5 lg:h-full bg-white bg-opacity-15 backdrop-filter backdrop-blur-sm text-white p-4 lg:p-8 flex flex-col justify-center items-center rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none shadow-lg">
                                <div className="w-full max-w-sm mx-auto text-center">
                                    <h2 className="text-3xl font-bold mb-4">
                                        New Here?
                                    </h2>
                                    <p className="mb-8 text-gray-200">
                                        Sign up and discover a great amount of
                                        new opportunities!
                                    </p>
                                    <button
                                        onClick={() => setIsRegistering(true)}
                                        className="border-2 border-white border-opacity-60 text-white py-2 px-6 rounded-full hover:bg-white hover:bg-opacity-25 transition"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`absolute top-0 left-0 w-full h-full flex transition-all duration-700 ease-in-out transform
                        ${
                            isRegistering ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {/* Register Section */}
                    <div className="w-full h-full flex flex-col lg:flex-row">
                        <div className="w-full h-full flex flex-col lg:flex-row -ml-4 pl-4">
                            <div className="w-full lg:w-1/2 h-2/5 lg:h-full bg-white bg-opacity-15 backdrop-filter backdrop-blur-sm text-white p-4 lg:p-8 flex flex-col justify-center items-center order-2 lg:order-1 rounded-b-2xl lg:rounded-l-2xl lg:rounded-br-none shadow-lg">
                                <div className="w-full max-w-sm mx-auto text-center">
                                    <h2 className="text-3xl font-bold mb-4">
                                        One of Us?
                                    </h2>
                                    <p className="mb-8 text-gray-200">
                                        If you already have an account, just
                                        sign in. We've missed you!
                                    </p>
                                    <button
                                        onClick={() => setIsRegistering(false)}
                                        className="border-2 border-white border-opacity-60 text-white py-2 px-6 rounded-full hover:bg-white hover:bg-opacity-25 transition"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 h-3/5 lg:h-full bg-white bg-opacity-25 backdrop-filter backdrop-blur-sm p-4 lg:p-8 flex flex-col justify-center items-center order-1 lg:order-2 rounded-t-2xl lg:rounded-r-2xl lg:rounded-tl-none shadow-lg">
                                <div className="w-full max-w-sm mx-auto">
                                    <h2 className="text-3xl font-bold text-white mb-6 text-center lg:text-left">
                                        Create Account
                                    </h2>
                                    <Formik
                                        initialValues={{
                                            name: "",
                                            email: "",
                                            password: "",
                                        }}
                                        validationSchema={RegisterSchema}
                                        onSubmit={(
                                            values,
                                            { setSubmitting }
                                        ) => {
                                            console.log(values);
                                            setSubmitting(false);
                                        }}
                                    >
                                        {({ errors, touched }) => (
                                            <Form className="space-y-4">
                                                <div>
                                                    <Field
                                                        name="name"
                                                        type="text"
                                                        placeholder="Name"
                                                        className="w-full p-3 rounded-lg bg-white bg-opacity-25 border border-white border-opacity-40 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-60 transition text-white placeholder-white placeholder-opacity-75"
                                                    />
                                                    {errors.name &&
                                                    touched.name ? (
                                                        <div className="text-red-300 text-sm mt-1">
                                                            {errors.name}
                                                        </div>
                                                    ) : null}
                                                </div>
                                                <div>
                                                    <Field
                                                        name="email"
                                                        type="email"
                                                        placeholder="Email"
                                                        className="w-full p-3 rounded-lg bg-white bg-opacity-25 border border-white border-opacity-40 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-60 transition text-white placeholder-white placeholder-opacity-75"
                                                    />
                                                    {errors.email &&
                                                    touched.email ? (
                                                        <div className="text-red-300 text-sm mt-1">
                                                            {errors.email}
                                                        </div>
                                                    ) : null}
                                                </div>
                                                <div>
                                                    <Field
                                                        name="password"
                                                        type="password"
                                                        placeholder="Password"
                                                        className="w-full p-3 rounded-lg bg-white bg-opacity-25 border border-white border-opacity-40 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-60 transition text-white placeholder-white placeholder-opacity-75"
                                                    />
                                                    {errors.password &&
                                                    touched.password ? (
                                                        <div className="text-red-300 text-sm mt-1">
                                                            {errors.password}
                                                        </div>
                                                    ) : null}
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="w-full bg-white bg-opacity-35 hover:bg-opacity-45 text-white py-3 rounded-lg font-semibold transition mt-4"
                                                >
                                                    Sign Up
                                                </button>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
