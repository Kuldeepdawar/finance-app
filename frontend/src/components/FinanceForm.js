// Form to create/update finance applications
import React, { useState, useEffect } from "react";
import { createFinance, updateFinance } from "../services/api";

const FinanceForm = ({ financeData, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    personalDetails: { name: "", age: "" },
    income: "",
    expenses: "",
    assets: "",
    liabilities: "",
  });

  useEffect(() => {
    if (financeData) setFormData(financeData);
  }, [financeData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (financeData) {
      await updateFinance(financeData._id, formData);
    } else {
      await createFinance(formData);
    }
    onFormSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.personalDetails.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="age"
        type="number"
        value={formData.personalDetails.age}
        onChange={handleChange}
        placeholder="Age"
        required
      />
      <input
        name="income"
        type="number"
        value={formData.income}
        onChange={handleChange}
        placeholder="Income"
        required
      />
      <input
        name="expenses"
        type="number"
        value={formData.expenses}
        onChange={handleChange}
        placeholder="Expenses"
        required
      />
      <input
        name="assets"
        type="number"
        value={formData.assets}
        onChange={handleChange}
        placeholder="Assets"
        required
      />
      <input
        name="liabilities"
        type="number"
        value={formData.liabilities}
        onChange={handleChange}
        placeholder="Liabilities"
        required
      />
      <button type="submit">{financeData ? "Update" : "Create"} Finance</button>
    </form>
  );
};

export default FinanceForm;
