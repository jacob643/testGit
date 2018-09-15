import { MongoClient } from "mongodb";

class DbClient {
    public db: any;

    public connect() {
        var DB_URL: string = "mongodb://admin:npm2018*@ds157742.mlab.com:57742/npmdb";
        MongoClient.connect(DB_URL,{useNewUrlParser : true}, (err, db) => {
            if (err) {
                console.log(err);
            } else {
                this.db = db;
                console.log("Connected to our mongoDB!");
            }


            //Add game to database:
            var database = db.db("npmdb");
            var games = database.collection("games");

            var game1 = {id: 0, name: "test"};
            games.insertOne(game1,function(error,_res){
              if (error) throw error;
              console.log("inserted game!");
            })
        });
    }
}

export = new DbClient();
