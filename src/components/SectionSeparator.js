// src/components/SectionSeparator.js

const SectionSeparator = () => {
    return (
      <section className="bg-[#111111] py-20">
        <div className="container mx-auto px-6">
          {/* UPDATED: Changed w-1/3 and md:w-1/4 to larger values */}
          <div className="w-1/2 md:w-1/3 h-px bg-white mx-auto"></div>
        </div>
      </section>
    );
  };
  
  export default SectionSeparator;