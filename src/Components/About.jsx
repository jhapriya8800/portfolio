import React from "react";

const About = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello,I'm Priya , a passionate Front End Developer with a keen eye for
          MERN stack. With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <div className="overflow-x-auto">
          <h1 className="text-green-500 font-bold text-xl mb-4">
            Education & Training
          </h1>
          <table className="min-w-full border border-gray-300">
            <thead className="hidden md:table-header-group">
              <tr className="bg-green-100">
                <th className="border px-4 py-2 text-left">Degree</th>
                <th className="border px-4 py-2 text-left">Institution</th>
                <th className="border px-4 py-2 text-left">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr className="md:table-row block md:border-0 border-b">
                <td className="md:border px-4 py-2 block md:table-cell">
                  <span className="font-bold md:hidden">Degree:</span> MCA
                </td>
                <td className="md:border px-4 py-2 block md:table-cell">
                  <span className="font-bold md:hidden">Institution:</span> JD
                  Women's College
                </td>
                <td className="md:border px-4 py-2 block md:table-cell">
                  <span className="font-bold md:hidden">Year:</span> 2022
                </td>
              </tr>
              <tr className="md:table-row block md:border-0 border-b">
                <td className="md:border px-4 py-2 block md:table-cell">
                  <span className="font-bold md:hidden">Degree:</span> BCA
                </td>
                <td className="md:border px-4 py-2 block md:table-cell">
                  <span className="font-bold md:hidden">Institution:</span>{" "}
                  Ganga Devi Mahila Collage
                </td>
                <td className="md:border px-4 py-2 block md:table-cell">
                  <span className="font-bold md:hidden">Year:</span> 2017
                </td>
              </tr>
              <tr className="md:table-row block md:border-0 border-b">
                <td className="md:border px-4 py-2 block md:table-cell">
                  <span className="font-bold md:hidden">Degree:</span>{" "}
                  12th(Bihar Board)
                </td>
                <td className="md:border px-4 py-2 block md:table-cell">
                  <span className="font-bold md:hidden">Institution:</span>{" "}
                  Ganga Devi Mahila Callege
                </td>
                <td className="md:border px-4 py-2 block md:table-cell">
                  <span className="font-bold md:hidden">Year:</span> 2012
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <h1 className="text-green-500 font-bold text-xl mb-4">
            Skill & Experties
          </h1>
          <table className="min-w-full border border-gray-300">
            <thead className="hidden md:table-header-group">
              <tr className="bg-green-100">
                <th className="border px-4 py-2 text-left">
                  Programming languages
                </th>
                <th className="border px-4 py-2 text-left">Soft skills</th>
                <th className="border px-4 py-2 text-left">Computer skills</th>
              </tr>
            </thead>
            <tbody>
              <tr className="md:table-row block md:border-0 border-b">
                <td className="md:border px-4 py-2 block md:table-cell">
                  <span className="font-bold md:hidden">
                    Programming languages:
                  </span>{" "}
                  JavaScript
                </td>
                <td className="md:border px-4 py-2 block md:table-cell">
                  <span className="font-bold md:hidden">Soft skills:</span>{" "}
                  communication,continuous learning,creativity
                </td>
                <td className="md:border px-4 py-2 block md:table-cell">
                  <span className="font-bold md:hidden">Computer skills:</span>{" "}
                  graphic design
                </td>
              </tr>
              <tr className="md:table-row block md:border-0 border-b">
                <td className="md:border px-4 py-2 block md:table-cell">
                  <span className="font-bold md:hidden">
                    Programming languages:
                  </span>{" "}
                  ReactJs
                </td>
                <td className="md:border px-4 py-2 block md:table-cell">
                  <span className="font-bold md:hidden">Soft skills:</span>{" "}
                  problem-solving,teamwork
                </td>
                <td className="md:border px-4 py-2 block md:table-cell">
                  <span className="font-bold md:hidden">Computer skills:</span>{" "}
                  database management
                </td>
              </tr>
              <tr className="md:table-row block md:border-0 border-b">
                <td className="md:border px-4 py-2 block md:table-cell">
                  <span className="font-bold md:hidden">
                    Programming languages:
                  </span>
                  NextJs
                </td>
                <td className="md:border px-4 py-2 block md:table-cell">
                  <span className="font-bold md:hidden">Soft skills:</span>
                  analytical thinking,attention to detail
                </td>
                <td className="md:border px-4 py-2 block md:table-cell">
                  <span className="font-bold md:hidden">Computer skills:</span>{" "}
                  basic computer literacy
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <h1 className="text-green-500 font-bold text-xl mb-4">
            Professional Experince
          </h1>
          <table className="min-w-full border border-gray-300">
            <thead className="hidden md:table-header-group">
              <tr className="bg-green-100">
                <th className="border px-4 py-2 text-left">
                  Company/Organisation
                </th>
                <th className="border px-4 py-2 text-left">Job-Title</th>
                <th className="border px-4 py-2 text-left">Joining-Dates</th>
              </tr>
            </thead>
            <tbody>
              <tr className="md:table-row block md:border-0 border-b">
                <td className="md:border px-4 py-2 block md:table-cell">
                  <span className="font-bold md:hidden">
                  Company/Organisation:
                  </span>{" "}
                 Onlygenious
                </td>
                <td className="md:border px-4 py-2 block md:table-cell">
                  <span className="font-bold md:hidden">Job-Title:</span>
                  Front-End Developer
                </td>
                <td className="md:border px-4 py-2 block md:table-cell">
                  <span className="font-bold md:hidden">Joining-Dates:</span>
                  17/April/2024
                </td>
              </tr>
              
             
            </tbody>
          </table>
          <br />
          <h1 className="text-green-500 font-bold text-xl mb-4">
            Mission Statement
          </h1>
          <p>My mission is to leverage my skills 
          and creativity to deliver innovative in Front end developer 
          solution that exceed client expectations and
          contribute positively to the digital landscap. I am committed to continue learning
          and growth,always seeking new challenge and oppertunities
          to expand my horizons.

         </p>
        </div>
      </div>
    </>
  );
};

export default About;
