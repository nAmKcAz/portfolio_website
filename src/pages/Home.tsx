import { Link } from "react-router-dom";
import { games } from "../data/games";

export default function Home() {
  return (
    
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
        
      <div className="max-w-240 mx-auto grid grid-cols-7">

            <img 
              src={'./images/nebula.jpg'} 
              alt={'nebula-image'} 
              className="col-4 rounded-full mb-4 object-cover" 
            />
            <div className="developer-name col-start-2 col-span-5 text-3xl font-semibold mb-2">Zack Darden</div>
            <div className="developer-title col-start-2 col-span-5 text-1xl font-semibold mb-4">Software Engineer | Backend APIs, System Integrations, Games & Networking</div>
            <div className="developer-description col-start-2 col-span-5 text-gray-400 text-sm mb-4">From backend APIs and databases, to system integrations, to gameplay systems and objects, to applications, to network transports, to performance tuning, to React UIs, a dash of AI and Computer Vision analysis, and even some CI, cloud infrastructure, and deployment; fullstack in the truest sense of the word.</div>
            <div className="social-links col-start-1 col-span-7 flex items-center justify-center mb-8">
                <div className="github w-6 h-6 object-cover">
                    <a href="https://github.com/nAmKcAz"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src={'./images/GitHub_Invertocat_White.svg'} alt={'linkedin-image'}/>
                    </a>
                </div>
                <div className="linkedin w-6 h-6 object-cover ml-4">
                    <a href="https://www.linkedin.com/in/zackdarden/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src={'./images/InBug-White.png'} alt={'linkedin-image'}/>
                    </a>
                </div>
            </div>
      </div>
      <div className="max-w-240 mx-auto grid grid-cols-2 gap-6">
        {games.map((game) => (
          <Link 
            key={game.id} 
            to={`/game/${game.id}`} 
            className="no-underline text-white bg-[#181818] p-2 rounded-xl hover:ring-2 hover:ring-cyan-500 transition-all"
          >
            <img 
              src={game.abstract_image} 
              alt={game.abstract_title} 
              className="w-full rounded-lg mb-3 object-cover aspect-video" 
            />
            <div className={game.id +"_abstract text-left"}>
                <div className="text-lg font-bold">{game.abstract_title}</div>
                <div className="text-sm ">{game.tech.join(", ")}</div>
                <div className="text-sm text-gray-400">{game.date}</div>
            </div>
          </Link>
        ))}
      </div>
        <div className="footer mt-8">
            <hr className="border border-gray-700 mb-2"></hr>
            <span className="text-gray-500 text-sm whitespace-pre">{'© 2026   Zack Darden'}</span>
        </div>
    </div>
  );
}
