Identical Elements

function duplicateElements(m, n) {
    return m.filter((e) => n.includes(e)).length ? true : false
}