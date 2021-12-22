    const pageviews = document.querySelector(".pageviews");
    const monthBill = document.querySelector(".monthBill");
    const arrPageView = [10, 50, 100, 500, 1], arrMont = [8, 12, 16, 24, 36];
    pageviews.addEventListener("input", (e) => {

      pageviews.previousElementSibling.textContent = `${arrPageView[e.target.value]}K Pageviews`;
      pageviews.style.background = `linear-gradient(90deg, hsl(174, 86%, 45%) ${parseInt(e.target.value) * 25}%, hsl(223, 50%, 87%) ${parseInt(e.target.value) * 25}%)`;
      validateDiscount();
    });
    monthBill.addEventListener("click", () => {
      validateDiscount();
    });
    function validateDiscount() {
      let mount = arrMont[parseInt(pageviews.value)];
      if (monthBill.checked) {
        pageviews.nextElementSibling.children[0].textContent = `$${(mount - ((mount * 25) / 100)).toFixed(2)}`;
      } else {
        pageviews.nextElementSibling.children[0].textContent = `$${mount.toFixed(2)}`;
      }
    }