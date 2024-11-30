const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center dark:bg-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Luis | IT Help Desk Technician
        </p>
      </div>
    </footer>
  );
};

export default Footer;
