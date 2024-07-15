import { Button } from "../@/components/ui/button";

export default function ChatPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="bg-black/50 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-md px-4 py-2 transform hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-xl">CodeCrew</span>
            </div>
          </div>
          <nav className="flex items-center space-x-6">
            <Button className="text-white hover:text-orange-300 transition-colors duration-200" variant="ghost"><a href="/">Home</a></Button>
            <Button className="text-white hover:text-orange-300 transition-colors duration-200" variant="ghost"><a href="/">About</a></Button>
            <Button className="text-white hover:text-orange-300 transition-colors duration-200" variant="ghost"><a href="/">How to Use It</a></Button>
            <Button className="text-white hover:text-orange-300 transition-colors duration-200" variant="ghost"><a href="/">Help</a></Button>
            <div className="flex items-center space-x-2 text-white">
              <img src="" alt="Profile" className="w-8 h-8 rounded-full border-2 border-orange-400" />
              <span className="text-orange-300">User</span>
              <span className="text-gray-400 text-sm">user@gmail.com</span>
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container mx-auto flex flex-col md:flex-row space-x-6">
          <aside className="w-full md:w-1/4 p-4">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl p-4">
              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 w-full mb-4 py-2 rounded-md transition-colors duration-200">New Chat</Button>
              <Button className="bg-gray-700 text-white hover:bg-gray-600 w-full mb-4 py-2 rounded-md transition-colors duration-200">History</Button>
              <Button className="bg-gray-700 text-white hover:bg-gray-600 w-full py-2 rounded-md transition-colors duration-200">Settings</Button>
            </div>
          </aside>
          <section className="flex-1 p-4">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl p-6 flex flex-col justify-between h-full">
              <div className="flex-1">
                <div className="flex items-start mb-4">
                  <img src="/profile-pic.png" alt="User" className="w-10 h-10 rounded-full mr-4 border-2 border-orange-400" />
                  <div className="bg-gray-700 text-white p-4 rounded-md">
                    <p>Send me pdf to analyze.</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 w-full py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                  Upload Document
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}