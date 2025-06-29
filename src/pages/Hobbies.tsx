import {
  FaHeadphones,
  FaHeart,
  FaCloudSun,
  FaBasketballBall,
  FaMugHot,
  FaBed,
} from 'react-icons/fa';

import Mix1Image from '../assets/Mix1.png';
import Mix2Image from '../assets/Mix2.png';
import Mix3Image from '../assets/Mix3.png';
import Mix4Image from '../assets/Mix4.png';
import Mix5Image from '../assets/Mix5.png';
import Mix6Image from '../assets/Mix6.png';
import BackImg from '../assets/back.png';

const mixes = [
  {
    title: 'Dundee A115 Mix',
    description: 'First ever party mix I played',
    icon: <FaHeadphones className="text-4xl text-indigo-500" />,
    embedUrl:
      'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/scott-bozniak/dundee-a115-mix&color=%230066cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    image: Mix1Image,
  },
  {
    title: 'LO D121 Mix',
    description: 'First dorm mix I created',
    icon: <FaBed className="text-4xl text-yellow-500" />,
    embedUrl:
      'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/scott-bozniak/lo-d121-mix&color=%23ffaa00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    image: Mix2Image,
  },
  {
    title: 'Gellert 5 Mix',
    description: 'A spontaneous mix I created with my friends',
    icon: <FaBasketballBall className="text-4xl text-orange-500" />,
    embedUrl:
      'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/scott-bozniak/gellert-5-mix&color=%23ff8800&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    image: Mix3Image,
  },
  {
    title: 'San Ramon Jam Mix',
    description: 'A mix I created with a jam session with my friends',
    icon: <FaCloudSun className="text-4xl text-pink-500" />,
    embedUrl:
      'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/zay-calhan/san-ramon-jam-mix&color=%23ff99cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    image: Mix4Image,
  },
  {
    title: '510 Baddietingz Mix',
    description:
      'A party mix I made filled with lots of 2000s hits and west coast rap',
    icon: <FaHeart className="text-4xl text-red-500" />,
    embedUrl:
      'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/zay-yayooby/510-baddietingz-mix&color=%23ff3366&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    image: Mix5Image,
  },
  {
    title: 'Matcha Mix',
    description:
      'My second dorm mix I made inspired by my friend, shoutout Matcha By Aly',
    icon: <FaMugHot className="text-4xl text-green-500" />,
    embedUrl:
      'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/zay-shababooey/matcha-mix&color=%2300cc99&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    image: Mix6Image,
  },
];

const Hobbies = () => {
  return (
    <section id="hobbies" className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16">
          Hobbies
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-16 w-full max-w-5xl mx-auto mb-12">
          {/* Description Box (left on md+) */}
          <div className="border-4 border-blue-400 rounded-lg p-6 sm:p-8 shadow-md flex flex-col justify-center items-center text-center w-full md:w-1/2 bg-white">
            <p className="text-lg text-gray-700 leading-relaxed">
              Outside of school and projects, I enjoy DJing and creating mixes.
              I like to play hip hop, rap, and R&B, specifically 2000s hits. I
              also enjoy working out.
            </p>
          </div>

          {/* Image Box (right on md+) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={BackImg}
              alt="Back Pic"
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>
        </div>

        {/* Mixes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mixes.map((mix, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 text-left"
            >
              <div className="flex items-center space-x-4 mb-4">
                {mix.icon}
                <span className="text-xl font-semibold text-gray-700">
                  {mix.title}
                </span>
              </div>

              {mix.image && (
                <img
                  src={mix.image}
                  alt={mix.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}

              <p className="text-gray-600 mb-4">{mix.description}</p>

              <div className="relative pt-[56.25%]">
                <iframe
                  src={mix.embedUrl}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  allow="autoplay"
                  title={`SoundCloud Player - ${mix.title}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
