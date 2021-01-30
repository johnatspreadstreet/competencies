import { Statistic, Table } from "antd";
import { Typography } from "antd";

const { Paragraph, Title } = Typography;

const columns = [
  {
    title: "Competency",
    dataIndex: "competency",
    key: "competency",
    width: "10%",
    render: (text) => <Title level={4}>{text}</Title>,
  },
  {
    title: "Novice (20%-40%)",
    dataIndex: "novice",
    key: "novice",
    width: "15%",
  },
  {
    title: "Intermediate (40%-60%)",
    dataIndex: "intermediate",
    key: "intermediate",
    width: "15%",
  },
  {
    title: "Expert (60%-80%)",
    dataIndex: "expert",
    key: "expert",
    width: "15%",
  },
  {
    title: "Master (80%-100%)",
    dataIndex: "master",
    key: "master",
    width: "15%",
  },
  {
    title: "Comments",
    dataIndex: "comments",
    key: "comments",
    render: (text) => {
      const { rating, description, bullets } = text;
      return (
        <Paragraph>
          <Statistic title="Rating" value={rating} suffix="/ 100" />
          {description}
          <ul>
            {bullets.map((bullet) => {
              return <li>{bullet}</li>;
            })}
          </ul>
        </Paragraph>
      );
    },
  },
];

const CompetencyTable = ({ data }) => {
  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default CompetencyTable;
