import ButtonInput from "./components/buttonInput";

export default function Page() {
  return (
    <div className="w-screen h-screen text-white overflow-x-hidden">
      <header className="h-[4rem] flex items-center justify-center text-2xl text-center">
        Color Palette Finder
      </header>
      <ButtonInput></ButtonInput>
    </div>
  );
}
