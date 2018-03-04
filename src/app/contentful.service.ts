import { Injectable } from '@angular/core';
// import Contentful createClient and type for `Entry`
import { createClient, Entry } from 'contentful';

// configure the service with tokens and content type ids
// SET YOU OWN CONFIG here
const CONFIG = {
  space: '0xt3aonelz5y',
  accessToken: 'a53b0eeaeb7ffcbd8c23f47c2ab03f51503947d75e4a4764f3248ddab0b9cc22',

  contentTypeIds: {
    product: '2PqfXUJwE8qSYKuM0U6w8M',
    event: 'simpleForm',
    image: '60HJGnp0Wc4U460cMEq4K2'
  }
};

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.product
    }, query))
      .then(res => res.items);
  }

  getEvents(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.event
    }, query))
      .then(res => res.items);
  }

  getImage(query?: object) {
    return this.cdaClient.getAsset(CONFIG.contentTypeIds.image)
      .then((asset) => `${asset.fields.file.url}?fm=jpg&fl=progressive&fit=pad`);
  }
}
