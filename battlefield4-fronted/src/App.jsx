import Breadcrumbs from "./components/Breadcrumbs";
import Invite from "./components/Invite";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-screen w-full">
      <div className="bgImg absolute top-0 left-0 h-full w-full bg-cover bg-center">
        {/* Sidebar */}
        <Sidebar />
        <Invite />
        <main className="h-full pl-[7vh] md:pl-[12vh] p-1">
          {/* browser_breadcrumbs */}
          <Breadcrumbs />

          <MainContent />
        </main>
      </div>
    </div>
  );
}

export default App;
