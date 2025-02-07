import { Link } from "react-scroll";
import Background from "../assets/images/Background-01.jpg"
import Linkedin from "../assets/svgs/linkedin2.svg"
import Whatsapp from "../assets/svgs/whatsapp.svg"
import Telegram from "../assets/svgs/telegram.svg"
import Mail from "../assets/svgs/mail.svg"

const Contact = () =>{
    return(
        <div className="font-roboto relative h-auto w-full flex overflow-hidden">
      <img
        src={Background}
        alt="Background Image"
        className="w-full h-full z-0 absolute inset-0 object-cover"
      />

            <div className="flex flex-col h-auto relative z-10 w-full items-center ">
            <div className="flex flex-col items-center h-auto mob:p-[40px] tab:p-[60px] lap:p-[80px] gap-[40px] desk1:p-[100px] desk2:p-[120px] desk3:p-[140px] text-gray-200 pho:p-[20px]">
                <h2 className="text-[24px] desk1:text-[26px] font-bold text-center">Contact Me</h2>
                <div className="grid tab:grid-cols-2 desk2:grid-cols-4 pho:grid-cols-1 gap-[20px]">
                <button className="w-[280px] h-[40px] bg-Blue1 rounded-[10px] flex justify-center items-center gap-[10px] font-medium hover:bg-GreenB" onClick={() => window.open("mailto:jose.e.jimenez.1411@gmail.com")}> <img src={Mail}
                alt="Email" className="w-[20px]"/>jose.e.jimenez.1411@gmail.com</button>
                <button className="w-[280px] h-[40px] bg-Blue1 rounded-[10px] flex justify-center items-center gap-[10px] font-medium hover:bg-GreenB" onClick={() => window.open("https://linkedin.com/in/jejs97", "_blank")}> <img src={Linkedin}
                alt="Linkedin" className="w-[20px]"/>linkedin.com/in/jejs97</button>
                <button className="w-[280px] h-[40px] bg-Blue1 rounded-[10px] flex justify-center items-center gap-[10px] font-medium hover:bg-GreenB" onClick={() => window.open("https://wa.me/584145017060", "_blank")}> <img src={Whatsapp}
                alt="Whatsapp" className="w-[20px]"/>+58 4145017060</button>
                <button className="w-[280px] h-[40px] bg-Blue1 rounded-[10px] flex justify-center items-center font-medium gap-[10px] hover:bg-GreenB" onClick={() => window.open("https://t.me/JEJS97", "_blank")}> <img src={Telegram}
                alt="Telegram" className="w-[20px]"/>@JEJS97</button>
                </div>
            </div>
            <Link 
            to="front" 
            smooth={true} 
            duration={500} 
            className="absolute rounded-full lap:w-10 lap:h-10 pho:w-8 pho:h-8 bg-Blue1 z-20 lap:right-10 lap:bottom-10 mob:right-3 mob:bottom-5 pho:right-[20px] pho:bottom-[290px] hover:bg-GreenB cursor-pointer flex items-center justify-center hover:text-Blue1 text-GreenB">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" className="h-5 w-5 rotate-180 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </Link>
            <div className=" w-full h-2 bg-GreenB"></div>
            </div>

        </div>
    )

}

export default Contact;