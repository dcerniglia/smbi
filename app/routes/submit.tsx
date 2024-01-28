import type { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { useEffect, useRef } from "react";
import Card from "~/components/Card";
import IdeasForm from "~/components/IdeasForm";

import { createNote } from "~/models/note.server";
import { requireUserId } from "~/session.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  // const userId = await requireUserId(request);

  // const formData = await request.formData();
  // const title = formData.get("title");
  // const body = formData.get("body");

  // if (typeof title !== "string" || title.length === 0) {
  //   return json(
  //     { errors: { body: null, title: "Title is required" } },
  //     { status: 400 },
  //   );
  // }

  // if (typeof body !== "string" || body.length === 0) {
  //   return json(
  //     { errors: { body: "Body is required", title: null } },
  //     { status: 400 },
  //   );
  // }

  // const note = await createNote({ body, title, userId });

  return redirect(`/`);
};

export default function NewNotePage() {
  const actionData = useActionData<typeof action>();
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  // useEffect(() => {
  //   if (actionData?.errors?.title) {
  //     titleRef.current?.focus();
  //   } else if (actionData?.errors?.body) {
  //     bodyRef.current?.focus();
  //   }
  // }, [actionData]);

  return (
    <div className="h-screen pt-6">
      <Card description="The idea should not be a small business (i.e. home cleaning service, landscaping, flower shop, etc.) or an existing business concept UNLESS you have a fresh take or angle on it. Obscure ideas are welcome as long as they could conceivably be brought to reality. Keep in mind that your idea will be voted and commented on. Your email and last name WILL NOT be displayed. " />
      <IdeasForm />
    </div>
  );
}
