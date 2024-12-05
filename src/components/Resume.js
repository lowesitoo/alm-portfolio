const Resume = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white dark:bg-gray-200 dark:text-black flex flex-col justify-center items-center px-4">
      {/* Responsive Iframe Container */}
      <div className="w-full sm:w-4/5 h-[60vh] sm:h-[75vh] border-2 border-gray-700 shadow-lg dark:border-gray-400 rounded-lg overflow-hidden">
        <iframe
          src="/Luis_Resume.pdf"
          title="Resume"
          className="w-full h-full"
        ></iframe>
      </div>
      {/* Download Button */}
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
