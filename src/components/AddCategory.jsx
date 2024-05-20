import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (e) => {
    //Prevenimos la racarga
    e.preventDefault();
    //Condicion para que el input tenga que ser mayor a uno
    if (inputValue.trim().length <= 1) return;
    //
    onNewCategory(inputValue.trim());
    //limpiar el input despues de enviar
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="search"
        placeholder="Search Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
