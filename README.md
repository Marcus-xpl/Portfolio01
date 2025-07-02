# 📄 Technical Documentation – Personal Portfolio with Typing Effect and Navigation

This is a personal portfolio project developed with *HTML, **CSS, and **vanilla JavaScript*. The site includes internal navigation with anchor links, a typing effect on the subtitle in the introduction section, buttons that open GitHub repositories, and is fully responsive for both mobile and desktop devices. The entire project runs in the browser with no external dependencies.



## ⚙ Technologies Used:

| Technology | Purpose                                                  |
|------------|----------------------------------------------------------|
| HTML5      | Semantic structure of the page                           |
| CSS3       | Visual styling, responsiveness, and animations           |
| JavaScript | Typing effect in text and handling of interactive events |



## 🧱 Project Components:

- <header class="cabecalho"> – Main navigation with links to internal sections  
- <section class="apresentacao"> – Profile photo, title, and subtitle with typing effect  
- Buttons <button id="botaoRepositoriopX"> – Buttons that redirect to GitHub repositories  
- Sections About Me, Skills, Education, Projects – Well-organized and styled content  
- <footer class="rodape"> – Footer with copyright and contact  


## JavaScript Functions:

- digitarTexto(element, text, speed) – Applies a typing animation to the introduction subtitle, displaying text letter by letter.  
- adicionarEventoClique(buttonId, link) – Adds a click event listener to buttons to redirect users to the corresponding GitHub repositories.  
- DOMContentLoaded – Ensures the JavaScript runs only after the DOM has fully loaded.  



## Objective:

Create a simple, functional, and visually appealing personal portfolio that:

- Displays developer information and projects  
- Features a dynamic typing effect in the subtitle  
- Allows easy and fast navigation through page sections  
- Provides direct access to project repositories via buttons  
- Is responsive and accessible across various devices  



## Challenges Faced:

| Challenge                                 | Solution Applied                                                                 |
|------------------------------------------|----------------------------------------------------------------------------------|
| Smooth and natural typing effect         | Recursive function with setTimeout to control the typing speed                |
| Keeping button links functional          | JavaScript function that adds event listeners for redirecting users via JS      |
| Responsiveness across multiple devices   | Use of media queries to adapt layout, font sizes, and images                    |
| Consistent and modern styling            | CSS variables, Google Fonts, and button gradients for a polished visual design  |




