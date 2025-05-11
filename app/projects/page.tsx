// app/projects/page.tsx

/* eslint-disable react/no-unescaped-entities */

export default function ProjectsPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>

      <div className="p-4 border rounded shadow">
        <h2 className="text-2xl font-semibold">Learning Management System (LMS)</h2>
        <p>
          I developed a library management system using C, which includes features for user management and book management. The system allows administrators to add, update, and delete user records, as well as manage book inventories. All data is stored persistently in a `.csv` file, ensuring that user and book information is retained between sessions.
        </p>
        <p>
          The user management module enables the creation of user profiles, including details such as user ID, name, and contact information. Similarly, the book management module allows for adding new books, updating existing records, and removing books from the inventory. The system also supports searching for users or books based on specific criteria, making it efficient to locate records.
        </p>
        <p>
          The `.csv` file format was chosen for its simplicity and ease of use, allowing the system to read and write data efficiently. I implemented file handling operations in C to ensure data integrity and prevent corruption during read/write processes. The system also includes input validation to handle edge cases and ensure that only valid data is stored.
        </p>
        <p>
          This project provided me with valuable experience in procedural programming and file I/O operations in C. Debugging and optimizing the system to handle large datasets was a challenging yet rewarding task. I also gained a deeper understanding of data structures, such as arrays and linked lists, which were used to manage records in memory before saving them to the `.csv` file.
        </p>
        <p>
          The library management system has potential applications in small libraries or educational institutions, where a lightweight and efficient solution is needed for managing books and users. This hands-on project helped me strengthen my programming fundamentals and problem-solving skills, making it a significant addition to my portfolio.
        </p>
        <a href="https://github.com/sashantchettri/project_lms" target="_blank" className="text-blue-600 underline">
          View GitHub Repo
        </a>
      </div>

      <div className="p-4 border rounded shadow">
        <h2 className="text-2xl font-semibold">Ultrasonic Radar</h2>
        <p>
          I built an ultrasonic radar using a Tiva C microcontroller, servo motor, and LCD screen programmed in C. The system simulates radar scanning and displays real-time distance data. The ultrasonic sensor emits sound waves and calculates the distance of objects based on the time it takes for the echo to return. The servo motor rotates the sensor in a sweeping motion, mimicking the behavior of a traditional radar system.
        </p>
        <p>
          The LCD screen provides a visual representation of the detected distances, allowing users to observe the radar's functionality in real time. This project was an excellent opportunity to explore embedded systems programming and hardware integration. I gained hands-on experience with low-level programming in C, working with peripherals like timers, pulse-width modulation (PWM), and GPIO pins.
        </p>
        <p>
          Additionally, I implemented algorithms to process the sensor data and ensure accurate distance measurements. Debugging and optimizing the system to handle real-time data processing was a challenging yet rewarding experience. This project not only enhanced my understanding of microcontroller-based systems but also improved my problem-solving skills when working with hardware-software interactions.
        </p>
        <p>
          The ultrasonic radar has potential applications in robotics, security systems, and obstacle detection. It serves as a foundation for more advanced projects involving autonomous navigation or object tracking. This hands-on project helped me bridge the gap between theoretical knowledge and practical implementation, making it a valuable learning experience.
        </p>
      </div>

      <div className="p-4 border rounded shadow">
        <h2 className="text-2xl font-semibold">Resume</h2>
        <p>Download my resume as a PDF.</p>
        <a href="/Resume.pdf" target="_blank" className="text-blue-600 underline">
          Download Resume
        </a>
      </div>
    </section>
  );
}
