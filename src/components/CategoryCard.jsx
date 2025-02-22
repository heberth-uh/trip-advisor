export function CategoryCard({ children, title, imgSrc }) {
  return (
    <div className="flex gap-6">
        <div className="shape bg-dry-green size-24 shrink-0 rotate-6 rounded-lg ml-4">
            <img src={imgSrc} className="size-24 object-cover object-left -rotate-12 hover:-rotate-6 rounded-lg transition-all ease-in-out duration-300" alt="Adventure picture" />
        </div>
        <div>
            <h3 className="text-base font-semibold">
                {title}
            </h3>
            <p className="text-sm font-light">
                {children}
            </p>
        </div>
    </div>
  );
}
