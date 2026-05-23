import { slugify } from '../../utils/slugify';

// Render isi artikel dari array block: paragraph | heading | list
const ArticleBody = ({ content = [] }) => {
  return (
    <div className="flex flex-col gap-5">
      {content.map((block, i) => {
        if (block.type === 'heading') {
          return (
            <h2
              key={i}
              id={slugify(block.text)}
              className="text-xl md:text-2xl font-bold text-brown-normal tracking-tight mt-3 scroll-mt-28"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === 'list') {
          return (
            <ul key={i} className="flex flex-col gap-2.5">
              {block.items.map((item, j) => (
                <li
                  key={j}
                  className="flex gap-3 text-base md:text-[17px] text-brown-dark/80 leading-relaxed"
                >
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-orange-normal shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        // default: paragraph
        return (
          <p
            key={i}
            className="text-base md:text-[17px] text-brown-dark/80 leading-relaxed"
          >
            {block.text}
          </p>
        );
      })}
    </div>
  );
};

export default ArticleBody;