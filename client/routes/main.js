Router.configure({
     layoutTemplate : 'layout'
});

Router.map(function(){
    this.route('home',{
        path : '/',
        controller : HomeController
    }),
    this.route('signin',{
        path : '/sign-in'
    })
});
