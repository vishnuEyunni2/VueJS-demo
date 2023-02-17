# Intro to Vue 3 components

Component takes template that is rendered.

Components must be made such that they are re-usable.
Components with simple names are best avoided, as they could be conflicting.

## Registering a component

There are two ways we can register a component either globally or locally.

Globally registering a component will make it available across the app. This however may not be required for all components, as they may not be of use, but still be loaded as they are globally registered.

## Passing props from child to parent

For notifying a change of state to child we usually handle it with props. But when something has changed in child state, that parent needs to be aware of?

This can be achieved using custom events.

### Custom Events

To send a custom event, we need to use a special $emit function.
The first argument is the name of the event we want to emit.
The name can be anything you like.

The second argument is the data that is required to be passed along with the event.