import React from 'react';

const Resume = () => {
  return (
    <div className=" mx-auto p-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <div className="mb-4">
          <h3 className="text-l font-semibold mb-2">Languages</h3>
          <p>C++, JavaScript, Python, Java, PHP, C, SQL</p>
        </div>
        <div className="mb-4">
          <h3 className="text-l font-semibold mb-2">Web Technologies</h3>
          <p>
            HTML, CSS, JavaScript, ReactJS, Redux, Flask, Node.js, Express.js,
            Bootstrap, Tailwind, jQuery
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-l font-semibold mb-2">Machine Learning</h3>
          <p>Scikit, TensorFlow, NumPy, pandas, Matplotlib</p>
        </div>
        <div className="mb-4">
          <h3 className="text-l font-semibold mb-2">Database</h3>
          <p>MongoDB, MySQL, Firebase</p>
        </div>
        <div className="mb-4">
          <h3 className="text-l font-semibold mb-2">Software & Tools</h3>
          <p>Git, JUnit, Figma, Photoshop, Illustrator</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">
            Enhanced Authentication for Dynamic Password Generation using QR code
          </h3>
          <p>
            OpenCV, Numpy, PyQRCode, CairoSVG
            <br />
            • Developed an innovative solution to tackle OTP leaks and enhance
            security measures.
            <br />
            • Employed QR code technology to fortify data protection, resulting
            in heightened resistance to cyberattacks without compromising user
            convenience.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">
            AI-Enhanced Marketplace: Natural Language Customer Support Chatbot
          </h3>
          <p>
            ReactJS, OpenAI API, Redux, MongoDB, Bootstrap, Node.js, Passport.js, Socket.IO, Express.js
            <br />
            • Created a website with capabilities like user authentication,
            product reviews, real-time customer support through WebSocket, and
            an interactive chatbot.
            <br />
            • Used OpenAI’s Text-Davinci-003 engine to create a Natural
            Language Customer Support Chatbot and conducted Sentiment Analysis
            on customer reviews.
            <br />
            • Chatbot integrated with Siri on iPhone using a custom-built API.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">HungryHub</h3>
          <p>
            ReactJS, Tailwind, Jest, Node.js
            <br />
            • A web-based food ordering platform that retrieves real-time data
            through the live Swiggy API.
            <br />
            • Created a Swiggy inspired web app incorporating a responsive UI
            that achieves a loading speed of under 2 seconds.
            <br />
            • Implemented comprehensive test suites with 95% code coverage to
            ensure a seamless and high-performing user experience.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Education</h2>
        <p>
          Vellore Institute of Technology, Vellore | July 2019 – May 2023
          <br />
          Information Technology | GPA: 8.2/10
          <br />
          Coursework: Data Structures & Algorithms, Database Management System, Operating Systems, Machine Learning, Network Security, Mobile Application Dev, Digital Logic & Microprocessor, Web Technologies, Object Oriented Programming, Software Testing
        </p>
        {/* Repeat similar structure for other education */}
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Positions of Responsibility</h2>
        <p>
          IEEE Computer Science 2019 -2022
          <br />
          • Design Head:  Led the design team in creating responsive web designs, including our club’s website, and supervised the execution of diverse design projects
          <br />
          • Web Development Team: Gained expertise in the CI/CD workflows and contributed in developing dynamic and responsive web applications.
          <br />
          • Machine learning Team: Developed projects utilizing Scikit-Learn and TensorFlow, exploring and applying various ML algorithms to real-world scenarios.
        </p>
        {/* Repeat similar structure for other positions */}
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Certifications</h2>
        <p>
          Introduction to Probability and Data with R (Duke University)
          <br />
          Algorithms (Princeton University)
          <br />
          Server-side Development with NodeJS, Express and MongoDB (The Hong
          Kong University of Science and Technology)
          <br />
          HACK4CAUSE (Hackathone by IEEE SSIT)
        </p>
      </div>
    </div>
  );
};

export default Resume;
