// Imports
import Link from "next/link";
import { type IFooterLinkProps } from "./Footer.types";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

// Functions
const Footer = () => (
  <footer className="bg-[#212529] py-12">
    <div className="page-width flex flex-col gap-8">
      <section className="flex items-center justify-between">
        <Link href="/">
          <h3 className="text-lg font-bold text-[#F8F9FA]">
            JOERI BREEDVELD<span className="text-[#DDBEA9]">.</span>
          </h3>
        </Link>
        <ul className="hidden gap-8 md:flex">
          <FooterLink href="#hero">Home</FooterLink>
          <FooterLink href="#projects">Projects</FooterLink>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#education">Experience</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
          <FooterLink href="#services">Services</FooterLink>
        </ul>
      </section>
      <div className="h-[1px] bg-[#E5E5E5] opacity-20"></div>
      <section className="flex items-center justify-between">
        <p className="text-xs font-medium text-[#F8F9FA] opacity-50">
          joeri.breedveld123@gmail.com
        </p>
        <ul className="flex gap-8">
          <li>
            <Link
              href="https://github.com/joeribreedveld"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-lg text-[#F8F9FA] opacity-50" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/joeribreedveld/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-lg text-[#F8F9FA] opacity-50" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/joeri.bv/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="text-lg text-[#F8F9FA] opacity-50" />
            </Link>
          </li>
        </ul>
      </section>
    </div>
  </footer>
);

const FooterLink = ({ children, href }: IFooterLinkProps) => (
  <li>
    <Link href={href} className="text-xs text-[#F8F9FA] opacity-50">
      {children}
    </Link>
  </li>
);

// Exports
export default Footer;
