import { FiExternalLink, FiPhone, FiStar } from 'react-icons/fi';
import { MdVerified } from 'react-icons/md';

const MsmeCard = ({ msme }) => {
  if (!msme) return null;

  const Icon = msme.Icon;

  return (
    <article className="rounded-2xl border border-yellow-normal/80 bg-yellow-light p-4 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brown-dark/10">
      <div className="flex gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-yellow-normal/60 text-brown-normal">
          {Icon ? <Icon size={23} /> : <span className="text-xl">🏪</span>}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-extrabold leading-tight text-brown-normal">
                  {msme.name || 'Unnamed Business'}
                </h3>

                {msme.verified && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-[9px] font-bold text-blue-600">
                    <MdVerified size={11} />
                    Verified
                  </span>
                )}
              </div>

              <p className="mt-0.5 text-[11px] font-semibold text-brown-dark/45">
                {msme.category || 'Business'}
              </p>
            </div>

            <p className="shrink-0 text-[11px] font-extrabold text-orange-dark">
              {msme.price || '-'}
            </p>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] font-semibold text-brown-dark/45">
            <span className="inline-flex items-center gap-1 text-brown-dark">
              <FiStar
                className="fill-yellow-normal text-yellow-normal"
                size={13}
              />
              {msme.rating || '-'}
              <span className="text-brown-dark/35">
                ({msme.reviews || 0})
              </span>
            </span>

            <span>◎ {msme.distance || 'Unknown distance'}</span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-brown-normal px-3 text-[11px] font-bold text-white transition hover:bg-brown-dark"
            >
              <FiPhone size={12} />
              Contact
            </button>

            <button
              type="button"
              className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-orange-normal/50 bg-white px-3 text-[11px] font-bold text-brown-normal transition hover:bg-orange-light"
            >
              <FiExternalLink size={12} />
              Profile
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MsmeCard;