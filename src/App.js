import { PageHeader } from "antd";
import Competencies from "./components/Competencies";
import "antd/dist/antd.css";

function App() {
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title="John Young"
      subTitle="Competency Matrix"
    >
      <Competencies />
    </PageHeader>
  );
}

export default App;
