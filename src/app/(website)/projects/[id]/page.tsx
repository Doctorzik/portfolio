"use client"
import { notFound, useParams } from 'next/navigation'
import React from 'react'
import { projects } from "@/lib/utils";
import Image from 'next/image';


function ProjectPage() {

  const { id } = useParams()

  const pageProject = projects.find((project) => project.id === parseInt(id as string))
  if (!pageProject) return notFound();

  return (
    <>
      <div className="max-w-5xl mx-auto m-20 p-6">
        <h1 className="text-3xl font-bold mb-2">{pageProject?.name}</h1>
        <p className="text-gray-600 mb-4">{pageProject?.description}</p>
        <div className="flex gap-4 mb-6">
          {pageProject?.links?.map((link, i) => (
            <a
              key={i}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 mb-6">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {pageProject?.category}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm 
          ${pageProject?.status === "Completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
            {pageProject?.status}
          </span>
          <span className="text-sm text-gray-500">
            {pageProject.start_date} → {pageProject.end_date}
          </span>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {pageProject?.technologies?.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Milestones</h2>
          <ul className="space-y-2">
            {pageProject?.milestones?.map((m, i) => (
              <li key={i} className="flex justify-between items-center border-b pb-2">
                <span>{m.title}</span>
                <div className="flex gap-4 text-sm">
                  <span>{m.deadline}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full
                  ${m.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                      }`}
                  >
                    {m.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4"> Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {pageProject.images.map((img, i) => (

              <div key={i} className="relative aspect-video rounded-lg overflow-hidden shadow">
                <Image src={img} alt={`Project Image ${i + 1}`} width={500} height={500} ></Image>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectPage