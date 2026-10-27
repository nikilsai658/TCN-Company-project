
import sirichandana from '../assets/sirichandana.png'
import venkatsai from '../assets/venkatsai.png'
import vinay from '../assets/vinayCEO.jpeg'
type Manager = {
  name: string;
  main:string;
  role: string;
  image: string;
};

const managers: Manager[] = [
  {
    name: "Vinay Burra",
    main:"Founder",
    role: "Chief Executive Officer(CEO)",
    image: vinay,
  },
  {
    name: "Venkat Sai",
    main:'',
    role: "General Manager",
    image: venkatsai,
  },
  {
    name: "Sirichandana Ponnam",
    main:'',
    role: "Human Resource Manager",
    image: sirichandana,
  }
];

export function Mangercard() {
  return (
      <section  className="py-12 px-2  bg-white md:rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 ">
        Before the Name, There Was a Vision
      </h2>

      <div className='flex justify-center'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:px-7 w-full max-w-5xl justify-items-center">
        {managers.map((manager, index) => (

          
          <div
            key={index}
            className="bg-white w-full max-w-75 flex flex-col rounded-2xl border border-gray-200 shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <div className="w-full aspect-square overflow-hidden bg-white">
              <img
                src={manager.image}
                alt={manager.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="p-5 text-center flex-1 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {manager.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1"> {manager.main ? (<>{manager.main} &<br /></>) : null}{manager.role}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  
  );
};

