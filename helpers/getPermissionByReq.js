export function getPermissionByReq(method, path, methodMap) {
  return `${path.split('/')[1]}_${methodMap[method]}`;
}
