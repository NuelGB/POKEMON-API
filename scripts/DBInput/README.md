# DBInput Scripts
In recreating pokeAPI's endpoints, we have moved the relevant data from pokeAPI's results to a MongoDB database. Most of the data are copied over verbatim, with only a few attributes changed to fit our needs.

Most of the change happens to the JSON's `url` attribute. Since this project will only be made for local purposes(a.k.a. a college project), we do not have our own domain to host the API, nor do we intend to ever host one. Thus, all url attributes(and all attributes that are in the form of URLs) are changed to `id` attributes with the type `Number`  (Integer) corresponding to their document ID in the database.

MongoDB automatically adds `_id` and `_v` to our objects and nested objects, but we will still create our own `id` attribute to the object.

**All schemas used in our database are in common.js.**

# How Input Scripts Work
As mentioned previously, we copy the data taken from pokeAPI verbatim, with a few attributes changed. When calling a script, we call `mongooseInit` to initialize a connection to our MongoDB cluster. The function takes the link from config and connects to it using `mongoose.connect`

Once connected, we initialize our wanted endpoint from pokeAPI to a string. Conveniently, pokeAPI always has a `results` list akin to an index that shows all possible items for every endpoint. We will loop over the list and fetch data from the URL given, thus fetching all possible data from the endpoint.

With each item fetched, we will modify the data to our needs and upload it to the database using `Model.create`, with the schema we've defined in common.js. 

All operations happen in an `async` function, we always `await` for operations to finish before we move on to the next one, since `mongoose` upload operations happen asynchronously.

*Every script is ran in the `resetpopulate` node script for easy access to debugging and transferring data.*

*Run `npm run resetpopulate` to repopulate the database*

Alternatively, run the scripts one-by-one manually.