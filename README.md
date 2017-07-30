# codercruise_demo_backend
Backend app for Codercruise 2017 presentation

This project is a basic REST setup that responds to GET queries for /api/images
It requires a MongoDB database with the following structure: 

```js
db.createCollection("images", { capped : true, autoIndexId: true, size: 1000, max : 1000 } );
db.images.insert({"image":"001.jpg"}); 
```

Example database:

```json
{"_id":{"$oid":"596e6dc8997a143c37fdcc29"},"image":"001.jpg"}
{"_id":{"$oid":"596e6dcd997a143c37fdcc2a"},"image":"002.jpg"}
{"_id":{"$oid":"596e6dd3997a143c37fdcc2b"},"image":"003.jpg"}
{"_id":{"$oid":"596e6df5997a143c37fdcc2c"},"image":"004.jpg"}
{"_id":{"$oid":"596e6df7997a143c37fdcc2d"},"image":"006.jpg"}
{"_id":{"$oid":"596e6df9997a143c37fdcc2e"},"image":"005.jpg"}
{"_id":{"$oid":"596e6dfc997a143c37fdcc2f"},"image":"007.jpg"}
{"_id":{"$oid":"596e6dfe997a143c37fdcc30"},"image":"008.jpg"}
{"_id":{"$oid":"596e6e03997a143c37fdcc31"},"image":"009.jpg"}
{"_id":{"$oid":"596e6e06997a143c37fdcc32"},"image":"010.jpg"}
{"_id":{"$oid":"596e6e08997a143c37fdcc33"},"image":"011.jpg"}
{"_id":{"$oid":"596e6e0e997a143c37fdcc34"},"image":"012.jpg"}
{"_id":{"$oid":"59735594997a143c37fdcc35"},"image":"013.jpg"}
{"_id":{"$oid":"5973562bf76fd59a16a165d0"},"image":"014.jpg"}
{"_id":{"$oid":"597366cf77a6c78ac722937e"},"image":"015.jpg"}
{"_id":{"$oid":"597366dd77a6c78ac722937f"},"image":"016.jpg"}
{"_id":{"$oid":"59738ed777a6c78ac7229380"},"image":"017.jpg"}
{"_id":{"$oid":"59738ed977a6c78ac7229381"},"image":"018.jpg"}
```


