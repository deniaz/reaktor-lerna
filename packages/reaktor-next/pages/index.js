import { Card, Display, Title, Lettering } from 'reaktor-styleguide';

const image =
  'https://images.unsplash.com/photo-1509781200547-56ffc785bd2f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a42dbb588b1647e8d0c4e1c8fc3a5f26&auto=format&fit=crop&w=600&q=80';

export default () => (
  <div>
    <Display>This is Next.js</Display>
    <Card image={image} title="Next.js Card">
      <Lettering>This is a card with some next, consumed by next.js but provided by another package 💖</Lettering>
    </Card>
  </div>
);
