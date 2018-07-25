import { LoyoutModule } from './loyout.module';

describe('LoyoutModule', () => {
  let loyoutModule: LoyoutModule;

  beforeEach(() => {
    loyoutModule = new LoyoutModule();
  });

  it('should create an instance', () => {
    expect(loyoutModule).toBeTruthy();
  });
});
