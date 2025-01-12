import BookList from '@/components/bookList';
import BookOverview from '@/components/bookOverview';
import { sampleBooks } from '@/constant';

const Home = () => {
  return (
    <>
      <BookOverview {...sampleBooks[0]} />

      <BookList title="Buku terbaru" books={sampleBooks} containerClassname="mt-20" />
    </>
  );
};

export default Home;
