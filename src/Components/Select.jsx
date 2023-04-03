
function Select() {
  return (
    <div className="Select">
      <label className="select-label" htmlFor="category">
        Category
      </label>
      <select className="select-select" name="" id="category">
        <option className="select-option" value="Any">
          Any
        </option>
        <option className="select-option" value="Any">
          Science: Gadgets
        </option>
        <option className="select-option" value="Any">
          Science: Gadgets
        </option>
        <option className="select-option" value="Any">
          Science: Gadgets
        </option>
      </select>
      <i class="fa-regular fa-hand-pointer pointer-icon"></i>
    </div>
  );
}

export default Select;
