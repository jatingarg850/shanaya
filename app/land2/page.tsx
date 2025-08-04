import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stitch Design</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
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
          </header>
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="@container">
                <div className="@[480px]:px-4 @[480px]:py-3">
                  <div
                    className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-80"
                    style={{
                      backgroundImage:
                        'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBkE9l5Qg-bgQBVzDtRMqMI005M2YulHPXecAgLP1J4vcjX0FaVUeMw0N4sgCdCGt0FEWpRpG-azktxJoSkiZbfiwKFFBld01xV49zMd6qi1x7mC03XHAVQPQs0iMMVgCi6X0x1yQyAObjMXGnNRMjSG3TBQCBNFtF2aYfj-jhyTfMsfUGn_eZv65OsWJ7wBDkOUAYqRD0-vf44rvqkL4xixztLYCLOT6kuglEOvtOqT02xDCu0jUXLY_UjJPCD81DyvQP1PLSl42h")',
                    }}
                  >
                    <div className="flex p-4">
                      <p className="text-white tracking-light text-[28px] font-bold leading-tight">
                        To the most amazing woman in my life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[#886388] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
                Subtle animations like floating hearts or stars.
              </p>

              <p className="text-[#181118] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
                I'm deeply sorry, Please forgive me, You mean the world to me, I can't imagine my life without you.
              </p>

              <h2 className="text-[#181118] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                A Message From My Heart
              </h2>

              <p className="text-[#181118] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
                Record or upload a short video message to express your feelings. Click the button below to start.
              </p>

              <div className="flex px-4 py-3 justify-center">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f4a3f4] text-[#181118] gap-2 pl-4 text-sm font-bold leading-normal tracking-[0.015em]">
                  <div className="text-[#181118]" data-icon="Video" data-size="20px" data-weight="regular">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z"></path>
                    </svg>
                  </div>
                  <span className="truncate">Record/Upload Video</span>
                </button>
              </div>

              <div className="p-4">
                <div
                  className="relative flex items-center justify-center bg-[#181118] bg-cover bg-center aspect-video rounded-xl p-4"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuArzeKxsjWqvmpvkcBqx1K49lTca2OSf0_q1dtQyR6Jvr0AO8dD7f3o0HQq2OSCphPQuLFek7Bglqanc9juj0l6tratOigsjzEv43JkGfb1yLpRW7HjlOzGzIanCp1ChikcsZpah4wF2PVZA59CbrE6SuxUMythbWJyHzijxVJJcGftlTyPOldOzlu1ZoE-13OSC4H29c89SShZ0FpsT-BCIaN-hoX8W7CWSpMqglWBcrYe8koiLQzYesVDNNuS9EQ9U1AW5C-3z4KI")',
                  }}
                >
                  <button className="flex shrink-0 items-center justify-center rounded-full size-16 bg-black/40 text-white">
                    <div className="text-inherit" data-icon="Play" data-size="24px" data-weight="fill">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
