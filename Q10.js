<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      function vowels(str) {
        let strRegex = /[aeiou]/gi;
        let vow = str.match(strRegex);
        var A = (E = I = O = U = 0);
        for (i = 0; i < vow.length; i++) {
          if (vow[i] === "a") {
            A++;
          }
          if (vow[i] === "e") {
            E++;
          }
          if (vow[i] === "i") {
            I++;
          }
          if (vow[i] === "o") {
            O++;
          }
          if (vow[i] === "u") {
            U++;
          }
        }
        document.write(
          "A : " +
            A +
            "<br> E : " +
            E +
            "<br> I : " +
            I +
            "<br> O : " +
            O +
            "<br> U : " +
            U +
            "<br>"
        );
      }
      document.write(vowels("Hey This is SkillSanta Js Training"));
    </script>
  </body>
</html>