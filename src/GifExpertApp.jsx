import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["X-men"]);

  const onAddCategory = (newCategory) => {
    console.log(newCategory);
    //Si la categoria ya existe no ejecutar
    if (categories.includes(newCategory)) return;
    //set categoria nueva junto con el estado viejo
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>
      {/* Search bar */}
      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
        // setCategories={setCategories} categories={categories}
      />
      {/* <button onClick={onAddCategory}>Add Category</button> */}
      {/* List of Gifs */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* Gifs Items */}
    </>
  );
};
