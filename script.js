let arr = [
  {
    profilePic:
      "https://images.unsplash.com/photo-1575439462433-8e1969065df7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1578979879663-4ba6a968a50a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1640902106532-47dd3a2e833e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJ1c2luZXNzJTIwcGFydHl8ZW58MHx8MHx8fDI%3D",
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1559969143-b2defc6419fd?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1619253790960-83acb6df8cc3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1696994044184-9e8e682195fe?q=80&w=1013&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1631947430066-48c30d57b943?q=80&w=716&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let clutter = "";
const storyBoardEl = document.querySelector("#story-board");
const fullscreenEl = document.querySelector("#fullscreen");
arr.forEach(function (elem, idx) {
  clutter += `<div class="story"><img id="${idx}" src="${elem.profilePic}"></div>`;
});

storyBoardEl.innerHTML = clutter;

storyBoardEl.addEventListener("click", function (det) {
  let story = arr[det.target?.id].story;
  Object.assign(fullscreenEl.style, {
    backgroundImage: `url(${story})`,
    display: "block",
    opacity: 1,
  });
  setTimeout(() => {
    Object.assign(fullscreenEl.style, {
      opacity: 0,
      display: "none",
    });
  }, 5000);
});

fullscreenEl.addEventListener("click", function () {
  Object.assign(fullscreenEl.style, {
    opacity: 0,
    display: "none",
  });
});
