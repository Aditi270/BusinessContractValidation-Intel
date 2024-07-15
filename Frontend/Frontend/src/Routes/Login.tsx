import { Button } from "../@/components/ui/button";

export default function Login() {
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
            <Button className="text-white hover:text-orange-300 transition-colors duration-200" variant="ghost"><a href="/login">Login</a></Button>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-16 flex items-center justify-center">
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">Login to your account</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-orange-200 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-orange-200 mb-2">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
              />
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              <a href="/main">Login</a>
              </Button>
            </div>
          </form>
          <p className="mt-6 text-center">
            <Button className="text-orange-300 hover:text-yellow-300 transition-colors duration-200" variant="link">
              <a href="/signup">Click here to Sign-Up</a>
            </Button>
          </p>
        </div>
      </main>
    </div>
  );
}