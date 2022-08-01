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

async function initRoles() {
  menteePs = ["MenteeView"]
  mentorPs = ["MentorView"]
  adminPs  = ["AdminView", "Approve", "Suggest", "Unmatch", "ReadAll", "Delete"]
  ownerPs  = adminPs + ["WriteAll", "Assign"]

  createRole("mentee", menteePs)
  createRole("mentor", mentorPs)
  createRole("admin",  adminPs)
  createRole("owner",  ownerPs)
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