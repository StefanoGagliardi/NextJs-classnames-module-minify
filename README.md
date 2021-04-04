# NextJs css classNames minify

**THIS REPO IS NOT ON NPM. I NEED TO DO VARIOUS TEST**

**NB:** più avanti si possono provare le casistiche e le versioni di next con qui è stato tesato questo plugin.
TODO: fare qualche test


Plugin per NetJs che permette di minificare la verbosità dei "classNames" dei css/sass modules con delle lettere.
Ci sono altri tentativi di questo plugin ma sono un po' buggy.

**Disclaimer:** i found work of @ and his [repo]() about minification of classNames. But it's buggy.
After several hours of work, i make clean code, and i publish it.

## How to use

Questo plugin va richiamato nel vostro `next.config.js` file. Potete avere due situazioni:

1. Configurazione "stand alone" di next.
2. Altri plugin che estendono (o riwrappano) la configurazione.

Caso #1
```js

```

### Paramentri opzionali

1. Prefisso classe

Se si vuole c'è la possibilità di dare un proprio prefisso alle classi come segue: