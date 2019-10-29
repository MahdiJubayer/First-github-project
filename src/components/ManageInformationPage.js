import React, { useState, useEffect } from "react";
// import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

const ManageInformationPage = props => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  /// this UseEfffect below will make sure that i can edit on the exiting corse titile.

  useEffect(() => {
    const slug = props.match.params.slug; /// this will make usre it will connect to path '/infomation/:slug
    if (slug) {
      courseApi.getCourseBySlug(slug).then(_course => setCourse(_course));
    }
  }, [props.match.params.slug]);

  function handleChange(event) {
    const updateCourse = { ...course, [event.target.name]: event.target.value };
    setCourse(updateCourse);
  }

  function formIsvalid() {
    const _errors = {};

    if (!course.title) _errors.title = "Title  is Required";
    if (!course.authorId) _errors.authorId = " Author ID is Required";
    if (!course.category) _errors.category = "Catagory  is Required";

    setErrors(_errors);
    //Form is valid if the error object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    if (!formIsvalid()) return;
    event.preventDefault();
    courseApi.saveCourse(course).then(() => {
      props.history.push("/information");
      toast.success("Course saved.");
    });
  }

  return (
    <>
      <h2> Manage Course</h2>
      {/* <Prompt when={true} message=" Are you sure you want to leave?" /> */}
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageInformationPage;
