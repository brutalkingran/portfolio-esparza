const SectionComponent = ({ children, id, extraStyleSection, extraStyleDiv }) => {
  return (
    <section
      id={id}
      className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 relative font-light overflow-hidden ${extraStyleSection}`}
    >
      <div
        className={`md:pt-20 md:px-10 px-5 flex flex-col md:flex-row justify-between items-center gap-8 min-h-screen w-screen ${extraStyleDiv}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionComponent;
