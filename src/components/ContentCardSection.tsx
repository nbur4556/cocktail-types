const ContentCardSection: React.FC<React.ReactNode> = (props) => {
    return <section className="my-5">
        {props.children}
    </section>
}

export default ContentCardSection;