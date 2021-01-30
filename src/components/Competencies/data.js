import React from "react";
import { Typography } from "antd";

const { Paragraph } = Typography;

const frontend = [
  {
    key: "1",
    competency: "Build Automation",
    novice: "Only knows how to run websites from the broswer.",
    intermediate:
      "Knows how to build simple environments from the command line using tools like Grunt / Gulp.",
    expert:
      "Knows how to build complex environments, hot module reloading, etc with Grunt / Gulp / Webpack.",
    master:
      "Can setup automatic environments (dev, production, etc) to deploy to continuous integration services like Deploybot and CircleCI.",
    comments: {
      rating: 100,
      description:
        "Cryptosheets utilized an advanced build framework based around Webpack. Polyfills had to be used as early iterations of Excel used Internet Explorer 11, which was prehistoric compared to Chrome/Firefox/Safari. One framework was utilized to build the following:",
      bullets: ["Web App", "Excel", "Google Sheets"],
    },
  },
  {
    key: "2",
    competency: "Frameworks",
    novice: "Has not used any framework outside of core Javascript",
    intermediate: "Has used on at least one production project.",
    expert: "Is well-versed with the idioms of the framework.",
    master:
      "Has written and published services used by others to extend the functionality of the framework.",
    comments: {
      rating: 85,
      description:
        "Cryptosheets app, website, and docs all used React. React components and hooks functionality was extracted to a separate library to enhance reusability.",
      bullets: [],
    },
  },
  {
    key: "3",
    competency: "HTML/CSS",
    novice:
      "Faimiliar with HTML / CSS. Can use frontend frameworks like Bootstrap.",
    intermediate:
      "Can write custom HTML / CSS without a framework. Familiar with concepts like responsive design, sprites and complex CSS selectors.",
    expert:
      "Familiar with concepts like Preprocessors, CSS Animation, Flexbox, CSS Grid and Polyfills.",
    master:
      "Proficient with concepts like web workers, offline support, semantics and accessibility. At the bleeding edge of browser improvements and web standards.",
    comments: {
      rating: 90,
      description: "",
      bullets: [],
    },
  },
  {
    key: "4",
    competency: "Content Management Systems",
    novice: "Has not used any content management systems.",
    intermediate: "Has used at least one CMS for a project or built a theme.",
    expert: "Has used more than one CMS. Very familiar with the popular ones.",
    master:
      "Can create custom content modules using a CMS like Contentful. e.g able to export CMS data to an API or create web applications using a CMS as DB.",
    comments: {
      rating: 100,
      description:
        "Created a custom CMS for Cryptosheets (can be found at docs.cryptosheets.com). Have used multiple CMS systems, such as:",
      bullets: ["Contentful", "Prismic"],
    },
  },
];

const backend = [
  {
    key: "1",
    competency: "APIs",
    novice: "Needs to look up the documentation frequently",
    intermediate: "Has the most frequently used APIs in memory",
    expert: "Vast and In-depth knowledge of the API",
    master:
      "Has written libraries that sit on top of the API to simplify frequently used tasks and to fill in gaps in the API",
    comments: {
      rating: 100,
      description: "",
      bullets: ["bullet 1", "bullet 2"],
    },
  },
  {
    key: "2",
    competency: "Scripting",
    novice: "John Brown",
    intermediate: 32,
    expert: "New York No. 1 Lake Park",
    master: "test",
    comments: {
      rating: 100,
      description: "",
      bullets: ["bullet 1", "bullet 2"],
    },
  },
  {
    key: "3",
    competency: "Databases",
    novice: "Thinks that Excel is a database",
    intermediate:
      "Knows basic database concepts, normalization, ACID, transactions and can write simple selects",
    expert:
      "Able to design good and normalized database schemas keeping in mind the queries that’ll have to be run, proficient in use of views, stored procedures, triggers and user defined types. Knows difference between clustered and non-clustered indexes. Proficient in use of ORM tools.",
    master:
      "Can do basic database administration, performance optimization, index optimization, write advanced select queries, able to replace cursor usage with relational sql, understands how data is stored internally, understands how indexes are stored internally, understands how databases can be mirrored, replicated etc. Understands how the two phase commit works.",
    comments: {
      rating: 80,
      description: "",
      bullets: ["bullet 1", "bullet 2"],
    },
  },
];

export { frontend, backend };
