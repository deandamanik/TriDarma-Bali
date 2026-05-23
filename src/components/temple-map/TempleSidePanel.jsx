import { Link } from 'react-router-dom';
import { FiAlertCircle, FiClock, FiStar, FiUsers } from 'react-icons/fi';
import ArticleCard from '../cultural-encyclopedia/ArticleCard';
import MsmeList from './MsmeList';
import { ARTICLES } from '../../data/articles';

const etiquetteArticle = ARTICLES.find(
    (article) => article.title === 'How to Dress When Visiting a Temple'
);

const TempleSidePanel = ({ selectedTemple }) => {
    return (
        <aside className="border-t border-brown-normal bg-white lg:border-l lg:border-t-0">
            <div className="lg:sticky lg:top-0">
                <section className="bg-brown-normal px-5 py-6 text-orange-light sm:px-6">
                    <h1 className="text-xl font-extrabold leading-tight">
                        Dress Code & Prohibitions
                    </h1>

                    <p className="mt-1 text-xs font-medium text-orange-light/75">
                        Around {selectedTemple ? selectedTemple.name : 'Selected Temple'}
                    </p>

                    <div className="mt-6">
                        {etiquetteArticle ? (
                            <ArticleCard article={etiquetteArticle} />
                        ) : (
                            <div className="rounded-2xl bg-white p-5 text-sm font-semibold text-brown-normal">
                                Article not found.
                            </div>
                        )}
                    </div>
                </section>

                {!selectedTemple ? (
                    <section className="bg-white px-5 py-10 sm:px-6">
                        <div className="rounded-[26px] border-2 border-dashed border-yellow-normal bg-yellow-light p-6 text-center">
                            <h2 className="text-lg font-extrabold text-brown-normal">
                                Select a temple on the map
                            </h2>

                            <p className="mt-2 text-sm font-medium leading-relaxed text-brown-dark/60">
                                Click one of the temple markers to view visit details,
                                ceremony status, ticket information, and nearby local MSMEs.
                            </p>
                        </div>
                    </section>
                ) : (
                    <>
                        <section className="bg-white px-5 py-7 sm:px-6">
                            <article className="overflow-hidden rounded-[26px] border-2 border-brown-normal bg-white shadow-sm">
                                <div className="p-5">
                                    <span className="inline-flex rounded-full border border-yellow-normal bg-yellow-light px-3 py-1 text-[11px] font-extrabold text-orange-normal">
                                        {selectedTemple.statusLabel}
                                    </span>

                                    <h2 className="mt-3 text-xl font-extrabold leading-tight text-brown-normal">
                                        {selectedTemple.name}
                                    </h2>

                                    <p className="text-xs font-semibold text-brown-dark/45">
                                        {selectedTemple.area}
                                    </p>

                                    <p className="mt-1 text-[11px] font-medium leading-relaxed text-brown-dark/50">
                                        {selectedTemple.address}
                                    </p>

                                    <div className="mt-4 flex gap-3 rounded-xl border border-yellow-normal bg-yellow-light px-3 py-3 text-orange-dark">
                                        <FiAlertCircle className="mt-0.5 shrink-0" size={18} />

                                        <p className="text-xs font-semibold leading-relaxed">
                                            {selectedTemple.warning}
                                        </p>
                                    </div>

                                    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-brown-dark/10 pt-4 text-xs font-semibold text-brown-dark/50">
                                        <span className="inline-flex items-center gap-1.5">
                                            <FiClock size={14} />
                                            {selectedTemple.time}
                                        </span>

                                        <span className="inline-flex items-center gap-1.5">
                                            <FiUsers size={14} />
                                            {selectedTemple.visitors}
                                        </span>

                                        <span className="inline-flex items-center gap-1.5 text-brown-dark">
                                            <FiStar size={14} />
                                            {selectedTemple.rating}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between bg-brown-normal px-5 py-4 text-orange-light">
                                    <p className="text-xs font-extrabold">
                                        Ticket: {selectedTemple.ticket}
                                    </p>

                                    <Link
                                        to={`/temple-map/${selectedTemple.id}`}
                                        className="text-xs font-bold !text-orange-light/85 !no-underline hover:!text-white"
                                    >
                                        Detail ›
                                    </Link>
                                </div>
                            </article>
                        </section>

                        <MsmeList selectedTempleId={selectedTemple.id} />
                    </>
                )}
            </div>
        </aside>
    );
};

export default TempleSidePanel;