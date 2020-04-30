const isSucceeded = true;

const p = new Promise((resolve, reject) => {
  if (isSucceeded) {
    resolve('Success');
  } else {
    reject(new Error('Failure'));
  }
});

p.then((value) => {
    console.log('1.', value);

    return 'Succees again';
  })
  .then((value) => {
    console.log('2.', value);
  })
  .catch((error) => {
    console.error('3.', error);
  })
  .finally(() => {
    console.log('4.', 'Completed');
  });

