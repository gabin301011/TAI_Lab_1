let nav="<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n" +
    "    <a class=\"navbar-brand\" href=\"#\">GN</a>\n" +
    "    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
    "        <span class=\"navbar-toggler-icon\"></span>\n" +
    "    </button>\n" +
    "    <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "        <ul class=\"navbar-nav\">\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"index.html\">Home </a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"quiz.html\">Quiz</a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"contact.html\">Kontakt</a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</nav>"

let newNav=document.querySelector(".navbar")
newNav.innerHTML=nav
