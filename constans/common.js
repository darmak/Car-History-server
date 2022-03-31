export const userRoles = {
  admin: 'ADMIN',
  user: 'USER',
  crs: 'CRS',
  unauthorized: 'unauthorized'
};

const permissions = {
  login: {
    create: 'login_create'
  },
  registration: {
    create: 'registration_create'
  },
  users: {},
  cars: {
    read: 'cars_read',
    create: 'cars_create',
    update: 'cars_edit',
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

export const rolesPermissions = {
  [userRoles.user]: [
    permissions.cars.read,
    permissions.cars.create,
    permissions.cars.update,
    permissions.cars.delete,
    permissions.brands.read,
    permissions.models.read
  ],
  [userRoles.crs]: [permissions.histories.create],
  [userRoles.admin]: [],
  [userRoles.unauthorized]: [
    permissions.login.create,
    permissions.registration.create,
    permissions.cars.read,
    permissions.histories.read
  ]
};
