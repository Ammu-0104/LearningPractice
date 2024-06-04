import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6625fcf4a61c76a25ac0'); 

export const account = new Account(client);

