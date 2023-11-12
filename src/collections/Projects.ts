import { CollectionConfig } from "payload/types";

import contentStatus from "../fields/contentStatus";
import projectCategory from "../fields/postCategory";
import lastUpdated from "../fields/lastUpdated";
import projectStatus from "../fields/projectStatus";
import People from "./People";

const Project: CollectionConfig = {
  slug: "project",
  admin: {
    useAsTitle: "projectTitle",
  },
  fields: [
    contentStatus,
    lastUpdated,
    {
      name: "projectTitle",
      type: "text",
      required: true,
    },

    {
      type: "group",
      name: "projectInformation",
      fields: [
        projectCategory,
        {
          name: "description",
          type: "richText",
          label: "Project description",
        },
        {
          name: "tags",
          hasMany: true,
          type: "relationship",
          relationTo: "tags",
        },
        {
          type: "row",
          fields: [
            {
              name: "directedBy",
              label: "directed by",
              type: "relationship",
              relationTo: "people",
            },
            {
              name: "producedByPerson",
              label: "produced by (person)",
              type: "relationship",
              relationTo: "people",
            },
            {
              name: "artDirecton",
              label: "art direction",
              type: "relationship",
              relationTo: "people",
            },
          ],
        },
        {
          type: "row",
          fields: [
            projectStatus,
            {
              name: "releaseDate",
              label: "release date",
              type: "date",
              admin: {
                description: "release date for the project (if known)",
              },
            },
          ],
        },
      ],
    },
    {
      type: "group",
      label: "media",
      name: "mediaGroup",
      fields: [
        {
          // images
          type: "row",
          fields: [
            {
              name: "images",
              label: "image viewer (collection of stills)",
              type: "relationship",
              relationTo: "media",
            },
            {
              name: "thumbnail",
              label: "main image",
              type: "relationship",
              relationTo: "media",
            },
          ],
        },
        {
          // MEDIA URIS
          type: "row",
          fields: [
            {
              // vimeo
              name: "vimeoURI",
              label: "vimeo ID",
              type: "text",
            },
            {
              // youtube
              name: "youtubeURI",
              label: "Youtube ID",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
};

export default Project;

