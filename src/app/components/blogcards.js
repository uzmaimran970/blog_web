import Link from 'next/link';  

const Blogcards = ({ id, title, content, date }) => {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap bg-white shadow-md w-[80%] px-8 my-4">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-gray-700">CATEGORY</span>
        <span className="mt-1 text-gray-500 text-sm">{date}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
        <p className="leading-relaxed">{content}</p>
        <Link href={`/blog/${id}`} passHref>   {/* Dynamic Link */}
          <span className="text-indigo-500 inline-flex items-center mt-4">
            Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Blogcards;
