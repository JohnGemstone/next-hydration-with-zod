import Test from "../components/Test";

export default function Home() {
  return (
    <main>
      <Test />
      {/* Commenting out sibling div fixes error */}
      <div></div>
    </main>
  );
}
