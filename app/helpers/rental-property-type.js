import { helper } from "ember-helper";
import Ember from 'ember';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType([type]) {
  if (communityPropertyTypes.contains(type)) {
    return 'Community';
  }
  return 'Standalone';
}

export default helper(rentalPropertyType);
