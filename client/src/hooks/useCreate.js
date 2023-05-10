import { useState } from "react";
import { useDispatch } from "react-redux";
import { postRecipe } from "../redux/actions";

export const useCreate = (initialForm, validationCreate) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validationCreate(form));
  };
  const handleCheck = (e) => {
    if (e.target.checked) {
      setForm({
        ...form,
        diets: [...form.diets, e.target.value],
      });
    }
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setForm({
      ...form,
      image: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validationCreate(form));

    // console.log(formData.get("image"));
    console.log(e.target);
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      const data = new FormData(e.target);

      dispatch(postRecipe(data)).then((res) => {
        setLoading(false);
        setResponse(true);
        setForm(initialForm);
        setTimeout(() => {
          setResponse(false);
        }, 3000);
      });
      //   alert("Receta creado");
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    handleCheck,
    handleFile,
  };
};

// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log(input);
//   dispatch(postRecipe(input));
//   alert("receta creado");
//   setInput({
//     name: "",
//     image: "",
//     summary: "",
//     healthScore: "",
//     steps: "",
//     diets: [],
//   });
//   history.push("/home");
// };
