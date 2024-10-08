// import { useEffect } from "react";
import { Form, redirect } from "react-router-dom";

const AddProduct = () => {
  return (
    <div className="main_form">
      <Form className="add_form" method="POST" encType="multipart/form-data">
        <h1 className="form_heading">Add Product Form</h1>

        <div data-mdb-input-init class="form-outline mb-2 p-1">
          <label class="form-label" name="company" for="form6Example3">
            Company name
          </label>
          <input
            type="text"
            name="company"
            id="form6Example3"
            class="form-control"
          />
        </div>

        <div data-mdb-input-init class="form-outline mb-2 p-1">
          <label class="form-label" name="product_details" for="form6Example7">
            Product Details
          </label>
          <textarea
            class="form-control"
            name="product_details"
            id="form6Example7"
            rows="4"
          ></textarea>
        </div>

        <div data-mdb-input-init class="form-outline mb-2 p-1">
          <label class="form-label" for="form6Example3">
            Original Price
          </label>
          <input
            type="number"
            name="original_price"
            id="form6Example3"
            class="form-control"
          />
        </div>

        <div data-mdb-input-init class="form-outline mb-2 p-1">
          <label class="form-label" for="form6Example4">
            Discount
          </label>
          <input
            type="number"
            id="form6Example4"
            name="discount_percentage"
            class="form-control"
          />
        </div>

        <div data-mdb-input-init class="form-outline mb-2 p-1">
          <label class="form-label" for="form6Example5">
            Rating
          </label>
          <input
            type="number"
            id="form6Example5"
            name="rating"
            class="form-control"
          />
        </div>

        <div data-mdb-input-init class="form-outline mb-2 p-1">
          <label class="form-label" for="form6Example6">
            Delivery Date
          </label>
          <input
            type="date"
            id="form6Example6"
            name="delivery_date"
            class="form-control"
          />
        </div>

        <div data-mdb-input-init class="form-outline mb-2 p-1">
          <label class="form-label" for="form6Example6">
            Return date
          </label>
          <input
            type="number"
            name="return_date"
            id="form6Example6"
            class="form-control"
          />
        </div>

        <div data-mdb-input-init class="form-outline mb-2 p-1">
          <label class="form-label" for="form6Example6">
            Product Image
          </label>
          <input
            type="file"
            name="image"
            id="form6Example6"
            class="form-control"
          />
        </div>

        <div className="formBtn">
          <button
            data-mdb-ripple-init
            type="submit"
            class="btn btn-primary btn-block mt-4 mb-4"
          >
            ADD PRODUCT
          </button>
        </div>
      </Form>
    </div>
  );
};

export const FormAction = async (data) => {
  const formData = await data.request.formData();
  //   const productData = Object.fromEntries(formData);

  fetch("http://localhost:7000/addProduct", {
    method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: formData,
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("res:", res);
    });
  return redirect("/");
};

export default AddProduct;
