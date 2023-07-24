import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAge, userSelected } from "../redux/validationSlice";

export default function AgeDropDown(props) {
  const dispatch = useDispatch();
  const select=useSelector(userSelected);

  const ageOptions = [];
  for (let age = 18; age <= 40; age++) {
    ageOptions.push(
      <option key={age} value={age}>
        {age}
      </option>
    );
  }
  return (
    <div className="widget">
      <select
        id="age"
        name="age"
        onChange={(event) => {
          let age=event.target.value;
          dispatch(addAge(age));
          props.actions.actions.handleAge(age);
        }}
      >
        {ageOptions}
      </select>
    </div>
  );
}
