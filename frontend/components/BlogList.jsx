"use client";
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";

function BlogList() {
  const [menu, setMenu] = useState("All");
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/blogs");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched blog data:", data);
        setBlogData(data);
      } catch (error) {
        console.error("Error in fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, []);

  return (
    <div>
      <div className="flex justify-center gap-6 my-10 sm:text-xl lg:text-2xl">
        <button
          onClick={() => setMenu("All")}
          className={menu === "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={menu === "Technology" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={menu === "Lifestyle" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}
        >
          Lifestyle
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={menu === "Startup" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}
        >
          Startup
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mb-24">
        {blogData
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => {
            return (
              <BlogItem
                key={index}
                id={item._id}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
              />
            );
          })}
      </div>
    </div>
  );
}

export default BlogList;
