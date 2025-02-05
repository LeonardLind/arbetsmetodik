# Arbetsmetodik

Detta dokument beskriver arbetsflödet och de riktlinjer som används i projektet för att säkerställa att vi arbetar på ett effektivt och organiserat sätt. Här beskrivs commit-regler, användning av Git Flow och PR-rutiner.

## Commit-regler

För att hålla våra commit-meddelanden konsekventa och läsbara, följ dessa regler:

- **Kort och tydlig beskrivning** ska förstå ändringen direkt i commit-meddelandet utan att behöva kolla koden.
- **Beskrivning av ändringar** ska innehålla verb som `Lägg till`, `Fix`, `Ändra`.

**Exempel på commits:**
- `Add login authentication feature`
- `Fix bug in login authentication`
- `Add exemple in README for commits instructions`

## Git Flow

Vi använder **Git Flow** för att hantera vår utvecklingsprocess. Här är de olika grenarna och deras syfte:

### Huvudgrenar
- **main**: Den stabila produktionsklara koden. Varje commit på denna gren ska innehålla fungerande och testad kod.
- **develop**: Huvudgrenen för utveckling. Alla nya funktioner och bugfixar ska utvecklas på denna gren innan de slås samman till `main`.

### Release-gren
- Releasegren används för att förbereda en version för produktion. På denna gren görs endast bugfixar och finputsning inför sammanslagningen till main.
  
- När en release är klar ska den slås samman med både `main` (för att släppa den) och `develop` (för att säkerställa att de senaste ändringarna finns i develop grenen också).

### Hotfix-grenar
   - Hotfix-grenar skapas för att snabbt åtgärda kritiska fel i produktion. När en hotfix är klar ska den slås samman med både `main` och `develop` för att säkerställa att båda grenarna är uppdaterade.

### Funktionella grenar (Feature Branches)
- Skapa en ny funktionell gren från `develop` för varje ny funktion eller uppgift. Grenen ska namnges enligt formatet `feature/namn-på-funktion`.
- När funktionaliteten är klar görs en pull request (PR) för att slå samman den med `develop`.

### Cherry-picking
- Cherry-pick använder vi för att ta specifika commits från en gren och applicera dem på en annan gren utan att slå samman hela grenen.

- För att hitta commit ID = Git log 
- Efter hittad önskad commit = git cherry-pick <commit-id>
