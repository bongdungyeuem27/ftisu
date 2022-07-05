export function dynamicString(string, obj) {
  if (!string) return;
  var s = string;
  for (var prop in obj) {
    s = s.replace(new RegExp("{" + prop + "}", "g"), obj[prop]);
  }
  return s;
}
