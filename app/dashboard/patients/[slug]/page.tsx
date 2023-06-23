
export default function Page({ params }: { params: { slug: number } }) {
    return <div>My Patient: {params.slug}</div>
  }

