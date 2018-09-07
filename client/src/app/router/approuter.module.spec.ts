import { AppRouterModule } from './approuter.module';
import { routes } from './approuter.module';

describe('AppRouterModule', () => {
    let routerModule: AppRouterModule;

    beforeEach(() => {
        routerModule = new AppRouterModule();
    });

    it('should create an instance', () => {
        expect(routerModule).toBeTruthy();
    });

    it('Should have routes', () => {
        expect(routes.length).toBeGreaterThan(0);
    });
});
