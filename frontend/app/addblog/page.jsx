"use client";
import React, { useRef } from "react";

const Page = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const detailRef = useRef();
  const conclusionRef = useRef();
  const authorRef = useRef();

  //! Submit Handler
  const submitHandler = async (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const image = imageRef.current.value;
    const details = detailRef.current.value;
    const conclusion = conclusionRef.current.value;
    const category = categoryRef.current.value;
    const author = authorRef.current.value;

    const blogData = {
      title,
      description,
      image,
      details,
      conclusion,
      category,
      author,
    };

    console.log("Submitting blog data:", blogData);

    try {
      const response = await fetch("http://localhost:8000/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit blog data: ${response.statusText}`);
      }
      const result = await response.json();
      console.log("Blog data submitted successfully:", result);

      // Clear form fields
      titleRef.current.value = "";
      descriptionRef.current.value = "";
      imageRef.current.value = "";
      detailRef.current.value = "";
      conclusionRef.current.value = "";
      categoryRef.current.value = "";
    } catch (error) {
      console.error("Error submitting blog data:", error);
    }
  };

  return (
    <div className="min-h-screen px-5">
      <h1 className="text-3xl font-semibold text-center my-5">Add Blog</h1>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-3 max-w-lg mx-auto bg-[#F1F0E8] p-20 rounded-md"
      >
        <input
          placeholder="Title"
          className="bg-gray-300 px-5 py-2 outline-none"
          type="text"
          id="title"
          name="title"
          ref={titleRef}
        />
        <input
          placeholder="Description"
          className="bg-gray-300 px-5 py-2 outline-none"
          type="text"
          id="description"
          name="description"
          ref={descriptionRef}
        />
        <input
          placeholder="Image Url"
          className="bg-gray-300 px-5 py-2 outline-none"
          type="text"
          id="image"
          name="image"
          ref={imageRef}
        />
        <input
          placeholder="Category"
          className="bg-gray-300 px-5 py-2 outline-none"
          type="text"
          id="category"
          name="category"
          ref={categoryRef}
        />
        <input
          placeholder="Details"
          className="bg-gray-300 px-5 py-2 outline-none"
          type="text"
          id="details"
          name="details"
          ref={detailRef}
        />
        <input
          placeholder="Conclusion"
          className="bg-gray-300 px-5 py-2 outline-none"
          type="text"
          id="conclusion"
          name="conclusion"
          ref={conclusionRef}
        />
        <input
          placeholder="Author name"
          className="bg-gray-300 px-5 py-2 outline-none"
          type="text"
          id="author"
          name="author"
          ref={authorRef}
        />
        <button
          type="submit"
          className="px-5 py-2 bg-black text-white rounded-sm font-semibold outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
