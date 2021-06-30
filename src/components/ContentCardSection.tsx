const ContentCardSection: React.FC<React.ReactNode> = (props) => {
    return <section className="m-5 md:m-10">
        {props.children}
    </section>
}

export default ContentCardSection;