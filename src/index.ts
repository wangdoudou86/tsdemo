
  enum Genger {
    Male = 'man',
    Female = 'woman'
  }
  
  interface Person {
    gender: Genger;
  }
  
  function merry(a: Person, b: Person): [Person, Person] {
    if (a.gender !== b.gender) {
      return [a, b];
    } else {
      throw new Error('性别相同不能结婚');
    }
  }
  
  let a = { gender: Genger.Male };
  let b = { gender: Genger.Female };
  console.log(merry(a, b));