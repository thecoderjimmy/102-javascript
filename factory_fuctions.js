// Skillcrush 102: Factory Functions
// https://learn.skillcrush.com/module-19/creating-multiple-objects-with-factory-functions/

// To create multiple objects, you can use a factory
// function. A factory functions encapsulates an object
// and returns it when the function is called.
// They work particularly well with *object literals*,
// which are the kinds of objects we've been writing
// so far.

// The "makePBJ" function is the factory function,
// encapsulating the "pbj" object.  It uses the parameter
// "breadType", which you can use to specify the kind of
// bread you're using for your sandwich.
var makePBJ = function (breadType)
{
var pbj = {};
    pbj.bread = breadType;
    pbj.contents = "peanut butter & jelly";

    // The "announcePBJ" method is called inside the
    // factory function.  This means that, any time
    // the "makePBJ" factory function is called, the
    // announcement is made
    pbj.announcePBJ = function ()
    {
      console.log("PB&J on " + this.bread + ", ready to eat!")
    };

    pbj.announcePBJ();

    // The next line, "return pbj", ensures that calling
    // the factory function will produce a new pbj object.
    return pbj;
};

// Finally, we call the function and assing it to a new
// variable called "pbj1" and set its "breadType" para-
// meter to "white".  This creates a new PB&J on white
// bread, and produces the following message in the
// console:
//
// "PB&J on white, ready to eat!"
var pbj1 = makePBJ("white");
