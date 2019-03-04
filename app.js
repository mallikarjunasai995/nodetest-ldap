var express      = require('express'),
    passport     = require('passport'),
    bodyParser   = require('body-parser'),
    LdapStrategy = require('passport-ldapauth');
 
var OPTS = {
  server: {
    url: 'ldap://localhost:1389',
    bindDN: 'cn=reinsurancecompany,ou=Users,o=BlockChain,dc=ilab.com',
    bindCredentials:'reinsurance@123',
    searchBase: 'ou=Users,o=BlockChain,dc=ilab.com',

    searchFilter: '(cn=reinsurancecompany)'
  }
};
 
var app = express();
var username;
var password;
 
passport.use(new LdapStrategy(OPTS));
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
 
app.post('/login', passport.authenticate('ldapauth', {session: false}), function(req, res) {
  console.log("entered the post");
  res.send({status: 'ok'});
});

app.post('/register', function(req, res) {
  username =  req.body.username;
  password = req.body.password;
res.redirect('/login') 
    });
 
  

 
app.listen(3000,function(){
    console.log('this is the example funcitonsdfsadf');
});

