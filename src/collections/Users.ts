import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
    create: ()=> true,
    delete: ()=> false, // todo: add isAdmin function
    update: () => true
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;