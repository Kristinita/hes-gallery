# HesGallery
v1.2

## Jak użyć?
Podepnij skrypty z galerią do strony
```html
<script src="https://api.heseya.com/hesgallery/hes-gallery.min.js"></script>
```

Pojemnikowi z zdjęciami nadaj klasę
```css
.hes-gallery
```

Pamiętaj o podpięciu wybornej biblioteki jQuery
```html
<script type="text/javascript" src="https://code.jquery.com/jquery-latest.min.js"></script>
```

## Opcje HesGallery
Jeśli chcesz, to możesz zmodyfikować opcje galerii aby jej działanie bardziej Ci odpowiadało za pomocą funckji *HesGallery.setOptions()*  
Przykładowe zastosowanie:
```javascript
HesGallery.setOptions({
    wrapAround: true,
    disableScrolling: true
});
```

Parametr|Wartość domyślna|Opis
---|---|---
wrapAround | false | Zapętla galerię, czyli będąc na ostatnim zdjęciu galerii i przechodząc do następnego trafimy do pierwszego i analogicznie w drugą stronę
disableScrolling | false | Możliwość przewijania strony w momencie gdy uruchomiona jest galeria
showImageCount | true | Wyświetlanie numeru akrualnego zdjęcia i liczby wszystkich zdjęć (np. "1/5")

## Dostępne funkcje
Kilka funkcji sterujących galeriią które możesz umieścić w wybranym przez siebie miejscu

Funkcja | Opis
---|---
*HesGallery.init()* | Pozwala na przeładowanie galerii zdjęć, jeśli np. w międzyczasie dynamicznie zmieniła się zawartość pojemnika galerii to dzięki tej funckji można na nowo załadować zdjęcia do skryptu
*HesGallery.show(**n**)* | Wyświetla **n-te** zdjęcie z galerii
*HesGallery.next()* | Wyświetla następne zdjęcie względem obecnego
*HesGallery.prev()* | Wyświetla poprzednie zdjęcie względem obecnego
*HesGallery.hide()* | Ukrywa galerię
*HesGallery.setOptions()* | Pozwala na modyfikację opcji galerii (więcej wyżej)

## Parametry <img>
Parametr | Opis
---|---
*data-subtext="**x**"* | Tworzy podpis pod zdjęciem w galerii o treści **x**


## Przykładowa konstrukcja galerii
```html
    <div class="hes-gallery">
        <img src="image1.jpg" alt="image1" data-subtext="Podpis zdjęcia" >
        <img src="image2.jpg" alt="image2" data-subtext="Podpis zdjęcia kolejnego" >
        <img src="image3.jpg" alt="image3" data-subtext="Kolejny podpis zdjęcia" >
        <img src="image4.jpg" alt="image4" data-subtext="Podpis czwartego już zdjęcia" >
    </div>
```

## Disclaimer
**Obecnie może istnieć jedynie jedna galeria na jednej stronie**

*Copyright 2018 Artur Mędrygał - Heseya*