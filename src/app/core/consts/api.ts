import { environment } from '../../../environments/environment';

export class API {
  public static URL_API = {
    USERS: `${environment.base_api}/users`,
    POSTS: `${environment.base_api}/posts`,
    COMMENTS: `${environment.base_api}/comments`,
    TODOS: `${environment.base_api}/todos`,
  };
}
