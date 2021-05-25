interface IImageProps {
    source: string
}

const ContentCardImage: React.FC<IImageProps> = (props): JSX.Element => {
    return <section>
        <img src={props.source} alt="Cocktail" />
    </section>
}


export default ContentCardImage;