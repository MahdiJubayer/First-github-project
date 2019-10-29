import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CoureseList from "./CoureseList";
import { Link } from "react-router-dom";

function InformationPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses));
  }, []);

  return (
    <>
      <h2> Information</h2>
      <Link className="btn btn-primary sb-2" to="course">
        Add Course
      </Link>
      <CoureseList courses={courses} />
    </>
  );
}

export default InformationPage;

//// The Code Below is using "Class" components, adn the code above is funnction components using React hooks.

// import React from "react";
// import { getCourses } from "../api/courseApi";

// lass InformationPage extends React.Component {
//   state = {
//     courses: []
//   };

//   componentDidMount() {
//     getCourses().then(courses => this.setState({ courses: courses }));
//   }

//   render() {
//     return (
//       <>
//         <h2> Information</h2>
//         <table className="table">
//           <thead>
//             <tr>
//               <th> Title</th>
//               <th> Author ID</th>
//               <th> Category</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.courses.map(course => {
//               return (
//                 <tr key={course.id}>
//                   <td> {course.title}</td>
//                   <td> {course.authorId}</td>
//                   <td> {course.category}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </>
//     );
//   }
// }

// export default InformationPage;
