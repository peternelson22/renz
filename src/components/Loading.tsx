import Image from 'next/image';

const Loading = () => {
  return (
    <center className='grid place-items-center h-screen'>
      <div className=''>
        <Image
          className='mb-5'
          src='/renz.png'
          alt='loading...'
          height={10}
          width={120}
        />
        <Image src='/spinner.svg' alt='spinner ' height={10} width={80} />
      </div>
    </center>
  );
};
export default Loading;
