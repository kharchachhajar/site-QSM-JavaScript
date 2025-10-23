// Réponses correctes du QCM
const reponses = {
  Q1: ["b"],                  // CSS
  Q2: ["d"],                  // .js
  Q3: ["b", "c", "d"],        // Fes, Casa, Rabat
  Q4: ["a", "c", "e"],        // JavaScript, PHP, Python
  Q5: ["a", "b", "c"],         // HTML, JavaScript, CSS
};

// --- Fonction pour afficher le corrige ---
function afficherCorrige() {
  let fenetre = window.open("", "corrige", "width=600,height=500");
  let texte = `
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Corrigé QCM</title>
        <style>
          .corrige { color: green; font-weight: bold; text-decoration: underline; }
          body { font-family: Arial; padding: 10px; }
        </style>
      </head>
      <body>
        <h2>Corrigé de QSM</h2>
        <ol>
          <li class='corrige'>CSS</li>
          <li class='corrige'>.js</li>
          <li class='corrige'>Fes, Casa, Rabat</li>
          <li class='corrige'>JavaScript, PHP, Python</li>
          <li class='corrige'>HTML, JavaScript, CSS</li>
        </ol>
      </body>
    </html>
  `;
  fenetre.document.write(texte);
  fenetre.document.close();
}

// --- Fonction pour tester les resultats et afficher dans une nouvelle fenêtre ---
function testerQsm() {
  let fenetre = window.open("", "resultat", "width=400,height=300");
  let score = 0;
  const totalQuestions = Object.keys(reponses).length;

  fenetre.document.write("<h2>Resultat du QCM</h2>");
  for (let q in reponses) {
    let choix = document.forms[0][q];
    if (!choix) continue;  // Sécurité : si la question n'existe pas, passer
    let cochees = [];
    // Vérifier les réponses choisies
    for (let i = 0; i < choix.length; i++) {
      if (choix[i].checked) {
        cochees.push(choix[i].value);
      }
    }
    if (cochees.length === 0) {
      fenetre.document.writeln(`<p>Question ${q}: Veuillez sélectionner au moins un choix.</p>`);
    } else if (cochees.sort().toString() === reponses[q].sort().toString()) {
      fenetre.document.writeln(`<p>Question ${q}: Parfait !</p>`);
      score++;
    } else {
      fenetre.document.writeln(`<p>Question ${q}: Faux.</p>`);
    }
  }
  fenetre.document.writeln(`<p><strong>Score final : ${score}/${totalQuestions}</strong></p>`);
  fenetre.document.close();
} 