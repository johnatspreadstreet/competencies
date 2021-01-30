import React from "react";
import { Typography } from "antd";

const { Paragraph } = Typography;

const template = [
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
];

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
    novice:
      "Knows how to prop up an Express server. Knowledge of HTTP, including: payloads, semantics, compression, ssl/tls, JSON, serializations",
    intermediate:
      "Knowledge of various API protocols such as REST, SOAP, WebSocket.",
    expert: "Knowledge and integration of API facades such as GraphQL",
    master:
      "Has written libraries that sit on top of the API to simplify frequently used tasks and to fill in gaps in the API. Experience integrating other patterns such as RPC. Experience with data payloads such as protocol buffers.",
    comments: {
      rating: 89,
      description:
        "Cryptosheets utilized a service-oriented REST/WebSocket backend for all properties. Backend initially was coded using GraphQL, but was reverted due to development speed constraints. I have never integrated an RPC backend, or protocol buffers.",
      bullets: [],
    },
  },
  {
    key: "2",
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
      bullets: [],
    },
  },
];

const devops = [
  {
    key: "1",
    competency: "Source Code Management",
    novice: "",
    intermediate: "",
    expert:
      "Proficient in using CVS and SVN features. Knows how to branch and merge, use patches setup repository properties etc.",
    master:
      "Knowledge of distributed VCS systems. Has tried out Bzr/Mercurial/Darcs/Git",
    comments: {
      rating: 100,
      description: "",
      bullets: [],
    },
  },
  {
    key: "2",
    competency: "Scaling",
    novice:
      "Single process application. No consideration for scaling past inherent language capabilities.",
    intermediate:
      "Utilized single-machine scaling methods such as the cluster module.",
    expert:
      "Experience with load balancing, compression, TLS termination, and rate limiting.",
    master: "Successfully deployed distributed, multi-region systems. ",
    comments: {
      rating: 81,
      description:
        "Cryptosheets utilized a multi-core solution with integrated autoscaling based on CPU/RAM/Throughput",
      bullets: [],
    },
  },
  {
    key: "3",
    competency: "Observability",
    novice: "Basic logging, no long term logging solution. No health checks. ",
    intermediate:
      "Application health checks, alerting with tools such as Cabot.",
    expert:
      "Cloud based metric tracking and visualizations using tools such as Graphite, StatsD, and Grafana.",
    master: "Distributed request tracing with tools such as Zipkin.",
    comments: {
      rating: 89,
      description:
        "Cryptosheets utilized DataDog for long term log storage, and used the DataDog agent for distributed request tracing.",
      bullets: [],
    },
  },
  {
    key: "4",
    competency: "Containers",
    novice: "Has never utilized containers.",
    intermediate: "Built one-off, or single serve images.",
    expert: "Multi-stage builds and container optimization techniques.",
    master: "Has deployed a container orchestration tool such as Kubernetes.",
    comments: {
      rating: 77,
      description: "",
      bullets: [],
    },
  },
];

const integrations = [
  {
    key: "1",
    competency: "Systems Decomposition",
    novice: "Not able to think above the level of a single file/class",
    intermediate:
      "Able to break up problem space and design solution as long as it is within the same platform/technology",
    expert: "Able to design systems that span multiple technologies/platforms.",
    master:
      "Able to visualize and design complex systems with multiple product lines and integrations with external systems. Also should be able to design operations support systems like monitoring, reporting, fail overs etc.",
    comments: {
      rating: 100,
      description:
        "Cryptosheets utilized a service oriented backend with multiple integrations. They included:",
      bullets: [
        "SQL Server",
        "MongoDB",
        "Algolia",
        "Intercom",
        "Stripe",
        "Google APIs",
        "Office APIs",
        "Google Analytics",
        "Cloudinary",
        "Medium API",
        "SendGrid",
        "Twitter",
        "140+ Crypto Providers",
      ],
    },
  },
];

const management = [
  {
    key: "1",
    competency: "Faciliation",
    novice: "",
    intermediate: "",
    expert: "",
    master: "",
    comments: {
      rating: 100,
      description:
        "Cryptosheets utilized a service oriented backend with multiple integrations. They included:",
      bullets: [
        "SQL Server",
        "MongoDB",
        "Algolia",
        "Intercom",
        "Stripe",
        "Google APIs",
        "Office APIs",
        "Google Analytics",
        "Cloudinary",
        "Medium API",
        "SendGrid",
        "Twitter",
        "140+ Crypto Providers",
      ],
    },
  },
];

export { frontend, backend, devops, integrations, management };
