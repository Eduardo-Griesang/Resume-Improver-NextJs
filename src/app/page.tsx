import Image from "next/image";
import Header from "./Components/Header";
import About from "./Components/About";
import ResumeUploader from "./Components/ResumeUploader";

export default function Home() {
  return (
    <body className="mx-20">
      <Header />
      <About />
      <ResumeUploader />
    </body>
  );
}
