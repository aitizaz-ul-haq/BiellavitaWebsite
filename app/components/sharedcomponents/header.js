import "./header.css";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="header-container-left">monogram</div>
      <div className="header-container-right">
        <div className="button-group-container">
          <button className="cicular-button">
            {" "}
            <Image
              src="/images/pngicons/user.png" // The path relative to the "public" folder
              alt="My Awesome Image"
              width={50} // Width of the image
              height={50} // Height of the image
            />
          </button>
          <button className="cicular-button">menu</button>
        </div>
      </div>
    </header>
  );
}
