## Prosjekt

Dere skal lage en nettside som bruker Nuxt rammeverket.
Målet er å hovedsakelig eksperimentere med Vue og Nuxt i sin helhet.

Prosjektet skal bli vist fram foran Teamet siste dagen.

Det går fint hvis dere ikke blir ferdig.

Det anbefales å bruke Typescript for dette men vanilla Javascript er lov.

AI er lov men vi ønsker helst at dere utforsker selv og spørre oss Lærlingene før dere går til AI.

For styling så anbefales det å bruke Tailwind CSS.
Det anbefales også å bruke et UI-Rammeverk som:

- [NuxtUI](https://ui.nuxt.com/)
- [PrimeVue](https://primevue.org/)
- [Vuetify](https://vuetifyjs.com/en/)
- [Reka](https://reka-ui.com/)

## Nettsiden skal inneholde:

- En index side. Innholdet er valgfritt.
- En navbar med to lenker til forskjellige deler av nettsiden.
- En layout med navbar og footer.
  - Navbaren skal være i layouten
  - Footeren skal inneholde brukernavn/navn og årstall f.eks Enderz 2026
- En side med data fra et egenvalgt API og vises i en tabell/kort (avhenger av API).
- En side ved bruk av dynamisk routing. Eksempel: /user/[id]
  - Trenger bare å vise ID-en til ruten f.eks:
    - /user/1 blir <code>1</code>
    - /user/100 blir <code>100</code>
- En eller flere komponenter. for eksempel: en klokke, knapp eller en komponent som viser data fra et api.

Nettsiden skal presenteres med et fint UI.

## PS:

Hvis du finner ut at du gjenbruker logikk så kan man se på å flytte koden ut i en "composable".

Det kan sammenlignes med en React Hook.

## Ferdig?

Kommer dere langt nokk så kan dere lage:

- Et admin panel som brukeren må autentisere seg for å se.
  - Anbefaler [nuxt-auth-utils](https://nuxt.com/modules/auth-utils) eller [Better-Auth](https://www.better-auth.com/).
    - OBS!!! Hvis man bruker **Better-Auth** så burde man følge guiden deres på https://www.better-auth.com/docs/integrations/nuxt
- Eksperimentere med `/server` mappen til Nuxt.
  - Sette opp et API med server mappen.
    - Hva den gir tilbake er valgfritt.

## Ekstra++

Prøv å få implementert en backend gjennom denne tutorialen og koble den opp mot nettsiden til å vise data:

https://go.dev/doc/tutorial/web-service-gin

## Ideer til hva annet man kan lage:

Gått tom for ideer?

Her er noen ting som man kan lage

- En knapp som kan telle ved bruk av websockets
- Buss oversikt
- En blog med CRUD funksjonalitet
- Ukeplan med mulighet for CRUD
- En infoskjerm
- Dashboard

## Ressurser

- [Vue Introduction] (https://vuejs.org/guide/introduction.html)
- [Nuxt Getting Started] (https://nuxt.com/docs/4.x/getting-started/)
- [Nuxt Directory Structure] (https://nuxt.com/docs/4.x/directory-structure)
- [Nuxt API Reference] (https://nuxt.com/docs/4.x/api)
- [Nuxt in 100 seconds] (https://www.youtube.com/watch?v=dCxSsr5xuL8)
- Lærlingene
