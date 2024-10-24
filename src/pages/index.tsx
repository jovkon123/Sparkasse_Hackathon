import React from "react";
import Footer from "@/components/Footer";
import BottomSection from "@/components/homepage/BottomSection";
import Carousel from "@/components/homepage/Carousel";
import HeroSection from "@/components/homepage/HeroSection";
import MainSection from "@/components/homepage/MainSection";
import NavBar from "@/components/NavBar";

// Interface for FunFact
interface FunFact {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

interface Props {
  funFacts: FunFact[];
}

const Home: React.FC<Props> = ({ funFacts }) => {
  return (
    <div className="mt-[-120px]">
      <NavBar />
      <HeroSection />
      <MainSection funFacts={funFacts} /> {/* Pass funFacts to MainSection if needed */}
      <BottomSection />
      <div className="pt-20 pb-20 w-[80%] mx-auto">
        <Carousel funFacts={funFacts} /> {/* Pass funFacts to Carousel if needed */}
      </div>
    </div>
  );
};

// Fetch data on each request
export async function getServerSideProps() {
  try {
    const response = await fetch("YOUR_API_URL_HERE"); // Replace with your API URL
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: FunFact[] = await response.json();
    return { props: { funFacts: data } };
  } catch (error) {
    return { props: { funFacts: [], error: error.message || "Error fetching data" } };
  }
}

export default Home;
