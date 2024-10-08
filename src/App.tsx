import "./App.css";
import { ChangeLog } from "./components/ChangeLog";

function App() {
  const LOG_DATA = [
    {
      id: "1",
      date: "2023-02-28",
      name: " AI Engineer Roadmap, Leaderboards, Editor AI, and more ",
    },
    {
      id: "2",
      date: "2023-02-28",
      name: "テストテストテストテストテストああああああああああああああああ",
    },
  ];
  return (
    <>
      <h1>Vite + React</h1>
      <section>
        <h2>Changelog Component</h2>
        <ChangeLog
          datas={LOG_DATA}
          title="Changelog"
          description="We are always improving our content, adding new resources and adding features to enhance your learning experience. "
        />
      </section>
    </>
  );
}

export default App;
