import pathlib, sys

P = pathlib.Path

# ===== HTML =====
html_parts = []

html_parts.append("""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alex Morgan | Full Stack Developer</title>
  <meta name="description" content="Portfolio of Alex Morgan - Full Stack Developer specializing in React, Node.js, Python, and AI.">
  <meta name="theme-color" content="#9845A4">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body class="light-mode">""")

html_parts.append("""
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="#home" class="nav-logo"><span class="logo-bracket">&lt;</span>AM<span class="logo-bracket">/&gt;</span></a>
      <ul class="nav-links" id="navLinks">
        <li><a href="#home" class="nav-link active" data-section="home"><i class="bx bx-home-alt-2"></i><span>Home</span></a></li>
        <li><a href="#about" class="nav-link" data-section="about"><i class="bx bx-user"></i><span>About</span></a></li>
        <li><a href="#skills" class="nav-link" data-section="skills"><i class="bx bx-code-alt"></i><span>Skills</span></a></li>
        <li><a href="#experience" class="nav-link" data-section="experience"><i class="bx bx-briefcase"></i><span>Experience</span></a></li>
        <li><a href="#certifications" class="nav-link" data-section="certifications"><i class="bx bx-award"></i><span>Certifications</span></a></li>
        <li><a href="#projects" class="nav-link" data-section="projects"><i class="bx bx-folder"></i><span>Projects</span></a></li>
        <li><a href="#contact" class="nav-link" data-section="contact"><i class="bx bx-message-square-detail"></i><span>Contact</span></a></li>
      </ul>
      <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme"><i class="bx bx-moon" id="themeIcon"></i></button>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu"><span></span><span></span><span></span></button>
    </div>
  </nav>""")

print("Parts built:", len(html_parts))
