import { Card } from 'antd';

const products = [
  {
    title: 'Ferry from Port Blair to Havelock',
    description: 'Description of the first product.',
    image: 'image-url-1.jpg',
  },
  {
    title: 'Ferry from Havelock to Neil',
    description: 'Description of the second product.',
    image: 'image-url-2.jpg',
  },
  {
    title: 'Ferry from Neil to Port Blair',
    description: 'Description of the third product.',
    image: 'image-url-3.jpg',
  },
  {
    title: 'Ferry from Port Blair to Havelock to Neil and back to Port Blair',
    description: 'Description of the fourth product.',
    image: 'image-url-4.jpg',
  },
];

export default function Home() {
  return (
    <div>
      {products.map((product, index) => (
        <Card key={index} title={product.title} extra={<a>Add to Cart</a>}>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} />
        </Card>
      ))}
    </div>
  );
}
