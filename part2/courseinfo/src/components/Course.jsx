const Course = (props) => (
  <ul style={{listStyleType:'none', padding: 0, margin: 0}}>
    {props.courses.map(course => 
        <li key={course.id} >
          <Name name={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </li>
    )}
  </ul>
)

const Name = (props) => <h2>{props.name}</h2>

const Content = (props) => (
  <ul style={{ listStyleType:'none', padding: 0, margin: 0}}>
    {props.parts.map(part => <Part key={part.id} part={part} />)}
  </ul>
)

const Part = (props) => (
  <li>
    {props.part.name} {props.part.exercises}
  </li>
)


const Total = (props) => {
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0) 
  return (
    <p>
      <b>total of {total} exercises</b>
    </p>
  )
}

export default Course