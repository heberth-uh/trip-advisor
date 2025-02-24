export function CategoryCard({ children, title, imgSrc }) {
  return (
    <div className="flex lg:flex-col lg:items-center gap-6">
        <div className="shape bg-dry-green size-24 lg:size-44 xl:size-52 shrink-0 rotate-6 lg:rotate-3 rounded-lg ml-4">
            <img src={imgSrc} className="size-full object-cover object-left -rotate-12 hover:-rotate-6 lg:-rotate-6 lg:hover:-rotate-3 rounded-lg lg:rounded-xl transition-all ease-in-out duration-300" alt={`${title} picture`} />
        </div>
        <div className="lg:text-center">
            <h3 className="text-base lg:text-xl font-semibold">
                {title}
            </h3>
            <p className="text-sm lg:text-base font-light">
                {children}
            </p>
        </div>
    </div>
  );
}
