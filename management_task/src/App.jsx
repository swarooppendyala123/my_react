import { useContext } from "react";

import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import ProjectSideBar from "./components/ProjectSideBar";
import SelectedProject from "./components/SelectedProject";
import { ManagementContext } from "../store/management_context";
import ManagementContextProvider from "../store/management_context";

function AppContent() {
  const { selectedProjectId, projects } = useContext(ManagementContext);
  const selectedProject = projects.find(project => project.id === selectedProjectId);

  let content = <SelectedProject project={selectedProject} />;

  if (selectedProjectId === null) {
    content = <NewProject />;
  } else if (selectedProjectId === undefined) {
    content = <NoProject />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar />
      {content}
    </main>
  );
}

function App() {
  return (
    <ManagementContextProvider>
      <AppContent />
    </ManagementContextProvider>
  );
}

export default App;
