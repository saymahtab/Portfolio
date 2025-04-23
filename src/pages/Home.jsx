import { Button } from "@/components/ui/button";
import React from "react";
import { blogs } from "./content.js";
import { techBlogs, projects } from "./content.js";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { deepDiveGroup1 } from "./content.js";

const Home = () => {
  return (
    <div className="text-foreground flex flex-col justify-center px-1">
      {/* Hero Section */}
      <section className="flex items-center">
        <div>
          <h1 className="md:text-[2.7rem] text-[2.2rem] text-accent font-bold">
            Hey, I am Mahtab!
          </h1>
          <p className="mt-4 text-[17px]">
            I'm a MERN Stack Developer, frontend enthusiast, and passionate coder.
            Currently diving deep into backend development and DSA to crack top tech roles.
            I love building apps, games, and productivity tools
            that make an impact.
            <br />
            <br />
            Whether it's crafting sleek UIs or writing scalable APIs, I enjoy turning ideas into reality
            with code.
          </p>
          <div className="mt-8 gap-4 flex">
            <Link to={"/me"}>
              <Button size={"xl"} variant={"secondary"}>
                About Me
              </Button>
            </Link>
            <Link to={"/projects"}>
              <Button size={"xl"} variant={"secondary"}>
                My Projects
              </Button>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center w-full h-full">
          <img src="/coder1.png" className="md:h-52 h-52 lg:h-64" alt="Coder" />
        </div>
      </section>

      {/* Deep Dives Section */}
      <section className="mt-10">
        <h1 className="text-[32px] text-accent font-semibold">Deep Dives</h1>
        <p className="mt-2 text-[16px]">Exploring the logic behind tech and projects.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {deepDiveGroup1.map((blog) => (
            <Link key={blog.id} to={`/deep-dive/${blog.slug}`}>
              <div className="hover:bg-muted px-3 flex flex-col justify-center shadow-sm rounded-md bg-secondary border border-gray-700 cursor-pointer">
                <p className="flex items-center mt-4 gap-2">
                  <span className="text-accent font-semibold h-14 flex gap-3 justify-center items-center text-[16px]">
                    <img src={blog.img} className="h-8" alt="" />
                    {blog.title}
                  </span>
                </p>
                <p className="mb-4">{blog.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects py-6">
        <div>
          <h3 className="text-[32px] text-accent font-semibold mb-6">Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardContent>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm">{project.year}</p>
                    <Link
                      to={project.articleLink}
                      className="text-primary-foreground font-semibold hover:underline"
                    >
                      {project.title}
                    </Link>
                    <p className="card description">{project.description}</p>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <Link to={project.articleLink}>
                      <Button size="sm" variant="secondary">
                        Article
                      </Button>
                    </Link>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="secondary">
                        Demo
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notes Section */}
      <section className="mt-10">
        <div>
          <h2 className="text-[32px] text-accent font-semibold">Notes</h2>
          <p className="mt-2 text-[16px]">
            My thoughts, learnings, and experiences from building projects and learning tech.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          {blogs.slice(0, 3).map((blog, index) => (
            <Link key={blog.id} to={`/blog/${blog.slug}`}>
              <div className="hover:bg-muted hover:text-accent px-3 flex flex-col justify-center shadow-sm rounded-3xl cursor-pointer">
                <p className="flex items-center mt-4 gap-2">
                  {index === 0 && (
                    <Button variant={"secondary"} className="h-4 text-xs">
                      ✨new
                    </Button>
                  )}
                  <span className="text-primary-foreground font-semibold text-[16px]">
                    {blog.title}
                  </span>
                </p>
                <p className="mb-4">{blog.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Tech Blogs Section */}
      <section className="mt-10">
        <div>
          <h2 className="text-[32px] text-accent font-semibold">Tech Blogs</h2>
          <p className="mt-2 text-[16px]">Posts on JavaScript, React, MongoDB, and more.</p>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          {techBlogs.slice(0, 3).map((blog, index) => (
            <Link key={blog.id} to={`/tech/${blog.slug}`}>
              <div className="hover:bg-muted px-3 flex flex-col justify-center shadow-sm rounded-3xl cursor-pointer">
                <p className="flex items-center mt-4 gap-2">
                  {index === 0 && (
                    <Button variant={"secondary"} className="h-4 text-xs">
                      ✨new
                    </Button>
                  )}
                  <span className="text-primary-foreground font-semibold text-[16px]">
                    {blog.title}
                  </span>
                </p>
                <p className="mb-4">{blog.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
