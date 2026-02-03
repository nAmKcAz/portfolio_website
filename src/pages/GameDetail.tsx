import { useParams, Link } from "react-router-dom";
import { games } from "../data/games";

export default function GameDetail() {
  const { id } = useParams();
  const game = games.find((g) => g.id === id);

  if (!game) return <p className="text-white p-8">Game not found.</p>;

  return (
    /* styles.page */
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      
      {/* styles.back */}
      <Link to="/" className="text-2xl fixed top-8 left-8 z-50 text-[#aaa] no-underline hover:text-white transition-colors">
        ← Back
      </Link>
      <div className="max-w-240 mx-auto ">
       
        {/* styles.image */}
        <img 
            src={game.image} 
            alt={game.title} 
            className="w-full max-w-240 my-4 rounded-xl shadow-lg border border-slate-800" 
        />

        <div className="flex items-center mt-4 mb-4">
            <div className="text-left text-4xl font-bold">{game.title}</div>
            {game.link && (
                <a href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center ml-4">
                    <span className="text-2xl">&#x1F517;</span>
                </a>
            )}
            {game.link_steam && (
                <a href={game.link_steam}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center ml-4">
                        <img src={'./images/logo_steam_small.png'} alt={'steam-image'} className="w-6 h-6"/>
                </a>
            )}
        </div>

        <div className="max-w-3xl text-left">
            <div className="">
                <span className="text font-bold">When:</span>
                <span className="ml-2 text text-gray-200">{game.date}</span>
            </div>
            <div className="flex items-center  mt-2 ">
                <span className="text font-bold ">Where:</span>
                <span className="ml-2 text text-gray-200">{game.who}</span>
                {game.who_link && (
                    <a href={game.who_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center ml-4">
                        <span className="text">&#x1F517;</span>
                    </a>
                )}
                {game.who_linked_in && (
                    <a href={game.who_linked_in}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center ml-4">
                            <img src={'./images/InBug-White.png'} alt={'linkedin-image'} className="w-4 h-4"/>
                    </a>
                )}
                {game.who_github && (
                    <a href={game.who_github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center ml-4">
                            <img src={'./images/GitHub_Invertocat_White.svg'} alt={'github-image'} className="w-4 h-4"/>
                    </a>
                )}

            </div>
            <div className="mt-6">
                <div className="text-2xl font-semibold mb-2">Overview</div>
                <div className="text-left text-slate-100 leading-relaxed" dangerouslySetInnerHTML={{ __html: game.overview }}/>
                </div>

            <div className="mt-4">
                <div className="text-2xl font-semibold mb-2">My Role</div>
                <div className="text-left text-slate-100 leading-relaxed" dangerouslySetInnerHTML={{ __html: game.role }}/>
            </div>

            <section>
            <h2 className="text-lg mt font-semibold mt-8 mb-2">Technology</h2>
            {/* styles.tech */}
            <div className="flex flex-wrap gap-2">
                {game.tech.map((t) => (
                /* styles.tag */
                <span 
                    key={t} 
                    className="bg-[#222] px-2.5 py-1 rounded-full text-sm font-medium border border-slate-700"
                >
                    {t}
                </span>
                ))}
            </div>
            </section>
        </div>
      </div>
    </div>
  );
}
