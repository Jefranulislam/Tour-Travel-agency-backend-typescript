import mongoose from "mongoose"
import config from "./config";
import app from "./app";

async function main() {
    try{
         await mongoose.connect(config.databaseurl as string);
            app.listen(config.port, () => {
            console.log(`Example app listening on port `)
          })
    
    }catch(error){
        console.log(error);
    }


}
main();