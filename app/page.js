import Header from "./components/sharedcomponents/header";
import MainHeading from "./components/pagecomponents/homepage/mainheading";
import Footer from "./components/sharedcomponents/footer";
import "./page.css";

export default function Home() {
  return (
    <main className="homepage">
      <video autoPlay muted loop className="background-video">
        <source src="/Biellabackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <Header />
      <MainHeading />
      <Footer />
    </main>
  );
}
