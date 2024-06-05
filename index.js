mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const person = new Person({ name: 'John Doe', age: 30, favoriteFoods: ['Pizza', 'Pasta'] });
person.save(function(err, data) {
  if (err) return console.error(err);
  console.log('Person saved successfully:', data);
});

const arrayOfPeople = [{ name: 'Alice', age: 25, favoriteFoods: ['Burger'] }, { name: 'Bob', age: 35, favoriteFoods: ['Sushi'] }];
Person.create(arrayOfPeople, function(err, data) {
  if (err) return console.error(err);
  console.log('People created successfully:', data);
});

Person.find({ name: 'John Doe' }, function(err, people) {
    if (err) return console.error(err);
    console.log('People found:', people);
  });
  