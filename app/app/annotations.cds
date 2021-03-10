using CatalogService as service from '../../srv/cat-service';

annotate service.Books with @(UI : {
    SelectionFields : [title],
    LineItem        : [
    {
        Value : title,
        Label : 'Title'
    },
    {
        Value : stock,
        Label : 'Stock'
    }
    ]
});
