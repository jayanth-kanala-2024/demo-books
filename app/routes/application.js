import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { scheduleOnce } from '@ember/runloop'; // Import scheduleOnce to defer execution to after rendering
import { initFlowbite } from 'flowbite';

export default class ApplicationRoute extends Route {
  @service auth;
  @service router;
  @service locale;

  excludedRoutes = ['index', 'auth/login', 'auth/signup', 'auth/logout'];

  model() {
    return {
      auth: this.auth,
      translations: this.locale.getTranslations(),
    };
  }

  async beforeModel(transition) {
    await this.locale.setDefaultLocale();
    let targetRouteName = transition.to.name;
    if (
      ['auth/login', 'auth/signup'].includes(targetRouteName) &&
      this.auth.isAuthenticated
    ) {
      this.router.transitionTo('/');
      return;
    }
    if (!this.excludedRoutes.includes(targetRouteName)) {
      if (!this.auth.isAuthenticated) {
        this.router.transitionTo('auth/login');
      }
    }
  }

  @action
  didTransition() {
    this._super(...arguments);
    // Execute code after any route transition is complete
    scheduleOnce('afterRender', this, this.afterTransitionCallback);
  }

  afterTransitionCallback() {
    // Code to execute after any route transition is complete
    console.log('Route transition complete');
    initFlowbite()
  }
}
// admin routes
// const requiresAuth = transition.to.metadata?.requiresAuth || false;
// const isAdminRoute = transition.to.metadata?.isAdminRoute || false;

// console.log("beforeModel", requiresAuth, this.auth.isAuthenticated())

// if (requiresAuth && !this.auth.isAuthenticated()) {
//   this.router.transitionTo('auth/login');
// }

// if (isAdminRoute && !this.auth.user.isAdmin) {
//   this.router.transitionTo('unauthorized');
// }
