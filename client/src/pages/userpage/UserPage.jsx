import { useOutletContext, Navigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";

import "./UserPage.css";
import NameUpdate from "../../components/userforms/NameUpdate";

export default function UserPage() {
  const { currentUser } = useOutletContext();
  const [user, setUser] = useState();

  const express = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${express}/api/users/${currentUser.id}`).then((response) => {
      setUser({
        firstname: response.data.firstname,
        lastname: response.data.lastname,
        email: response.data.email,
      });
    });
  }, [express, setUser, currentUser.id]);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   watch,
  // } = useForm();

  // const requiredFieldError = "This field is required !";
  // const max120CharError = "Must have at most 120 characters !";

  // const onSubmit = async (data) => {
  //   const updatedUser = { ...data, role_id: 1, id: currentUser.id };

  //   try {
  //     axios
  //       .put(`${express}/api/users/${currentUser.id}`, updatedUser)
  //       .then(() => {
  //         setCurrentUser({
  //           firstname: updatedUser.firstname,
  //           lastname: updatedUser.lastname,
  //           email: updatedUser.email,
  //           id: updatedUser.id,
  //           role: "user",
  //         });
  //       });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const active = false;

  return currentUser == null ? (
    <Navigate to="/login" />
  ) : (
    <div className="user-page-container">
      <h1>User Page</h1>

      <p>{`${user?.firstname} ${user?.lastname}`}</p>
      <p>{user?.email}</p>

      <NameUpdate user={currentUser} />
    </div>
    //   {active && (
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <div>
    //         <label>
    //           Email
    //           <input
    //             type="email"
    //             name="email"
    //             placeholder="john.doe@example.com"
    //             {...register("email", {
    //               required: requiredFieldError,
    //               pattern: {
    //                 value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
    //                 message: "Invalid email format",
    //               },
    //               maxLength: {
    //                 value: 120,
    //                 message: max120CharError,
    //               },
    //             })}
    //           />
    //         </label>
    //         {errors.email && (
    //           <p className="form-error">{errors.email.message}</p>
    //         )}
    //       </div>

    //       <div>
    //         <label>
    //           Confirm email
    //           <input
    //             type="email"
    //             name="confirmemail"
    //             placeholder="john.doe@example.com"
    //             {...register("confirmemail", {
    //               required: requiredFieldError,
    //               pattern: {
    //                 value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
    //                 message: "Invalid email format",
    //               },
    //               maxLength: {
    //                 value: 120,
    //                 message: max120CharError,
    //               },
    //               validate: (value) =>
    //                 value === watch("email") || "Emails do not match",
    //             })}
    //           />
    //         </label>
    //         {errors.confirmemail && (
    //           <p className="form-error">{errors.confirmemail.message}</p>
    //         )}
    //       </div>

    //       <div>
    //         <label>
    //           Password
    //           <input
    //             type="password"
    //             name="password"
    //             placeholder="●●●●●●●●"
    //             {...register("password", {
    //               required: requiredFieldError,
    //               pattern: {
    //                 value:
    //                   /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){12,64}$/,
    //                 message:
    //                   "You need at least 12 characters, including one uppercase, one number and a special character",
    //               },
    //               maxLength: {
    //                 value: 64,
    //                 message: "You can't put more that 64 characters",
    //               },
    //             })}
    //           />
    //         </label>
    //         {errors.password && (
    //           <p className="form-error">{errors.password.message}</p>
    //         )}
    //       </div>

    //       <div>
    //         <label>
    //           Confirm password
    //           <input
    //             type="password"
    //             name="confirmpassword"
    //             placeholder="●●●●●●●●"
    //             {...register("confirmpassword", {
    //               required: requiredFieldError,
    //               pattern: {
    //                 value:
    //                   /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){12,64}$/,
    //                 message: "Invalid password format",
    //               },
    //               validate: (value) =>
    //                 value === watch("password") || "Passwords do not match",
    //             })}
    //           />
    //         </label>
    //         {errors.confirmpassword && (
    //           <p className="form-error">{errors.confirmpassword.message}</p>
    //         )}
    //       </div>

    //       <button type="submit">Update</button>
    //     </form>
    //   )}
    // </div>
  );
}
