import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import './index.css';


function MainPage() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
  };

  const getOpacityClass = (language) => {
    return selectedLanguage === language ? 'opacity-100' : 'opacity-50';
  };

  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}">
      <div className="flex justify-center items-center min-h-screen bg-[#1A1A2E] text-white">
        <div className="max-w-5xl w-full p-5">
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
              <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <a href="/">Leonardo Lanaia</a>
                  </h1>
                  <h2 className="textmt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl-lg">
                    {t('jobTitle')}
                  </h2>
                  <p className="mt-4 max-w-xs leading-normal text-slate-200 text-opacity-50">
                    {t('introText')}
                  </p>
                  <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                      <li>
                        <a className="group flex items-center py-3 active" href="#about">
                          <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                          <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ">
                            {t('aboutNav')}
                          </span>
                        </a>
                      </li>
                      <li>
                        <a className="group flex items-center py-3" href="#experience">
                          <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                          <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                            {t('experienceNav')}
                          </span>
                        </a>
                      </li>
                      <li>
                        <a className="group flex items-center py-3" href="#projects">
                          <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                          <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                            {t('projectsNav')}
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                 {/* Language buttons */}
                 <ul className="ml-1 mt-8 flex items-center" aria-label="Languages">
                  {/* English */}
                  <li className="mr-5 text-xs shrink-0">
                    <button
                      className="block hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 hover:bg-white hover:bg-opacity-10 transform hover:scale-110 transition duration-300"
                      onClick={() => changeLanguage('en')}
                      aria-label="English Language"
                      title="English"
                    >
                      <span className="sr-only">English</span>
                      <svg className={`w-6 h-6 ${getOpacityClass('en')}`} xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 512 512"><g fillRule="nonzero"><path fill="#fff" d="M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.5 124.46-69.29 167.25l-1.18 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.23 0-124.37-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24C131.55 45.96 190.7 19.48 256 19.48z"/><path fill="#FEFEFE" d="M256 39.59c119.52 0 216.41 96.89 216.41 216.4 0 119.52-96.89 216.42-216.41 216.42-119.51 0-216.4-96.9-216.4-216.42 0-119.51 96.89-216.4 216.4-216.4z"/><path fill="#012169" d="M183.49 179.55V52.05c-41.32 14.7-76.85 41.61-102.27 76.35l102.27 51.15zm0 152.9v127.5c-41.3-14.7-76.82-41.59-102.26-76.35l102.26-51.15zm144.55 0v127.67c41.45-14.63 77.09-41.54 102.61-76.34l-102.61-51.33zm0-152.9V51.88c41.45 14.63 77.11 41.54 102.62 76.35l-102.62 51.32z"/><path fill="#C8102E" d="M448.3 328.16h-48.11l49.35 24.72c3.21-6.41 6.11-13 8.69-19.75l-9.93-4.97zm-9.34-187.76-86.42 43.33h48.11l48.95-24.5c-3.23-6.46-6.79-12.75-10.64-18.83zM212.41 299.26v168.75c14.08 2.87 28.66 4.4 43.59 4.4 14.76 0 29.19-1.49 43.13-4.3V299.26h168.94c2.83-13.98 4.34-28.44 4.34-43.27 0-14.88-1.51-29.42-4.37-43.47H299.13V43.9A217.404 217.404 0 0 0 256 39.59c-14.93 0-29.51 1.54-43.59 4.4v168.53H43.97a217.777 217.777 0 0 0-4.37 43.47c0 14.83 1.51 29.29 4.34 43.27h168.47zM63.12 183.84h48.11l-48.89-24.48c-3.2 6.41-6.11 13.02-8.68 19.76l9.46 4.72zm95.87 144.43h-48.11l-48.57 24.31A216.76 216.76 0 0 0 73 371.52l86.43-43.25h-.44z"/></g></svg>
                      
                    </button>
                  </li>
                  {/* German */}
                  <li className="mr-5 text-xs shrink-0">
                    <button
                      className="block hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 hover:bg-white hover:bg-opacity-10 transform hover:scale-110 transition duration-300"
                      onClick={() => changeLanguage('de')}
                      aria-label="German Language"
                      title="German"
                    >
                      <span className="sr-only">German</span>
                      <svg className={`w-6 h-6 ${getOpacityClass('de')}`} height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path style={{ fill: "#FFDA44" }} d="M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957L256,322.783 L15.923,345.043z" />
                        <path d="M256,0C145.929,0,52.094,69.472,15.923,166.957L256,189.217l240.077-22.261C459.906,69.472,366.071,0,256,0z" />
                        <path style={{ fill: "#D80027" }} d="M15.923,166.957C5.633,194.69,0,224.686,0,256s5.633,61.31,15.923,89.043h480.155 C506.368,317.31,512,287.314,512,256s-5.632-61.31-15.923-89.043H15.923z" />
                      </svg>
                    </button>
                  </li>
                  {/* Italian */}
                  <li className="mr-5 text-xs shrink-0">
                    <button
                      className="block hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 hover:bg-white hover:bg-opacity-10 transform hover:scale-110 transition duration-300"
                      onClick={() => changeLanguage('it')}
                      aria-label="Italian Language"
                      title="Italian"
                    >
                      <span className="sr-only">Italian</span>
                      <svg className={`w-6 h-6 ${getOpacityClass('it')}`} width="24" height="24" viewBox="0 0 95 95">
                        <g style={{ stroke: "none", strokeWidth: "0", strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", fill: "none", fillRule: "nonzero", opacity: "1", transform: "translate(1.41 1.41) scale(2.81)" }}>
                          <path d="M 60 2.571 v 84.859 c 17.466 -6.175 29.985 -22.818 30 -42.396 v -0.068 C 89.985 25.389 77.465 8.745 60 2.571 z" style={{ fill: "rgb(206,43,55)" }} />
                          <path d="M 30 87.429 V 2.571 C 12.524 8.75 0 25.408 0 45 S 12.524 81.25 30 87.429 z" style={{ fill: "rgb(0,146,70)" }} />
                          <path d="M 30 87.429 C 34.693 89.088 39.739 90 45 90 c 5.261 0 10.307 -0.911 15 -2.571 V 2.571 C 55.307 0.911 50.261 0 45 0 c -5.261 0 -10.307 0.912 -15 2.571 V 87.429 z" style={{ fill: "rgb(243,244,245)" }} />
                        </g>
                      </svg>

                    </button>
                  </li>
                </ul>

                {/*social media*/}
                <ul className="ml-1 mt-8 flex items-center" aria-label="Social Media">
                  <li className="mr-5 text-xs shrink-0">
                    <a className="block text-slate-400 hover:text-slate-200 text-opacity-50 hover:text-opacity-100"href="https://github.com/DarkVisor5" target="_blank" rel="noreferrer noopener" aria-label="Github (new tab)" title="Github">
                      <span className="sr-only">Github</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                      </svg>
                    </a>
                  </li>
                  <li className="mr-5 text-xs shrink-0">
                    <a className="block text-slate-400 hover:text-slate-200 text-opacity-50 hover:text-opacity-100" href="https://www.linkedin.com/in/leonardo-lanaia-31039a83/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden='true'>
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                    </a>
                  </li>
                  <li className="mr-5 text-xs shrink-0">
                    <a className="block text-slate-400 hover:text-slate-200 text-opacity-50 hover:text-opacity-100" href="https://www.instagram.com/lanaia.leonardo/" target="_blank" rel="noreferrer noopener" aria-label="Instagram(opens in a new tab)" title="Instagram">
                      <span className="sr-only">Instagram</span>
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 6.346 19.654 5 18 5 L 8 5 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                      </svg>
                    </a>
                  </li>
                  <li className="mr-5 text-xs shrink-0">
                    <a className="block text-slate-400 hover:text-slate-200 text-opacity-50 hover:text-opacity-100" href="https://twitter.com/LeoLanaia" target="_blank" rel="noreferrer noopener" aria-label="Twitter (opens a new tab)" title="Twitter">
                      <span className="sr-only">Twitter</span>
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"></path>
                      </svg>
                    </a>
                  </li>
                  <li className="mr-5 text-xs shrink-0">
                    <a className="block text-slate-400 hover:text-slate-200 text-opacity-50 hover:text-opacity-100" href="https://medium.com/@lanaialeonardo" target="_blank" rel="noreferrer noopener" aria-label="Medium (opens a new tab)" title="Medium">
                      <span className="sr-only">Medium</span>
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" fill="currentColor">
                        <path d="M15 14c6.065 0 11 4.935 11 11s-4.935 11-11 11S4 31.065 4 25 8.935 14 15 14M15 12C7.82 12 2 17.82 2 25s5.82 13 13 13 13-5.82 13-13S22.18 12 15 12L15 12zM35.5 15c2.124 0 4.5 4.277 4.5 10s-2.376 10-4.5 10S31 30.723 31 25 33.376 15 35.5 15M35.5 13c-3.59 0-6.5 5.373-6.5 12s2.91 12 6.5 12S42 31.627 42 25 39.09 13 35.5 13L35.5 13zM46.377 15.667h.005H46.377M45.5 18.577C45.78 20.158 46 22.327 46 25s-.22 4.842-.5 6.423C45.22 29.842 45 27.673 45 25S45.22 20.158 45.5 18.577M45.5 14c-1.381 0-2.5 4.925-2.5 11s1.119 11 2.5 11S48 31.075 48 25 46.881 14 45.5 14L45.5 14z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
               
              </header>
              <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
                <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 lg:top-auto lg:max-auto lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
                  </div>
                  <div>
                    <p className="mb-4 text-slate-200 text-opacity-50">
                      <Trans i18nKey="about">
                        As a Customer Service Agent employed by <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://jobs.concentrix.com/germany/de/ueber-uns/?utm_source=google_cpc&utm_medium=search_dsa&utm_campaign=vonq_webhelp_recruitment_marketing_germany&gad_source=1" target="_blank" rel="noreferrer noopener" aria-label="social media(opens a new tab)">Concentrix</a> for major <a className="font-medium text-slate-200 hover:text-teal-300" href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener" aria-label="social media(opens a new tab)">social</a> <a className="font-medium text-slate-200 hover:text-teal-300" href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener" aria-label="social media(opens a new tab)">media</a> platforms, I often helped customers with issues related to ads and pixel scripts. Curious about how these JavaScript snippets worked, I began learning about web development, starting with the fascinating details of how a website's head and body elements function. This sparked my interest in the field, and I decided to take an online course with CareerFoundry.
                      </Trans>
                    </p>
                    <p className="mb-4 text-slate-200 text-opacity-50">
                      <Trans i18nKey="about2">
                        During the course, I completed six main projects. I learned the basics of web development, built a MongoDB database, created a functional API, and developed two front-end interfaces using React and Angular. I also created a chat app with React Native.
                      </Trans>
                    </p>
                    <p className="mb-4 text-slate-200 text-opacity-50">
                      <Trans i18nKey="about3">
                        Beyond my professional pursuits, I enjoy engaging in activities that enhance my problem-solving skills, such as playing board games like Magic: The Gathering. I also have a green thumb, tending to my three lemon trees and previously growing a variety of vegetables, including lettuce and tomatoes.I am now eager to transition into a career that aligns with my passion and skills, ready to bring my web development skills and enthusiasm to a new professional environment.
                      </Trans>
                    </p>
                  </div>
                </section>
                <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
                  </div>
                  <div>
                    <ol className="group/list">
                      <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg "></div>
                          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2023-Present">2023-Present</header>
                          <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                              <div>
                                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="" target="_blank" rel="noreferrer noopener" aria-label="Student by Careerfoundry">
                                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-y-4 lg_block"></span>
                                  <span>
                                  <Trans i18nKey="experience1">
                                    Student·
                                  </Trans>
                                    <span className="inline-block">
                                      CareerFoundry
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal text-slate-200 text-opacity-50">
                              {t('experience2')}
                            </p>
                            <ul className="mt-2 flex flex-wrap" aria-label="Skills learned">
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">HTML & CSS</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">JavaScript</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React Native</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Angular</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Node.js</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Express</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">MongoDB</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Mongoose</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Firebase</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">AWS Lambda</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">TDD (Test-Driven Development)</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Bootstrap</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Redux</div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg "></div>
                          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2021-2023">2021-2023</header>
                          <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                              <div>
                                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="" target="_blank" rel="noreferrer noopener" aria-label="Customer Service Agent, at Concentrix (opens in a new tab)">
                                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-y-4 lg_block"></span>
                                    <span>
                                      {t('experience3')}
                                        <span className="inline-block">
                                          Concentrix
                                        </span>
                                    </span>
                                </a>
                              </div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal text-slate-200 text-opacity-50">
                              {t('experience4')}
                            </p>
                            <ul className="mt-2 flex flex-wrap" aria-label="Skills used">
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{t('Technical Proficiency')}</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{t('Great Communication')}</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{t('Problem-Solving')}</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{t('Interpersonal Skills')}</div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg "></div>
                          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2017-2021">2017-2021</header>
                          <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                              <div>
                                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="" target="_blank" rel="noreferrer noopener" aria-label="Customer Service Agent, at Ryanair (opens in a new tab)">
                                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-y-4 lg_block"></span>
                                  <span>
                                  {t('Cabin Crew Member')}
                                    <span className="inline-block">
                                      Ryanair
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal text-slate-200 text-opacity-50">
                              {t('Cabin Crew Description')}
                            </p>
                            <ul className="mt-2 flex flex-wrap" aria-label="Skills used">
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{t('Safety Procedures')}</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{t('In-flight Services')}</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{t('Problem-Solving')}</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{t('Teamwork')}</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{t('Time Management')}</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{t('Cultural Awareness')}</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{t('Sales and Marketing Skills')}</div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </section>
                <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
                  </div>
                  <div>
                    <ul className="group/list">
                      {/* Project 6 */}
                      <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8_d:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          <div className="z-10 sm:order-2 sm:col-span-6">
                            <div className="mr-4">
                              <img
                                className="rounded border-2 border-slate-200/10 transition-transform duration-300 ease-in-out group-hover:scale-110"
                                alt="firstAngularmyApp"
                                loading="lazy"
                                width="200"
                                height="48"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: 'transparent' }}
                                src={require('./images/Angularapp.PNG')}
                              />
                            <div>
                              <h3>
                                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="https://darkvisor5.github.io/Angular-deploy/welcome" target="_blank" rel="noopener noreferrer" aria-label="My Angular frontend app(opens a new tab)">
                                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                  <span>
                                    {t('Angular title')}
                                  </span>
                                </a>
                              </h3>
                              <p className="mt-2 text-sm leading-normal text-slate-200 text-opacity-50">
                                {t('Angulad desc')}
                              </p>
                            <ul className="mt-2 flex flex-wrap" aria-label="Tech used">
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Angular</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Node.js</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Angular Material</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Typedoc</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">JSDoc</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">GitHub </div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{t('Agile project management techniques')}</div>
                              </li>
                            </ul>
                              
                            </div>
                          </div>
                        </div>
                        </div>
                      </li>
                      {/* Project 5 */}
                      <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8_d:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          <div className="z-10 sm:order-2 sm:col-span-6">
                            <div className="mr-4 relative ">
                              <img
                                className="rounded border-2 border-slate-200/10 transition-transform duration-300 ease-in-out group-hover:scale-110"
                                alt="myChatApp"
                                loading="lazy"
                                width="200"
                                height="48"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: 'transparent' }}
                                src={require('./images/chatapp.PNG')}
                              />
                            </div>
                            <div>
                              <h3>
                                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="https://github.com/DarkVisor5/Chat-app" target="_blank" rel="noopener noreferrer" aria-label="React Native App">
                                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                  <span>
                                    {t('Chatapp title')}
                                  </span>
                                </a>
                              </h3>
                              <p className="mt-2 text-sm leading-normal text-slate-200 text-opacity-50">
                                {t('Chatapp desc')}
                              </p>
                              <ul className="mt-2 ml-4 list-disc text-sm leading-normal">
                                <li className="text-slate-200 text-opacity-50">{t('User Authentication')}</li>
                                <li className="text-slate-200 text-opacity-50">{t('Chat Interface')}</li>
                                <li className="text-slate-200 text-opacity-50">{t('Media Sharing')}</li>
                                <li className="text-slate-200 text-opacity-50">{t('Location Sharing')}</li>
                                <li className="text-slate-200 text-opacity-50">{t('Offline Access')}</li>
                                <li className="text-slate-200 text-opacity-50">{t('Accessibility')}</li>
                                <li className="text-slate-200 text-opacity-50">{t('Customizable UI')}</li>
                              </ul>
                              <ul className="mt-2 flex flex-wrap" aria-label="Tech used">
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React Native</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Expo</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Google Firestore Database</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Google Firebase Authentication</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Firebase Cloud Storage</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Gifted Chat library </div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">JavaScript</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">AsyncStorage</div>
                              </li>
                            </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* Project 4 */}
                      <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8_d:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          <div className="z-10 sm:order-2 sm:col-span-6">
                            <div className="mr-4">
                              <img
                                className="rounded border-2 border-slate-200/10 transition-transform duration-300 ease-in-out group-hover:scale-110"
                                alt="meetApp"
                                loading="lazy"
                                width="200"
                                height="48"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: 'transparent' }}
                                src={require('./images/events.PNG')}
                              />
                            <div>
                              <h3>
                                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="https://darkvisor5.github.io/meet/" target="_blank" rel="noopener noreferrer" aria-label="meetApp(opens a new tab)">
                                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                  <span>
                                    {t('Meetapp title')}
                                  </span>
                                </a>
                              </h3>
                              <p className="mt-2 text-sm leading-normal text-slate-200 text-opacity-50">
                                {t('Meetapp desc')}                          
                              </p>
                              <ul className="mt-2 flex flex-wrap" aria-label="Tech used">
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Google Calendar API</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">OAuth2</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Serverless Functions (AWS Lambda)</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Test-Driven Development (TDD)</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Data Visualization Library </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Lighthouse</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">APM Tool</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Puppeteer </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Object-Oriented Programming </div>
                                </li>
                            </ul>
                            </div>
                          </div>
                        </div>
                        </div>
                      </li>
                      {/* Project 3 */}
                      <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8_d:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          <div className="z-10 sm:order-2 sm:col-span-6">
                            <div className="mr-4">
                              <img
                                className="rounded border-2 border-slate-200/10 transition-transform duration-300 ease-in-out group-hover:scale-110"
                                alt="myFlixReact"
                                loading="lazy"
                                width="200"
                                height="48"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: 'transparent' }}
                                src={require('./images/Angularapp.PNG')}
                              />
                            <div>
                              <h3>
                                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="https://myflixleo.netlify.app/login" target="_blank" rel="noopener noreferrer" aria-label="My React frontend app(opens a new tab)">
                                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                  <span>
                                    {t('React title')}
                                  </span>
                                </a>
                              </h3>
                              <p className="mt-2 text-sm leading-normal text-slate-200 text-opacity-50">
                                {t('React desc')}
                              </p>
                              <ul className="mt-2 flex flex-wrap" aria-label="Tech used">
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">REST API</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Parcel</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Bootstrap</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React Redux</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">GitHub </div>
                                </li>
                            </ul>
                            </div>
                          </div>
                        </div>
                        </div>
                      </li>
                      {/* Project 2 */}
                      <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8_d:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          <div className="z-10 sm:order-2 sm:col-span-6">
                            <div className="mr-4">
                              <img
                                className="rounded border-2 border-slate-200/10 transition-transform duration-300 ease-in-out group-hover:scale-110"
                                alt="restApi"
                                loading="lazy"
                                width="200"
                                height="48"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: 'transparent' }}
                                src={require('./images/mongo.PNG')}
                              />
                            <div>
                              <h3>
                                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="https://github.com/DarkVisor5/move_api" target="_blank" rel="noopener noreferrer" aria-label="A REST API(opens a new tab)">
                                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                  <span>
                                    {t('Movie title')} 
                                  </span>
                                </a>
                              </h3>
                              <p className="mt-2 text-sm leading-normal text-slate-200 text-opacity-50">
                                {t('Movie desc')} 
                              </p>
                              <ul className="mt-2 flex flex-wrap" aria-label="Tech used">
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Node.js</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Express</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">MongoDB</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Mongoose</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Middleware Modules</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Postman </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Authentication and Authorization </div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Data Validation</div>
                                </li>
                            </ul>
                            </div>
                          </div>
                        </div>
                        </div>
                      </li>
                      {/* Project 1 */}
                      <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8_d:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          <div className="z-10 sm:order-2 sm:col-span-6">
                            <div className="mr-4">
                              <img
                                className="rounded border-2 border-slate-200/10 transition-transform duration-300 ease-in-out group-hover:scale-110"
                                alt="pokedex"
                                loading="lazy"
                                width="200"
                                height="48"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: 'transparent' }}
                                src={require('./images/pokedex.PNG')}
                              />
                            <div>
                              <h3>
                                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="https://darkvisor5.github.io/Pokedex/" target="_blank" rel="noopener noreferrer" aria-label="A Pokedexapp(opens a new tab)">
                                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                  <span>
                                    Pokedex
                                  </span>
                                </a>
                              </h3>
                              <p className="mt-2 text-sm leading-normal text-slate-200 text-opacity-50">
                                {t('Pokedex desc')} 
                              </p>
                              <ul className="mt-2 flex flex-wrap" aria-label="Tech used">
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">HTML</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">CSS</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">JavaScript</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">External API</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">ESLint</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Prettier</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">jQuery</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Cross-Browser Compatibility</div>
                                </li>
                            </ul>
                            </div>
                          </div>
                        </div>
                        </div>
                      </li>
                      
                    </ul>
                  </div>

                </section>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;






