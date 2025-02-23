// Components
import Heading1 from "../common/Heading1";
import { CategoryCard } from "../CategoryCard";
// Media
import imgCategory1 from "../../../public/categories/mountains.jpg"
import imgCategory2 from "../../../public/categories/resort.jpg"
import imgCategory3 from "../../../public/categories/gastronomy.jpg"
import imgCategory4 from "../../../public/categories/culture.jpg"

export default function Categories() {
  return (
    <section className="px-4 md:px-0 bg-lime-100">
      <div className="container py-16 lg:py-16 md:px-10 mx-auto lg:w-3/4 xl:w-3/5 2xl:w-1/2">

        <Heading1>Inspiration for your Next Trip</Heading1>
		<div className="flex flex-col gap-8">
			<CategoryCard title={'Adventure'} imgSrc={imgCategory1}>
				Ideal destination for hiking or extreme sports
			</CategoryCard>
			<CategoryCard title={'Relax'} imgSrc={imgCategory2}>
				places with beaches, spas and luxury resorts
			</CategoryCard>
			<CategoryCard title={'Gastronomy'} imgSrc={imgCategory3}>
				Cities with outstanding food
			</CategoryCard>
			<CategoryCard title={'Culture'} imgSrc={imgCategory4}>
				Cities with history and iconic monuments
			</CategoryCard>
		</div>

      </div>
    </section>
  );
}
