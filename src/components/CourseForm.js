import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeName,
  changeCost,
  changeDescription,
} from "../store/slices/formSlice";
import { addCourse } from "../store/slices/courseSlice";

function CourseForm() {
  const dispatch = useDispatch();
  const { name, description, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      description: state.form.description,
      cost: state.form.cost,
    };
  });
  console.log(name, description, cost);

  const handleSubmit = (e) => {
    dispatch(addCourse({ name, description, cost }));

    e.preventDefault();
  };
  return (
    <div className="courseForm panel">
      <h4 className="subtitle is-3">Kurs Ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Ad</label>
            <input
              onChange={(e) => {
                dispatch(changeName(e.target.value));
              }}
              type="text"
              className="input is-expanded"
              value={name}
            />
          </div>
          <div className="field">
            <label className="label">Açıklama</label>
            <textarea
              onChange={(e) => {
                dispatch(changeDescription(e.target.value));
              }}
              className="input is-expanded"
              value={description}
            />
          </div>
          <div className="field">
            <label className="label">Fiyat</label>
            <input
              onChange={(e) => {
                dispatch(changeCost(parseInt(e.target.value)));
              }}
              type="number"
              className="input is-expanded"
              value={cost}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-primary">Kaydet</button>
        </div>
      </form>
    </div>
  );
}

export default CourseForm;
