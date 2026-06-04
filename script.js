const submitBtn = document.getElementById("submit-btn");
const infoSection = document.getElementById("info-section");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const emailForm = document.getElementById("email-form");

const viewBtns = document.querySelectorAll(".btn-view");
// Lấy email mục tiêu nằm trong thẻ li (id="target-email")
// Dùng textContent để đọc được dữ liệu ngay cả khi phần tử đang bị ẩn (hide)
const targetEmail = document.getElementById("target-email").textContent.trim();

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn trang web tải lại

  const emailValue = emailInput.value.trim();

  // Bước 1: Kiểm tra định dạng Regex
  const isValidFormat = regex.test(emailValue);

  // Bước 2: Kiểm tra khớp với email trong danh sách li
  const isMatch = emailValue === targetEmail;

  if (emailValue === "" || !isValidFormat || !isMatch) {
    // Nếu rỗng, sai định dạng HOẶC không khớp email mục tiêu -> Hiện lỗi
    errorMessage.classList.remove("hide");
    emailInput.classList.add("is-invalid");
  } else {
    // Nếu đúng hoàn toàn:
    errorMessage.classList.add("hide");
    emailInput.classList.remove("is-invalid");

    // Hiện danh sách thông tin và ẩn form nhập liệu
    infoSection.classList.remove("hide");
    emailForm.classList.add("hide");
  }
});

viewBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const card = btn.closest(".card");
    const content = card.querySelector(".card-content");

    if (content) {
      content.classList.toggle("hide");

      //Kiem tra trang thai
      if (content.classList.contains("hide")) {
        btn.innerHTML = "&#9660; VIEW MORE";
      } else {
        btn.innerHTML = "&#9650; VIEW LESS";
      }
    }
  });
});
