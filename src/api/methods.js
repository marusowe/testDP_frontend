import { get, post, destroy } from "./base";

export const apiRequests = {
    redirect: hash_url => get(`api/v1/${hash_url}/`),
    getUrls: nextPage => get(nextPage ? nextPage : 'api/v1/urls/all/'),
    createUrl: body => post('api/v1/urls/create/', body),
    deleteUrls: hash_url => destroy(`api/v1/urls/${hash_url}/delete/`),
}