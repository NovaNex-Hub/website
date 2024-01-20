import { ReactNode } from "react";



const Layout = ({ children }: { children: ReactNode }) => (
  <main className="h-[100vh] w-screen">
    
    <section className="h-screen w-screen">
      {children}
    </section>
  </main>
);

export default Layout;