function(properties, context) {

    function sortTable(cellId, ascending = true, rpgroupId) {
        const table = document.getElementById(rpgroupId);

        const rows = Array.from(table.children);

        rows.sort((rowA, rowB) => {
            const cellA = rowA.querySelector(`#${cellId}`);
            const cellB = rowB.querySelector(`#${cellId}`);

            if (!cellA || !cellB) return 0;

            // Function to parse the innerText or set it to 0 if not a valid number
            function parseValue(cell) {
                const text = cell.innerText;
                const number = parseFloat(text);
                return (text === "" || text === null || isNaN(number)) ? 0 : number;
            }

            var valueA = parseValue(cellA);
            var valueB = parseValue(cellB);

            if (ascending) {
                return valueA - valueB;
            } else {
                return valueB - valueA;
            }
        });

        // Reorder the rows in the table
        rows.forEach(row => {
            table.appendChild(row);
        });
    }
    
    sortTable(properties.cell_id, properties.ascending, properties.repeating_group_id)
}