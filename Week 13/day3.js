// ASCII Total

function uniTotal (string) {
  return [...string].reduce((a,b) => a + b.charCodeAt(0), 0)
}