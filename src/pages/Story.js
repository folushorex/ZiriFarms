import React, { useState } from 'react';
import Staff from "../assets/Staffs.png";
import '../styles/Story.css'; // Import the CSS file

const Story = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="our-story">
      <div className="story-content">
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in erat vel massa porttitor vulputate eu vel justo.
        </p>
        {showMore && (
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce nec arcu nec magna luctus interdum.
            <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in erat vel massa porttitor vulputate eu vel justo.
        </p>
          </p>
          
        )}
        <button onClick={toggleShowMore} className="show-more-button">
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
      <div className="story-image">
        <img src={Staff} alt="Our Story" />
      </div>
    </div>
  );
};

export default Story;
