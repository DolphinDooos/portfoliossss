import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import TypingAnimation from '../components/TypingAnimation';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Modern portfolio website built with Next.js and TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className="container mx-auto px-4 py-32">
        {/* Hero Section */}
        <section className="hero min-h-[80vh]">
          <div className="hero-content flex-col lg:flex-row-reverse gap-12">
            <div className="animate-pulse">
              <Profile
                name="Ridho Bagus"
                title="My Card Portfolio"
                bio="Dengan lebih dari 5 tahun pengalaman dalam pengembangan web, saya mengkhususkan diri dalam membuat situs web dan aplikasi modern dan responsif menggunakan React, Next.js, dan TypeScript."
                imageUrl="https://github.com/DolphinDooos/portfoliossss/blob/main/frontend/profile.png"
              />
            </div>
            
            <div className="animate-slide-in">
              <h1 className="text-5xl md:text-7xl font-bold gradient-text text-shadow">
                Hello, I'm{' '}
                <span className="text-primary">Ridho Bagus</span>
              </h1>
              <p className="text-2xl text-secondary py-6 font-semibold min-h-[2.5rem] flex items-center">
                <TypingAnimation
                  texts={[ 
                    "Full Stack Developer", 
                    "React & Next.js Specialist", 
                    "TypeScript Expert", 
                    "Designer Modern Web Developer"
                  ]}
                  typingSpeed={20}
                  deletingSpeed={30}
                  pauseTime={600}
                />
              </p>
              <p className="text-lg text-base-content opacity-80 mb-8 leading-relaxed">
                Saya menciptakan aplikasi web yang indah dan responsif dengan teknologi modern. 
                Saya sangat antusias dengan kode yang bersih dan pengalaman pengguna yang luar biasa.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/RidhoBagusPrakoso" className="btn btn-primary btn-lg btn-modern glass">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                  </svg>
                  View My Work
                </a>
                <a href="https://api.whatsapp.com/send/?phone=6285658979620&text&type=phone_number&app_absent=0" className="btn btn-outline btn-lg btn-modern glass">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4 gradient-text">My Skills</h2>
            <p className="text-lg text-base-content opacity-70 font-semibold min-h-[2.5rem]">                
              <TypingAnimation
                  texts={[ 
                    "ReactJS", 
                    "NextJS", 
                    "TypeScript", 
                    "NodeJS",
                    "VueJS",
                    "MongoDB",
                    "Framer Motion",
                    "Tailwind CSS"
                  ]}
                  typingSpeed={20}
                  deletingSpeed={30}
                  pauseTime={1000}
                />
              </p>
                <p className="text-lg text-base-content opacity-80 mb-8 leading-relaxed">
                Skill Yang Saya Bisa, dan Gunakan Lebih Banyak Dari ini Tapi. 
                Saya Lebih Sering Memakai Bahasa Programmer Yang Saya Taruh Di Bawah ini.
              </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['React'].map((skill) => (
              <div key={skill} className="card bg-base-200 glass card-hover p-6 text-center group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary text-primary-content rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="800"
                    height="800"
                    fill="none"
                    viewBox="0 0 32 32"
                    >
                    <path
                      fill="#53C1DE"
                      d="M18.679 15.976c0-1.435-1.2-2.597-2.679-2.597-1.48 0-2.679 1.162-2.679 2.597 0 1.434 1.2 2.597 2.679 2.597 1.48 0 2.679-1.163 2.679-2.597"
                    ></path>
                    <path
                      fill="#53C1DE"
                      fillRule="evenodd"
                      d="M24.7 11.154c.566-2.23 1.277-6.363-1.23-7.764-2.495-1.395-5.742 1.278-7.456 2.883-1.71-1.589-5.048-4.25-7.552-2.845-2.494 1.4-1.725 5.465-1.147 7.708-2.327.64-6.315 2.02-6.315 4.84 0 2.811 3.984 4.313 6.297 4.953-.58 2.255-1.311 6.262 1.186 7.659 2.514 1.405 5.842-1.194 7.572-2.816 1.726 1.614 4.942 4.23 7.437 2.83 2.504-1.406 1.852-5.484 1.273-7.74 2.242-.641 6.235-2.11 6.235-4.886 0-2.793-4.01-4.184-6.3-4.822m-.284 8.513a29 29 0 0 0-1.519-3.685 29 29 0 0 0 1.46-3.631c1.679.472 5.361 1.55 5.361 3.625 0 2.094-3.533 3.183-5.302 3.691m-1.566 7.859c-1.862 1.045-4.628-1.456-5.902-2.645a29 29 0 0 0 2.514-3.096c1.45-.125 2.821-.329 4.064-.607.407 1.595 1.194 5.298-.676 6.348m-13.726-.015c-1.863-1.041-1.011-4.616-.584-6.278 1.228.264 2.589.453 4.042.568.83 1.132 1.7 2.173 2.576 3.085-1.083 1.015-4.163 3.671-6.034 2.625M2.28 15.976c0-2.102 3.661-3.173 5.378-3.643a29 29 0 0 0 1.462 3.673 30 30 0 0 0-1.48 3.726c-1.637-.454-5.36-1.653-5.36-3.756M9.104 4.504c1.87-1.05 4.77 1.506 6.012 2.656a30 30 0 0 0-2.556 3.066c-1.41.127-2.761.33-4.003.604-.466-1.81-1.321-5.278.547-6.326m11.275 7.073c.957.117 1.875.273 2.736.464-.259.803-.581 1.643-.96 2.504a41 41 0 0 0-1.776-2.968m-4.365-3.529c.591.621 1.183 1.314 1.766 2.066a39 39 0 0 0-3.546 0 28 28 0 0 1 1.78-2.066m-6.157 6.496a27 27 0 0 1-.954-2.517 30 30 0 0 1 2.72-.452 36 36 0 0 0-1.766 2.97m1.793 5.922a28 28 0 0 1-2.764-.431c.264-.83.59-1.692.972-2.568a36 36 0 0 0 1.792 2.999m4.4 3.525a28 28 0 0 1-1.805-2.094q1.783.069 3.566-.006a27 27 0 0 1-1.761 2.1m6.117-6.569c.4.886.739 1.744 1.007 2.559a28 28 0 0 1-2.798.462c.639-.982 1.239-1.99 1.79-3.02m-3.42 3.172a41.5 41.5 0 0 1-5.463.01 35 35 0 0 1-2.746-4.598 35 35 0 0 1 2.73-4.59c1.82-.133 3.65-.134 5.469 0a39 39 0 0 1 2.739 4.572 39 39 0 0 1-2.729 4.606M22.83 4.467c1.87 1.046 1.038 4.76.63 6.376a32 32 0 0 0-4.012-.615 29 29 0 0 0-2.536-3.069c1.258-1.175 4.066-3.728 5.918-2.692"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-base-content">{skill}</h3>
                </div>
              </div>
              ))}
            {['Next.js'].map((skill) => (
              <div key={skill} className="card bg-base-200 glass card-hover p-6 text-center group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary text-primary-content rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="800"
                      height="800"
                      preserveAspectRatio="xMidYMid"
                      viewBox="0 0 256 256"
                      >
                      <path d="M119.617.069c-.55.05-2.302.225-3.879.35-36.36 3.278-70.419 22.894-91.99 53.044-12.012 16.764-19.694 35.78-22.597 55.922C.125 116.415 0 118.492 0 128.025s.125 11.61 1.151 18.64c6.957 48.065 41.165 88.449 87.56 103.411 8.309 2.678 17.067 4.504 27.027 5.605 3.879.425 20.645.425 24.524 0 17.192-1.902 31.756-6.155 46.12-13.486 2.202-1.126 2.628-1.426 2.327-1.677-.2-.15-9.584-12.735-20.845-27.948l-20.47-27.648-25.65-37.956c-14.114-20.868-25.725-37.932-25.825-37.932-.1-.025-.2 16.84-.25 37.431-.076 36.055-.1 37.506-.551 38.357-.65 1.226-1.151 1.727-2.202 2.277-.801.4-1.502.475-5.28.475h-4.33l-1.15-.725a4.7 4.7 0 0 1-1.677-1.827l-.526-1.126.05-50.166.075-50.192.776-.976c.4-.525 1.251-1.2 1.852-1.526 1.026-.5 1.426-.55 5.755-.55 5.105 0 5.956.2 7.282 1.651.376.4 14.264 21.318 30.88 46.514 16.617 25.195 39.34 59.599 50.5 76.488l20.27 30.7 1.026-.675c9.084-5.905 18.693-14.312 26.3-23.07 16.191-18.59 26.626-41.258 30.13-65.428 1.026-7.031 1.151-9.108 1.151-18.64 0-9.534-.125-11.61-1.151-18.641-6.957-48.065-41.165-88.449-87.56-103.411-8.184-2.652-16.892-4.479-26.652-5.58-2.402-.25-18.943-.525-21.02-.325m52.401 77.414c1.201.6 2.177 1.752 2.527 2.953.2.65.25 14.562.2 45.913l-.074 44.987-7.933-12.16-7.958-12.16v-32.702c0-21.143.1-33.028.25-33.603.4-1.401 1.277-2.502 2.478-3.153 1.026-.525 1.401-.575 5.33-.575 3.704 0 4.354.05 5.18.5"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-base-content">{skill}</h3>
                </div>
              </div>
            ))}
            {['TypeScript'].map((skill) => (
              <div key={skill} className="card bg-base-200 glass card-hover p-6 text-center group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary text-primary-content rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="800"
                      height="800"
                      preserveAspectRatio="xMidYMid"
                      viewBox="0 0 256 256"
                      >
                      <path fill="#007ACC" d="M0 128v128h256V0H0z"></path>
                      <path
                        fill="#FFF"
                        d="m56.611 128.85-.081 10.483h33.32v94.68h23.569000000000003v-94.68h33.32v-10.28c0-5.69-.122-10.444-.284-10.566-.122-.162-20.399-.244-44.983-.203l-44.739.122zM206.567 118.108c6.501 1.626 11.459 4.51 16.01 9.224 2.357 2.52 5.851 7.112 6.136 8.209.08.325-11.053 7.802-17.798 11.987-.244.163-1.22-.894-2.317-2.52-3.291-4.794-6.745-6.867-12.028-7.232-7.76-.529-12.759 3.535-12.718 10.32 0 1.992.284 3.17 1.097 4.796 1.707 3.535 4.876 5.648 14.832 9.955 18.326 7.884 26.168 13.085 31.045 20.48 5.445 8.25 6.664 21.415 2.966 31.208-4.063 10.646-14.14 17.88-28.323 20.277-4.388.772-14.79.65-19.504-.203-10.28-1.829-20.033-6.908-26.047-13.572-2.357-2.601-6.949-9.387-6.664-9.875.122-.162 1.178-.812 2.356-1.503 1.138-.65 5.446-3.13 9.509-5.486l7.355-4.267 1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305 8.167 4.308 19.383 3.698 24.909-1.26 2.357-2.153 3.332-4.388 3.332-7.68 0-2.966-.366-4.266-1.91-6.5-1.99-2.845-6.054-5.243-17.595-10.24-13.206-5.69-18.895-9.225-24.096-14.833-3.007-3.25-5.852-8.452-7.03-12.8-.975-3.616-1.22-12.678-.447-16.335 2.723-12.76 12.353-21.658 26.25-24.3 4.51-.853 14.994-.528 19.424.57"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-base-content">{skill}</h3>
                </div>
              </div>
            ))}
            {['Node.js'].map((skill) => (
              <div key={skill} className="card bg-base-200 glass card-hover p-6 text-center group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary text-primary-content rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="800"
                      height="800"
                      fill="none"
                      viewBox="0 0 32 32"
                      >
                      <path
                        fill="#8CC84B"
                        d="M17.173 2.299a2.45 2.45 0 0 0-2.346 0L4.152 8.189C3.46 8.553 2.992 9.297 3 10.07v11.864c-.005.787.486 1.538 1.197 1.897 1.022.544 2.015 1.143 3.055 1.65 1.203.59 2.706.721 3.923.105.988-.51 1.427-1.646 1.425-2.689.008-3.915.002-7.83.003-11.746.024-.174-.107-.36-.297-.356-.454-.007-.91-.004-1.364-.001-.172-.017-.34.126-.327.299-.006 3.89.001 7.781-.004 11.672a1.32 1.32 0 0 1-.872 1.237c-1.198.42-4.617-1.8-4.617-1.8a.34.34 0 0 1-.193-.33V10.13a.36.36 0 0 1 .225-.365q5.318-2.93 10.637-5.862a.38.38 0 0 1 .418.001q5.318 2.93 10.638 5.86a.37.37 0 0 1 .224.366q.001 5.87-.001 11.741a.34.34 0 0 1-.19.334c-3.514 1.941-7.067 3.82-10.548 5.818-.152.087-.325.186-.495.09-.915-.507-1.82-1.033-2.732-1.544-.1-.062-.226-.089-.33-.02-.408.216-.793.39-1.263.577-.66.261-.554.368.04.714q1.603.905 3.204 1.81c.703.439 1.646.47 2.372.065q5.337-2.943 10.675-5.886c.708-.361 1.202-1.109 1.197-1.896V10.069c.007-.756-.442-1.487-1.114-1.856-3.57-1.974-7.142-3.942-10.713-5.914"
                      ></path>
                      <path
                        fill="#8CC84B"
                        d="M22.542 11.206c-1.397-.747-3.058-.787-4.61-.69-1.122.112-2.301.421-3.118 1.225-.838.808-1.02 2.113-.622 3.168.285.745 1.003 1.23 1.745 1.486.957.338 1.96.442 2.966.546.916.096 1.833.19 2.714.463.36.12.778.302.889.693.101.464-.01 1.003-.387 1.325-1.195.946-4.521.801-5.702.056-.478-.317-.684-.879-.768-1.414-.009-.167-.143-.32-.324-.307a69 69 0 0 0-1.36 0c-.159-.014-.323.099-.332.26-.093 2.452 2.158 3.52 4.27 3.756 1.208.115 2.441.108 3.63-.15.893-.204 1.789-.579 2.404-1.267.758-.836.907-2.081.567-3.123-.26-.777-1.003-1.276-1.762-1.532-1.033-.354-2.258-.545-3.193-.634-1.36-.13-2.976-.076-3.361-.97-.153-.468-.023-1.049.407-1.337 1.138-.771 3.453-.669 4.632-.092.54.27.854.827.983 1.389.024.165.135.337.326.33.45.008.901.002 1.351.002.155.011.325-.076.355-.234-.02-1.174-.619-2.376-1.7-2.949"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-base-content">{skill}</h3>
                </div>
              </div>
            ))}
            {['Vue.Js'].map((skill) => (
              <div key={skill} className="card bg-base-200 glass card-hover p-6 text-center group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary text-primary-content rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="800"
                      height="800"
                      fill="none"
                      viewBox="0 0 32 32"
                      >
                      <path fill="#41B883" d="m2 4 14 24L30 4h-5.5L16 18.5 7.5 4z"></path>
                      <path
                        fill="#35495E"
                        d="M7.5 4 16 18.5 24.5 4h-5l-3.435 6.013L12.5 4z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-base-content">{skill}</h3>
                </div>
              </div>
            ))}
            {['MongoDB'].map((skill) => (
              <div key={skill} className="card bg-base-200 glass card-hover p-6 text-center group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary text-primary-content rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="800"
                      height="800"
                      viewBox="0 0 1024 1024"
                      >
                      <circle cx="512" cy="512" r="512" fill="#13aa52"></circle>
                      <path
                        fill="#fff"
                        d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a727 727 0 0 1 13-78.53l1-.65a204.5 204.5 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347 347 0 0 0-5.05-56.76M512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-base-content">{skill}</h3>
                </div>
              </div>
            ))}
            {['Framer Motion'].map((skill) => (
              <div key={skill} className="card bg-base-200 glass card-hover p-6 text-center group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary text-primary-content rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="framer"
                    width="800"
                    height="800"
                    fill="#000"
                    className="icon line-color"
                    data-name="Line Color"
                    viewBox="0 0 24 24"
                    >
                    <path
                      id="primary"
                      fill="none"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6.75 3H19v6h-7ZM12 9H5v6l6 6v-6h6.25Z"
                    ></path>
                  </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-base-content">{skill}</h3>
                </div>
              </div>
            ))}
            {['Tailwind CSS'].map((skill) => (
              <div key={skill} className="card bg-base-200 glass card-hover p-6 text-center group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary text-primary-content rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="800"
                      height="800"
                      viewBox="0 0 32 32"
                      >
                      <path
                        fill="#44a8b3"
                        d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1m-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-base-content">{skill}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4 gradient-text">Featured Projects</h2>
            <p className="text-lg text-base-content opacity-70">Some of my recent work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Hosting Platform', 
                description: 'Hosting web platform paling personal yang memungkinkan pengguna untuk berjualan hosting dengan halaman berbeda dan berbagai grafik.',
                tech: ['React', 'Node.js']
              }
            ].map((project, index) => (
              <div key={index} className="card bg-base-100 shadow-xl card-hover glass">
                <figure className="px-6 pt-6">
                  <div className="w-full h-17 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center animate-glow">
                    <Image className='bsolute bottom-0 right-0  h-[60%]' src="feature1.svg" alt="grap" width={450} height={450} />
                  </div>
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-xl text-primary">{project.title}</h3>
                  <p className="text-base-content opacity-80">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="badge badge-primary glass">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="card-actions justify-end mt-4">
                    <a href="https://dolphinbyte.xyz" className="btn btn-primary btn-sm btn-modern glass">View Project</a>
                  </div>
                </div>
              </div>
            ))}
            {[
              { 
                title: 'Portfolio Platform', 
                description: 'Portfolio web 3D paling personal yang memungkinkan pengguna memilih tema khusus dan mode gelap dengan halaman berbeda dan berbagai grafik.',
                tech: ['React', 'Node.js']
              }
            ].map((project, index) => (
              <div key={index} className="card bg-base-100 shadow-xl card-hover glass">
                <figure className="px-6 pt-6">
                  <div className="w-full h-17 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center animate-glow">
                    <Image className='bsolute bottom-0 right-0  h-[60%]' src="feature2.svg" alt="grap" width={450} height={450} />
                  </div>
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-xl text-primary">{project.title}</h3>
                  <p className="text-base-content opacity-80">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="badge badge-primary glass">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="card-actions justify-end mt-4">
                    <a href="https://dolphinportfolio.vercel.app/" className="btn btn-primary btn-sm btn-modern glass">View Project</a>
                  </div>
                </div>
              </div>
            ))}
            {[
              { 
                title: 'Dashboard Shoppy', 
                description: 'Aplikasi web dasbor admin paling personal yang memungkinkan pengguna memilih tema khusus dan mode gelap dengan halaman berbeda dan berbagai grafik.',
                tech: ['React', 'Node.js', 'MongoDB']
              }
            ].map((project, index) => (
              <div key={index} className="card bg-base-100 shadow-xl card-hover glass">
                <figure className="px-6 pt-6">
                  <div className="w-full h-17 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center animate-glow">
                    <Image className='bsolute bottom-0 right-0  h-[60%]' src="feature3.svg" alt="grap" width={450} height={450} />
                  </div>
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-xl text-primary">{project.title}</h3>
                  <p className="text-base-content opacity-80">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="badge badge-primary glass">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="card-actions justify-end mt-4">
                    <a href="https://admin-dashboard-theta-one-19.vercel.app/" className="btn btn-primary btn-sm btn-modern glass">View Project</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 text-center">
          <div className="card bg-gradient-to-br from-primary to-secondary text-primary-content p-12 glass">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together!</h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to bring your ideas to life? Let's create something amazing.
            </p>
            <a href="/" className="btn btn-lg btn-accent glass btn-modern mx-auto flex items-center">
              <svg className="w-6 h-6 mr-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

