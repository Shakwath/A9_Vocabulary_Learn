import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Components/Banner';
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaFacebookF, FaDiscord, FaTwitter } from "react-icons/fa";

const Home = () => {
  const categories = useLoaderData();
  useEffect(() => {
  AOS.init({ duration: 1000 });
  }, []);

  // Example: dynamic tutorial count
  const tutorialCount = categories?.length || 0;

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Banner */}
      <Banner />

      {/* Our Mission */}
      <section className="bg-sky-50 py-12 md:py-24 mt-6 rounded-xl shadow-md border border-blue-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-10">
            We’re on a mission to make language learning simple, enjoyable, and truly interactive. Through our intuitive platform, learners of all levels can build vocabulary confidently—anytime, anywhere.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">How It Works</h3>
              <p className="text-gray-700">
                Explore a rich collection of vocabulary words enhanced with:<br></br>
                🎧 Accurate pronunciation<br></br>
                📚 Clear meanings & grammar roles<br></br>
                ✍️ Real-life example sentences<br></br>
                Learn at your own pace and reinforce your knowledge through fun, interactive quizzes designed to boost retention.

              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">Why Learn with Us?</h3>
              <p className="text-gray-700">
                Because we make language learning:<br></br>

                ✅ Easy to follow <br></br>
                ✅ Tailored to real-life use<br></br>
                ✅ Consistently rewarding<br></br>
                With hand-picked vocabulary and engaging tools, you'll grow not just in words—but in confidence and communication.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link to="/start-learning">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg">
                Start Learning Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="bg-white py-12 md:py-24 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-600 mb-10">
            We're proud of the progress we've made in helping users learn and grow.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-sky-100 p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-blue-800">
                <CountUp end={1000} duration={3} separator="," />
              </h3>
              <p className="text-gray-700 mt-2">Users Registered</p>
            </div>
            <div className="bg-sky-100 p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-blue-800">
                <CountUp end={50} duration={3} />
              </h3>
              <p className="text-gray-700 mt-2">Lessons Available</p>
            </div>
            <div className="bg-sky-100 p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-blue-800">
                <CountUp end={2000} duration={3} />
              </h3>
              <p className="text-gray-700 mt-2">Vocabulary Words</p>
            </div>
            <div className="bg-sky-100 p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-blue-800">
                <CountUp end={tutorialCount} duration={3} />
              </h3>
              <p className="text-gray-700 mt-2">Tutorials Available</p>
            </div>
          </div>
        </div>
      </section>
  {/* extra section */}
     
{/* How Learners Use It */}
<section className="bg-white py-16 mt-12">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-6">How Learners Use It</h2>
    <p className="text-xl text-gray-600 mb-12">
      From daily practice to goal-oriented learning, our platform empowers every type of learner.
    </p>

    <div className="grid md:grid-cols-3 gap-8 text-left">
      <div className="p-6 bg-blue-50 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2">🎓 Students</h3>
        <p className="text-gray-700">
          Master new vocabulary faster for school and competitive exams with bite-sized lessons,
          real-world examples, and spaced repetition that helps knowledge stick.
        </p>
      </div>

      <div className="p-6 bg-blue-50 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2">🌍 Travelers</h3>
        <p className="text-gray-700">
          Learn practical phrases and situational vocabulary for travel, dining, emergencies,
          and more. Speak with locals confidently, no matter where your journey takes you.
        </p>
      </div>

      <div className="p-6 bg-blue-50 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2">💼 Professionals</h3>
        <p className="text-gray-700">
          Build a strong vocabulary for workplace communication, presentations, and writing.
          Choose topics like business, healthcare, tech, and more to align with your career.
        </p>
      </div>
    </div>
  </div>
</section>

 {/* Join Community */}
<section className="bg-blue-100 py-16 mt-12 rounded-xl">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Join Our Language Learning Community</h2>
    <p className="text-lg text-gray-700 mb-8">
      Connect with fellow learners, share progress, and grow together. Follow us for tips, updates, and language fun!
    </p>
    <div className="flex justify-center gap-6">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white text-blue-700 px-5 py-2 rounded-full shadow hover:bg-blue-50 transition"
      >
        <FaFacebookF className="text-xl" />
        Facebook
      </a>
      <a
        href="https://discord.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white text-blue-700 px-5 py-2 rounded-full shadow hover:bg-blue-50 transition"
      >
        <FaDiscord className="text-xl" />
        Discord
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white text-blue-700 px-5 py-2 rounded-full shadow hover:bg-blue-50 transition"
      >
        <FaTwitter className="text-xl" />
        Twitter
      </a>
    </div>
  </div>
</section>


    </div>
  );
};

export default Home;
