import React from 'react';

interface ProfileProps {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

const Profile: React.FC<ProfileProps> = ({ name, title, bio, imageUrl }) => {
  return (
    <div className="card bg-base-100 shadow-2xl p-8 text-center card-hover animate-slide-in border border-primary/20">
      <figure className="px-10 pt-10 flex justify-center">
        <div className="relative">
          <img
            src={imageUrl}
            alt={name}
            className="w-40 h-40 rounded-full object-cover ring-4 ring-primary/30 shadow-xl animate-float mx-auto"
          />
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-lg animate-pulse"></div>
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-4xl font-bold text-primary gradient-text">
          {name}
        </h2>
        <p className="text-xl text-secondary mb-4 font-semibold">{title}</p>
        <p className="text-base-content opacity-80 leading-relaxed text-lg mb-6">
          {bio}
        </p>
        <div className="card-actions mt-6 space-x-4">
          <a href="mailto:ridhobagusp07@gmail.com" className="btn btn-primary btn-lg btn-modern glass hover:scale-105 transition-transform">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Me
          </a>
          <a href="https://www.upwork.com/freelancers/~01bc539cd4c00a26bd?mp_source=share" className="btn btn-outline btn-lg btn-modern glass hover:scale-105 transition-transform border-primary/30 hover:border-primary">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          {['React', 'NextJS', 'TypeScript', 'NodeJS'].map((tech) => (
            <span key={tech} className="badge badge-primary badge-lg glass animate-pulse border-primary/30">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
