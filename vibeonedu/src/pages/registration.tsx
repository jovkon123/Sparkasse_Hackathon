
import Image from "next/image";
import { Step1 } from "@/components/Register/Step1";
import { Step2 } from "@/components/Register/Step2";
import { useState } from "react";
import { GetServerSideProps } from "next";

interface Props {
  registrationData: RegistrationUser;
}

export interface RegistrationUser {
  name: string | undefined;
  surname: string | undefined;
  email: string | undefined;
  password: string | undefined;
  passwordConfrimation: string | undefined;
}

const Registration = ({ registrationData }: Props) => {
  const [user, setUser] = useState<RegistrationUser>(registrationData);
  const [step, setStep] = useState(1); // State to track the current step

  // Function to move to the next step
  const goToNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  // Handle form submission
  const handleSubmit = async () => {
     console.log(user,"CURRENT USER")
    try {
      const res = await fetch("https://c0b1-31-11-83-108.ngrok-free.app/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), // Send user data
      });

      if (!res.ok) {
        throw new Error("Failed to register user");
      }

      const result = await res.json();
      console.log("Registration successful", result);
      // Optionally, redirect or show a success message
    } catch (error) {
      console.error("Error submitting form", error);
      // Optionally, set an error state to show feedback to the user
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-customBlue">
      {step === 1 && <Step1 setUser={setUser} user={user} goToNextStep={goToNextStep} />}
      {step === 2 && <Step2 setUser={setUser} user={user} />}

      {/* Add more steps as needed */}
      {/* {step === 3 && <Step3 />} */}
      {/* {step === 4 && <Step4 />} */}
      {/* {step === 5 && <Step5 />} */}
      {/* {step === 6 && <Step6 />} */}

  
    </div>
  );
};

// Fetch registration data server-side
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const registrationRes = await fetch(
      "https://c0b1-31-11-83-108.ngrok-free.app/api/register"
    );
    const registrationData = await registrationRes.json();

    // Replace undefined with null for any properties
    const sanitizedData: RegistrationUser = {
      name: registrationData.name ?? null,
      surname: registrationData.surname ?? null,
      email: registrationData.email ?? null,
      password: registrationData.password ?? null,
      passwordConfrimation: registrationData.passwordConfrimation ?? null,
    };

    return {
      props: {
        registrationData: sanitizedData,
      },
    };
  } catch (error) {
    console.error("Error fetching server-side data", error);
    return {
      props: {
        registrationData: {
          name: null,
          surname: null,
          email: null,
          password: null,
          passwordConfrimation: null,
        },
      },
    };
  }
};

export default Registration;
