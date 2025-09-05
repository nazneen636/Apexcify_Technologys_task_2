const SectionTitle = ({ titleText, className }) => {
  return (
    <div className="mt-1">
      <h4
        className={`${className} text-sm opacity-70 flex gap-3 items-center `}
      >
        {" "}
        <div className="w-2 h-2 bg-white rounded-full inline-block"></div>
        <div className="">{titleText}</div>
      </h4>
    </div>
  );
};

export default SectionTitle;
