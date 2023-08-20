function displayNoResultsMessage(filterParams) {
    document.querySelector(".no-results-message").innerHTML = `
    <div>
        <p>We couldn't find results for:</p>
            ${noResultsMessageComponent(filterParams)}
    </div>
    <div>
        <h3>Search Tips</h3>
        <ul>
            <li><p>Broaden your search by removing some of the filters</p></li>
        </ul>
    </div>
    `
}