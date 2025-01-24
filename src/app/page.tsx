import ClientComponent from '@/components/clientComponent'

export async function generateStaticParams() {
  const res = await fetch('https://randomuser.me/api/?results=10');
  const data = await res.json();
  
  return data.results.map((user:any) => ({
    id: user.login.uuid
  }));
}

export default async function MyPage() {
  const res = await fetch('https://randomuser.me/api/?results=10', { 
    next: { 
      revalidate: 3600 
    } 
  });
  const data = await res.json();

  return <ClientComponent data={data} />;
}