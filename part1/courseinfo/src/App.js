const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  const ex1 = props.parts[0].exercises
  const ex2 = props.parts[1].exercises
  const ex3 = props.parts[2].exercises
  const n1 = props.parts[0].name
  const n2 = props.parts[1].name
  const n3 = props.parts[2].name
  return (
    <>
      <Part part={n1} exercises={ex1}/>
      <Part part={n2} exercises={ex2}/>
      <Part part={n3} exercises={ex3}/>
      {/* // <p>
      //   {props.part1} {props.exercises1}
      // </p>
      // <p>
      //   {props.part2} {props.exercises2}
      // </p>
      // <p>
      //   {props.part3} {props.exercises3}
      // </p> */}
    </>
  )
}

const Total = (props) => {
  const ex1 = props.parts[0].exercises
  const ex2 = props.parts[1].exercises
  const ex3 = props.parts[2].exercises
  return (
    <>
      <p>Number of exercises {ex1 + ex2 + ex3}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name:'Fundamentals of React',
        exercises: 10
      },
      {
        name:'Using props to pass data',
        exercises: 7
      },
      {
        name:'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App