import React from 'react';

function SocialSignUp({ provider, icon }) {
  return (
    <button className="flex gap-4 px-5 py-2.5 border border-solid border-neutral-500 rounded-[33px]">
      <img loading="lazy" src={icon} alt={`${provider} logo`} className="shrink-0 aspect-square w-[30px]" />
      <span className="flex-auto my-auto">Sign Up with {provider}</span>
    </button>
  );
}

export default SocialSignUp;