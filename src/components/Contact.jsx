import { Link } from "react-scroll";
import Background from "../assets/images/Background-01.jpg"

const Contact = () =>{
    return(
        <div className="w-full h-[340px] relative flex overflow-hidden">
            <img
            src={Background}
            alt="Background Image"
            className="w-full object-cover z-0"/>
            <div className="flex flex-col h-[340px] absolute z-10 w-full items-center">
            <div className="flex flex-col items-center h-[340px] p-[80px] gap-[40px] text-white">
                <h2 className="text-[24px] font-bold text-center">Contact Me</h2>
                <div className="grid grid-cols-2 gap-[20px]">
                <button className="w-[280px] h-[40px] bg-Blue1 rounded-[10px] flex justify-center items-center gap-[10px] font-medium hover:bg-GreenB" onClick={() => window.open("mailto:jose.e.jimenez.1411@gmail.com")}> <img src="/src/assets/svgs/mail.svg"
                alt="Email" className="w-[20px]"/>jose.e.jimenez.1411@gmail.com</button>
                <button className="w-[280px] h-[40px] bg-Blue1 rounded-[10px] flex justify-center items-center gap-[10px] font-medium hover:bg-GreenB" onClick={() => window.open("https://linkedin.com/in/jejs97", "_blank")}> <img src="/src/assets/svgs/linkedin2.svg"
                alt="Email" className="w-[20px]"/>linkedin.com/in/jejs97</button>
                <button className="w-[280px] h-[40px] bg-Blue1 rounded-[10px] flex justify-center items-center gap-[10px] font-medium hover:bg-GreenB" onClick={() => window.open("https://wa.me/584145017060", "_blank")}> <img src="/src/assets/svgs/whatsapp.svg"
                alt="Email" className="w-[20px]"/>+58 4145017060</button>
                <button className="w-[280px] h-[40px] bg-Blue1 rounded-[10px] flex justify-center items-center font-medium gap-[10px] hover:bg-GreenB" onClick={() => window.open("https://t.me/JEJS97", "_blank")}> <img src="/src/assets/svgs/telegram.svg"
                alt="Email" className="w-[20px]"/>@JEJS97</button>
                </div>
            </div>
            <Link 
            to="front" 
            smooth={true} 
            duration={500} 
            className="absolute rounded-full w-10 h-10 bg-Blue1 z-20 right-10 bottom-10 hover:bg-GreenB cursor-pointer flex items-center justify-center hover:text-Blue1 text-GreenB">
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