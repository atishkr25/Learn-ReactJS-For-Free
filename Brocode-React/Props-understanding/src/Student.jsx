
//Props : Props in React are used to pass data from one component to another. They are arguments passed into 
        // React components, similar to function arguments in JavaScript and attributes in HTML

import propTypes from 'prop-types'

function Student(props) {
    return(
        <div className="student">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student : {props.isStudent ? "YES" : "NO"}</p>
        </div>
    )
}

Student.propTypes = {
    name : propTypes.string,
    age : propTypes.number,
    isStudent : propTypes.bool,

}
Student.defaultProps = {
    name : "Guest",
    age : 0,
    isStudent : false,
}
export default Student