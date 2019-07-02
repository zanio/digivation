window.addEventListener("DOMContentLoaded", () => {
  const barEl = document.querySelector(".bars");

  const getPageContent = url => {
    return new Promise((resolve, reject) => {
      if (window.fetch) {
        resolve(fetch(url));
        reject(err);
      } else {
        reject(err);
      }
    });
  };

  const removeDomElement = cls => {
    const elem = document.querySelector(cls);
    return elem.parentNode.removeChild(elem);
  };

  barEl !== null ?
    barEl.addEventListener("click", function () {
      document.querySelector(".mobile").style.display = "block";
      document.querySelector("body").insertAdjacentHTML("beforeend", '<div class="backdrop"></div>');

      document.querySelector(".backdrop").addEventListener("click", function () {
        this.style.display = "none";
        document.querySelector(".mobile").style.display = "none";
        this.parentNode.removeChild(this);
      });
    })
    : null

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1000) {
      if (document.querySelector(".social").classList.contains("social")) {
        document.querySelector(".social").classList.add("text-right");
      }
    } else {
      document.querySelector(".social").classList.remove("text-right");
    }
  });

  if (window.innerWidth <= 1000) {
    if (document.querySelector(".social").classList.contains("social")) {
      document.querySelector(".social").classList.add("text-right");
    }
  }

  document.querySelector("body").addEventListener("click", e => {
    const id = e.target.id;
    const cls = e.target.classList.contains("fa-circle");
    if (id === "next-1") {
      document.querySelector(".inactive-circle").classList.remove("inactive-circle");
      removeDomElement(".form-bg");
      const formURL = "./form/form-2.html";
      getPageContent(formURL)
        .then(res => res.text())
        .then(res => document.querySelector(".insertForm").insertAdjacentHTML("beforeend", res))
        .catch(err => {
          console.log(err);
        });
    }
  });

  document.querySelector("body").addEventListener("click", e => {
    const id = e.target.id;
    console.log(id);

    if (id === "next-2") {
      if (id === "cir-1") {
        const formURL = "./form/form-1.html";
        removeDomElement(".form-bg");
        getPageContent(formURL)
          .then(res => res.text())
          .then(res => document.querySelector(".insertForm").insertAdjacentHTML("beforeend", res))
          .catch(err => {
            console.log(err);
          });
      }

      document.querySelector(".inactive-circle").classList.remove("inactive-circle");
      removeDomElement(".form-bg");
      const formURL = "./form/success.html";
      getPageContent(formURL)
        .then(res => res.text())
        .then(res => document.querySelector(".insertForm").insertAdjacentHTML("beforeend", res))
        .catch(err => {
          console.log(err);
        });
    }
  });

  // Show and hide reply box and category links
  let replyBtn = document.querySelector(".reply");
  let categoryBtn = document.querySelector(".category-head");

  categoryBtn.addEventListener("click", e => {
    e.preventDefault();
    let categoryLink = document.querySelector(".categories-link");

    if (categoryLink.style.display === "none") {
      categoryLink.style.display = "block";
    } else {
      categoryLink.style.display = "none";
    }
  });

  replyBtn.addEventListener("click", e => {
    e.preventDefault();
    let replySection = document.querySelector(".reply-section");

    if (replySection.style.display === "none") {
      replySection.style.display = "block";
    } else {
      replySection.style.display = "none";
    }
  });
});
