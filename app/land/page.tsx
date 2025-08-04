import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stitch Design</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans:wght@400;500;700;900&family=Plus+Jakarta+Sans:wght@400;500;700;800"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
      </Head>

      <div
        className='relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden'
        style={{
          ...(typeof window !== "undefined" && {
            ["--checkbox-tick-svg" as any]:
              "url('data:image/svg+xml,%3csvg ... %3e%3c/svg%3e')",
          }),
        }}
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
              <h1 className="text-[#181118] tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
                I’m Sorry, My Love
              </h1>

              <div className="p-4">
                <div
                  className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[132px]"
                  style={{
                    backgroundImage:
                      'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFOva3vhpXQIzpXoYnn8vZlvtj34sRyYQ1tedVTkOpltYgTloCe0xOsNYDekgXZXzPHkqafORlclKo-Tptordsfal1z7dVdzH1CcwLbOkQRXGQV2ZGru5kbHRiPoyM38HA497AEQ_7VaC-hEfMQrmfmiLioC3hOyRGZLnwnSua51_G6hUNeEXM86Exk4G72WsfVhlyAa6_KZRaH9jd1LR1qv_Kgp-hr8xcRU3L-o5uOaTJhwtolaJESxe9Oa2QxTBJa59-iqOq-yGA")',
                  }}
                >
                  <div className="flex w-full items-end justify-between gap-4 p-4">
                    <p className="text-white tracking-light text-2xl font-bold leading-tight flex-1">
                      You are my top and only priority. I promise no one and nothing will ever come before you. I’m truly sorry, and I’ll always care for you.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-[#181118] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Our Best Moments
              </h2>

              <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex items-stretch p-4 gap-3">
                  {[
                    {
                      image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuBswPpXbhj0XmJtD_cGCCI5QfIAufZ-tl03FbhjsEBWA6k24ueSfLtJY_1C7_w7J3o_6CbKvIG2StSdWpEgmFmks-OvAD5fpLQq5RbTqweIfb3RPF1dG2KY9uf4c_WqYFlYV2-7_eym3k2KPJT6Ie0_EVqZiuClKduDSzacAGDcLwoa96yVbAhiOho0G7VZ5IygVVTaHiAWEoyFJ8ix8XvXwSrbPyljivaINPirMQ4iPygAnHAXgG9zdns7r_Aru5bSImqWEVe-wqDD",
                      label: "Temple visit",
                    },
                    {
                      image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuAdspxa9NcKcI4s7oceIrZCbshpdh3yZlce9vlHESISpwrKKqBJ93PlTXbPlvOu3WgmHakRAUfBifiu_vsNsQ6ZshoWukv1xOYMH3pSydDfFhVip5q3NI-0tJ6wUfJVZZG3FEiJG8nSRSAxJjrygIhcQY23ye3cfBMOc068XVoEcrFlsUY5zHQ67v9crm1T4VFgjFO-weTUBTvqICFk-xh9rgg1-wQrRFwdQf68tMFqzG2vqj8E47NQOv3dX_HbMy3doBY7s-OrSWx6",
                      label: "Movie Night",
                    },
                    {
                      image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuAdz1xtDMLOY3MLt7r9KPgPcfaBuyFmUNaq1n0X91sajKlKp70KKv1d68B2QQGluTcYZ1Kud_TEHT_LLocxW-8nawi47p051K9Fho5EyRYnrGNsBs3zlHfY6ed8Qs263Ok3wpEVdZPVH1IKiIRKR9TzkuKfZCmHjSfK-2iDKqquXms14fnjExvaKuXN1ti5gWk6iacIcueOauWT7Ns2IFXhmaWDCBZBjVB8onGxzzgC3KrJMoFsXnUwoW2gjOi-yyWkae7utrlB8HsE",
                      label: "Vacation",
                    },
                    {
                      image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuCLzq9NTp8qbmuWxc-MQWFWLi_-XYWfyQ_16557YLCbyN7AiQyYCGXROHyDcQSH1--RYhx-T5b_mfAM1J87IVohnoLPQslaxuwISKdZ6bfwijcXJQt-260R1SYcWL67QDEfCpNuKDJpSgRGrHksIiIL8_90qcCtQVJAQlVXG9WBORPaqPZBKZbk68GUrvdindd8_i2-C1C7W03ikaKUusL4uT6n5hQXa_ZXniYVIq-65OptIttrR5QP8ElWkgSsTULBazT_HTAIcs5b",
                      label: "Special Gift",
                    },
                  ].map(({ image, label }) => (
                    <div key={label} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                        style={{ backgroundImage: `url(${image})` }}
                      ></div>
                      <p className="text-[#181118] text-base font-medium leading-normal">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="text-[#181118] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">A Letter to You</h2>

              <div className="p-4">
                <div
                  className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[132px]"
                  style={{
                    backgroundImage:
                      'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDv2XGZHm_jqL4oikE-SDD1bCgYkC-vfOFnQdJdgMFv57LciRsD5wciR-yrSes8Qb-tpR0rdpEvBV-Dk6c0ddo1dLCO9FWyCOyA_y5dYcX3Vs0n6qX6m0YebujNoBtTfB24kP6L9QXyboXWm_8PZiOudBfBB3r_M-iyPDIIo8Ri1w-lHPDgYLhHKmbi0K0wiDyYz8wxtspQBzXY1Tr-grY9-hHxxlg5_HMulOZ95RbNjkkCBunCp5WI85hH9zvOvLkq-_iXhOT7U4Ix")',
                  }}
                >
                  <div className="flex w-full items-end justify-between gap-4 p-4">
                    <p className="text-white tracking-light text-2xl font-bold leading-tight flex-1">
                      My Dearest, Words can't express how deeply sorry I am. You are the light of my life, and hurting you is the last thing I ever want to do. Please know that my
                      love for you is unwavering, and I cherish every moment we share. I promise to be better, to listen more, and to always put your happiness first. Forgive me, my
                      love, and let us continue our journey together, stronger than ever.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex px-4 py-3 justify-center">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#e519e5] text-white text-base font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Will You Forgive Me?</span>
                </button>
              </div>

              <h2 className="text-[#181118] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">My Promises</h2>

              <div className="px-4">
                {[
                  "Always listen to you",
                  "Never let you feel alone",
                  "Put you first every day",
                ].map((promise) => (
                  <label key={promise} className="flex gap-x-3 py-3 flex-row cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-5 w-5 rounded border-[#e5dce5] border-2 bg-transparent text-[#e519e5] checked:bg-[#e519e5] checked:border-[#e519e5] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e5dce5] focus:outline-none"
                    />
                    <p className="text-[#181118] text-base font-normal leading-normal">{promise}</p>
                  </label>
                ))}
              </div>

              <div className="flex px-4 py-3 justify-center">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f4f0f4] text-[#181118] gap-2 pl-4 text-sm font-bold leading-normal tracking-[0.015em]">
                  <div className="text-[#181118]" data-icon="Heart" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
                    </svg>
                  </div>
                  <span className="truncate">Send a Virtual Hug</span>
                </button>
              </div>

              <div className="px-4 py-3">
                <div className="flex flex-col gap-3 rounded-xl bg-[#f4f0f4] px-4 py-3">
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 shrink-0"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAUb-JXkpqE6bjTnqWACrFmXeoPPXbZY3qLFKGaKwVYTE1gM1ozZlIl0IzvQ8TWsLg_B5oL9-6DjeXsBIdH1edHc3w4U0TOgvYyNeCYrn-ABRJE1QdguAZnzLrMgML35uSSIbuzQQCvBOJkyua9A_WchnvuPhdC-TtTs1-5V7MAmGaN5aODKgaZhFPpQF_TnM1a-UPE_BdymceX0CeG64SYjfQ-yncY8NXurd4ColFCym6-T-3ZKDHCEAClHB0zSOYkm-kNrFgIxz6")',
                      }}
                    ></div>
                    <div className="flex-1">
                      <p className="text-[#181118] text-base font-bold leading-tight truncate">Romantic Tune</p>
                      <p className="text-[#886388] text-sm font-normal leading-normal truncate">Soft Instrumental</p>
                    </div>
                    <button className="flex shrink-0 items-center justify-center rounded-full size-10 bg-[#e519e5] text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full" style={{ height: 32 }}></div>

              <div className="flex w-full grow bg-white @container p-4">
                <div className="w-full gap-1 overflow-hidden bg-white @[480px]:gap-2 aspect-[3/2] rounded-xl flex">
                  <div
                    className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuABJ10gsz5I73e1yzmZ78hDS1SURnkkEYdVxR4u4eRamGlk5KUJgIHmzW9666bOtueziLUjA_ju7Jm6CPXoyp2URRrqg1Wji3caejAHEEPZMCh5eX3pSZxn9xsnidaI1aQ0nJDrG1nfC8D_8OLuvlG9OvFqpwfu6JQX6PiE_iG93fWWIdvNFYawbZZhvWIhT2krPG4H1rYrkaTvwsoE1SVwb-o2ozPxhslmuSKYqebHzc1lYKhcIVgIJmqKhpyiukdTDbvv381LoXfH")',
                    }}
                  ></div>
                </div>
              </div>

              <p className="text-[#886388] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">I really love you.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
