const SectionComponent = ({ children, id, extraStyle }) => {
  return (
    <section
      id={id}
      className="md:py-16 py-8 bg-white dark:bg-gray-900 text-gray-900 relative md:h-screen h-auto clip-diagonal skew-y-6 -mt-25 font-light"
    >
      <div className={`-skew-y-6 md:pt-20 md:px-10 px-5 flex flex-col md:flex-row justify-between ${extraStyle}`}>
        {children}
      </div>
    </section>
  );
}

export default SectionComponent;