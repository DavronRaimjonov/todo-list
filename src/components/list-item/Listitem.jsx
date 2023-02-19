import { useState } from "react";
import "./ListItem.scss";

const Listitem = ({ plan, id, delteList, edit }) => {
  const [hidden, statHidden] = useState(true);
  const [value, setValue] = useState({ plan });
  const getValue = (e) => {
    setValue((value) => ({ ...value, [e.target.name]: e.target.value }));
  };
  const editData = () => {
    edit({ ...value, id });
    statHidden(true);
  };
  const getHidden = () => {
    statHidden(!hidden);
  };
  return (
    <div className="list_item">
      {hidden ? (
        <h1>{plan}</h1>
      ) : (
        <input
          className="edit_input"
          onChange={getValue}
          name={"plan"}
          defaultValue={value.plan}
          type={"text"}
        />
      )}
      <div className="list_btn">
        {hidden ? (
          <button onClick={getHidden} className="edit">
            Edit
          </button>
        ) : (
          <button onClick={editData} className="edit">
            Edit
          </button>
        )}
        <button onClick={() => delteList(id)} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Listitem;
