function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const btn = document.createElement("button");
  btn.textContent = "Done";

  btn.onclick = () => {
    li.style.opacity = 0;
    li.style.transform = "scale(0.8)";
    setTimeout(() => li.remove(), 500);
  };

  li.appendChild(btn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

// Background floating animation — create bubbles, stars, hearts randomly
function createFloatingElements() {
  const container = document.querySelector('.anime-bg');
  const shapes = ['circle', 'star', 'heart'];

  for(let i=0; i<30; i++) {
    const span = document.createElement('span');

    // Randomly pick a shape
    const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
    if(shapeType === 'star') span.classList.add('star');
    else if(shapeType === 'heart') span.classList.add('heart');
    // else default circle with no extra class

    // Random horizontal position
    span.style.left = Math.random() * 100 + 'vw';
    // Random animation duration between 8s to 15s
    span.style.animationDuration = (8 + Math.random() * 7) + 's';
    // Random animation delay so they start at different times
    span.style.animationDelay = (Math.random() * 15) + 's';

    container.appendChild(span);
  }
}

// Run animation creation once page loads
window.onload = createFloatingElements;
