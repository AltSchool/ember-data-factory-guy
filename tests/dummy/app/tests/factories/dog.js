import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('dog', {
  default: {
    dogNumber: (f)=> `Dog${f.id}`,
    sound: (f) => `${f.volume || defaultVolume} Woof`,
    tag: (f) => {
      return { num: f.id };
    }
  }
});
