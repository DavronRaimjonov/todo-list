import React, { useRef, useState } from "react";
import "./AddList.scss";
import Listitem from "../list-item/Listitem";
import { getForm, getValue } from "../../servic";
const AddList = () => {
  const [value, setValue] = useState({ plan: "" });
  const [value2, setValue2] = useState([]);
  const ref = useRef();
  const delteList = (id) => {
    setValue2((p) => p.filter((item) => item.id != id));
  };
  const edit = (obj) => {
    setValue2((p) => p.map((item) => (item.id == obj.id ? obj : item)));
  };
  return (
    <div className="add_list">
      <form onSubmit={(e) => getForm(e, setValue, setValue2, value, ref)}>
        <input
          maxLength={55}
          ref={ref}
          value={value.plan}
          onChange={(e) => getValue(e, setValue)}
          name="plan"
          type="text"
          placeholder="What do you have planed ?"
        />
        <button type="submit">Add Task</button>
      </form>
      <div className="add_title">
        <h1>Tasks: </h1>
      </div>
      <div className="add_list_item">
        {value2.map((item) => (
          <Listitem edit={edit} delteList={delteList} key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AddList;
