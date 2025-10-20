const SectionComponent = ({ children, id, extraStyleSection, extraStyleDiv }) => {
  return (
    <section
      id={id}
      className={`md:pt-20 md:px-10 px-5 flex flex-col md:flex-row justify-between items-center gap-8 min-h-[120vh] md:min-h-screen w-screen md:pb-0 ${extraStyleDiv}`}
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
