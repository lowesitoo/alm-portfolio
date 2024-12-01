const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center dark:bg-gray-100 dark:text-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm sm:text-base leading-relaxed">
          © {new Date().getFullYear()} Luis | IT Help Desk Technician
        </p>
      </div>
    </footer>
  );
};

export default Footer;
