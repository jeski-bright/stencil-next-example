import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { run } from './my-component.worker';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div>
        Hello, World! I'm {this.getText()}. <button onClick={async () => alert(await run())}>Click me</button>
      </div>
    );
  }
}
