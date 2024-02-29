import React from 'react';

const HappyNewYearSVG = () => {
  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="140 0 3200 1848" role="img">
        <title xml:lang="en">Happy New Year from Leniolabs</title>
    </svg>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: svgContent }} />
  );
};

export default HappyNewYearSVG;
