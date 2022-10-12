import Books from "../components/Books";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <NavBar />
      <Books />
    </main>
  );
}
