/* eslint-disable react/jsx-props-no-spreading */
import { useOutletContext, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function UserPage() {
  const user = useOutletContext();
  const { currentUser } = user;
  const express = import.meta.env.VITE_API_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const requiredFieldError = "This field is required !";

  const onSubmit = async (data) => {
    const { firstname, lastname, email, password } = data;
    const updatedUser = {
      firstname,
      lastname,
      email,
      password,
      role_id: 1,
      id: currentUser.id,
    };

    try {
      axios.put(`${express}/api/users/${currentUser.id}`, updatedUser, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return currentUser == null ? (
    <Navigate to="/login" />
  ) : (
    <div className="user-page-container">
      <h1>User Page</h1>
      <div>
        <p>{`${currentUser.firstname} ${currentUser.lastname}`}</p>
        <p>{currentUser.email}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Firstname
            <input
              type="text"
              name="firstname"
              placeholder="John"
              {...register("firstname", {
                required: requiredFieldError,
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
          </label>
          {errors.firstname && (
            <p className="form-error">{errors.firstname.message}</p>
          )}
        </div>

        <div>
          <label>
            Lastname
            <input
              type="text"
              name="lastname"
              placeholder="Doe"
              {...register("lastname", {
                required: requiredFieldError,
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
          </label>
          {errors.lastname && (
            <p className="form-error">{errors.lastname.message}</p>
          )}
        </div>

        <div>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="john.doe@example.com"
              {...register("email", {
                required: requiredFieldError,
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
          </label>
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>

        <div>
          <label>
            Confirm email
            <input
              type="email"
              name="confirmemail"
              placeholder="john.doe@example.com"
              {...register("confirmemail", {
                required: requiredFieldError,
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
          </label>
          {errors.confirmemail && (
            <p className="form-error">{errors.confirmemail.message}</p>
          )}
        </div>

        <div>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="●●●●●●●●"
              {...register("password", {
                required: requiredFieldError,
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
          </label>
          {errors.password && (
            <p className="form-error">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label>
            Confirm password
            <input
              type="password"
              name="confirmpassword"
              placeholder="●●●●●●●●"
              {...register("confirmpassword", {
                required: requiredFieldError,
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){16,64}$/,
                  message: "Invalid password format",
                },
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
          </label>
          {errors.confirmpassword && (
            <p className="form-error">{errors.confirmpassword.message}</p>
          )}
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
}
