import { environment } from '../../environments/environment';

// Function for settting the default restangular configuration
export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl(environment.PORT);
}