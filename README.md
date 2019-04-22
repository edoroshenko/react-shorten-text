# ReactShortenText

Thre component takes all available width and renders it's content shortened by adding ellipsis in the middle or in the end of the text.

## Properties

| Property     | Type                                                  | Required | Description                                                         |
| -------------| ----------------------------------------------------- | ---------| --------------------------------------------------------------------|
| children     | String                                                | yes      | Mandatory content to be shortened. Should be exactly of type String.|
| tailLength   | String                                                | yes      | Mandatory number of characters to be preserved at the end.          |
| className    | String                                                | no       | Arbitrary class name to be added to the wrapper.                    |
| title        | String                                                | no       | Arbitrary title attribute.                                          |

Other HTML attributes could also be attached to the wrapper.

## Browser support
The component has been tested in FireFox, Chrome, Safari and IE11

## Performance
The component has been tested with 4000 instances. The update time is kept within 500ms.

## Dependencies
The component requires `React` and `prop-types` as peer dependencies.

## Development
To start storybook run
```sh
npm start
```
To run unit tests run
```sh
npm test
```
