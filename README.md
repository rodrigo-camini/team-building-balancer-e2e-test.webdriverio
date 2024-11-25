# team-building-balancer-e2e-test.webdriverio
This repository hosts an end-to-end (E2E) Test Automation Framework designed for a web application built with Flutter.

## Requirements

- Node.js >= 22

## Installation

Setup webdriverio

$ npm init wdio@latest .
Need to install the following packages:
create-wdio@8.4.10
Ok to proceed? (y)

                 -:...........................-:.
                 +                              +
              `` +      `...`        `...`      + `
            ./+/ +    .:://:::`    `::///::`  ` + ++/.
           .+oo+ +    /:+ooo+-/    /-+ooo+-/ ./ + +oo+.
           -ooo+ +    /-+ooo+-/    /-+ooo+-/ .: + +ooo.
            -+o+ +    `::///:-`    `::///::`    + +o+-
             ``. /.     `````        `````     .: .``
                  .----------------------------.
           `-::::::::::::::::::::::::::::::::::::::::-`
          .+oooo/:------------------------------:/oooo+.
      `.--/oooo-                                  :oooo/--.`
    .::-``:oooo`                                  .oooo-``-::.
  ./-`    -oooo`--.: :.--                         .oooo-    `-/.
 -/`    `-/oooo////////////////////////////////////oooo/.`    `/-
`+`   `/+oooooooooooooooooooooooooooooooooooooooooooooooo+:`   .+`
-/    +o/.:oooooooooooooooooooooooooooooooooooooooooooo:-/o/    +.
-/   .o+  -oooosoooososssssooooo------------------:oooo- `oo`   +.
-/   .o+  -oooodooohyyssosshoooo`                 .oooo-  oo.   +.
-/   .o+  -oooodooysdooooooyyooo` `.--.``     .:::-oooo-  oo.   +.
-/   .o+  -oooodoyyodsoooooyyooo.//-..-:/:.`.//.`./oooo-  oo.   +.
-/   .o+  -oooohsyoooyysssysoooo+-`     `-:::.    .oooo-  oo.   +.
-/   .o+  -ooooosooooooosooooooo+//////////////////oooo-  oo.   +.
-/   .o+  -oooooooooooooooooooooooooooooooooooooooooooo-  oo.   +.
-/   .o+  -oooooooooooooooooooooooooooooooooooooooooooo-  oo.   +.
-+////o+` -oooo---:///:----://::------------------:oooo- `oo////+-
+ooooooo/`-oooo``:-```.:`.:.`.+/-    .::::::::::` .oooo-`+ooooooo+
oooooooo+`-oooo`-- `/` .:+  -/-`/`   .::::::::::  .oooo-.+oooooooo
+-/+://-/ -oooo-`:`.o-`:.:-````.:    .///:``````  -oooo-`/-//:+:-+
: :..--:-:.+ooo+/://o+/-.-:////:-....-::::-....--/+ooo+.:.:--.-- /
- /./`-:-` .:///+/ooooo/+///////////////+++ooooo/+///:. .-:.`+./ :
:-:/.           :`ooooo`/`              .:.ooooo :           ./---
                :`ooooo`/`              .:.ooooo :
                :`ooooo./`              .:-ooooo :
                :`ooooo./`              .:-ooooo :
            `...:-+++++:/.              ./:+++++-:...`
           :-.````````/../              /.-:````````.:-
          -/::::::::://:/+             `+/:+::::::::::+.
          :oooooooooooo++/              +++oooooooooooo-

                           Webdriver.IO
              Next-gen browser and mobile automation
                    test framework for Node.js


Installing @wdio/cli to initialize project...
✔ Success!


🤖 WDIO Configuration Wizard 🧙


✔ A project named "team-building-balancer-e2e-test.webdriverio" was detected at "C:\Users\PC\Documents\team-building-balancer-e2e-test.webdriverio", correct? yes    
✔ What type of testing would you like to do? E2E Testing - of Web or Mobile Applications
✔ Where is your automation backend located? On my local machine
✔ Which environment you would like to automate? Web - web applications in the browser
✔ With which browser should we start? Chrome, Firefox, Microsoft Edge
✔ Which framework do you want to use? Mocha (https://mochajs.org/)
✔ Do you want to use Typescript to write tests? yes
✔ Do you want WebdriverIO to autogenerate some test files? yes
✔ What should be the location of your spec files? C:\Users\PC\Documents\team-building-balancer-e2e-test.webdriverio\test\specs\**\*.ts
✔ Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? yes
✔ Where are your page objects located? C:\Users\PC\Documents\team-building-balancer-e2e-test.webdriverio\test\pageobjects\**\*.ts
✔ Which reporter do you want to use? spec, allure
✔ Do you want to add a plugin to your test setup?
✔ Would you like to include Visual Testing to your setup? For more information see https://webdriver.io/docs/visual-testing! no
✔ Do you want to add a service to your test setup?
✔ Do you want me to run `npm install` yes


Setting up TypeScript...
✔ Success!

Installing packages using npm:
- @wdio/local-runner@latest
- @wdio/mocha-framework@latest
- @wdio/spec-reporter@latest
- @wdio/allure-reporter@latest

added 73 packages, and audited 479 packages in 14s

107 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
✔ Success!

Creating a WebdriverIO config file...
✔ Success!

Autogenerating test files...
✔ Success!

Adding "wdio" script to package.json
✔ Success!

🤖 Successfully setup project at C:\Users\PC\Documents\team-building-balancer-e2e-test.webdriverio 🎉

Join our Discord Community Server and instantly find answers to your issues or queries. Or just join and say hi 👋!
  🔗 https://discord.webdriver.io

Visit the project on GitHub to report bugs 🐛 or raise feature requests 💡:
  🔗 https://github.com/webdriverio/webdriverio


## Configurations

1. Crie um arquivo na raiz do projeto chamado .env
2. Adicione as seguintes variáveis 

bash
EMAIL="seu email aqui"
PASSWORD="sua senha aqui"

3. Salve o arquivo.

## Installation Instructions

Execute o comando na raiz do projeto: `npm install`

## Execution test

Execute o comando `npm run wdio`

