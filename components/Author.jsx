import React from "react";
import Image from "next/image";

// import { grpahCMSImageLoader } from "../util";

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-[#CEE3D9] bg-opacity-20">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        unoptimized
        alt={author.name}
        height="100"
        width="100"
        className="mx-auto my-auto rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className="text-[#346F65] mt-4 mb-4 text-xl font-bold">
      {author.name}
    </h3>
    <p className="text-black text-ls">{author.bio}</p>
  </div>
);
export default Author
