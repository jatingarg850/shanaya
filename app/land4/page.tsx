import React from "react";
import Head from "next/head";
import Link from "next/link";

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
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f4f0f4] text-[#181118] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
              aria-label="Favorite"
            >
              <div className="text-[#181118]" data-icon="Heart" data-size="20px" data-weight="regular">
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
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTOQ6LM6S9BFoFJyMvfeFJ6qi7UwmsnREEMluczt2-vrXKrS4VfgeHY6VC5U75FYMx38IovsCPhNAj_W4AhWH8-5TWXRZsVodJb8uSVMOjK6qiNVApeuLmfb_z8eyPQ36CzxaFfEENMG9AD0Rz_0qzS3iUC6uXjclF_Ipl6TSCGevAJ0jT7pEV20RZXTYKLMA1KxP5p5wNULTwbLNKmNf-tDrwYc6TRZu9t8QVyyDF3UDIKtYR5itdBGEIaFD8BIJuTlc3d2xHdtHT")',
              }}
            ></div>
          </header>
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-[#181118] tracking-light text-[32px] font-bold leading-tight min-w-72">
                  Reasons I Adore You
                </p>
              </div>
              <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex items-stretch p-4 gap-3">
                  {[
                    {
                      image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuD4GHbm-jac47v04EVcf3bbkbhHjdw8FSZJA7hZsO2qVRxWnOeAh9VALJjo9bF7gmLQRsT6rwe5SNjAo8XyPsofNt3MOqFF62Wb7HDWEewka1wOasRd_57tUfuOf-pETNVXa64OgrTrweJcJFprRciU1kPmYFAcsex-c6jUg6thxT1CoZes8Ql__aSA43W8LjwSgIx4299xqax2j4zQnkwOG16j3epQAMTyJ6e9AAl6ekv4KFlSIiPXelg295KkzVm9ZfYoDC3TMlp9",
                      title: "Your infectious laugh",
                      desc: "Your laughter is like music to my ears, always brightening my day.",
                    },
                    {
                      image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuCCwy65SDcYYJ7_hURF7mQV3556V4drAPsKQ-r4557rFhA6O31fBcQkAZjslNvWrdKTqvoOQ6tgVpO4JUIKu1D8sukFWtoFBRiK1ffbfCovDVxgIhJqXbz2eRz3Ww4CuTNGMf-2EvO5RITpsvDnoNh2dY6qgbdLBBby8hconh5QHus1_WXsAKhifLx29QkxeRZuaHr6v09gghnWdihrkNvEl5xZ4AtH81LWPHObOMoDAattfir52d6Lo3keFWiKTgBNxlPuorGQgFhS",
                      title: "Your unwavering support",
                      desc: "You're my rock, always there to lift me up and believe in me.",
                    },
                    {
                      image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuAdhOyltuZXNlG2zhFCL472jI5R3yoOgC90iUZ69fLsTTKsB6MAzdmbFa6ZKR12XUX23D17g8aMaFtHC7zBmHwOxwZ-I7l1iRm6nhfbt54ZmhDwsnT3JcroivPRKgpuks3tZIDo_to4k8SPx87AzQqIBFaCuz4VaefbPlZf3EhHwu5YyINERyVJTQoAOnbMYBesh2cULOCxryj2ukfaOHrrVxp4KvJwn36YIa2cE5dwPdcCv8aJMrzxBT8msTNvAfVFV2Af4BrWWZ7v",
                      title: "Your beautiful smile",
                      desc: "Your smile lights up the room and warms my heart every time.",
                    },
                  ].map(({ image, title, desc }) => (
                    <div key={title} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                        style={{ backgroundImage: `url(${image})` }}
                      ></div>
                      <div>
                        <p className="text-[#181118] text-base font-medium leading-normal">{title}</p>
                        <p className="text-[#886388] text-sm font-normal leading-normal">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col p-4 gap-3">
                {[
                  {
                    summary: "Story behind your infectious laugh",
                    detail:
                      "I remember the first time I heard your laugh, it was like a melody that instantly made me smile. We were at the park, and you were trying to tell a joke but couldn't get through it without laughing yourself. It was contagious, and in that moment, I knew I wanted to hear that laugh every day for the rest of my life.",
                  },
                  {
                    summary: "Story behind your unwavering support",
                    detail:
                      "You're always my rock. I feel your support lifting me up to be the best version of myself. You're the reason I never give up.",
                  },
                  {
                    summary: "Story behind your beautiful smile",
                    detail:
                      "Your smile lights up the room and warms my heart. It's a daily reminder of the joy you bring into my life.",
                  },
                ].map(({ summary, detail }) => (
                  <details key={summary} className="flex flex-col rounded-xl bg-[#f4f0f4] px-4 py-2 group">
                    <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                      <p className="text-[#181118] text-sm font-medium leading-normal">{summary}</p>
                      <div className="text-[#181118] group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </div>
                    </summary>
                    <p className="text-[#886388] text-sm font-normal leading-normal pb-2">{detail}</p>
                  </details>
                ))}
              </div>
              <p className="text-[#886388] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
                Each reason is a testament to the incredible person you are. Thank you for being you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
