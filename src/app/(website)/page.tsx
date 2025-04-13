import Image from "next/image";
import zik from "../public/zik.jpeg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SkillsSection from "@/components/molecules/skills";
import { projects } from "../../lib/utils";
export default function Home() {
	return (

		<main className=" m-4 ">
			<div className="flex flex-col justify-between  align-center lg:flex-row-reverse  gap-[20px] h-[100%]">
				<div className="w-full ">
					<div className="mt-[10px]">
						<Image
							alt="An image of Ezekiel smilling"
							src={zik}
							className="object-contain  rounded-[40%] shadow-lg"
						/>
					</div>
					<div className="text-center">
						<p className=" text-[20px]">Jeremiah H. Ezekiel</p>
						<p className=" text-3xl font-extrabold">Software Engineer</p>
						<p className="">Brigham Young University Idaho</p>
					</div>
				</div>

				<div className="self-center lg:m-[20px] bg-gradient-to-br from-green-600 via-black to-yellow-400 text-white grow  p-6">
					<h2 className="text-3xl font-bold">Mission</h2>
					<p className="indent-12">
						My mission is to put smile on peoples face and help them become
						betterby empowering them with the opportunity technology offers
						either by making or helping them use one.{" "}
					</p>
					<p>
						I believe that by harnessing the power of education combine with
						hardwork,determination, accountability, honesty and integrity the
						world will be a better place for everyone.
					</p>
					<Button className=" bg-gradient-to-br from-green-600 via-black to-yellow-400 m-[20px]">
						<Link href="/about">Learn more about me Here</Link>
					</Button>
				</div>
			</div>

			<section>
				<h2 id="skills">Skills</h2>

				<SkillsSection />
			</section>

			<section>
				<h2 id="projects">Projects</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{projects.map((project) => (
						<div key={project.id} className="p-4 rounded-lg shadow-md">
							<Link href={`/projects/${project.id}`}>
								<h3 className="text-xl font-bold">{project.name}</h3>
								<p>{project.description}</p>
								<Image
									src={project?.images[0]}
									alt={project.name}
									width={400}
									height={400}
								></Image>
							</Link>
						</div>
					))}
				</div>
			</section>
		</main>

	);
}
