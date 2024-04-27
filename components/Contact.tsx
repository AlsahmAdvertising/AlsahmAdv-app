const Contact = () => {
  return (
    <section
      id="contact"
      className="h-[100vh] w-[100%] bg-slate-700 flex items-center justify-center"
    >
      <div className="group duration-500 skew-x-6 mr-20">
        <div className="relative rounded-2xl w-72 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
          <span className="text-5xl font-bold">Alsahm</span>
          <p className="text-amber-300 font-thin">Phone number</p>
          <p className="text-amber-300 font-thin">Location link</p>
        </div>
      </div>
      <div className="card">
        <div className="relative bg-black w-[600px] sm:w-[600px] group transition-all duration-700 aspect-video flex items-center justify-center">
          <div className="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-[99%] h-[99%] absolute"></div>
          <div className="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-[99%] h-[99%] absolute group-hover:-translate-y-16">
            <p className="text-xl sm:text-2xl font-semibold text-gray-500 font-serif">
              Send email
            </p>
            <input placeholder="Email" className="w-60"></input>
            <textarea placeholder="Content" className="mt-2 w-60"></textarea>
            <button>Send</button>
          </div>
          <button className="seal bg-rose-500 text-red-800 w-12 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900">
            Email
          </button>
          <div className="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"></div>
          <div className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
          <div className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
          <div className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
