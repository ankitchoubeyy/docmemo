"use client"
import Header from "@/components/Header";
import BlogList from "@/components/BlogList";


export default function Home() {
  return (
    <div className="px-5">
        <Header/>
        <BlogList/>
    </div>
  );
}
