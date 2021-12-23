const popCard = async (movie) => {
  const pop = document.querySelector("#popup");
  pop.innerHTML = "";
  // creat overlay div
  const over = document.createElement("div");
  console.log(movie);
  over.innerHTML = movie.name;
  // over.classList.add("overaly");
  // over.classList.add("hidden");
  // over.classList.add(`c-x-${movie.idmovie}`);
  pop.appendChild(over);
  const image = document.createElement("img");
  image.src = movie.image.medium;
  pop.appendChild(image);

  const closeBtn = document.createElement("button");
  closeBtn.addEventListener("click", () => {
    pop.style.display = "none";
  });
  closeBtn.innerHTML = "Close";
  pop.appendChild(closeBtn);
  // creat content div
  // const content = document.createElement("div");
  // content.classList.add("content");
  // content.classList.add("hidden");
  // content.classList.add(`c-x-${movie.idmovie}`);
  // content.id = `content2-${movie.idmovie}`;
  // pop.appendChild(content);
  // // Add divs inside content div
  // // close button
  // const closeBtn = document.createElement("div");
  // closeBtn.classList.add("close-btn");
  // content.appendChild(closeBtn);
  // const x = document.createElement("p");
  // x.classList.add("x");
  // x.classList.add(`c-x-${movie.idmovie}`);
  // x.innerText = "X";
  // closeBtn.appendChild(x);
  // // item photo
  // const image = document.createElement("img");
  // image.src = movie.strmovieThumb;
  // image.height = "300";
  // image.classList.add("photo");
  // content.appendChild(image);
  // // item name
  // const Iname = document.createElement("p");
  // Iname.classList.add("item-name");
  // Iname.innerHTML = movie.strmovie;
  // content.appendChild(Iname);
  // // div for comments
  // const commnts = document.createElement("div");
  // commnts.classList.add("comment-num");
  // content.appendChild(commnts);

  // // creat form
  // const form = document.createElement("form");
  // form.className = "form_x";
  // form.id = `${movie.idmovie}`;
  // content.appendChild(form);
  // // form title
  // const formTitle = document.createElement("h3");
  // formTitle.className = "form_title";
  // formTitle.innerHTML = "Add a comment";
  // form.appendChild(formTitle);
  // // form name
  // const nameInp = document.createElement("input");
  // nameInp.type = "text";
  // nameInp.id = `name-${movie.idmovie}`;
  // nameInp.placeholder = "Your name";
  // nameInp.className = "form_item";
  // nameInp.required = true;
  // form.appendChild(nameInp);
  // // form textarea
  // const commentText = document.createElement("textarea");
  // commentText.name = "insights";
  // commentText.id = `insight-${movie.idmovie}`;
  // commentText.cols = "30";
  // commentText.rows = "10";
  // commentText.className = "form_item";
  // commentText.placeholder = "Your Comment";
  // commentText.required = true;
  // form.appendChild(commentText);
  // // creat submit button
  // const submitCom = document.createElement("button");
  // submitCom.type = "submit";
  // submitCom.className = "form_item1";
  // submitCom.className = "form_v";
  // submitCom.className = `submit_${movie.idmovie}`;
  // submitCom.innerHTML = "Comment";
  // form.appendChild(submitCom);
};
export default popCard;
