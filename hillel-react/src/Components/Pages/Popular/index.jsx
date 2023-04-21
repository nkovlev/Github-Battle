import React from "react";
import { useEffect, useState } from "react";
import { fetchPopularRep } from "../../../api";
import Repositories from "./Repositories";
import SelectedLanguage from "./SelectedLanguage";
import { PulseLoader } from "react-spinners";
import { useSearchParams } from 'react-router-dom';


function Popular() {

    const [selectedLanguage, setSelectedLanguage] = useState('All');
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
    const [isProcessing, setIsProcessing] = useState(false);
    

    useEffect(() => {
        setIsProcessing(true);
        setLoading(true);
        setSearchParams(new URLSearchParams({ lang: selectedLanguage }));
        fetchPopularRep(selectedLanguage)
        .then(data => setRepos(data))
        .finally(() => {
            setLoading(false);
            setIsProcessing(false);
        })
    },[selectedLanguage])

    useEffect(() => {
        const lang = searchParams.get('lang');
        if (lang !== selectedLanguage) {
            setSelectedLanguage(lang || 'All');
        }
    }, [searchParams, setSelectedLanguage]);
    
    return (  
        <div> 
                <SelectedLanguage
                    selectedLanguage={selectedLanguage}
                    setSelectedLanguage={setSelectedLanguage}
                    isProcessing={isProcessing}
                />

            { !loading ?
                <Repositories repos={repos}/> 
                :
                <PulseLoader className="loader"
                    color={'white'}
                    loading={loading}
                />
            }
        </div>
    );
}

export default Popular;
