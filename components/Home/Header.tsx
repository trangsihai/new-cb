interface IProps {
  onOpenAccess: () => void;
}

export default function Header(props: IProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <div className="relative flex justify-center">
        <div className="mx-4 w-full max-w-7xl">
          <nav
            className="flex min-h-20 items-center justify-between px-4 py-3"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="/">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 75 20"
                  className="h-6"
                >
                  <path
                    d="M13.09 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                    fill="#006ADC"
                  ></path>
                  <path
                    d="M10.59 18.25c3.1 0 5.8-1.71 7.21-4.24l1.6.71a10 10 0 1 1 0-9.44L17.8 6a8.25 8.25 0 1 0-7.21 12.25Z"
                    fill="#fff"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.59 16.25a6.25 6.25 0 1 0 0-12.5 6.25 6.25 0 0 0 0 12.5Zm0-1.75a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm38.14.64a2.9 2.9 0 0 1-1.8-.52 3.29 3.29 0 0 1-1-1.32c-.11-.3-.2-.6-.28-.9v2.5h-2.04V1.5h2.04v6.26c.08-.31.18-.62.3-.92.23-.55.57-.99 1.02-1.32a2.89 2.89 0 0 1 1.8-.52c.8 0 1.5.2 2.08.62.59.41 1.04 1 1.36 1.76.32.75.48 1.64.48 2.68 0 1.03-.16 1.92-.48 2.68a4.05 4.05 0 0 1-1.38 1.78c-.58.41-1.28.62-2.1.62Zm-2.86-3.02a4.23 4.23 0 0 1-.22-1.42V9.44c0-.53.08-1 .22-1.42.16-.41.42-.74.76-.98.35-.24.8-.36 1.36-.36.75 0 1.37.27 1.86.82.51.55.76 1.4.76 2.56 0 1.15-.25 2-.76 2.56-.49.56-1.11.84-1.86.84-.56 0-1.01-.12-1.36-.36-.34-.24-.6-.57-.76-.98Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M25.18 14.48c.7.41 1.51.62 2.46.62 1.25 0 2.25-.31 3-.94a4.38 4.38 0 0 0 1.5-2.36l-1.9-.88c-.1.73-.34 1.33-.74 1.8-.4.45-1 .68-1.82.68-.53 0-1-.13-1.4-.38a2.6 2.6 0 0 1-.9-1.14 5 5 0 0 1-.3-1.84c0-.7.1-1.3.3-1.8.21-.5.51-.89.9-1.14.4-.27.87-.4 1.4-.4.81 0 1.42.23 1.82.7.4.45.65 1.04.74 1.76l1.9-.86a4.38 4.38 0 0 0-1.5-2.36 4.52 4.52 0 0 0-3-.94c-.95 0-1.77.2-2.46.62-.7.41-1.23 1-1.62 1.76a5.96 5.96 0 0 0-.56 2.66c0 1.01.19 1.9.56 2.66.39.76.93 1.35 1.62 1.78Z"
                    fill="#fff"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M34.93 14.48c.7.41 1.52.62 2.42.62a4.32 4.32 0 0 0 4.08-2.4c.4-.76.6-1.65.6-2.66 0-1.01-.2-1.9-.6-2.66a4.19 4.19 0 0 0-1.64-1.76A4.74 4.74 0 0 0 37.35 5c-.9 0-1.71.2-2.42.62-.7.41-1.25 1-1.64 1.76a5.8 5.8 0 0 0-.58 2.66c0 1.01.2 1.9.58 2.66a4.4 4.4 0 0 0 1.64 1.78Zm3.78-1.44c-.38.24-.83.36-1.34.36-.5 0-.95-.12-1.34-.36-.38-.24-.7-.6-.92-1.1a4.82 4.82 0 0 1-.32-1.9c0-.77.1-1.4.32-1.9.23-.5.54-.86.92-1.1.39-.24.84-.36 1.34-.36.5 0 .96.12 1.34.36.4.24.7.6.92 1.1.23.5.34 1.13.34 1.9s-.11 1.4-.34 1.9c-.21.5-.52.86-.92 1.1Zm22.58 1.86h1.28v-1.78h-.62a.6.6 0 0 1-.4-.12c-.08-.1-.12-.25-.12-.46V8.76c0-1.19-.33-2.1-.98-2.76-.64-.67-1.56-1-2.76-1a5.24 5.24 0 0 0-4.34 2.18l1.3 1.44a3.7 3.7 0 0 1 1.1-1.3 2.86 2.86 0 0 1 1.72-.52c.8 0 1.33.2 1.58.6.22.33.35.72.39 1.18l-3.35 1.46c-.75.3-1.35.68-1.8 1.12-.44.44-.66 1-.66 1.66 0 .68.23 1.23.68 1.66a2.7 2.7 0 0 0 1.88.62 3.07 3.07 0 0 0 2.84-1.62c.21-.37.37-.74.46-1.1v.64c0 .47.08.84.24 1.12.16.27.37.46.64.58.28.12.59.18.92.18Zm-1.8-3.74V10l-2.62 1.22c-.44.2-.76.4-.96.6a1 1 0 0 0-.28.7c0 .3.1.53.3.7.21.16.53.24.96.24.39 0 .73-.05 1.04-.16a2.19 2.19 0 0 0 1.56-2.14Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M65.96 14.9h-2.04V1.5h2.04v13.4Zm3.84-.12c.42.23.93.34 1.51.34a3.3 3.3 0 0 0 2.74-1.28l-.64-1.9c-.14.28-.36.56-.64.84-.28.27-.6.4-1 .4-.36 0-.66-.1-.9-.28-.22-.19-.34-.56-.34-1.12v-5h3.06V5.2h-3.06V2.62L68.5 3.98V5.2h-1.54v1.58h1.54v5.54c0 .56.12 1.05.34 1.48.23.41.55.74.96.98Z"
                    fill="#fff"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-4 text-sm font-medium text-zinc-300 transition hover:text-zinc-100 sm:space-x-6">
              <a href="/blog">Blog</a>
              <button
                className="hover:shadow-glow group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:R19la:"
                data-state="closed"
                data-modal-target="static-modal"
                data-modal-toggle="static-modal"
                onClick={props.onOpenAccess}
              >
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                </span>
                <div className="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10">
                  Join the waitlist
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}