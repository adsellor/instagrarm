import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import SQLite from 'react-native-sqlite-storage';

export default class Sql extends Component  {
  constructor(props) {
    super(props)
    this.state = {
        record: null
      }
      let db = SQLite.openDatabase({name: 'account.db', createFromLocation : "../../../instagrarm.db", location: 'Library'}, this.openCB, this.errorCB);
      db.transaction((tx) => {
        tx.executeSql('SELECT * FROM account', [], (tx, results) => {
            console.log("Query completed");
            const len = results.rows.length;
            for (let i = 0; i < len; i++) {
              let row = results.rows.item(i);
              console.log(`Record: ${row.name}`);
              this.setState({record: row});
            }
          });
      });

    }

    errorCB(err) {
      console.log("SQL Error: " + err);
    }

    successCB() {
      console.log("SQL executed fine");
    }

    openCB() {
      console.log("Database OPENED");
    }
    render() {
      return (
     <View>

       <Text>
         {this.state.record !== null ? 'Success: ' + this.state.record.name : 'Waiting...'}
       </Text>
     </View>
   );
 }
}
