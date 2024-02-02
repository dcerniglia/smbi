import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import invariant from "tiny-invariant";
import DetailCard from "~/components/DetailCard";

import { getIdea, deleteIdea } from "~/models/idea.server";
import { requireUserId } from "~/session.server";

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  // const userId = await requireUserId(request);
  invariant(params.ideaId, "ideaId not found");

  const idea = await getIdea({ id: params.ideaId! });
  if (!idea) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ idea });
};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  await deleteIdea({ id: params.ideaId! });
  return redirect("/");
};

export default function IdeaDetailPage() {
  const data = useLoaderData<typeof loader>();
  const idea = data.idea;
  const ideaDate = idea.date ? new Date(idea.date) : new Date();
  return (
    <div>
      <Form method="post">
        <DetailCard
          title={idea.title}
          description={idea.description}
          hasModel={idea.hasModel ?? false}
          hasPlan={idea.hasPlan ?? false}
          isFavorite={idea.isFavorite ?? false}
          submittedBy={idea.submittedBy ?? ""}
          isTaken={idea.isTaken ?? false}
          date={ideaDate}
          id={idea.id}
        />
      </Form>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (error instanceof Error) {
    return <div>An unexpected error occurred: {error.message}</div>;
  }

  if (!isRouteErrorResponse(error)) {
    return <h1>Unknown Error</h1>;
  }

  if (error.status === 404) {
    return <div>Note not found</div>;
  }

  return <div>An unexpected error occurred: {error.statusText}</div>;
}
