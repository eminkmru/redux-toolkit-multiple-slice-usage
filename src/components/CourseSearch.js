import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store/slices/courseSlice";

function CourseSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.courses.searchTerm;
  });
  return (
    <div className="listHeader">
      <h3 className="title is-3">Kurslarım</h3>
      <div className="search field is-horizontal">
        <label htmlFor="" className="label">
          Ara
        </label>
        <input
          type="text"
          className="input"
          onChange={(e) => {
            dispatch(changeSearchTerm(e.target.value));
          }}
          value={searchTerm}
        />
      </div>
    </div>
  );
}

export default CourseSearch;
