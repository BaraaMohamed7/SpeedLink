function selectForm() {
  const formSelect = document.getElementById("form-select");
  const form1 = document.getElementById("form1");
  const form2 = document.getElementById("form2");

  if (formSelect.value === "form1") {
    form1.style.display = "block";
    form2.style.display = "none";
  } else if (formSelect.value === "form2") {
    form1.style.display = "none";
    form2.style.display = "block";
  }
}