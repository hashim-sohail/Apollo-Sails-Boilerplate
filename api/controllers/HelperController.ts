import HelperService from '../services/HelperService';
declare var sails: any;

let helperService = new HelperService();

export function hello(req: any, res: any, next: Function): any {
    res.status(200).send(helperService.hello());
}