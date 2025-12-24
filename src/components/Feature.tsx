import cmm from "../assets/images/cmm-big@2x.png";
import coderunner from "../assets/images/coderunner@2x.png";
import meeter from "../assets/images/meeter@2x.png";
import iconCmm from "../assets/images/icon-cmm.png";
import iconCoderunner from "../assets/images/icon-coderunner.png";
import iconMeeter from "../assets/images/icon-meeter.png";

export default function Feature() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Feature 1: Clean Mac */}
        <div className="bg-gradient-to-br from-pink-300 via-pink-400 to-purple-700 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div className="p-8 md:p-12 text-white">
              <div className="flex items-center gap-3 mb-4">
                <img src={iconCmm} alt="Clean Icon" className="w-14 h-14" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3">Keep your Mac clean</h3>
              <p className="text-pink-50 text-base leading-relaxed">Remove junk, scan for malware, wipe email attachments</p>
            </div>
            <div className="flex justify-center items-center p-8 md:p-12 bg-gradient-to-br from-pink-400 to-purple-700">
              <img
                src={cmm}
                alt="System Cleaner Interface"
                className="w-full max-w-md rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Feature 2: Write Code - Horizontal Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
            <img
              src={coderunner}
              alt="Code Editor"
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <img src={iconCoderunner} alt="Code Icon" className="w-16 h-16 flex-shrink-0" />
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Write code</h3>
                <p className="text-gray-600 text-lg">Create applications in more than 25 languages</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Meetings */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div className="p-8 md:p-12 text-white">
              <div className="flex items-center gap-3 mb-6">
                <img src={iconMeeter} alt="Meeting Icon" className="w-14 h-14" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3">Join meetings in a click</h3>
              <p className="text-blue-100 text-base leading-relaxed">Quickly access links to your meetings from menu bar</p>
            </div>
            <div className="flex justify-center items-center p-8 md:p-12 bg-gradient-to-br from-blue-800 to-blue-950">
              <img
                src={meeter}
                alt="Meeting Interface"
                className="w-full max-w-md rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
