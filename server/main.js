if(Meteor.isServer){
    Meteor.startup(function(){
        if(Meteor.users.find().count() === 0){
            var defaultAdmin = {
                email : 'cong.nx@sunrisevietnam.com',
                password : '@Binhminh2',
                roles : ['admin','mod','players']
            };

            var adminId = Accounts.createUser({
                email : defaultAdmin.email,
                password : defaultAdmin.password
            });

            Roles.addUsersToRoles(adminId,defaultAdmin.roles);

            Meteor.users.update(adminId,{$set:{'emails.0.verified':true}});
        }
    })
}

Accounts.onCreateUser(function(options, user) {
    var defaultRoles = ['players'];
    user.roles = defaultRoles;
    Roles.addUsersToRoles(user._id,defaultRoles);
    console.log('players : '+user._id);
    return user;
});