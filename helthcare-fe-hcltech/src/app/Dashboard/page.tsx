"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const navigateTo = (path) => {
    router.push(path);
  };
  const healthTopics = [
    {
      title: "Nutrition",
      description: "Learn about balanced diets and healthy eating habits.",
    },
    {
      title: "Mental Health",
      description: "Discover tips to maintain mental well-being.",
    },
    {
      title: "Exercise",
      description: "Explore workout routines and fitness tips.",
    },
    {
      title: "Heart Health",
      description: "Understand the importance of cardiovascular care.",
    },
    {
      title: "Diabetes",
      description: "Manage and prevent diabetes with expert advice.",
    },
  ];

  return (
    <>
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Bayer Healthcare</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li>Home</li>
            <li>Health Topics</li>
            <li>Resources</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="dashboard-header">
          <h1>Your health, our Priority</h1>
          <div>
            <p>
              Expolre the latest health information and resources from Bayer
              Healthcare
            </p>
            <span>
              <button
                onClick={() => navigateTo("LoginReg")}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded "
              >
                Connect with us
              </button>
            </span>
          </div>
        </div>

        <header className="featured-header">
          <h1>Featured Health Topics</h1>
        </header>

        <div className="cards-container">
          {healthTopics.map((topic, index) => (
            <div key={index} className="card">
              <h2>{topic.title}</h2>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
