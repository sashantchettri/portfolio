// app/contact/page.tsx
/* eslint-disable react/no-unescaped-entities */

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <ul className="space-y-2 text-lg">
        <li>Email: <a href="mailto:sashantchettri@gmail.com" className="text-blue-600 underline">sashantchettri@gmail.com</a></li>
        <li>GitHub: <a href="https://github.com/sashantchettri" target="_blank" className="text-blue-600 underline">github.com/sashantchettri</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/sashantchettri/" target="_blank" className="text-blue-600 underline">linkedin.com/in/sashantchettri</a></li>
      </ul>
    </section>
  );
}
