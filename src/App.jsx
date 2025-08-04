import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FiltersSidebar from "./components/FiltersSidebar";
import SearchAndSortBar from "./components/SearchAndSortBar";
import ExpertListings from "./components/ExpertListings";
import Footer from "./components/Footer";
import ExploreExpertsSection from "./components/ExploreExpertsSection";

const App = () => {
  const [filters, setFilters] = useState({
    language: [],
    experience: [],
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [sortBy, setSortBy] = useState("relevance");

  const experts = [
    {
      id: 1,
      name: "John Doe",
      specialization: "Cardiology",
      price: "₹500 / 15mins",
      experience: "2 Years of experience",
      rating: 4.8,
      reviews: 250,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR3amzcVp1OqDsQVykVWQUzoSTfY2jvBf7-6CDOBnRMLDqUqebg",
      languages: ["English", "Hindi"],
      yearsExperience: 2,
      role: "Professor",
      badges: ["Healthcare & Medicine", "Cardiologist"],
    },
    {
      id: 2,
      name: "Jane Smith",
      specialization: "Cardiology",
      price: "₹600 / 15mins",
      experience: "3 Years of experience",
      rating: 4.7,
      reviews: 280,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR3amzcVp1OqDsQVykVWQUzoSTfY2jvBf7-6CDOBnRMLDqUqebg",
      languages: ["English", "Spanish"],
      yearsExperience: 3,
      role: "Professor",
      badges: ["Healthcare & Medicine", "Cardiologist"],
    },
    {
      id: 3,
      name: "John Ewo",
      specialization: "Cardiology",
      price: "₹500 / 15mins",
      experience: "3 Years of experience",
      rating: 4.9,
      reviews: 250,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR3amzcVp1OqDsQVykVWQUzoSTfY2jvBf7-6CDOBnRMLDqUqebg",
      languages: ["English", "French"],
      yearsExperience: 3,
      role: "Professor",
      badges: ["Healthcare & Medicine", "Cardiologist"],
    },
    {
      id: 4,
      name: "Alice Johnson",
      specialization: "Cardiology",
      price: "₹550 / 15mins",
      experience: "5 Years of experience",
      rating: 4.7,
      reviews: 200,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR3amzcVp1OqDsQVykVWQUzoSTfY2jvBf7-6CDOBnRMLDqUqebg",
      languages: ["English", "German"],
      yearsExperience: 5,
      role: "Professor",
      badges: ["Healthcare & Medicine", "Cardiologist"],
    },
    {
      id: 5,
      name: "Bob Williams",
      specialization: "Cardiology",
      price: "₹480 / 15mins",
      experience: "1 Year of experience",
      rating: 4.6,
      reviews: 180,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR3amzcVp1OqDsQVykVWQUzoSTfY2jvBf7-6CDOBnRMLDqUqebg",
      languages: ["English", "Italian"],
      yearsExperience: 1,
      role: "Professor",
      badges: ["Healthcare & Medicine", "Cardiologist"],
    },
    {
      id: 6,
      name: "Charlie Brown",
      specialization: "Cardiology",
      price: "₹520 / 15mins",
      experience: "4 Years of experience",
      rating: 4.9,
      reviews: 300,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR3amzcVp1OqDsQVykVWQUzoSTfY2jvBf7-6CDOBnRMLDqUqebg",
      languages: ["English", "Mandarin"],
      yearsExperience: 4,
      role: "Professor",
      badges: ["Healthcare & Medicine", "Cardiologist"],
    },
  ];

  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => {
      const currentCategoryFilters = prevFilters[category];
      if (currentCategoryFilters.includes(value)) {
        return {
          ...prevFilters,
          [category]: currentCategoryFilters.filter((item) => item !== value),
        };
      } else {
        return {
          ...prevFilters,
          [category]: [...currentCategoryFilters, value],
        };
      }
    });
  };

  const filteredExperts = experts
    .filter((expert) => {
      const matchesLanguage =
        filters.language.length === 0 ||
        filters.language.some((lang) => expert.languages.includes(lang));

      const matchesExperience =
        filters.experience.length === 0 ||
        filters.experience.some((expRange) => {
          const [min, max] = expRange.split("-").map(Number);
          if (isNaN(max)) {
            return expert.yearsExperience >= min;
          }
          return expert.yearsExperience >= min && expert.yearsExperience <= max;
        });

      const matchesSearchTerm =
        expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        expert.specialization.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSpecialization =
        specialization === "" ||
        expert.specialization.toLowerCase() === specialization.toLowerCase();

      return (
        matchesLanguage &&
        matchesExperience &&
        matchesSearchTerm &&
        matchesSpecialization
      );
    })
    .sort((a, b) => {
      if (sortBy === "session-price") {
        return (
          parseFloat(a.price.split("/")[0].replace("₹", "")) -
          parseFloat(b.price.split("/")[0].replace("₹", ""))
        );
      }
      if (sortBy === "years-of-experience") {
        return b.yearsExperience - a.yearsExperience;
      }
      if (sortBy === "a-z-naming") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <Header />
      <HeroSection />
      <ExploreExpertsSection />

      <main className="container mx-auto p-6 md:p-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <FiltersSidebar
          filters={filters}
          handleFilterChange={handleFilterChange}
        />
        <section className="lg:col-span-3">
          <SearchAndSortBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            specialization={specialization}
            setSpecialization={setSpecialization}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <ExpertListings experts={filteredExperts} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
