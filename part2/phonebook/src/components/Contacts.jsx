const Contact = (props) => (
  <li>{props.person.name} {props.person.number}</li>
)

const Contacts = (props) => {
  return(
    <ul style={{listStyleType: 'none', padding: 0, margin: 0}}>
      {props.persons.map(person => <Contact key={person.id} person={person} />)}
    </ul>
  )
}

export default Contacts
