function CourseCard({ course }) {
  return (
    <article className="card">
      <h2>{course.title}</h2>
      <p>Lecturer: {course.lecturer}</p>
      <p>Progress: {course.progress}%</p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${course.progress}%` }}
        />
      </div>

      <strong>
        {course.completed ? "Completed" : "In progress"}
      </strong>
    </article>
  );
}

export default CourseCard;

