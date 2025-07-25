import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Profile_image from '../../assets/profile1.jpeg';
import Resume   from "../../assets/resume.pdf";


const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Profile Image */}
        <div className="md:w-1/2 w-full" data-aos="fade-right">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img src={Profile_image} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* About Content */}
        <div className="md:w-1/2 w-full space-y-6 text-center md:text-left" data-aos="fade-left">
          <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Hello! I'm <span className="text-gray-900 font-semibold">Saurav Kumar</span>, a passionate Full-Stack Developer focused on building scalable, elegant web applications using <span className="text-blue-600 font-medium">React</span>, <span className="text-green-600 font-medium">Node.js</span>, and <span className="text-yellow-500 font-medium">MySQL</span>.
          </p>
          <p className="text-gray-500">
            🔬 Exploring Gen AI, Prompt Engineering & LLMs<br />
            ⚙️ Constant learner, open-source contributor<br />
            🌍 Believer in clean UI, strong UX & accessibility
          </p>
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Contact Me
            </a>
            <a href={Resume} target={Resume} className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
              View Resume
            </a>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-20" data-aos="fade-up">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {['React', 'Node.js', 'Tailwind CSS', 'MySQL', 'MongoDB', 'Express', 'JavaScript', 'Git'].map((skill) => (
            <div key={skill} className="py-4 px-6 rounded-xl shadow hover:shadow-md bg-gray-50 text-gray-700 font-medium">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-20" data-aos="zoom-in">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Stats</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-blue-50 rounded-xl p-6 shadow">
            <p className="text-4xl font-bold text-blue-600">15+</p>
            <p className="text-gray-700 mt-2">Completed Projects</p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 shadow">
            <p className="text-4xl font-bold text-green-600">10+</p>
            <p className="text-gray-700 mt-2">Happy Clients</p>
          </div>
          <div className="bg-yellow-50 rounded-xl p-6 shadow">
            <p className="text-4xl font-bold text-yellow-600">5</p>
            <p className="text-gray-700 mt-2">Certifications & Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
