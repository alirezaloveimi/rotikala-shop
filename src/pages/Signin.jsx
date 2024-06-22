// react
import { useState } from "react";

// react router dom
import { useNavigate, Link } from "react-router-dom";

// react toastify
import { toast } from "react-toastify";

// components
import InputBox from "../components/InputBox";

// hooks
import { useUser } from "../context/UserContext";

// data
import { inputs } from "../data/data";

const Signin = () => {
  // state for inputs
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  //   error state
  const [error, setError] = useState({});

  //   user hook
  const { signin } = useUser();

  // form validation function
  const validation = (value, name) => {
    const error = {};
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    switch (name) {
      case "fullName": {
        if (!value.trim().length) {
          error[name] = "Full Name is Requred";
        } else if (value.length < 3) {
          error[name] = "Full Name Most Be Bigger Then 3";
        } else if (value.length > 20) {
          error[name] = "Full Name Most Be Smaller Then 20";
        }
        break;
      }
      case "email": {
        if (!value.trim().length) {
          error[name] = "Email is Requred";
        } else if (!emailRegex.test(value.trim())) {
          error[name] = "Email Is Not Valid";
        }
        break;
      }
      case "password": {
        if (!value.trim().length) {
          error[name] = "Password is Requred";
        } else if (!passwordRegex.test(value.trim())) {
          error[name] = `Password is Not Valid `;
        }
        break;
      }
    }

    return error;
  };

  // input change handler
  const inputChangeHandler = (target) => {
    const { value, name } = target;
    const newError = validation(value, name);
    setValues((v) => ({ ...v, [name]: value }));
    setError((e) => ({ ...e, [name]: newError[name] || "" }));
  };

  // form submit handler
  const signinHandler = (e) => {
    e.preventDefault();

    let newError = {};

    for (const [name, value] of Object.entries(values)) {
      newError = { ...newError, ...validation(value, name) };
    }

    setError(newError);

    if (!Object.values(newError).length) {
      signin(values);

      toast.success("You Sign In Successfuly ✌", {
        onClose: () => {
          setError({});
          setValues();
        },
      });
    }
  };

  return (
    <div className="h-[100vh] flex-center-center">
      <div className="p-5 rounded-xl bg-white dark:bg-zinc-900 w-[90%] md:w-[500px]">
        {/* brand image */}
        <div className="w-40 mx-auto my-4">
          <Link to="/">
            <img src="/images/logo.png" alt="brand-image" className="w-full" />
          </Link>
        </div>

        <form onSubmit={signinHandler} className="space-y-4">
          {inputs.map((input) => (
            <InputBox
              error={error}
              changeHandler={inputChangeHandler}
              inputValue={values[input.name]}
              key={input.id}
              {...input}
            />
          ))}

          <div>
            <p className="my-3 text-zinc-700 dark:text-white font-bold">
              Password Most Contains :
            </p>
            <ul className="space-y-2 pl-4 list-disc">
              <li className="text-zinc-700 dark:text-white text-sm">
                At Least 1 Number (0_9)
              </li>
              <li className="text-zinc-700 dark:text-white text-sm">
                At Least 8 characterers Length
              </li>
              <li className="text-zinc-700 dark:text-white text-sm">
                No Space In Password
              </li>
            </ul>
          </div>

          {/* submit btn */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-xl active:scale-95"
          >
            Sing In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
