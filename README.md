# Test almundo with react native

## Folders

* Components live at `src/components/*`
* Actions live at `src/redux/actions/*`
* Reducers live at `src/redux/reducers/*`

## Components

* Components should only take care of: Displaying logic, animations
* Styles will not be inlined in the `render` funcion but will be in a `Style` object
* Components need to specify their `propTypes` by doing `Component.propTypes = {}` and speciying all types and required props
* All animations live within an object `this.animations`
* Device properties be coming out of `Device.*`

## Run unit testing

* Should run:
  * `yarn test`

## Run react native proyect

* Mongodb must be installed to run the server
* In api/config.json modify the ip according your machine

* Should run:
  * `yarn install`
  * `yarn start`
  * `yarn server`
  * `yarn ios`
  * `yarn android`
