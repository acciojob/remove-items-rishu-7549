//your JS code here. If required.
document.querySelector('input[type="button"][value="Select and Remove"]').addEventListener('click', function(){
	let select = document.getElementById("colorSelect");
	const selectedIndex = select.selectedIndex;
            
            // Check if an option is selected
            if (selectedIndex !== -1) {
                // Remove the selected option
                select.remove(selectedIndex);
            }
})