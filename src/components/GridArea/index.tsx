import collection from '@/mockupData';
import * as Styled from './styles';

function GridArea() {
  return (
    <Styled.Container>
        <h1>Minhas coleções</h1>
        {collection.map(item => (
          <p>{item.title}</p>
        ))}
    </Styled.Container>
  )
}

export default GridArea