import { useEffect, useRef, useState } from "react";
import "./AddList.scss";
import Listitem from "../list-item/Listitem";
import { request } from "../config/axios";
const AddList = () => {
  const [value, setValue] = useState({ plan: "" });
  const [value2, setValue2] = useState([]);
  const ref = useRef();
  const getValue = (e) => {
    setValue((value) => ({ ...value, [e.target.name]: e.target.value }));
  };

  const getForm = (e) => {
    e.preventDefault();
    if (value.plan === "") {
      ref.current.style.border = "1px solid red";
      return;
    } else {
      ref.current.style.border = "none";
    }
    request.post("/lists", value);
    setValue({ plan: "" });
  };
  const delteList = async (id) => {
    await request.delete("/lists/" + id);
    setValue2((p) => p.filter((item) => item.id != id));
  };
  const edit = async (obj) => {
    let response = await request.put("/lists/" + obj.id, obj);
    const { id } = response.data;
    setValue2((p) =>
      p.map((item) => (item.id == id ? { ...response.data } : item))
    );
  };
  useEffect(() => {
    request.get(`/lists`).then((data) => setValue2(data.data));
  }, [value]);
  return (
    <div className="add_list">
      <form onSubmit={getForm}>
        <input
          maxLength={55}
          ref={ref}
          name="plan"
          onChange={getValue}
          value={value.plan}
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
