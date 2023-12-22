import Demo from "./components/Demo";

function App() {
  return (
    <div className="pt-16 lg:pt-24 px-4 min-h-screen max-w-7xl mx-auto">
      <Demo />

      <a
        className="font-bold px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-400 text-white hover:text-white inline-block mt-4 underline"
        href="https://www.npmjs.com/package/custom-react-smartbanner"
        target="_blank"
      >
        Package: Custom React Banner
      </a>
    </div>
  );
}

export default App;
