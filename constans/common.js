const userRoles = {
  admin: 'ADMIN',
  user: 'USER',
  crs: 'CRS'
};

const permissions = {
  // users: {
  //   post: ['/registration', '/login']
  // },
  cars: {
    get: 'cars_get',
    post: 'cars_post'
  },
  histories: {
    get: 'histories_get',
    post: 'histories_post'
  },
  brands: {
    get: 'brands_get'
  },
  models: {
    get: 'models_get'
  }
};

export const rolesPermissions = {
  [userRoles.user]: [
    permissions.cars.get,
    permissions.cars.post,
    permissions.histories.get,
    permissions.histories.post,
    permissions.brands.get,
    permissions.models.get
  ]
};
