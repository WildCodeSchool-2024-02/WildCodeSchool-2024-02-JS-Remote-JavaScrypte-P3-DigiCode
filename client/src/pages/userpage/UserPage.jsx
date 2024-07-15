/* eslint-disable react/jsx-props-no-spreading */
import { useOutletContext, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function UserPage() {
  const user = useOutletContext();
  const { currentUser, setCurrentUser } = user;
  const express = import.meta.env.VITE_API_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const requiredFieldError = "This field is required !";
  const min2CharError = "Must have at least 2 characters !";
  const max120CharError = "Must have at most 120 characters !";

  const onSubmit = async (data) => {
    const updatedUser = { ...data, role_id: 1, id: currentUser.id };

    try {
      axios
        .put(`${express}/api/users/${currentUser.id}`, updatedUser)
        .finally(() => {
          setCurrentUser({
            firstname: updatedUser.firstname,
            lastname: updatedUser.lastname,
            email: updatedUser.email,
            id: updatedUser.id,
            role: "user",
          });
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
                  message: min2CharError,
                },
                maxLength: {
                  value: 120,
                  message: max120CharError,
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
                  message: min2CharError,
                },
                maxLength: {
                  value: 120,
                  message: max120CharError,
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
                  message: max120CharError,
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
                  message: max120CharError,
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
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){12,64}$/,
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
