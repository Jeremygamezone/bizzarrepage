type Props = {
  imgName: string
  title: string
  description: string
  link?: string
}

export default function Card({
  imgName,
  title,
  description,
  link
}: Props) {
  const content = (
    <div className="my-auto py-6">
      <img
        src={imgName}
        alt=""
        className="rounded-3xl my-auto mx-auto w-56 h-56 object-cover shadow-lg"
      />

      <div className="p-8 text-white uppercase">
        <h3 className="text-2xl p-4 font-bold">
          {title}
        </h3>

        <p className="text-justify">
          {description}
        </p>
      </div>
    </div>
  )

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  )
}