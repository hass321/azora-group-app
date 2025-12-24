import logo from "../assets/icons/setapp-icon-birthday-15.svg";
import picsIcon from "../assets/icons/pics.svg";
import teamworkIcon from "../assets/icons/teamwork.svg";
import secureIcon from "../assets/icons/secure.svg";
import pdfIcon from "../assets/icons/pdf.svg";
import wifiIcon from "../assets/icons/wifi.svg";
import planIcon from "../assets/icons/plan.svg";
import converterIcon from "../assets/icons/converter.svg";
import manageIcon from "../assets/icons/manage.svg";
import codeIcon from "../assets/icons/code.svg";
import macpaw from "../assets/icons/macpaw.svg";
import google from "../assets/icons/google.svg"
import apple from "../assets/icons/apple.svg"


const HeroSection = () => {
    return (
    <section className="relative flex min-h-[calc(100vh-40px)] items-center justify-center overflow-hidden">
      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center text-white">
        <div className="mb-6">
          <img
            src={logo}
            alt="Center Logo"
          />
        </div>
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl heading">
          Dozens of apps.<br />
          One subscription.<br />
          <span className="block mt-2 heading">$9.99</span>
        </h1>
        <div className="mt-8 flex items-center gap-4 w-[365px]">
          <button className="w-[209.93px] rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-200 transition">
            Try free for 7 days
          </button>
          <button className="w-[62px] flex h-12 w-12 items-center justify-center rounded-md bg-white">
            <img src={apple} alt="Apple" className="h-7 w-7" />
          </button>
          <button className="w-[62px] flex h-12 w-12 items-center justify-center rounded-md bg-white">
            <img src={google} alt="Google" className="h-6 w-6" />
          </button>
        </div>
        <p className="mt-6 max-w-md text-sm text-gray-400 sub-heading">
          Power up your workflow with Setapp, a <br/>smart way to get apps.
        </p>
      </div>
      <div className="absolute left-35 top-1/2 -translate-y-1/2">
        <img src={picsIcon} className="relative top-25"/>
        <img src={pdfIcon} className="relative left-25 top-12"/>
        <img src={macpaw} className="relative left-0 -translate-y-21"/>
        <img src={teamworkIcon} />
        <img src={secureIcon} className="relative -translate-y-9"/>
      </div>
      <div className="absolute right-25 top-1/2 -translate-y-1/2">
        <img src={wifiIcon} className="relative top-35" />
        <img src={planIcon} className="relative top-18 right-22" />
        <img src={converterIcon} className="relative top-4 left-16 z-10" />
        <img src={manageIcon} className="relative -translate-y-9 right-18" />
        <img src={codeIcon} className="relative -translate-y-15 right-4" />
      </div>
    </section>
  )
};

export default HeroSection;