import { Button } from "../@/components/ui/button";

export default function Home() {
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
            <Button
              className="text-white hover:text-orange-300 transition-colors duration-200"
              variant="ghost"
            >
             <a href="/"> Home</a>
            </Button>
            <Button
              className="text-white hover:text-orange-300 transition-colors duration-200"
              variant="ghost"
            >
              <a href="/">About</a>
            </Button>
            <Button
              className="text-white hover:text-orange-300 transition-colors duration-200"
              variant="ghost"
            >
               <a href="/">How to Use It</a>
            </Button>
            <Button
              className="text-white hover:text-orange-300 transition-colors duration-200"
              variant="ghost"
            >
              <a href="/">Help</a>
            </Button>
            <Button
              className="text-white hover:text-orange-300 transition-colors duration-200"
              variant="ghost"
            >
              <a href="/login">Login</a>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">
              CodeCrew
            </h1>
            <h2 className="text-2xl font-semibold mb-6 text-orange-200">
              Business Contract Validation Tool
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Submit your contracts to detect and highlight any deviations from
              the original template. Our system securely stores all your
              contracts and templates, providing easy and convenient access for
              future validations and references. CodeCrew delivers detailed and
              comprehensive insights about your contracts, ensuring you receive
              the highest level of accuracy and understanding for your
              documentation needs. Our advanced AI technology ensures that every
              detail is meticulously analyzed, offering you the best possible
              collaboration experience. Trust CodeCrew for all your contract
              validation and storage needs, ensuring seamless and efficient
              contract management.
            </p>
            <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
            <a href="/login">Explore</a>
            </Button>
          </div>
          <div className="mt-12">
            <img
              src="intelimg.jpg"
              alt="Business Contract Globe"
              className="rounded-lg shadow-2xl mx-auto max-w-full hover:shadow-orange-300/20 transition-shadow duration-300"
              style={{ maxWidth: "800px" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
