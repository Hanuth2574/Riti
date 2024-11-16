
export default function Header() {
  return (
    <>
   <section>
    <header className='w-full' >
      <div className='w-full p-5 flex justify-between'>
      <div className='font-bold text-2xl ml-5 mt-4 md:mt-4' >
        RITI
</div>
<div className='border gap-10 hidden md:flex border-black/50 rounded-full   p-4 '>
  <span className='text-lg text-black/70'>Services</span>
  <span className='text-lg text-black/70'>Benefits</span>
  <span className='text-lg text-black/70'>Work</span>
  <span className='text-lg text-black/70'>Process</span>
  <span className='text-lg text-black/70'>Testimonial</span>

</div>
<a href="https://www.youtube.com/watch?v=HH_a6aRO1TE" className='mr-2 mt-2 md:mr-10 md:mt-4 underline text-lg underline-offset-4'>
  Visit eriti
</a>
      </div>
    </header>
   </section>
    </>
  )
}