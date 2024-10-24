import { useState } from "react";
import { RegistrationUser } from "@/pages/registration";
import Image from "next/image";

interface Props {
  user: RegistrationUser;
  setUser: (user: RegistrationUser) => void;
}

export const Step2 = ({ setUser, user }: Props) => {
  const [error, setError] = useState<string>("");

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields are filled
    if (
      !user.sex ||
      !user.city ||
      !user.birthDate ||
      !user.phoneNumber ||
      !user.password ||
      !user.passwordConfrimation
    ) {
      setError("Please fill out all fields");
      return;
    }

    // Validate passwords match
    if (user.password !== user.passwordConfrimation) {
      setError("Passwords do not match");
      return;
    }

    // If all validations pass, reset error and proceed
    setError("");
    setUser(user); // Save user data

    // Send user data to the API
    try {
      const res = await fetch(
        "https://c0b1-31-11-83-108.ngrok-free.app/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user), // Send user data
        }
      );

      if (!res.ok) {
        throw new Error("Failed to register user");
      }

      const result = await res.json();
      console.log("User data submitted:", result); // Log the response

      // Handle successful registration here
      // e.g., navigate to another page or show a success message
    } catch (error) {
      console.error("Error submitting form", error);
      setError(
        "An error occurred while submitting your data. Please try again."
      );
    }
  };

  return (
    <div className="flex flex-col items-center lg:w-[20%] text-start text-white">
      <Image
        src={"/images/logo.png"}
        height={77}
        width={100}
        alt="logo"
        className="mb-20"
      />
      <div className="flex space-x-2 w-full mb-5">
        <div className="h-[10px] rounded bg-customOrange w-1/4"></div>
        <div className="h-[10px] rounded bg-customOrange w-1/4"></div>
        <div className="h-[10px] rounded bg-customOrange w-1/4"></div>
        <div className="h-[10px] rounded bg-customOrangeHover w-1/4"></div>
      </div>

      <div className="text-white w-full">
        <h1 className="text-3xl font-semibold mb-5">Ти остана уште малку!</h1>
        <p className="text-xl mb-10">
          Продолжи <span className="font-bold">да вајбаш!</span>
        </p>
      </div>

      <form className="w-full mb-16" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            id="sex"
            //   onChange={(e) => setUser({ ...user, sex: e.target.value })}
            className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5 text-customOrange placeholder:text-customOrange"
            placeholder="Пол"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            id="city"
            //   onChange={(e) => setUser({ ...user, city: e.target.value })}
            className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5 text-customOrange placeholder:text-customOrange"
            placeholder="Град"
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            id="birth_date"
            //   onChange={(e) => setUser({ ...user, birthDate: e.target.value })}
            className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5 text-customOrange placeholder:text-customOrange"
            placeholder="Датум на раѓање"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            id="phone_number"
            //   onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
            className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5 text-customOrange placeholder:text-customOrange"
            placeholder="Телефонски број"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            id="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5 text-customOrange placeholder:text-customOrange"
            placeholder="Лозинка"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            id="password_confirmation"
            onChange={(e) =>
              setUser({ ...user, passwordConfrimation: e.target.value })
            }
            className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5 text-customOrange placeholder:text-customOrange"
            placeholder="Повтори лозинка"
          />
        </div>
        <div className="mb-5 text-md">
          <input type="radio" name="consent" id="consent" /> Поле за согласност
          за промотивен контакт.
        </div>

        {/* Display error message if validation fails */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="bg-customOrange text-white font-bold w-full rounded-lg py-3"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};
