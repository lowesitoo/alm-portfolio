const Resume = () => {
  return (
    <section className="h-screen bg-gray-900 text-white dark:bg-gray-200 dark:text-black flex flex-col justify-center items-center">
      <iframe
        src="/Luis_Resume.pdf"
        title="Resume"
        className="w-full sm:w-4/5 h-3/4 sm:h-3/4 border-2 border-gray-700 shadow-lg dark:border-gray-400"
      ></iframe>
      <div className="mt-6">
        <a
          href="/Luis_Resume.pdf"
          download
          className="bg-green-400 text-gray-900 px-6 py-3 rounded-lg shadow-lg hover:bg-green-300 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
