export const userRoles = {
  admin: 'admin',
  user: 'user',
  crs: 'crs',
  unauthorized: 'unauthorized'
};

const permissions = {
  login: {
    create: 'login_create'
  },
  registration: {
    create: 'registration_create'
  },
  users: {
    read: 'users_read',
    create: 'users_create',
    edit: 'users_edit',
    delete: 'users_delete'
  },
  cars: {
    read: 'cars_read',
    create: 'cars_create',
    edit: 'cars_edit',
    delete: 'cars_delete'
  },
  histories: {
    read: 'histories_read',
    create: 'histories_create'
  },
  brands: {
    read: 'brands_read'
  },
  models: {
    read: 'models_read'
  }
};

const unauthorizedPermissions = [
  permissions.login.create,
  permissions.registration.create,
  permissions.cars.read,
  permissions.histories.read,
  permissions.brands.read,
  permissions.models.read
];

export const rolesPermissions = {
  [userRoles.user]: [
    ...unauthorizedPermissions,
    permissions.users.read,
    permissions.cars.create,
    permissions.cars.edit,
    permissions.cars.delete,
    permissions.brands.read,
    permissions.models.read,
    permissions.histories.read,
    permissions.histories.create
  ],
  [userRoles.crs]: [...unauthorizedPermissions, permissions.histories.create],
  [userRoles.admin]: [
    ...unauthorizedPermissions,
    permissions.users.read,
    permissions.users.delete,
    permissions.users.edit
  ],
  [userRoles.unauthorized]: unauthorizedPermissions
};
