import Aside from "./components/Aside.jsx"
import Pokemons from "./components/Pokemons.jsx"

function App() {
  return (
    <main className="font-outfit h-screen overflow-y-auto">
      <section className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-[1fr_350px]">
        {/* max-w-[1400px] */}
        <Pokemons />
        <Aside />
      </section>
    </main>
  )
}

export default App
