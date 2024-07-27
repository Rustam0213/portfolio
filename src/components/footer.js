import React from "react";
import { TbBrandTelegram } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaWhatsapp, FaDiscord, FaGithub, FaArrowDown} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


export default function Footer () {
      return(
            <footer>
                  <h2 className="text-center">Contact me</h2>
                  <div className="row">
                        <a href="https://t.me/gteqn6" target="_blank" rel="noopener noreferrer"><TbBrandTelegram className="social-icon telegram" /></a>
                        <a href="https://www.instagram.com/_rustam335_?igsh=MWl0dnE5dHY0eGE4aQ=="><BsInstagram className="social-icon instagram"/></a>
                        <a href="https://www.facebook.com/profile.php?id=100085128186335"><FaFacebookF className="social-icon facebook"/></a>
                        <a href="mailto:rdvelihanov1245@gmail.com"><MdOutlineMail className="social-icon mail"/></a>
                        <a href="https://wa.me/qr/FQINASW4WKXLO1"><FaWhatsapp className="social-icon whatsapp"/></a>
                        <a href="https://discordapp.com/users/gianr432"><FaDiscord className="social-icon discord"/></a>
                        <a href="https://github.com/Rustam0213"><FaGithub className="social-icon github"/></a>
                  </div>
            </footer>
      )
}