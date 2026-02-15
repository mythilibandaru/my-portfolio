// ===============================
// SMOOTH SCROLL FOR NAV LINKS
// ===============================
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});



// ===============================
// SKILL BARS ANIMATION ON SCROLL
// ===============================
const skillSection = document.querySelector('.skills');
const skillLevels = document.querySelectorAll('.skill-level');

function animateSkills() {
  const sectionPos = skillSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;

  if(sectionPos < screenPos) {
    skillLevels.forEach(skill => {
      const level = skill.getAttribute('data-level');
      skill.style.width = level;
    });
    // Remove event listener after animation triggers once
    window.removeEventListener('scroll', animateSkills);
  }
}

window.addEventListener('scroll', animateSkills);


// Badge Modal Functionality
function openModal(img) {
  document.getElementById("badgeModal").style.display = "block";
  document.getElementById("modalImg").src = img.src;
}

function closeModal() {
  document.getElementById("badgeModal").style.display = "none";
}

