import {
  Header,
  Home,
  TechsSection,
  ProjectsSection,
  ContactSection,
} from "@/components";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <TechsSection />
      {/* @ts-expect-error Async Server Component */}
      <ProjectsSection />
      <ContactSection />
    </>
  )
}

export default App;
