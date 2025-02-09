import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import React from "react";

const HomePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const posts = [ 
    {
      _createdAt:new Date(),
      title: "Startup 1",
      description: "This is a description of the startup",
      category: "Tech",
      votes: 10,
      comments: 5,
      image: "https://via.placeholder.com/150",
      author:{
        _id:1
      },
      _id:1

    }
  ]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          pitch your startup, <br />
          connect with entrepreneurs
        </h1>
        <p className="sub-heading">
          submit ideas, vote on pitches, and get noticed in virtual
          competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">{query ? `Search results for ${query}` : "All Startups"}</p>
        <ul className="mt-7 card-grid">
    {
      posts.length >0 ? (
        posts.map((post) => (
          <StartupCard key={post._id} post={post} />
        ))
      )
      : (
        <p>no startups found</p>
      )
    }
        </ul>
      </section>
    </>
  );
};

export default HomePage;
