import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col items-center gap-10 p-10 uppercase">
      <div className="text-5xl">
        <h1>Welcome to login section</h1>
      </div>

      <from>
        <fieldset className="flex flex-col items-center gap-5 border-2 border-black p-5">
          <legend>login</legend>
          <label htmlFor="email">
            <input
              type="email"
              placeholder="enter your email"
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
            login
          </button>
        </fieldset>
      </from>
    </div>
  );
}
