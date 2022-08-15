import supertokens from 'supertokens-node';
import { backendConfig } from '../../config/backendConfig';

import {
  createRoles,
  deleteAllRoles,
  assignRole,
} from '../../lib/backendRoles';

supertokens.init(backendConfig());

export default async function handler(req, res) {
  // Put code here to be ran once on the back-end on the api/test endpoint:

  await deleteAllRoles();
  await createRoles();

  await assignRole('97829860-2de9-473d-a45a-787a8cd6bfa5', 'mentee'); // gabs
  await assignRole('b4b1022b-6898-41fd-97a2-74f745a02bfc', 'mentor'); // anna

  res.status(200).json({ status: 'done' });
}
