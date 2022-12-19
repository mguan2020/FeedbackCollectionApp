const passport = require('passport');
module.exports = (app)=>{
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile','email'] // app can access profile and email of the user
 }));
 
 app.get('/auth/google/callback', 
 passport.authenticate('google'),

 (req,res) => {
    res.redirect('http://localhost:3000/surveys');
 }
 );

 app.get('/api/current_user', (req, res)=>{
     res.send(req.user);

 });

 app.get('/api/logout', (req,res)=> {
     req.logout();
     res.redirect("http://localhost:3000/");
    // res.send(req.user);
 });
};