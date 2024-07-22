/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useRef, useEffect } from "react";
import { useNavigate, useOutletContext, Link } from "react-router-dom";
import { toast } from "react-toastify";

import axios from "axios";
import "./LoginPage.css";

export default function SignupPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useOutletContext();
  const inputRef = useRef();

  useEffect(() => {
    if (currentUser?.role === "user") {
      navigate("/");
    }
    if (currentUser?.role === "admin") {
      navigate("/history9");
    }
  }, [currentUser, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const expressURL = import.meta.env.VITE_API_URL;

  const onSubmit = async (data) => {
    try {
      await axios
        .post(`${expressURL}/api/auth/login`, data, {
          withCredentials: true,
        })
        .then(() => reset())
        .then((response) => {
          setCurrentUser(response.data.user);
          toast.success("you are logged in!");
        });

      console.warn(currentUser);
    } catch (err) {
      console.error(err);
      if (err) toast.error("An error occured, please try again");
    }
  };

  return (
    <section className="login-form">
      <h1 className="login-title">Login with you email</h1>
      <div className="container-text">
        <p className="login-text">
          Don't have an account ?{" "}
          <Link to="/signup" id="button-here">
            {" "}
            Click here{" "}
          </Link>
        </p>
        <p className="login-text"> To have acces to more videos </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="email-login">
          <label htmlFor="email">Email </label>
          <input
            ref={inputRef}
            type="text"
            name="email"
            className="input-login"
            {...register("email", {
              required: "This filed is required !",
              pattern: {
                value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                message: "Invalid email format",
              },
              maxLength: {
                value: 120,
                message: "You can't have more than 120 characters",
              },
            })}
          />{" "}
          {errors.email && (
            <p className="form-error-login"> {errors.email.message}</p>
          )}
        </div>

        <div className="password-login">
          <label htmlFor="password">Password </label>
          <input
            ref={inputRef}
            type="password"
            name="password"
            className="input-login"
            {...register("password", {
              required: "This field is required !",
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){12,64}$/,
                message:
                  "You need at least 12 characters, including one uppercase, one number and a special character",
              },
              maxLength: {
                value: 64,
                message: "You can't put more that 64 characters",
              },
            })}
          />
          {errors.password && (
            <p className="form-error-login">{errors.password.message}</p>
          )}{" "}
        </div>

        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </section>
  );
}
