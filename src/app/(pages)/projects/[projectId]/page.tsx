import { projects } from "@/consts/projects";
import React from "react";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  FileText,
  Zap,
  Star,
  ChevronRight,
  Check,
  FolderOpen,
} from "lucide-react";

async function ProjectDetail({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const projectId = (await params).projectId;
  const project =
    projects.find((project) => project.id === projectId) || projects[1];
  const { duration, image, location, longDesc, points, shortDesc, title } =
    project;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-4xl font-bold text-main mb-4"
            style={{ color: "var(--color-main)" }}
          >
            {title}
          </h1>
          <div className="flex justify-center gap-8 text-lg">
            <span className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {duration}
            </span>
            <span className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              {location}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-2 h-full">
            <div className=" overflow-hidden shadow-xl h-full relative ">
              <Image src={image} alt={title} className="object-cover" fill />
            </div>
          </div>
          <div className="lg:col-span-1 h-full">
            <div className="bg-white p-6  shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-main">
                <FileText className="w-6 h-6 mr-2" />
                Project Overview
              </h2>
              <p className="text-gray-700 mb-6">{longDesc}</p>

              <h3 className="text-xl font-semibold mb-4 flex items-center text-main">
                <Zap className="w-5 h-5 mr-2" />
                Key Features
              </h3>
              <ul className="space-y-3">
                {points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-main mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white  shadow-lg p-8">
          <h2
            className="text-2xl font-semibold mb-6 flex items-center"
            style={{ color: "var(--color-main)" }}
          >
            <FolderOpen className="w-6 h-6 mr-2" />
            Project Specifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 ">
              <h3 className="text-lg font-medium mb-4 flex items-center text-main">
                <Zap className="w-5 h-5 mr-2" />
                Technical Details
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="block text-sm font-medium text-gray-500">
                      Project Duration
                    </span>
                    <span className="text-gray-700">{duration}</span>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span className="block text-sm font-medium text-gray-500">
                      Location
                    </span>
                    <span className="text-gray-700">{location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 ">
              <h3 className="text-lg font-medium mb-4 flex items-center text-main">
                <Star className="w-5 h-5 mr-2" />
                Project Highlights
              </h3>

              <div className="flex">
                <ChevronRight className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-gray-700">{shortDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
