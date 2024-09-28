import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Shruti Ghubade",
      position: "Student",
      message:
        "This platform revolutionized my learning experience. The courses are exceptional, and the instructors are outstanding.",
      image:
        "https://img.freepik.com/premium-photo/create-image-featuring-student-formal-decent-dress-women-standing-front_921410-46862.jpg",
    },
    {
      id: 2,
      name: "Ashitosh Tekale",
      position: "Student",
      message:
        "I've never learned so efficiently! The courses on this platform are fantastic, and the instructors are world-class.",
      image:
        "https://th.bing.com/th/id/OIP.8Ea-HdD2b9SjlapGoQK5AwHaJD?w=186&h=227&c=7&r=0&o=5&pid=1.7",
    },
    {
      id: 3,
      name: "Harshit Mishra",
      position: "Student",
      message:
        "This platform has been a game-changer for my education. The courses are engaging, and the instructors are highly knowledgeable.",
      image:
        "https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6941.jpg",
    },
    {
      id: 4,
      name: "Surbhi Sharma",
      position: "Student",
      message:
        "I've had an incredible learning experience on this platform. The courses are comprehensive, and the instructors are truly exceptional.",
      image:
        "https://th.bing.com/th/id/R.ba5e7d4fa79b1a228f2f3a3e1144ebae?rik=jhjaJ%2fJx5ChiaQ&riu=http%3a%2f%2fwww.pented.in%2fimg%2fpented-theme%2fteam%2fPratiksha-Patel.jpg&ehk=72DmmPkSCEXkvBbyiF3V4tjU11zXNUwdI4jBv4BVwGE%3d&risl=&pid=ImgRaw&r=0",
    },
  ];
  return (
    <section className="testimonials">
      <h2>Voices of Our Learners</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
