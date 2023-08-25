import React from 'react';
import "../styles/Testimonials.css";
import image1 from "../assets/user-one.png"


const testimonialData = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO, Company Name',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur gravida lorem, ac dapibus dolor convallis a.',
    image: image1, // Update with the actual image path
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Designer, Another Company',
    content: 'Nullam malesuada, dui sit amet fermentum aliquam, turpis felis commodo justo, vel malesuada nisi eros ut elit.',
    image: image1, // Update with the actual image path
  },

  {
    id: 3,
    name: 'Sandra Bells',
    position: 'Wonderfields, Another Company',
    content: 'Nullam malesuada, dui sit amet fermentum aliquam, turpis felis commodo justo, vel malesuada nisi eros ut elit.',
    image: image1, // Update with the actual image path
  },
  // Add more testimonial data objects as needed
];

const TestimonialPage = () => {
  return (
    <div className="testimonial-page">
      <h1>Testimonials</h1>
      <div className="testimonial-list">
        {testimonialData.map(testimonial => (
          <div key={testimonial.id} className="testimonial-item">
            <div className="testimonial-image">
              <img src={testimonial.image} alt=""/>
            </div>
            <div className="testimonial-content">
              <p>{testimonial.content}</p>
              <div className="testimonial-info">
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-position">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default TestimonialPage;
