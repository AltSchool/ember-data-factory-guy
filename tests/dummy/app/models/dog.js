import Ember from 'ember';
import DS from 'ember-data';

export default Model.extend({
  dogNumber: attr('string'),
  sound: attr('string'),
  tag: attr() // hash
});

