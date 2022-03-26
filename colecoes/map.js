function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if (value === 'ADMIN') {
            admins.push(key);
        }
    }
    return admins;
}

const USER_ROLES = new Map();

USER_ROLES.set('Stephany', 'SUDO');
USER_ROLES.set('Luiz', 'ADMIN');
USER_ROLES.set('Elvira', 'ADMIN');
USER_ROLES.set('Carolina', 'USER');
USER_ROLES.set('Guilherme', 'USER');

console.log(getAdmins(USER_ROLES));