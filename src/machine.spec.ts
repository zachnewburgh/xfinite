import Machine from './machine';

describe('Machine', () => {
  it('should exist', () => {
    const machine = Machine;
    expect(machine).toBeTruthy();
  });
  it('should sayHello', () => {
    const machine = Machine;
    machine.sayHello();
  });
});
