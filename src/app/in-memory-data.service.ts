import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb(){
             const heroes = [
                    {id : 1, name : 'Batman'},
                    {id : 2, name : 'Superman'},
                    {id : 3, name : 'Ironman'},
                    {id : 4, name : 'Hulk'},
                    {id : 5, name : 'Wolvorine'},
                    {id : 6, name : 'Joker'},
                    {id : 7, name : 'Spiderman'},
                    {id : 8, name : 'Dr.Strange'},
                    {id : 9, name : 'Higuaine'},
                    {id : 10, name : 'Aarnav'}
                    ];
            return {heroes};
    }
}