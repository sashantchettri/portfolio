// app/page.tsx

/* eslint-disable react/no-unescaped-entities */

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
        I am Sashant Chettri, a third-year Electrical and Electronics Engineering student at Griffith University. My academic journey has been driven by a deep passion for technology and innovation, particularly in the fields of embedded systems, signal processing, and silicon design. These areas fascinate me because they form the backbone of modern electronics and computing, enabling groundbreaking advancements in various industries.
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
      <p className="text-lg mt-4">
        My journey in technology has been shaped by a strong desire to understand how things work at a fundamental level. This curiosity has driven me to delve into the intricacies of embedded systems, where I can design and optimize hardware-software interactions. For example, working with microcontrollers and real-time operating systems has taught me the importance of efficiency and precision in resource-constrained environments. These experiences have not only enhanced my technical skills but also instilled in me a problem-solving mindset that I apply to all aspects of my work.
      </p>
      <p className="text-lg mt-4">
        In addition to my technical pursuits, I am passionate about sharing knowledge and fostering a collaborative environment. I believe that teamwork and communication are vital in achieving success in any project. During my academic and professional experiences, I have had the opportunity to work in diverse teams, where I learned to appreciate different perspectives and leverage collective strengths to overcome challenges. These experiences have reinforced my belief in the power of collaboration and the importance of building strong professional relationships.
      </p>
      <p className="text-lg mt-4">
        Outside of my academic and technical endeavors, I enjoy engaging in activities that allow me to unwind and recharge. I am an avid reader, particularly drawn to books on technology, science fiction, and personal development. Reading not only broadens my knowledge but also inspires me to think creatively and approach problems from unique angles. Additionally, I enjoy outdoor activities such as hiking and cycling, which help me maintain a healthy work-life balance and stay energized.
      </p>
      <p className="text-lg mt-4">
        Looking ahead, I am excited about the opportunities that lie in the intersection of hardware and software. The rapid advancements in fields like artificial intelligence, quantum computing, and IoT present endless possibilities for innovation and impact. I aspire to contribute to these areas by leveraging my skills and experiences to develop solutions that address real-world challenges. Whether it’s designing efficient algorithms, creating user-friendly applications, or optimizing hardware systems, I am committed to making a meaningful difference in the world of technology.
      </p>
      <p className="text-lg mt-4">
        Ultimately, my goal is to be a lifelong learner and a catalyst for positive change. I am driven by the belief that technology has the power to transform lives and create a better future for everyone. By staying curious, embracing challenges, and collaborating with others, I aim to push the boundaries of what is possible and leave a lasting impact in the field of engineering and beyond.
      </p>
    </section>
  );
}
