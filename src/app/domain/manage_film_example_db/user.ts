import { UserBase } from './base/user.base';

/**
 * YOU CAN OVERRIDE HERE UserBase.ts
 */
export interface User extends UserBase {

    // Insert here your custom attributes and function

    // Functions for User

    token: string;

    // UTILS FUNCTIONS

    /**
     * Check if logged user is admin
    isAdmin(): boolean {
        if (!this.roles)
            return false;
        return this.roles.indexOf('ADMIN') === 0;
    }
     */

    /**
     * Check if logged user has one role
    hasRole(role: string | Array<string>): boolean {
        if (!this.roles) return false;

        if (typeof role === 'string') {
            return (this.roles.indexOf(role) !== -1);
        } else {
            const found = role.filter(rol => {
                return (this.roles.indexOf(rol) !== -1);
            });
            return found.length > 0;
        }
    }
     */

}
