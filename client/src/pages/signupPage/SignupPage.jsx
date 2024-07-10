/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignupPage.css";

export default function LoginPage() {
  const [resStatus, setResStatus] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const expressURL = import.meta.env.VITE_API_URL;
  const onSubmit = async (data) => {
    try {
      await axios
        .post(`${expressURL}/api/users/register`, data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => setResStatus(response.status));

      if (resStatus === 201) {
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1 className="signup-title">Create an account</h1>
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="signup-subtitle">
          To have access to more videos and the possibility of adding them to
          favorites
        </h2>
        <div className="names-oneline">
          <div className="user-firstname">
            <label className="label-form" htmlFor="firstname">
              Firstname
            </label>
            <input
              type="text"
              name="firstname"
              className="user-nameone-input"
              {...register("firstname", {
                required: "This field is required !",
                minLength: {
                  value: 2,
                  message: "You need at least 2 characters",
                },
                maxLength: {
                  value: 120,
                  message: "You can't have more than 120 characters",
                },
              })}
            />
            {errors.firstname && (
              <p className="form-error">{errors.firstname.message}</p>
            )}
          </div>

          <div className="user-lastname">
            <label className="label-form" htmlFor="lastname">
              Lastname
            </label>
            <input
              type="text"
              name="lastname"
              className="user-nameone-input"
              {...register("lastname", {
                required: "This field is required !",
                minLength: {
                  value: 2,
                  message: "You need at least 2 characters",
                },
                maxLength: {
                  value: 120,
                  message: "You can't have more than 120 characters",
                },
              })}
            />
            {errors.lastname && (
              <p className="form-error">{errors.lastname.message}</p>
            )}
          </div>
        </div>

        <label className="label-form" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="signup-input"
          {...register("email", {
            required: "This field is required !",
            pattern: {
              value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
              message: "Invalid email format",
            },
            maxLength: {
              value: 120,
              message: "You can't have more than 120 characters",
            },
          })}
        />
        {errors.email && <p className="form-error">{errors.email.message}</p>}

        <label className="label-form" htmlFor="confirmemail">
          Confirm Email
        </label>
        <input
          type="email"
          name="confirmemail"
          className="signup-input"
          {...register("confirmemail", {
            required: "This field is required !",
            pattern: {
              value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
              message: "Invalid email format",
            },
            maxLength: {
              value: 120,
              message: "You can't have more than 120 characters",
            },
            validate: (value) =>
              value === watch("email") || "Emails do not match",
          })}
        />
        {errors.confirmemail && (
          <p className="form-error">{errors.confirmemail.message}</p>
        )}

        <label className="label-form" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="signup-input"
          {...register("password", {
            required: "This field is required !",
            pattern: {
              value:
                /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){16,64}$/,
              message:
                "You need at least 16 characters, including at least: one uppercase and one lowercase letter, one number and a special character",
            },
            maxLength: {
              value: 64,
              message: "You can't put more that 64 characters",
            },
          })}
        />
        {errors.password && (
          <p className="form-error">{errors.password.message}</p>
        )}

        <label className="label-form" htmlFor="confirmpassword">
          Confirm password
        </label>
        <input
          type="password"
          name="confirmpassword"
          className="signup-input"
          {...register("confirmpassword", {
            required: "This field is required !",
            pattern: {
              value:
                /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
              message: "Invalid password format",
            },
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />
        {errors.confirmpassword && (
          <p className="form-error">{errors.confirmpassword.message}</p>
        )}

        <button className="signup-button" type="submit">
          Create
        </button>
      </form>
    </>
  );
}
