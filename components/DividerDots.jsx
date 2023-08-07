const DividerDots = () => {
  return (
    <div className="relative h-[20px] md:h-[40px] transform translate-y-1/2">
      <div className="bg-transparent h-1/2"></div>
      <div className="bg-divider_dots bg-contain bg-center h-full absolute inset-0">
      </div>
      <div className="bg-transparent h-1/2"></div>
    </div>
  );
};

export default DividerDots;
