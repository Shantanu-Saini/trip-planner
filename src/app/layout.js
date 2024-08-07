import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Trip Planner",
  description: "India's No. 1 Trip Planning Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
