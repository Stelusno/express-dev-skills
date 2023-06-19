const skills = [
{id: 23950, skill: 'HTML', proficient: true},
{id: 23506, skill: 'CSS', proficient: true},
{id: 30450, skill: 'Javascript', proficient: true}, 
{id: 34903, skill: 'Express Framework', proficient: false}
]; 

module.export = {
    getAll,
    getOne
}; 

function getAll() {
    return skills; 
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(e => e.id === id);
}