import { useParams } from '../../../../router';

export default function Id() {
  const { id } = useParams('/layout1/users/:id');

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
