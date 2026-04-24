function verifyUserAccess(userRole, isSubscriptionActive) {
  // Admins bypass all checks
  if (userRole === 'ADMIN') {
    return true; 
  }

  // Pro users must have an active subscription
  if (userRole === 'PRO_USER' && isSubscriptionActive) {
    return true; 
  }

  // Everyone else is denied
  return false; 
}

console.log("Access Check:", verifyUserAccess('PRO_USER', false));
