import "./App.css";
import { AppSidebar } from "./components/appSidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";

function App({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}

export default App;
