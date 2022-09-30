import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Login = () => {
  const goTo = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Header />
      <Hero>
        <div className="container max-w-lg mx-auto">
          <p className="text-white text-4xl text-center mb-5">
            {isLogin ? "Login" : "Register"}
          </p>
          <div className="bg-black bg-opacity-80 w-full p-8 md:p-10 flex flex-col space-y-5 rounded-md items-center">
            <input
              type="email"
              placeholder="enter email"
              className="px-5 py-[5px] border-none w-full outline-none rounded-md"
            />
            <input
              type="password"
              placeholder="enter password"
              className="px-5 py-[5px] border-none w-full outline-none rounded-md"
            />
            {!isLogin && (
              <input
                type="password"
                placeholder="re-enter password"
                className="px-5 py-[5px] border-none w-full outline-none rounded-md"
              />
            )}

            <button
              onClick={() => goTo("/dashboard")}
              className="text-white bg-myRed rounded-md w-full px-5 py-[5px] "
            >
              {isLogin ? "Login" : "Register"}
            </button>
            <p className="underline underline-myRed text-white">
              {isLogin ? "New to Netflix?" : "Already a member"}{" "}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="text-myRed cursor-pointer"
              >
                {isLogin ? "Register" : "Login"} instead
              </span>
            </p>
          </div>
        </div>
      </Hero>
    </>
  );
};

export default Login;
