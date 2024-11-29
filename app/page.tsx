"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import Section0 from "@/components/Home/Section0";
import Section1 from "@/components/Home/Section1";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Header onOpenAccess={() => setOpen(true)} />

      <main>
        <Section0 />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
      <Footer />

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content className="data-[state=closed]:animate-close-scale-out-fade data-[state=open]:animate-open-scale-in-fade fixed inset-x-0 top-4 z-20 mx-auto w-full max-w-md rounded-lg border border-white/10 bg-zinc-950 pt-0 sm:top-[calc(100vh-90%)]">
            <div className="relative pb-4 pt-6">
              <div className="animate-slide-fade-in mx-auto mt-4 flex size-20 items-center justify-center rounded-full bg-zinc-900/30 shadow-lg shadow-cyan-700/30 ring-1 ring-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="0.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-zinc-400"
                >
                  <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  <path d="M19 16v6"></path>
                  <path d="M16 19h6"></path>
                </svg>
              </div>
            </div>
            <div className="animate-slide-fade-in relative z-10 mx-auto mt-4 w-full max-w-sm px-4 pb-8">
              <div className="mb-6 text-center">
                <h1 className="mb-2 text-2xl font-bold text-zinc-200">
                  Request Access
                </h1>
                <span className="text-sm font-normal text-zinc-400">
                  Join our growing waitlist of 743 people and our team will
                  reach out to you as soon as possible.
                </span>
              </div>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="space-y-1">
                    <label
                      className="select-none text-sm leading-none text-zinc-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor=":r4g:-form-item"
                    >
                      Name
                    </label>
                    <input
                      placeholder="Enter your name"
                      data-1p-ignore="true"
                      data-lpignore="true"
                      className="relative w-full select-none appearance-none rounded-lg border border-white/10 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 transition duration-200 ease-in-out placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:ring-offset-1 focus:ring-offset-zinc-900 disabled:cursor-not-allowed disabled:opacity-70"
                      id=":r4g:-form-item"
                      aria-describedby=":r4g:-form-item-description"
                      aria-invalid="false"
                      name="name"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="space-y-1">
                    <label
                      className="select-none text-sm leading-none text-zinc-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor=":r4h:-form-item"
                    >
                      Email
                    </label>
                    <input
                      placeholder="Your email address"
                      data-1p-ignore="true"
                      data-lpignore="true"
                      className="relative w-full select-none appearance-none rounded-lg border border-white/10 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 transition duration-200 ease-in-out placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:ring-offset-1 focus:ring-offset-zinc-900 disabled:cursor-not-allowed disabled:opacity-70"
                      id=":r4h:-form-item"
                      aria-describedby=":r4h:-form-item-description"
                      aria-invalid="false"
                      name="email"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="space-y-1">
                    <label
                      className="select-none text-sm leading-none text-zinc-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="industry"
                    >
                      Industry
                    </label>
                    <button
                      type="button"
                      role="combobox"
                      aria-controls="radix-:r4j:"
                      aria-expanded="false"
                      aria-autocomplete="none"
                      dir="ltr"
                      data-state="closed"
                      data-placeholder=""
                      className="relative inline-flex h-10 w-full cursor-default select-none appearance-none items-center justify-between rounded-md border border-white/10 bg-zinc-900 pl-3 pr-1 text-sm text-zinc-300 focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:ring-offset-1 focus:ring-offset-zinc-900 disabled:cursor-not-allowed disabled:opacity-70"
                      id=":r4i:-form-item"
                      aria-describedby=":r4i:-form-item-description"
                      aria-invalid="false"
                    >
                      <span style={{ pointerEvents: "none" }}>
                        Select your industry
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="mr-1.5 size-4 text-zinc-400"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                    <select
                      name="industry"
                      // aria-hidden="true"
                      // tabIndex={-1}
                      style={{
                        position: "absolute",
                        border: "0px",
                        width: "1px",
                        height: "1px",
                        padding: "0px",
                        margin: "-1px",
                        overflow: "hidden",
                        // clip: "rect(0px, 0px, 0px, 0px)",
                        whiteSpace: "nowrap",
                        overflowWrap: "normal",
                      }}
                    >
                      <option value="Agriculture">Agriculture</option>
                      <option value="Construction">Construction</option>
                      <option value="Finance">Finance</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Nonprofits">Nonprofits</option>
                      <option value="Professional Services">
                        Professional Services
                      </option>
                      <option value="Property Management">
                        Property Management
                      </option>
                      <option value="Retail &amp; Ecommerce">
                        Retail &amp; Ecommerce
                      </option>
                      <option value="Software &amp; Technology">
                        Software &amp; Technology
                      </option>
                      <option value="Transportation">Transportation</option>
                      <option value="Wholesale">Wholesale</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <button
                  className="relative mt-4 inline-flex h-10 w-full select-none items-center justify-center gap-1 rounded-md border bg-zinc-200 !px-0 text-sm font-semibold text-zinc-950 transition duration-200 ease-in-out hover:bg-zinc-300/90 focus:bg-zinc-300/90 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-zinc-200"
                  type="submit"
                  // disabled=""
                >
                  <span className="relative z-10 inline-flex size-full items-center justify-center rounded-md bg-zinc-200 duration-150 hover:bg-zinc-300/90">
                    Request access
                  </span>
                  <span
                    className="animate-fade-in absolute size-full transform-gpu opacity-0 blur-[1rem]"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(219, 0, 255, 0.4) 0%, rgba(97, 0, 255, 0.6) 35%, rgba(20, 0, 255, 0.6) 65%, rgba(0, 255, 255, 0.4) 100%)",
                    }}
                  ></span>
                </button>
              </form>
            </div>
            <button
              className="absolute right-4 top-4 inline-flex size-6 items-center justify-center rounded bg-zinc-950 text-zinc-400 transition duration-200 ease-in-out hover:bg-zinc-800 hover:text-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-600"
              aria-label="Close"
              type="button"
              onClick={() => setOpen(false)}
            >
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.25 6.75L6.75 17.25"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M6.75 6.75L17.25 17.25"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
