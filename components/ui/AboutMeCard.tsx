"use client";
import React, { useState } from "react";

interface AboutMeCardProps {
  paragraphs: string[];
}

const AboutMeCard: React.FC<AboutMeCardProps> = ({ paragraphs }) => {
  const [showMore, setShowMore] = useState(false);

  const shortText = paragraphs[0];
  const moreText = paragraphs.slice(1);

  return (
    <div className="container mx-auto px-4">
      <div className="bg-card rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-left text-card-foreground">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6 text-card-foreground text-justify">
            {shortText}
            {!showMore && ".."}
          </p>

          {showMore && (
            <>
              {moreText.map((text, idx) => (
                <p
                  key={idx}
                  className="text-lg mb-4 text-card-foreground text-justify"
                >
                  {text}
                </p>
              ))}
            </>
          )}

          {moreText.length > 0 && (
            <button
              className="text-blue-600 hover:underline focus:outline-none"
              onClick={() => setShowMore((prev) => !prev)}
            >
              {showMore ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
