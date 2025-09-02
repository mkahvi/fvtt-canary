export class CanaryActor extends Actor {
  foo; // Will be null on world launch for unlinked actors despite the assignment below

  prepareBaseData() {
    this.foo = 5000;
  }
}
