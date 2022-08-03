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

export default async function initRoles() {
  const menteePs = ["MenteeView"]
  const mentorPs = ["MentorView"]
  const adminPs  = ["AdminView", "Approve", "Suggest", "Unmatch", "ReadAll", "Delete"]
  const ownerPs  = adminPs.concat(["WriteAll", "Assign"])

  await createRole("mentee", menteePs)
  await createRole("mentor", mentorPs)
  await createRole("admin",  adminPs)
  await createRole("owner",  ownerPs)
  
  // For testing
  assignRole("97829860-2de9-473d-a45a-787a8cd6bfa5","owner")
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

async function assignRole(userId, role) {
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