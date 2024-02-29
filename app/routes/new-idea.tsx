import type { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { useEffect, useRef } from "react";
import Card from "~/components/Card";
import { createIdea } from "~/models/idea.server";
import { requireUserId } from "~/session.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const city = formData.get("city");
  const state = formData.get("state");
  const email = formData.get("email");
  const title = formData.get("title")?.toString() || ""; // Convert FormDataEntryValue to string
  const description = formData.get("description")?.toString() || ""; // Convert FormDataEntryValue to string
  const hasPlan = formData.get("hasPlan") || false;
  const hasModel = formData.get("hasModel") || false;
  await createIdea({
    title,
    description,
    hasPlan,
    hasModel,
  });

  return redirect(`/`);
};

export default function newIdea() {
  const actionData = useActionData<typeof action>();

  // useEffect(() => {
  //   if (actionData?.errors?.title) {
  //     titleRef.current?.focus();
  //   } else if (actionData?.errors?.body) {
  //     bodyRef.current?.focus();
  //   }
  // }, [actionData]);

  return (
    <div className="h-screen pt-6">
      <Card
        description="The idea should not be a small business (i.e. home cleaning service, landscaping, flower shop, etc.) or an existing business concept UNLESS you have a fresh take or angle on it. Obscure ideas are welcome as long as they could conceivably be brought to reality. Keep in mind that your idea will be voted and commented on. Your email and last name WILL NOT be displayed. "
        voteCount={0}
      />

      <div className="flex flex-col items-center justify-center py-2">
        <Form
          method="post"
          className="bg-black-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2"
        >
          <div className="lg:flex">
            <div className="mb-4 lg:w-1/2">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="mb-4 lg:ms-6 lg:w-10/12">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                name="lastName"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="city"
            >
              City
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="city"
              type="text"
              name="city"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="state"
            >
              State
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="state"
              type="text"
              name="state"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              name="title"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline h-64"
              id="description"
              name="description"
              required
            />
            <div className="flex flex-col">
              <label>
                <input
                  type="checkbox"
                  name="hasModel"
                  className="me-2"
                  value="true"
                />
                Do you have a financial model?
              </label>
              <label>
                <input
                  type="checkbox"
                  name="hasPlan"
                  className="me-2"
                  value="true"
                />
                Do you have a business plan?
              </label>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                Submit Your Idea
              </span>
              <span className="absolute inset-0 border-2 border-white rounded-full"></span>
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
