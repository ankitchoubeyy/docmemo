"use client";

import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import ClipLoader from "react-spinners/ClipLoader";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Page({ params }) {
  const [blogData, setBLogData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [color] = useState("#ff0000");

  const fetchBlogData = async () => {
    try {
      const paramsId = (params.id);

      if (!paramsId) {
        console.error("No post ID provided");
        return;
      }

      // Fetch the specific blog post data
      const response = await fetch(`http://localhost:8000/api/blogs/${paramsId}`); 
      const data = await response.json();
      if (data) {
        setBLogData(data);
        console.log(data);
      } else {
        console.error("Post not found");
      }
    } catch (error) {
      console.error("Error fetching blog data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [params]);

  if (isLoading) {
    return (
      <div className="sweet-loading h-screen flex items-center justify-center">
        <ClipLoader
          color={color}
          loading={isLoading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (!blogData) {
    return <div className="text-center mt-10">Blog post not found.</div>;
  }

  return (
    <>
      <Head>
        <title>{blogData.title}</title>
        <meta name="description" content={blogData.description} />
      </Head>
      <div className="bg-red-200 px-5 py-5 md:px-12 lg:px-28">
        <div className="my-24 text-center">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {blogData.title}
          </h1>
          <p className="text-l mt-3 pb-5 max-w-[740px] mx-auto">- by {blogData.author}</p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          src={blogData.image}
          alt={`Image for ${blogData.title}`}
          width={1280}
          height={720}
          className="border-4 border-white"
        />
        <div className="my-8">
          <h1 className="text-xl font-semibold">Introduction:</h1>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blogData.description}
          </ReactMarkdown>
        </div>
        <div className="my-8">
          <h3 className="text-xl font-semibold">Details:</h3>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blogData.details || "No details available."}
          </ReactMarkdown>
        </div>
        <div className="my-8">
          <h3 className="text-xl font-semibold">Conclusion:</h3>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blogData.conclusion || "No conclusion available."}
          </ReactMarkdown>
        </div>
        <div className="my-24">
          <p className="text-black font-semibold my-4">Share this article on social media</p>
          <div className="flex space-x-4">
            <Image src={assets.facebook_icon} width={50} alt="Share on Facebook" />
            <Image src={assets.twitter_icon} width={50} alt="Share on Twitter" />
            <Image src={assets.googleplus_icon} width={50} alt="Share on Google Plus" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
