// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, User, SponsorApplication, Sponsor, UserSponsor } = initSchema(schema);

export {
  Todo,
  User,
  SponsorApplication,
  Sponsor,
  UserSponsor
};