import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Link, json, useLoaderData } from "@remix-run/react";
import Card from "~/components/Card";
import { useOptionalUser } from "~/utils";
import invariant from "tiny-invariant";
import { getAllIdeas } from "~/models/idea.server";
import { requireUserId } from "~/session.server";


export const meta: MetaFunction = () => [{ title: "Steal My Business Idea" }];

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  let ideas = await getAllIdeas();
  if (!ideas) {
    throw new Response("Not Found", { status: 404 });
  }


  return json(ideas);
};

export default function Index() {
  const ideas = useLoaderData<typeof loader>();
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
              return <Card key={idea.id} title={idea.title} description={idea.description} submittedBy={'John Dunne'} hasModel={idea.hasModel === null ? undefined : idea.hasModel} hasPlan={idea.hasPlan ?? false} isFavorite={idea.isFavorite === null ? undefined : idea.isFavorite} isTaken={idea.isTaken || false} />;
            })}
        </div>
      </div>
    </main>
  );
}
