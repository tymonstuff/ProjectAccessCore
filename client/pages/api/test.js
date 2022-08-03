//import supertokens from 'supertokens-node'
//import { backendConfig } from '../../config/backendConfig'
//import initRoles from '../../lib/initRoles'

//supertokens.init(backendConfig())

export default function handler(req, res) {
  // Put code here to be ran once on the back-end on the api/test endpoint:

  //initRoles()

  res.status(200).json({ status: 'done' })
}