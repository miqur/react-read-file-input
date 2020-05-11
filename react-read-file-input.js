const importFromFileBodyComponent = () => {
    let fileReader;

    const handleFileRead = e => {
        const content = fileReader.result;
        console.log(content);
        // ... do something with the 'content' ...
    };

    const handleFileChosen = file => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    };

    return (
        <div>
            <input
                type="file"
                id="file"
                accept=".csv"
                onChange={e => handleFileChosen(e.target.files[0])}
            />
        </div>
    )
}