import { Card } from 'reaktor-styleguide';
import { Button } from 'reaktor-styleguide';
import { Lettering } from 'reaktor-styleguide';

export default () => (
  <div>
    <Card title="Next Card">
      <Lettering>A card from next.js</Lettering>
      <Button accent label="Click me" />
    </Card>
  </div>
);
