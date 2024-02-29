import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Link, json, useLoaderData } from "@remix-run/react";
import Card from "~/components/Card";
import { useOptionalUser } from "~/utils";
import invariant from "tiny-invariant";
import { getAllIdeas } from "~/models/idea.server";
import { requireUserId } from "~/session.server";
import { Button } from "@material-tailwind/react";


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
          <img src="/assets/logo-text.svg" alt="" className="max-w-md self-center" />
          <div className="flex items-center justify-center mb-6">
            
            {/* image goes here */}
            <Link
              to="/new-idea"
              className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
            >
            <Button placeholder={'submit an idea'}>
            Submit an Idea
            </Button>
            </Link>
          </div>
          {ideas &&
            ideas.map((idea) => {
              return (
                <Card
                  id={idea.id}
                  key={idea.id}
                  title={idea.title}
                  description={idea.description}
                  submittedBy={"John Dunne"}
                  hasModel={idea.hasModel === null ? undefined : idea.hasModel}
                  hasPlan={idea.hasPlan ?? false}
                  isFavorite={
                    idea.isFavorite === null ? undefined : idea.isFavorite
                  }
                  isTaken={idea.isTaken || false}
                  totalVoteCount={idea.voteCount}
                  userVoteCount={0}
                />
              );
            })}
        </div>
      </div>
    </main>
  );
}
