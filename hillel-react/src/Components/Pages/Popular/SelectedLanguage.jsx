const languages = ['All','Javascript','PHP','Python','Ruby']

function SelectedLanguage({selectedLanguage, setSelectedLanguage, isProcessing}) {
    return ( 
        <div>
            <ul className="languages">
                {languages.map((language, index) => (
                    <li key={index}
                        style={{color: language === selectedLanguage ? '#7f00ff' : 'white'}}
                        onClick={() => {
                            if (!isProcessing) { 
                                setSelectedLanguage(language);  
                            }
                            
                        }}
                    >{language}</li>
                ))}
            </ul>
        </div>
     );
}

export default SelectedLanguage;