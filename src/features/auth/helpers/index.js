export const getInitials = (fullName) => {
  if (!fullName) return "?";

  const [firstName, lastName] = fullName.trim().split(" ");

  const firstInitial = firstName?.[0] ?? "";
  const lastInitial = lastName?.[0] ?? "";

  return `${firstInitial}${lastInitial}`.toUpperCase();
};
