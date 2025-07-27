const text = "Welkom op mijn website!";
const typewriterElement = document.getElementById("typewriter");
let index = 0;

function typeNextLetter() {
  if (index < text.length) {
    typewriterElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeNextLetter, 100); // snelheid in ms
  } else {
    typewriterElement.style.borderRight = "none"; // cursor verdwijnt aan het eind
  }
}

typeNextLetter();

  document.querySelector('.contact_form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("Nieuw contactformulierbericht");
    const body = encodeURIComponent(
      `Naam: ${name}\nEmail: ${email}\n\nBericht:\n${message}`
    );

    window.location.href = `mailto:kadirakdemir75@gmail.com?subject=${subject}&body=${body}`;
  });