import {DataService} from '../shared/data.service';
//import {ItemService} from '../shared/item.service';
//import {MappingService} from '../shared/mappings.service';
//import {SqliteService} from '../shared/sqlite.service';
import { PouchDBService } from '../shared/puchdb.service';

export const APP_PROVIDERS = [
	DataService,
	//ItemService,
	//MappingService,
	//SqliteService,
	PouchDBService
];