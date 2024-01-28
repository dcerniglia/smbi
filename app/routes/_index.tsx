import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Card from "~/components/Card";
import Navbar from "~/components/Navbar";
import { ideas } from "../../mockData";
import { useOptionalUser } from "~/utils";
import IdeasForm from "~/components/IdeasForm";

export const meta: MetaFunction = () => [{ title: "Steal My Business Idea" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen sm:justify-center">
      <div className="relative sm:pb-16">
        <div className="flex flex-col mt-40 ">
          <div className="flex items-center justify-center mb-6">
            <Link
              to="/submit"
              className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                Submit Your Idea
              </span>
              <span className="absolute inset-0 border-2 border-white rounded-full"></span>
            </Link>
          </div>
          {ideas &&
            ideas.map((idea) => {
              return <Card title={idea.title} description={idea.description} submittedBy={idea.submittedBy} />;
            })}
        </div>
      </div>
    </main>
  );
}
