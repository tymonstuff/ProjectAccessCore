import UserRoles from "supertokens-node/recipe/userroles";

// PERMISSIONS DEFINITIONS:
// ------------------------
//
// MenteeView/MentorView/AdminView: allow the view of corresponding dashboards
//
// Assign:   give users admin or owner privelages and remove them
// ReadAll:  read anyone's account information
// WriteAll: modify anyone's profile information
// Approve:  approve mentee/mentor/program applications
// Suggest:  match a mentor to a program and wait for acceptance
// Unmatch:  unmatch a mentor from a program
// Delete:   delete accounts or program instances

export async function createRoles() {
  const menteePs = ["MenteeView"]
  const mentorPs = ["MentorView"]
  const adminPs  = ["AdminView", "Approve", "Suggest", "Unmatch", "ReadAll", "Delete"]
  const ownerPs  = adminPs.concat(["WriteAll", "Assign"])

  await createRole("mentee", menteePs)
  await createRole("mentor", mentorPs)
  await createRole("admin",  adminPs)
  await createRole("owner",  ownerPs)
}

async function createRole(role, permissionList) {
  const response = await UserRoles.createNewRoleOrAddPermissions(role, permissionList);
  if (response.createdNewRole === true) {
    console.log("Created new role: "+role)
  }
  else {
    console.log("Role already exists: "+role)
  }
}


export async function deleteAllRoles() {
  const roles = (await UserRoles.getAllRoles()).roles
  await Promise.all(roles.map(async (r) => {
    await deleteRole(r)
  }))
}

async function deleteRole(role) {
  const response = await UserRoles.deleteRole(role)
  if (!response.didRoleExist) {
    console.log("Role does not exist: "+role)
    return
  }
  console.log("Deleted role: "+role)
}



export async function assignRole(userId, role) {
  const response = await UserRoles.addRoleToUser(userId, role);
  if (response.status === "UNKNOWN_ROLE_ERROR") {
      console.log("Role does not exist: "+role)
      return;
  }
  if (response.didUserAlreadyHaveRole === true) {
      console.log("User "+userId+" already has this role: "+role)
      return;
  }
  console.log("Role assigned to "+userId+": "+role)
}



export async function getCurrentPayloadInfo(userId) {
  // get user roles
  const roles = (await UserRoles.getRolesForUser(userId)).roles

  // get user permissions for each role
  let permissions = []
  await Promise.all(roles.map(async (r) => {
    const newPermissions = (await UserRoles.getPermissionsForRole(r)).permissions;

    if(permissions.length){
      for(const p of newPermissions) {
        if(!permissions.includes(p)){
          permissions.push(p)
        }
      }
    }
    else{
      permissions = newPermissions
    }
  }))

  return { roles, permissions }
}