function(properties, context) {

    function sortTable(cellId, ascending = true, rpgroupId) {
        const table = document.getElementById(rpgroupId);

        const rows = Array.from(table.children);

        rows.sort((rowA, rowB) => {
            const cellA = rowA.querySelector(`#${cellId}`);
            const cellB = rowB.querySelector(`#${cellId}`);

            if (!cellA || !cellB) return 0;

            const valueA = cellA.innerText;
            const valueB = cellB.innerText;

            if (ascending) {
                return valueA.localeCompare(valueB);
            } else {
                return valueB.localeCompare(valueA);
            }
        });

        // Reorder the rows in the table
        rows.forEach(row => {
            table.appendChild(row);
        });
    }

    sortTable(properties.cell_id, properties.ascending, properties.repeating_group_id);

}