const ContentCard: React.FC = () => {
    return <article>
        <img src="https://via.placeholder.com/150" />

        {/* Header Section */}
        <section>
            <h2>Cocktail Name</h2>
            <h3>Cocktail Category</h3>
        </section>

        {/* Ingredients Section */}
        <section>
            <ul>
                <li>Ingredient 1</li>
                <li>Ingredient 2</li>
                <li>Ingredient 3</li>
            </ul>
        </section>

        {/* Instructions Section */}
        <section>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </section>
    </article>
}

export default ContentCard;