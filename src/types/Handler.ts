/**
 * Used to register special "handler" which will be executed on a service class during its initialization.
 * It can be used to create custom decorators and set/replace service class properties and constructor parameters.
 */
export interface Handler {

    /**
     * Service object used to apply handler to.
     */
    target: Object;

    /**
     * Class property name to set/replace value of.
     * Used if handler is applied on a class property.
     */
    propertyName?: string;

    /**
     * Parameter index to set/replace value of.
     * Used if handler is applied on a constructor parameter.
     */
    index?: number;

    /**
     * Factory function that produces value that will be set to class property or constructor parameter.
     */
    value: () => any;

}