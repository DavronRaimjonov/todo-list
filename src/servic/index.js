const getValue = (e, setValue) => {
  setValue((value) => ({ ...value, [e.target.name]: e.target.value }));
};

const getForm = async (e, setValue, setValue2, value, ref) => {
  e.preventDefault();
  if (value.plan === "") {
    ref.current.style.border = "1px solid red";
    return;
  } else {
    ref.current.style.border = "none";
  }
  setValue2((p) => [...p, { ...value, id: Date.now() }]);
  setValue({ plan: "" });
};

export { getValue, getForm };
