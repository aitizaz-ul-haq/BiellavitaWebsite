import "./footer.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content-container">
        <h5 className="rights-line-homepage">
          © 2024 BiellaVita. All Rights Reserved.
        </h5>
        <button className="linkdin-circularbutton">
          {" "}
          <Image
            src="/Linkdin.png" // The path relative to the "public" folder
            alt="My Awesome Image"
            width={40} // Width of the image
            height={40} // Height of the image
          />
        </button>
      </div>
    </footer>
  );
}
