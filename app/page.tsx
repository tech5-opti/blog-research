import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import BlogShowcase from "@/app/components/BlogShowcase";
import Footer from "@/app/components/Footer";
import { getAllPosts } from "@/app/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BlogShowcase posts={posts} />
      </main>
      <Footer />
    </>
  );
}
