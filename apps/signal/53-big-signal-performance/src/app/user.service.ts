import { computed, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserStore {
  user = signal({
    name: 'Bob',
    address: {
      street: '',
      zipCode: '',
      city: '',
    },
    note: '',
    title: '',
    salary: 0,
  });

  readonly name = computed(() => this.user().name);
  readonly street = computed(() => this.user().address.street);
  readonly zipCode = computed(() => this.user().address.zipCode);
  readonly city = computed(() => this.user().address.city);
  readonly note = computed(() => this.user().note);
  readonly title = computed(() => this.user().title);
  readonly salary = computed(() => this.user().salary);
}
