/** window.location.search - property to access the query string of the current page  */
const params = new URLSearchParams(window.location.search);
params.searchParams;

/* const firstName = params.get("first-name");
console.log(firstName);
const lastName = params.get("last-name");
console.log(lastName);
const info = params.get("info");
console.log(info);
const wayOfTravel = params.get("wayOfTravel");
console.log(wayOfTravel);
const country = params.get("country");
console.log(country);
const checkBox1 = params.get("option1");
console.log(checkBox1);
const checkBox2 = params.get("option2");
console.log(checkBox2);
const checkBox3 = params.get("option3");
console.log(checkBox3);
const terms = params.get("terms");
console.log(terms); */


const addMultTable = (params) => {
    /**Creating Table */
    const linkToH1 = document.querySelector(".title");
    const table = document.createElement("TABLE");
    /** to appending table after H1, Sibling nodes: 
     * Nodes that sit on the same level in the DOM tree. */
    linkToH1.parentNode.insertBefore(table, linkToH1.nextSibling);

    /** Transforming params URLSearchParams object to the object  */
    const result = {};
    for (const [key, value] of params) {
        result[key] = value;
    }

    /* console.log("=>", result);
       console.log("ARRAY =>", Object.values(result)); */

    let rows = 0;
    /** iterate the object properties and retrieve the data 
     * at the same time creating rows and colums 
     * and assign to the cells key and value of the object
     */
    for (const [key, value] of Object.entries(result)) {
        let row = table.insertRow(rows++);

        let cell1 = row.insertCell(0);
        cell1.textContent = key;

        let cell2 = row.insertCell(1);
        cell2.textContent = value;

        /* console.log(`Key: ${key}, Value: ${value}`); */
    }
    /* for (let i = 0; i < params.size; i++) {
        let row = table.insertRow(i);
        for (let z = 0; z < cols; z++) {
            let cell = row.insertCell(z);
            cell.textContent = "[ row " + (i + 1) + " cell " + (z + 1) + "]" + "   ";
        }
    } */
}

addMultTable(params);
