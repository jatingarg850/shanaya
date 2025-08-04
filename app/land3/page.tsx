import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>LoveNotes</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans:wght@400;500;700;900&family=Plus+Jakarta+Sans:wght@400;500;700;800"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
      </Head>

      <div
        className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
        style={{ fontFamily: `"Plus Jakarta Sans", "Noto Sans", sans-serif` }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f0f4] px-10 py-3">
            <div className="flex items-center gap-4 text-[#181118]">
              <div className="size-4">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className="text-[#181118] text-lg font-bold leading-tight tracking-[-0.015em]">LoveNotes</h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
              <nav className="flex items-center gap-9">
                <Link className="text-[#181118] text-sm font-medium leading-normal transition hover:text-pink-500" href="/">
                  Home
                </Link>
                <Link className="text-[#181118] text-sm font-medium leading-normal transition hover:text-pink-500" href="/land">
                  I'm Sorry
                </Link>
                <Link className="text-[#181118] text-sm font-medium leading-normal transition hover:text-pink-500" href="/land2">
                  To My Love
                </Link>
                <Link className="text-[#181118] text-sm font-medium leading-normal transition hover:text-pink-500" href="/land3">
                  LoveNotes
                </Link>
                <Link className="text-[#181118] text-sm font-medium leading-normal transition hover:text-pink-500" href="/land4">
                  About Us
                </Link>
                <Link className="text-[#181118] text-sm font-medium leading-normal transition hover:text-pink-500" href="/land5">
                  Forever Yours
                </Link>
              </nav>
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUa9eG0qCa4gP1GABaGSB4cmA1zyHbYTACY7w4YkO919jQjbf2AX9htdmyab-0jzgor9htN8gkqwxC4Cvj7HQi_wKeCmCID_BQbktzar4YNquwp0-qPOwvPkwbtlJdxWpO7DwK-jDW37-rNsRDT9SllrsROXctPZbuk6v6QX0Cl-GSG0dZhTBBv6JpQDYW9Z1zKxoNeTrWdo7imusC1HQk-4Ww7wY4KxjGah73o2UxANJ6kvKq1LJ5jlH8hXBnZyMe1dW7iemEnFum")',
              }}
            ></div>
          </header>

          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <h2 className="text-[#181118] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
                Our Cherished Moments
              </h2>
              <p className="text-[#181118] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
                A collection of our most precious memories, each a testament to our journey together.
              </p>
              <h2 className="text-[#181118] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Story</h2>

              <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
                {[
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
                      </svg>
                    ),
                    title: "First Date",
                    desc: "The beginning of our beautiful story.",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M240,126.63A112.44,112.44,0,0,0,51.75,53.75a111.56,111.56,0,0,0-35.7,72.88A16,16,0,0,0,32,144h88v56a32,32,0,0,0,64,0,8,8,0,0,0-16,0,16,16,0,0,1-32,0V144h88a16,16,0,0,0,16-17.37ZM32,128l0,0a96.15,96.15,0,0,1,76.2-85.89C96.48,58,81.85,86.11,80.17,128Zm64.15,0c1.39-30.77,10.53-52.81,18.3-66.24A106.44,106.44,0,0,1,128,43.16a106.31,106.31,0,0,1,13.52,18.6C154.8,84.7,159,109.28,159.82,128Zm79.65,0c-1.68-41.89-16.31-70-28-85.94A96.07,96.07,0,0,1,224,128Z" />
                      </svg>
                    ),
                    title: "Jagat Market",
                    desc: "Sun, sand, and endless laughter.",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M164,80a28,28,0,1,0-28-28A28,28,0,0,0,164,80Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,40Zm90.88,155.92-54.56-92.08A15.87,15.87,0,0,0,186.55,96h0a15.85,15.85,0,0,0-13.76,7.84L146.63,148l-44.84-76.1a16,16,0,0,0-27.58,0L1.11,195.94A8,8,0,0,0,8,208H248a8,8,0,0,0,6.88-12.08ZM88,80l23.57,40H64.43ZM22,192l33-56h66l18.74,31.8,0,0L154,192Zm150.57,0-16.66-28.28L186.55,112,234,192Z" />
                      </svg>
                    ),
                    title: "Venice Mall",
                    desc: "Conquering peaks and creating memories.",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z" />
                      </svg>
                    ),
                    title: "Iskcon Temple",
                    desc: "Discovering new places, hand in hand.",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M240,106.17V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72v34.17A16,16,0,0,0,8,120v48a16,16,0,0,0,16,16h8v16a8,8,0,0,0,16,0V184H208v16a8,8,0,0,0,16,0V184h8a16,16,0,0,0,16-16V120A16,16,0,0,0,240,106.17ZM224,104h-8a16,16,0,0,0-16,16v16H136V72h88ZM120,72v64H56V120a16,16,0,0,0-16-16H32V72Zm112,96H24V120H40v16a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V120h16Z" />
                      </svg>
                    ),
                    title: "Playing Games",
                    desc: "Quiet moments, filled with love.",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M184,20a12,12,0,1,1,12,12A12,12,0,0,1,184,20ZM164.12,73.23c7.26,44.25,4.35,75.76-8.66,93.66A39.94,39.94,0,0,1,128,183.42V232h16a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h16V183.42a40,40,0,0,1-27.46-16.53c-13-17.9-15.91-49.41-8.65-93.66A451,451,0,0,1,90.1,13.53,8,8,0,0,1,97.71,8H142.3a8,8,0,0,1,7.61,5.53A451,451,0,0,1,164.12,73.23ZM93.8,64h52.4c-3-15.58-6.72-29.81-9.78-40H103.59C100.53,34.19,96.83,48.42,93.8,64ZM149,80H91c-4.49,30-5.14,61.54,6.45,77.49C102.63,164.56,110,168,120,168s17.38-3.44,22.52-10.51C154.1,141.54,153.46,110,149,80Zm71-40a12,12,0,1,0,12,12A12,12,0,0,0,220,40ZM196,88a12,12,0,1,0,12,12A12,12,0,0,0,196,88Z" />
                      </svg>
                    ),
                    title: "Ashram Visit",
                    desc: "Toasting to us and our future.",
                  },
                ].map(({ icon, title, desc }, i) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center gap-1 pt-3">
                      {icon}
                      <div className="w-[1.5px] bg-[#e5dce5] h-2 grow"></div>
                    </div>
                    <div className="flex flex-1 flex-col py-3">
                      <p className="text-[#181118] text-base font-medium leading-normal">{title}</p>
                      <p className="text-[#886388] text-base font-normal leading-normal">{desc}</p>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              <div className="px-4 py-3">
                <div className="flex flex-col gap-3 rounded-xl bg-[#f4f0f4] px-4 py-3">
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-[#181118] text-base font-bold leading-tight truncate">Our Song</p>
                      <p className="text-[#886388] text-sm font-normal leading-normal truncate">Instrumental Love Tunes</p>
                    </div>
                    <button className="flex shrink-0 items-center justify-center rounded-full size-10 bg-[#f5a3f5] text-[#181118]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
