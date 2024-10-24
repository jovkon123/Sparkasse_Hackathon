import { useState } from "react";
import { RegistrationUser } from "@/pages/registration";
import Image from "next/image";

interface Props {
  user: RegistrationUser;
  setUser: (user: RegistrationUser) => void;
  goToNextStep: () => void; // New prop to move to the next step
}

export const Step1 = ({ setUser, user, goToNextStep }: Props) => {
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate if all fields are filled
    if (!user.name || !user.surname || !user.email) {
      setError("Please fill out all fields");
      return;
    }

    // If valid, reset error and move to the next step
    setError("");
    setUser(user);
    goToNextStep(); // Move to Step 2
  };

  return (
    <div className="flex flex-col items-center lg:w-[20%] text-start text-white">
      <Image src={"/images/logo.png"} height={77} width={100} alt="logo" className="mb-20" />
      <div className="flex space-x-2 w-full mb-5">
        <div className="h-[10px] rounded bg-customOrange w-1/4"></div>
        <div className="h-[10px] rounded bg-customOrangeHover w-1/4"></div>
        <div className="h-[10px] rounded bg-customOrangeHover w-1/4"></div>
        <div className="h-[10px] rounded bg-customOrangeHover w-1/4"></div>
      </div>

      <div className="text-white w-full">
        <h1 className="text-3xl font-semibold mb-5">Учи денес, добивај утре!</h1>
        <p className="text-xl mb-10">
          Продолжи <span className="font-bold">да вајбаш!</span>
        </p>
      </div>

      <form className="w-full mb-16" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            id="first_name"
            className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5 text-customOrange placeholder:text-customOrange"
            placeholder="Име"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            onChange={(e) => setUser({ ...user, surname: e.target.value })}
            id="last_name"
            className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5 text-customOrange placeholder:text-customOrange"
            placeholder="Презиме"
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="email"
            id="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="bg-white border text-sm rounded-lg focus:ring-customOrange focus:border-customOrange block w-full p-2.5 text-customOrange placeholder:text-customOrange"
            placeholder="Маил адреса"
            required
          />
        </div>

        {/* Display error message if fields are missing */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button type="submit" className="bg-customOrange text-white font-bold w-full rounded-lg py-3">
          Најави се
        </button>
      </form>

      <p className="mb-5 text-xl">Или</p>
      <div className="flex flex-row mb-5">
        <Image src={"/images/signIn/gmail.svg"} height={32} width={32} alt="gmail" className="mr-2" />
        <Image src={"/images/signIn/facebook.svg"} height={32} width={32} alt="facebook" className="ml-2" />
      </div>
    </div>
  );
};
