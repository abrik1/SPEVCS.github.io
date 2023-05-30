document.addEventListener("DOMContentLoaded", function () {
    const allIteam = document.querySelectorAll('.navmenu ul li a');

    allIteam.forEach(iteam => {
        iteam.addEventListener("click", function (e) {
            e.preventDefault();

            for (var i = 0; i < allIteam.length; i++) {
                allIteam[i].classList.remove("active");
            }
            this.classList.add("active");
        });
    });
});