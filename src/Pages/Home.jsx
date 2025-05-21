import React, { useEffect } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Banner from '../Components/Banner';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF, FaDiscord, FaTwitter } from 'react-icons/fa';

const Home = () => {
  const categories = useLoaderData();

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const tutorialCount = categories?.length || 0;

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Banner */}
      <Banner />

      {/* Our Mission */}
      <section className="bg-sky-50 py-12 md:py-24 mt-6 rounded-xl shadow-md border border-blue-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">Our Mission</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-10">
            We’re on a mission to make language learning simple, enjoyable, and truly interactive. Through our intuitive platform, learners of all levels can build vocabulary confidently—anytime, anywhere.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3">How It Works</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                🎧 Accurate pronunciation<br />
                📚 Clear meanings & grammar roles<br />
                ✍️ Real-life example sentences<br />
                Learn at your own pace and reinforce your knowledge through fun, interactive quizzes.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3">Why Learn with Us?</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                ✅ Easy to follow <br />
                ✅ Tailored to real-life use<br />
                ✅ Consistently rewarding<br />
                With hand-picked vocabulary and engaging tools, you'll grow not just in words—but in confidence.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link to="/startlearning">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg text-sm sm:text-base">
                Start Learning Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="bg-white py-12 md:py-24 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Achievements</h2>
          <p className="text-lg text-gray-600 mb-10">
            We're proud of the progress we've made in helping users learn and grow.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { count: 1000, label: 'Users Registered' },
              { count: 50, label: 'Lessons Available' },
              { count: 2000, label: 'Vocabulary Words' },
              { count: tutorialCount, label: 'Tutorials Available' }
            ].map((item, index) => (
              <div key={index} className="bg-sky-100 p-6 rounded-xl shadow text-center">
                <h3 className="text-3xl font-bold text-blue-800">
                  <CountUp end={item.count} duration={3} separator="," />
                </h3>
                <p className="text-gray-700 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Learners Use It */}
      <section className="bg-white py-16 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">How Learners Use It</h2>
          <p className="text-base sm:text-xl text-gray-600 mb-12">
            From daily practice to goal-oriented learning, our platform empowers every type of learner.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: '🎓 Students', desc: 'Master new vocabulary faster for school and exams with bite-sized lessons and spaced repetition.' },
              { title: '🌍 Travelers', desc: 'Learn practical phrases for travel, dining, emergencies, and more. Speak confidently with locals.' },
              { title: '💼 Professionals', desc: 'Boost vocabulary for workplace communication and presentations across industries like tech and healthcare.' }
            ].map((card, idx) => (
              <div key={idx} className="p-6 bg-blue-50 rounded-xl shadow-md">
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">{card.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="bg-blue-100 py-16 mt-12 rounded-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Join Our Language Learning Community</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8">
            Connect with fellow learners, share progress, and grow together. Follow us for tips and updates!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          {[
            { href: 'https://facebook.com', icon: <FaFacebookF />, label: 'Facebook', animation: 'flip-left' },
            { href: 'https://discord.com', icon: <FaDiscord />, label: 'Discord', animation: 'flip-up' },
            { href: 'https://twitter.com', icon: <FaTwitter />, label: 'Twitter', animation: 'flip-right' }
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              data-aos={social.animation}
              className="flex items-center justify-center gap-2 bg-white text-blue-700 px-5 py-2 rounded-full shadow hover:bg-blue-50 transition text-sm sm:text-base"
            >
              {social.icon}
              {social.label}
            </a>
  ))}
</div>

        </div>
      </section>
    </div>
  );
};

export default Home;
