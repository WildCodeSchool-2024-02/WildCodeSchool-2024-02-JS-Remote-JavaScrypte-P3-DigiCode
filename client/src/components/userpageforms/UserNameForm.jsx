/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRef } from "react";

export default function UserNameForm({ currentUser, setCurrentUser }) {
  const express = import.meta.env.VITE_API_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const requiredFieldError = "This field is required !";
  const min2CharError = "Must have at least 2 characters !";
  const max120CharError = "Must have at most 120 characters !";

  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);

  const onNameSubmit = async () => {
    console.info(firstnameRef.current.value);
    console.info(lastnameRef.current.value);

    try {
      axios
        .put(`${express}/api/users/${currentUser.id}/name`, {
          firstname: firstnameRef.current.value,
          lastname: lastnameRef.current.value,
        })
        .then(() => {
          setCurrentUser({
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            email: currentUser.email,
            id: currentUser.id,
            role: "user",
          });
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onNameSubmit)}>
      <label>
        Firstname
        <input
          type="text"
          name="firstname"
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
          placeholder="John"
          ref={firstnameRef}
        />
        {errors.firstname && (
          <p className="form-error">{errors.firstname.message}</p>
        )}
      </label>

      <label>
        Lastname
        <input
          type="text"
          name="lastname"
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
          placeholder="Doe"
          ref={lastnameRef}
        />
        {errors.lastname && (
          <p className="form-error">{errors.lastname.message}</p>
        )}
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
}

UserNameForm.propTypes = {
  currentUser: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  setCurrentUser: PropTypes.func.isRequired,
};
