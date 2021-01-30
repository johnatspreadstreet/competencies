import React from "react";
import { Tabs } from "antd";
import { frontend, backend, devops } from "./data";

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
      <TabPane tab="Integrations" key="3">
        Content of Tab Pane 3
      </TabPane>
      <TabPane tab="Security" key="4">
        Content of Tab Pane 3
      </TabPane>
      <TabPane tab="QA" key="5">
        Content of Tab Pane 3
      </TabPane>
      <TabPane tab="Management" key="6">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
}
