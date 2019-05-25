(function(global, $){
    
    // new an object
    var Greeter = function(firstName, lastName, language){
        return new Greeter.init(firstName, lastName, language);
    }
    
    // hidden within the scope of IIFE
    var supportedLangs = ['en', 'es'];
    
    // informal greeting
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    }
    
    // formal greeting
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    }
    
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    }
    
    Greeter.prototype = {
        fullName: function(){
            return this.firstName + ' ' + this.lastName;
        },
        validate: function(){
            if(supportedLangs.indexOf(this.language) === -1){
                throw "Invalid language";
            }
        },
        greeting: function(){
            return greetings[this.language] + ' ' + this.firstName + '!'
        },
        formalGreeting: function(){
            return formalGreetings[this.language] + ' ' + this.firstName + '!'
        },
        greet: function(formal){
            var msg;
            
            // if undefined or null it will be 'false'
            if(formal){
                msg = this.formalGreeting();
            }
            else{
                msg = this.greeting();
            }
            
            if(console){
                console.log(msg);
            }
            
            // this refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
        log: function(){
            if(console){
                console.log(logMessages[this.language] + this.fullName());
            }
            return this;
        },
        setLang: function(lang){
            this.language = lang;
            this.validate();
            return this;
        },
        HTMLGreeting: function(selector, formal){
            if(!$){
                throw 'jQuery not loaded';
            }
            if(!selector){
                throw 'Missing jQuery selector';
            }
            var msg;
            if(formal){
                msg = this.formalGreeting();
            }
            else{
                msg = this.greeting();
            }
            
            $(selector).html(msg);
            return this;
        }
    };
    
 
    Greeter.init = function(firstName, lastName, language){
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    }
    
    // trick borrowed from JQuery so we dont have to use the new key word
    Greeter.init.prototype = Greeter.prototype;

    // attch our greeter to global variable and provide a shorthand of G$
    global.Greeter = global.G$ = Greeter;
}(window, jQuery))