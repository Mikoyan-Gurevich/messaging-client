import PouchDB from 'pouchdb';


const db = new PouchDB('konnect');

const remoteDB = new PouchDB('http://localhost:5984/konnect');

db.info().then((info) => {
  console.log(info);
});


remoteDB.info().then((info) => {
  console.log(info);
});

const doc = {
  _id: 'mittens',
  name: 'Mittens',
  occupation: 'kitten',
  age: 3,
  hobbies: [
    'playing with balls of yarn',
    'chasing laser pointers',
    "lookin' hella cute",
  ],
};
db.put(doc);


db.get('mittens').then((doc) => {
  console.log(doc);
});


// fetch mittens
db.get('mittens').then((doc) => {
  // update their age
  doc.age = 4;
  // put them back
  return db.put(doc);
}).then(() =>
  // fetch mittens again
  db.get('mittens')).then((doc) => {
  console.log(doc);
});

db.bulkDocs([
  {
    _id: 'mittens',
    occupation: 'kitten',
    cuteness: 9.0,
  },
  {
    _id: 'katie',
    occupation: 'kitten',
    cuteness: 7.0,
  },
  {
    _id: 'felix',
    occupation: 'kitten',
    cuteness: 8.0,
  },
]);

db.put({
  _id: new Date().toJSON(),
  name: 'Mittens',
  occupation: 'kitten',
  cuteness: 9.0,
}).then(() => db.put({
  _id: new Date().toJSON(),
  name: 'Katie',
  occupation: 'kitten',
  cuteness: 7.0,
})).then(() => db.put({
  _id: new Date().toJSON(),
  name: 'Felix',
  occupation: 'kitten',
  cuteness: 8.0,
})).then(() => db.allDocs({ include_docs: true }))
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

db.put({
  _id: 'mydoc',
  _attachments: {
    'myattachment.txt': {
      content_type: 'text/plain',
      data: 'aGVsbG8gd29ybGQ=',
    },
  },
});

btoa('hello world'); // "aGVsbG8gd29ybGQ="
atob('aGVsbG8gd29ybGQ='); // "hello world"

db.get('mydoc', { attachments: true }).then((doc) => {
  console.log(doc);
});

let img;

db.put({
  _id: 'meowth',
  _attachments: {
    'meowth.png': {
      content_type: 'image/png',
      data: 'iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAIAAAB0Xu9BAAAABGdBTUEAALGPC/xhBQAAAuNJREFUWEetmD1WHDEQhDdxRMYlnBFyBIccgdQhKVcgJeQMpE5JSTd2uqnvIGpVUqmm9TPrffD0eLMzUn+qVnXPwiFd/PP6eLh47v7EaazbmxsOxjhTT88z9hV7GoNF1cUCvN7TTPv/gf/+uQPm862MWTL6fff4HfDx4S79/oVAlAUwqOmYR0rnazuFnhfOy/ErMKkcBFOr1vOjUi2MFn4nuMil6OPh5eGANLhW3y6u3aH7ijEDCxgCvzFmimvc95TekZLyMSeJC68Bkw0kqUy1K87FlpGZqsGFCyqEtQNDdFUtFctTiuhnPKNysid/WFEFLE2O102XJdEE+8IgeuGsjeJyGHm/xHvQ3JtKVsGGp85g9rK6xMHtvHO9+WACYjk5vkVM6XQ6OZubCJvTfPicYPeHO2AKFl5NuF5UK1VDUbeLxh2BcRGKTQE3irHm3+vPj6cfCod50Eqv5QxtwBQUGhZhbrGVuRia1B4MNp6edwBxld2sl1splfHCwfsvCZfrCQyWmX10djjOlWJSSy3VQlS6LmfrgNvaieRWx1LZ6s9co+P0DLsy3OdLU3lWRclQsVcHJBcUQ0k9/WVVrmpRzYQzpgAdQcAXxZzUnFX3proannrYH+Vq6KkLi+UkarH09mC8YPr2RMWOlEqFkQClsykGEv7CqCUbXcG8+SaGvJ4a8d4y6epND+pEhxoN0vWUu5ntXlFb5/JT7JfJJqoTdy9u9qc7ax3xJRHqJLADWEl23cFWl4K9fvoaCJ2BHpmJ3s3z+O0U/DmzdMjB9alWZtg4e3yxzPa7lUR7nkvxLHO9+tvJX3mtSDpwX8GajB283I8R8a7D2MhUZr1iNWdny256yYLd52DwRYBtRMvE7rsmtxIUE+zLKQCDO4jlxB6CZ8M17GhuY+XTE8vNhQiIiSE82ZsGwk1pht4ZSpT0YVpon6EvevOXXH8JxVR78QzNuamupW/7UB7wO/+7sG5V4ekXb4cL5Lyv+4IAAAAASUVORK5CYII=',
    },
  },
}).then(() => db.getAttachment('meowth', 'meowth.png')).then((blob) => {
  const url = URL.createObjectURL(blob);
  img = document.createElement('img');
  img.src = url;
  document.body.appendChild(img);
}).catch((err) => {
  console.log(err);
});


// function convertImgToBlob(img, callback) {
//     const canvas = document.createElement('canvas');
//     const context = canvas.getContext('2d');
//     context.drawImage(img, 0, 0);

//     // Warning: toBlob() isn't supported by every browser.
//     // You may want to use blob-util.
//     canvas.toBlob(callback, 'image/png');
// }

// const catImage = document.getElementById('cat');
// convertImgToBlob(catImage, (blob) => {
//     db.putAttachment('meowth', 'meowth.png', blob, 'image/png').then(() => db.get('meowth', { attachments: true })).then((doc) => {
//         console.log(doc);
//     });
// });


db.sync(remoteDB, { live: true });
