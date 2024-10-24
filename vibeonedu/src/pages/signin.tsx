"use client"; // Ensure this file can use client-side features
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const apiUrl = "https://98e3-31-11-74-166.ngrok-free.app/api/login"

    if (!email || !password) {
      setError("Please fill out all fields");
      return;
    }

    setError("");
    setLoading(true); // Set loading to true before API call

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "ngrok-skip-browser-warning": "true", // Include if needed
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("userId", data.id); // Store user ID

        // Redirect to the desired page
        router.push("/existingUser");
      } else {
        // Handle errors
        console.error("Error during login:", response);
        setError("An error occurred while logging in. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred while logging in. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-customBlue">
      <div className="flex flex-col items-center lg:w-[20%] text-start text-white">
        <Image
          src={"/images/logo.png"}
          height={77}
          width={100}
          alt="logo"
          className="mb-20"
        />
        <div className="text-white w-full">
          <h1 className="text-3xl font-semibold mb-5">Учи денес, добивај утре!</h1>
          <p className="text-xl mb-10">Продолжи <span className="font-bold">да вајбаш!</span></p>
        </div>
        <form className="w-full mb-16" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5 text-customOrange placeholder:text-customOrange"
              placeholder="Маил адреса"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5 text-customOrange placeholder:text-customOrange"
              placeholder="Лозинка"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-customOrange text-white font-bold w-full rounded-lg py-3"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Најавувањето..." : "Најави се"}
          </button>
        </form>
        <p className="mb-5 text-xl">Или</p>
        <div className="flex flex-row mb-5">
          <Image
            src={"/images/signIn/gmail.svg"}
            height={32}
            width={32}
            alt="gmail"
            className="mr-2"
          />
          <Image
            src={"/images/signIn/facebook.svg"}
            height={32}
            width={32}
            alt="facebook"
            className="ml-2"
          />
        </div>
        <p className="text-xl text-center">
          Доколку си нов корисник,{" "}
          <span className="font-semibold text-customOrange">
            регистрирај се.
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;



