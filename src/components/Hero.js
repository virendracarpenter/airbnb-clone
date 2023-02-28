import cover from "../images/karsten.jpg";

function Hero() {
  return (
    <section className="hero">
      <img alt="cover" className="hero-cover" src={cover} />
      <h1 className="hero-titile">Online Experiences</h1>
      <p className="hero-sub-titile">Join unique interative activities led by one-of-a-kind host-all without leaving home.</p>
    </section>
  );
}

export default Hero;
