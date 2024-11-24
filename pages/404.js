import Link from 'next/link';
import MainContainer from '../components/MainContainer';



export default function NotFound() {
    return (
      <MainContainer title={"Не найдено"}>
        <h1>Не найдено</h1>
          <p classname="">Страница не найдена</p>
        <Link href="/">Вернуться на главную</Link>
      </MainContainer>
    )
  }