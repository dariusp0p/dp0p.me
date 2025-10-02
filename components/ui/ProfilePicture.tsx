import React from "react";

interface ProfilePictureProps {
  src: string;
  alt?: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  src,
  alt = "Profile",
}) => {
  return (
    <div className="flex-shrink-0 mb-4 md:mb-0 ">
      <div className="border border-neutral-600/[0.2] bg-white dark:bg-transparent rounded-full p-1">
        <img
          src={src}
          alt={alt}
          className="w-48 h-48 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
