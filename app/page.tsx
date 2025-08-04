"use client"
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stitch Design</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans:wght@400;500;700;900&family=Plus+Jakarta+Sans:wght@400;500;700;800"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
      </Head>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className='relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden'
        style={{ fontFamily: `"Plus Jakarta Sans", "Noto Sans", sans-serif` }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f0f3] px-10 py-3">
            <div className="flex items-center gap-4 text-[#181115]">
              <div className="size-4">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className="text-[#181115] text-lg font-bold leading-tight tracking-[-0.015em]">
                Forever &amp; Always
              </h2>
            </div>
            <nav className="flex items-center gap-9">
              <Link className="text-[#181115] text-sm font-medium leading-normal transition hover:text-pink-500" href="/">
                Home
              </Link>
              <Link className="text-[#181115] text-sm font-medium leading-normal transition hover:text-pink-500" href="/land">
                I'm Sorry
              </Link>
              <Link className="text-[#181115] text-sm font-medium leading-normal transition hover:text-pink-500" href="/land2">
                To My Love
              </Link>
              <Link className="text-[#181115] text-sm font-medium leading-normal transition hover:text-pink-500" href="/land3">
                LoveNotes
              </Link>
              <Link className="text-[#181115] text-sm font-medium leading-normal transition hover:text-pink-500" href="/land4">
                About Us
              </Link>
              <Link className="text-[#181115] text-sm font-medium leading-normal transition hover:text-pink-500" href="/land5">
                Forever Yours
              </Link>
            </nav>
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f4f0f3] text-[#181115] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
              aria-label="Toggle Music"
            >
              <div className="text-[#181115]" data-icon="MusicNote" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V98.75l69.7,20.91A8,8,0,0,0,216,112V64A8,8,0,0,0,210.3,56.34ZM88,216a32,32,0,1,1,32-32A32,32,0,0,1,88,216ZM200,101.25l-64-19.2V50.75L200,70Z" />
                </svg>
              </div>
            </button>
          </header>

          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="@container">
                <div className="@[480px]:p-4">
                  <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDevkZU9pgM10P6Ttbfq6zZc2mAkQXUMzwcD-8NIrf-Faf8nLnX_bemMw1YNjXmm0P4qFnFpjuKCI1qf8reilnE2T85HAvCVmrRrdMKbDOwDeFV7nU_U967gdNJjLf3ErKQBJx-Ai7Oa6i8WkcTrsrOYNX81tYM4EMHQrOH0qxjmxTzmyeLJOmcteJ01ppJQJYfcKVVw9mGBOZJLZ8-eHEbrnfV5I2VgTeqoLuNnJA_Pard19s6kXubkhAepg8_Xwl1jj-7wlz7JF_f")',
                    }}
                  >
                    <div className="flex flex-col gap-2 text-center">
                      <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                        To My One True Love
                      </h1>
                      <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                        Every moment with you is a treasure, and I cherish our journey together. Let's explore the memories we've created and the love that binds us.
                      </h2>
                    </div>
                    <Link href="/land" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#ef42a7] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                      <span className="truncate">Explore</span>
                    </Link>
                  </div>
                </div>
              </div>

              <h2 className="text-[#181115] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Quick Access
              </h2>

              <div className="flex justify-center">
                <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
                  <Link href="/land" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#ef42a7] text-white text-sm font-bold leading-normal tracking-[0.015em] grow">
                    <span className="truncate">Landing Page Content</span>
                  </Link>
                  <Link href="/land3" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f4f0f3] text-[#181115] text-sm font-bold leading-normal tracking-[0.015em] grow">
                    <span className="truncate">Our Memories</span>
                  </Link>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
                  <Link href="/land4" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#ef42a7] text-white text-sm font-bold leading-normal tracking-[0.015em] grow">
                    <span className="truncate">Reasons I Love You</span>
                  </Link>
                  <Link href="/land2" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f4f0f3] text-[#181115] text-sm font-bold leading-normal tracking-[0.015em] grow">
                    <span className="truncate">Message from me</span>
                  </Link>
                </div>
              </div>

              <div className="flex px-4 py-3 justify-center">
                <Link href="/land5" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#ef42a7] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Love Letter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
