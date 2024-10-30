function(properties, context) {

    function sortTable(cellId, ascending = true, rpgroupId, dateFormat) {
        const table = document.getElementById(rpgroupId);

        const rows = Array.from(table.children);

        function parseDate(dateStr, format) {
            const formatLowerCase = format.toLowerCase();
            const parts = formatLowerCase.match(/(d{1,2}|m{1,2}|y{2,4})/g);
            const dateParts = dateStr.match(/(\d+)/g);

            let day, month, year;
            for (let i = 0; i < parts.length; i++) {
                if (parts[i].startsWith('d')) {
                    day = parseInt(dateParts[i], 10);
                } else if (parts[i].startsWith('m')) {
                    month = parseInt(dateParts[i], 10) - 1;
                } else if (parts[i].startsWith('y')) {
                    year = parseInt(dateParts[i], 10);
                }
            }

            return new Date(year, month, day);
        }

        rows.sort((rowA, rowB) => {
            const cellA = rowA.querySelector(`#${cellId}`);
            const cellB = rowB.querySelector(`#${cellId}`);

            if (!cellA || !cellB) return 0;

            const dateA = parseDate(cellA.innerText, dateFormat);
            const dateB = parseDate(cellB.innerText, dateFormat);

            if (ascending) {
                return dateA - dateB;
            } else {
                return dateB - dateA;
            }
        });

        // Reorder the rows in the table
        rows.forEach(row => {
            table.appendChild(row);
        });
    }

    sortTable(properties.cell_id, properties.ascending, properties.repeating_group_id, properties.date_format)

}