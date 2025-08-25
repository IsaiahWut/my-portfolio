import CertificateGHProf from "../assets/certificates/CertificateOfCompletion_Career Essentials in GitHub Professional Certificate.png"
import CertificateCybersecurity from "../assets/certificates/CertificateOfCompletion_Cybersecurity Foundations.png"
import CertificateGHActions from "../assets/certificates/CertificateOfCompletion_Practical GitHub Actions.png"
import CertificateGHCS from "../assets/certificates/CertificateOfCompletion_Practical GitHub Code Search.png"
import CertificateGHCP from "../assets/certificates/CertificateOfCompletion_Practical GitHub Copilot.png"
import CertificateGHMC from "../assets/certificates/CertificateOfCompletion_Practical GitHub Project Management and Collaboration.png"


const Certificates = () => {
  const certificates = [
    {
      title: "Career Essentials in GitHub Professional Certificate",
      issuer: "LinkedIn & GitHub",
      date: "2025",
      link: "https://www.linkedin.com/learning/certificates/94c0ee53f695f61c928ced33434bcb66f93268656eb4fe22a7893e653c439c15?trk=share_certificate",
      image: CertificateGHProf,
    },
    {
      title: "Cybersecurity Foundations",
      issuer: "LinkedIn",
      date: "2025",
      link: "https://www.linkedin.com/learning/certificates/306ec422dfeee383222e7789963d687a58e012d9efd507b0bda86d4b6ae276b2?trk=share_certificate",
      image: CertificateCybersecurity,
    },
    {
      title: "Practical GitHub Actions",
      issuer: "LinkedIn & GitHub",
      date: "2025",
      link: "https://www.linkedin.com/learning/certificates/b5f0885c4a65eb4d580b1cb319e56242ffb70a9e2c28e943d2f0e8a147d9d7bb?trk=share_certificate",
      image: CertificateGHActions,
    },
    {
      title: "Practical GitHub Code Search",
      issuer: "LinkedIn & GitHub",
      date: "2025",
      link: "https://www.linkedin.com/learning/certificates/136bf2d3947e5f2993390570acca85dcb51dd7c91cc289cc626538441931f3fc?trk=share_certificate",
      image: CertificateGHCS,
    },
    {
      title: "Practical GitHub Copilot",
      issuer: "LinkedIn & GitHub",
      date: "2025",
      link: "https://www.linkedin.com/learning/certificates/7fe71cbe18b9b53e9505bf9137d8dafad5f91f3ee09d140bd4164d2d38354af6?trk=share_certificate",
      image: CertificateGHCP,
    },
    {
      title: "Practical GitHub Project Management and Collaboration",
      issuer: "LinkedIn & GitHub",
      date: "2025",
      link: "https://www.linkedin.com/learning/certificates/bb79b5e1849f4c65ac81589195048b7834e9c1123efaf94c5b90fa902e4e76ee?trk=share_certificate",
      image: CertificateGHMC,
    },
  ];

   return (
    <section id="certificates" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Certificates</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, idx) => (
            <li
              key={idx}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-contain rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-gray-600">{cert.issuer}</p>
              <p className="text-sm text-gray-500">{cert.date}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  View Certificate
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certificates;