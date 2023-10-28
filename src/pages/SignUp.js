import React from "react";

export default function SignUp() {
  return (
    <div className="flex flex-col items-center gap-10 p-10 uppercase">
      <div className="text-5xl">
        <h1>Welcome to sign-up section</h1>
      </div>
      <from>
        <fieldset className="flex flex-col items-center gap-5 border-2 border-black p-7">
          <legend>sign up</legend>
          <label htmlFor="firstName">
            <input
              type="text"
              placeholder="enter your first name"
              className="border-2 border-black p-1 text-center capitalize"
            />
          </label>
          <label htmlFor="lastName">
            <input
              type="text"
              placeholder="enter your last name"
              className="border-2 border-black p-1 text-center capitalize"
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              placeholder="enter your email"
              className="border-2 border-black p-1 text-center capitalize"
            />
          </label>

          <label htmlFor="phoneNumber">
            <input
              type="text"
              placeholder="enter your phone number"
              className="border-2 border-black p-1 text-center capitalize"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              placeholder="enter your password"
              className="border-2 border-black p-1 text-center capitalize"
            />
          </label>
          <button className="w-fit rounded-lg border-2 border-black bg-black p-2 capitalize text-white">
            sign up
          </button>
        </fieldset>
      </from>
    </div>
  );
}
