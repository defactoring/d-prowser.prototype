import * as T from '../../type';
import {Exception} from '../../type/Exception';
import {Result} from '../../type/Result';

export class Bookmark {
  private readonly _name: T.Name;
  private readonly _url: T.Url;

  private constructor(name: T.Name, url: T.Url) {
    this._name = name;
    this._url = url;
  }

  public static from(name: T.Name, url: T.Url): Result<Bookmark, Exception> {
    // TODO: some validation
    return Result.Ok(new Bookmark(name, url));
  }
}
