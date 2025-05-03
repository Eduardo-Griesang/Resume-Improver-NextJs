import Image from "next/image";
import Header from "./Components/Header";
import About from "./Components/About";
import ResumeUploader from "./Components/ResumeUploader";

export default function Home() {
  //https://matsu-theme.vercel.app
  return (
    <section className="mx-20">
      <Header />
      <About />
      <ResumeUploader />
    </section>
  );
}
