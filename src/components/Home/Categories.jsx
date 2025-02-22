// Components
import Heading1 from "../common/Heading1";

export default function Categories() {
  return (
    <section className="px-4 md:px-0 bg-lime-100">
      <div className="container py-16 lg:py-16 md:px-10 mx-auto lg:w-3/4 xl:w-3/5 2xl:w-1/2">

        <Heading1>Inspiration for your Next Trip</Heading1>
		<div className="flex flex-col gap-4">

			<div className="flex justify- gap-4">
				<div className="shape size-20 bg-dry-green">
					<img src="" alt="Adventure picture" />
				</div>
				<div>
					<h3>
						Adventure
					</h3>
					<p>
						Description of category goes here.
					</p>
				</div>
			</div>
			<div className="flex justify- gap-4">
				<div className="shape size-20 bg-dry-green">
					<img src="" alt="Adventure picture" />
				</div>
				<div>
					<h3>
						Adventure
					</h3>
					<p>
						Description of category larger than the previous one goes here.
					</p>
				</div>
			</div>

		</div>

      </div>
    </section>
  );
}
