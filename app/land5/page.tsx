import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Forever Yours</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Serif:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
      </Head>

      <div
        className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
        style={{ fontFamily: `"Noto Serif", "Noto Sans", sans-serif` }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f0f3] px-10 py-3">
            <div className="flex items-center gap-4 text-[#181115]">
              <div className="size-4">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className="text-[#181115] text-lg font-bold leading-tight tracking-[-0.015em]">Forever Yours</h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
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
            </div>
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#f4f0f3] text-[#181115] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
              aria-label="Favorite"
            >
              <div className="text-[#181115]" data-icon="Heart" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"
                  ></path>
                </svg>
              </div>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJekj-FWGN1rPY2kioyqmX66Ix1j3gyFvPvZ4Mxhj-xNv0Obbqkfc-gsw8XnNQg_xUUpfkxoDeRd2erwhJ6lnDl7hg_JoYehv3IBDFv1m33RsuSxex4D8GFY5O3ppEoNfBAilCxDgCphNRb3gN41ZUAx0nxB5B05vPlqR3i_4NIM7U5YT2oZdHs6tAWmt8X-g2PiNIkWwRcUP_x4uoJEGW_-qwcXvxx6Ifttk8TqzrAI8GnSbQEDx72dT_3TY_jlR-IkCZBjKsvbsb")',
              }}
            ></div>
          </header>

          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                  <p className="text-[#181115] tracking-light text-[32px] font-bold leading-tight">My Dearest Shanaya,</p>
                  <p className="text-[#88637c] text-sm font-normal leading-normal">
                    Words can hardly express the depth of my feelings for you, especially now, as I reflect on the recent misunderstanding between us. I am writing this letter
                    with a heart full of remorse and a soul yearning for your forgiveness. Please, allow me to convey the sincerity of my apologies and the unwavering strength of my
                    love.
                  </p>
                </div>
              </div>

              <p className="text-[#181115] text-base font-normal leading-normal pb-3 pt-1 px-4">
                From the moment our paths intertwined, you have been the guiding star in my life's journey. Your laughter is the melody that brightens my darkest days, and your presence
                is the warmth that melts away the coldest nights. You are the embodiment of grace, kindness, and strength, and I am eternally grateful for the love you have so generously
                shared with me.
              </p>

              <p className="text-[#181115] text-base font-normal leading-normal pb-3 pt-1 px-4">
                I understand that my actions have caused you pain, and for that, I am truly sorry. I never intended to hurt you, my love, and the thought of causing you distress weighs
                heavily on my heart. I value our relationship above all else, and the prospect of losing you is unbearable. I cherish every moment we've spent together, from the simplest
                of conversations to the grandest of adventures, and I long for the day when we can once again share those moments without the shadow of this misunderstanding.
              </p>

              <p className="text-[#181115] text-base font-normal leading-normal pb-3 pt-1 px-4">
                I promise to learn from this experience and to be more mindful of your feelings in the future. Your happiness is my utmost priority, and I will strive to be the partner
                you deserve. Please, my love, give me the chance to make things right. Allow me to show you the depth of my commitment and the sincerity of my love. I am ready to do
                whatever it takes to earn back your trust and to rebuild the foundation of our relationship.
              </p>

              <p className="text-[#181115] text-base font-normal leading-normal pb-3 pt-1 px-4">With all my love and deepest apologies,</p>

              <p className="text-[#181115] text-base font-normal leading-normal pb-3 pt-1 px-4">Jatin Garg</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
