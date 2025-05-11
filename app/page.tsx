// app/page.tsx
import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <Image
        src="/Profile.jpeg"
        alt="Profile"
        width={160}
        height={160}
        className="rounded-full mb-6"
      />
      <p className="text-lg">
        I’m Sashant Chettri, a third-year Electrical and Electronics Engineering student at Griffith University. My academic journey has been driven by a deep passion for technology and innovation, particularly in the fields of embedded systems, signal processing, and silicon design. These areas fascinate me because they form the backbone of modern electronics and computing, enabling groundbreaking advancements in various industries.
      </p>
      <p className="text-lg mt-4">
        Over the years, I have honed my skills in programming languages such as C, Python, Rust, and JavaScript. Each of these languages has allowed me to explore different aspects of software and hardware development. For instance, I use C and Rust for low-level programming and embedded systems, while Python and JavaScript enable me to work on high-level applications and full-stack development. This diverse skill set has empowered me to tackle complex problems and build innovative solutions.
      </p>
      <p className="text-lg mt-4">
        Currently, I am actively working on projects involving FPGA, ASIC, and full-stack development. These projects allow me to bridge the gap between hardware and software, which is a critical aspect of modern engineering. My work with FPGAs and ASICs has given me hands-on experience in designing and optimizing digital circuits, while my full-stack projects have enhanced my understanding of web technologies and user interfaces.
      </p>
      <p className="text-lg mt-4">
        Beyond academics, I am deeply committed to continuous learning and personal growth. I believe that staying curious and adaptable is essential in the ever-evolving field of technology. Whether it’s exploring new programming paradigms, experimenting with emerging technologies, or collaborating with like-minded individuals, I am always eager to expand my horizons and contribute to meaningful projects that make a difference.
      </p>
    </section>
  );
}
