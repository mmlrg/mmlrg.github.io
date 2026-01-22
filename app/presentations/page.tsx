import Link from 'next/link';
import getPresentations from "../../components/getPresentations"


function Presentations() {
    const presentations = getPresentations();

    // Function to determine season and year from date
    const getSeason = (dateStr: string) => {
        const date = new Date(dateStr);
        const month = date.getMonth() + 1; // 1-12
        const year = date.getFullYear();

        if (month >= 1 && month <= 4) {
            return `Winter ${year}`;
        } else if (month >= 5 && month <= 8) {
            return `Summer ${year}`;
        } else {
            return `Fall ${year}`;
        }
    };

    // Group presentations by season
    const groupedPresentations: { [key: string]: typeof presentations } = {};
    presentations.forEach((pres) => {
        const season = getSeason(pres.date);
        if (!groupedPresentations[season]) {
            groupedPresentations[season] = [];
        }
        groupedPresentations[season].push(pres);
    });

    // Render grouped presentations
    const presentationList = Object.keys(groupedPresentations).map((season) => (
        <div key={season} className="mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">{season}</h3>
            <div className="flex flex-col space-y-4">
                {groupedPresentations[season].map((pres, index) => (
                    <div key={index} className="border-l-4 border-purple-500 pl-4 py-2">
                        <p className="text-purple-500 text-2xl font-bold mb-1">{pres.title}</p>
                        {pres.guestPresenter ? (
                            <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded inline-block mb-2">
                                Guest Presenter
                            </span>
                        ) : (
                            <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-2 py-1 rounded inline-block mb-2">
                                Reading Group Discussion
                            </span>
                        )}
                        <p className="text-slate-700 text-lg font-semibold">{pres.presenter}</p>
                        <p className="text-slate-600 text-sm">{pres.affiliation}</p>
                        <p className="text-slate-500 text-sm mt-1">{pres.date}</p>
                        {pres.paper && (
                            <a
                                href={pres.paper}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-500 hover:text-purple-700 text-sm mt-1 inline-block hover:underline"
                            >
                                📄 View Paper
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    ));

    return (
      <main className="flex min-h-screen flex-col bg-white">

        <div className='flex flex-col items-center justify-center w-full text-center'>

            <div className='flex row justify-between pt-4 pb-4 w-3/4 lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
            <Link href="/">
                <p className="flex items-center text-xl hover:underline">McGill Machine Learning Reading Group</p>
            </Link>

            <Link href="/">
                <p className="flex items-center text-lg hover:underline">About</p>
            </Link>
            </div>

            <hr className="w-full"/>
        </div>

        <div className='flex flex-col items-center w-full mt-10 pb-14'>
            <div className='flex flex-col items-left justify-left w-3/4 lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                <p className='text-3xl mb-5'>Presentations</p>

                <div className="flex flex-col">
                {presentationList}
                </div>

            </div>
        </div>
    </main>
    )
  }

  export default Presentations;
