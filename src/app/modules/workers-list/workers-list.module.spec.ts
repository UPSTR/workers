import { WorkersListModule } from './workers-list.module';

describe('WorkersListModule', () => {
  let workersListModule: WorkersListModule;

  beforeEach(() => {
    workersListModule = new WorkersListModule();
  });

  it('should create an instance', () => {
    expect(workersListModule).toBeTruthy();
  });
});
