<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inyat's Portfolio</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }

    header {
      background-color: #333;
      color: #fff;
      padding: 10px 0;
      text-align: center;
    }

    header h1 {
      margin: 0;
    }

    .container {
      width: 90%;
      max-width: 1100px;
      margin: 20px auto;
      background: #fff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .about, .projects, .contact {
      margin-bottom: 20px;
    }

    .about h2, .projects h2, .contact h2 {
      color: #333;
    }

    .projects img {
      width: 100%;
      height: auto;
      border-radius: 5px;
      margin-bottom: 10px;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    form input, form textarea, form button {
      margin-bottom: 10px;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    form button {
      background-color: #333;
      color: #fff;
      border: none;
      cursor: pointer;
    }

    form button:hover {
      background-color: #555;
    }
  </style>
</head>
<body>
  <header>
    <h1>Inyat's Portfolio</h1>
  </header>
  <div class="container">
    <section class="about">
      <h2>About Me</h2>
      <p>Hello! I'm Inyat, a passionate IT professional with a knack for creating innovative solutions and delivering outstanding results.</p>
    </section>
    <section class="projects">
      <h2>Projects</h2>
      <div class="project">
        <img src="project1.jpg" alt="Project 1">
        <h3>Project 1</h3>
        <p>Description of the project goes here.</p>
      </div>
      <div class="project">
        <img src="project2.jpg" alt="Project 2">
        <h3>Project 2</h3>
        <p>Description of the project goes here.</p>
      </div>
    </section>
    <section class="contact">
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/xldeyvye" method="POST">
        <input type="text" name="name" placeholder="Your Name" required>
        <input type="email" name="email" placeholder="Your Email" required>
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  </div>
</body>
</html>
