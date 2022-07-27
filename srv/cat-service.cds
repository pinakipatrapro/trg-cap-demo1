using { my.bookshop as my } from '../db/data-model';
service CatalogService @(path:'/browse') {

  @readonly entity Books as SELECT from my.Books {*,
    author.name as author
    } excluding { createdBy, modifiedBy };

    action submitOrder (book:Books:ID, amount: Integer);
  }
