import ClientComponent from '@/components/clientComponent';

export default async function MyPage() {
  const res = await fetch('https://randomuser.me/api/?results=10', { 
    next: { 
      revalidate: 3600 
    } 
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  return <ClientComponent data={data} />;
}
