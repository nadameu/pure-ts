import { Generic1 } from '../Generic';
import { Maybe } from './definitions';

export interface TMaybe extends Generic1 {
  type: Maybe<this['a']>;
}
export let TMaybe: TMaybe;