import About from "../components/about"
import Footer from "../components/footer"
import Header from "../components/header"
import Hero from "../components/hero"
import Services from "../components/services"

const Home = () => {
	return (
		<>
		<Header />
			<main>
			<section id="home">
				<Hero />
			</section>

			<section id="about">
				<About />
			</section>

			<section id="services">
				<Services />
			</section>
		</main>
		<Footer />
		</>
	)
}
export default Home