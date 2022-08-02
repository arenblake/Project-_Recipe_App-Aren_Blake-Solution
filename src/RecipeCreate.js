import React, { useState } from "react";

function RecipeCreate({setRecipes}) {

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes((currentRecipes) => [
      ...currentRecipes,
      formData,
    ])
    console.log("Submitted:", formData);
    setFormData({ ...initialFormState });
  };

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                Name:
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                Cuisine:
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                Photo:
                <input
                  id="photo"
                  type="url"
                  name="photo"
                  onChange={handleChange}
                  value={formData.photo}
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                Ingredients:
                <textarea
                  id="ingredients"
                  rows={2}
                  name="ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                Preparation:
                <textarea
                  id="preparation"
                  rows={2}
                  name="preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
