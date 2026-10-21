import CourseCard from "./CourseCard";
import courses from "./data/courses";

export default function App() {
  return (
    <main>
      <h1>My Course Dashboard</h1>

      {courses.length === 0 ? (
        <p>No courses available yet. Please check back later.</p>
      ) : (
        <section className="grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </section>
      )}
    </main>
  );
}