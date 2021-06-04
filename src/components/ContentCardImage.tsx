interface IImageProps {
    source: string
}

const ContentCardImage: React.FC<IImageProps> = (props): JSX.Element => {
    return <section className="size-card-image overflow-hidden">
        <img src={props.source} alt="Cocktail" />
    </section>
}


export default ContentCardImage;