import React from "react";
import { Tabs } from "antd";
import {
  frontend,
  backend,
  devops,
  integrations,
  security,
  qa,
  management,
} from "./data";

import CompetencyTable from "./CompetencyTable";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function Competencies() {
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Front End" key="1">
        <CompetencyTable data={frontend} />
      </TabPane>
      <TabPane tab="Back End" key="2">
        <CompetencyTable data={backend} />
      </TabPane>
      <TabPane tab="DevOps" key="3">
        <CompetencyTable data={devops} />
      </TabPane>
      <TabPane tab="Integrations" key="4">
        <CompetencyTable data={integrations} />
      </TabPane>
      <TabPane tab="Security" key="5">
        <CompetencyTable data={security} />
      </TabPane>
      <TabPane tab="QA" key="6">
        <CompetencyTable data={qa} />
      </TabPane>
      <TabPane tab="Management" key="7">
        <CompetencyTable data={management} />
      </TabPane>
    </Tabs>
  );
}
