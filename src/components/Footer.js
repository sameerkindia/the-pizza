import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="flex justify-center gap-2 items-center flex-col px-10 py-2  text-xl  bg-[#365486] font-bold text-[#7FC7D9]">
      <p>Follow Us On</p>
      <div className="p-1 border-b-2 mb-2 border-solid border-[#7FC7D9] w-[20vw]"></div>
      <nav className="w-[40%] flex justify-evenly">
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaGithub />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
