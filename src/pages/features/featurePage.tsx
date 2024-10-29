import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CharacterForm from "../../components/forms/characterForm";
import { Character,Planet,Starship } from "../../types/feature";
import PlanetForm from "../../components/forms/planetFrom";
import StarshipForm from "../../components/forms/starshipForm";
import { useParams } from "react-router-dom";

const FeaturePage:FC = ()=>{
    const {id} = useParams();
    const {currentFeature,featureLoading,featureError,featureType} = useSelector((state:RootState)=> state.slice);
    if(featureLoading){
        return <p>загрузка...</p>
    }
    if(featureError){
        return <p>{featureError}</p>
    }
    return(
        <div className="w-full h-full flex flex-col gap-8 items-center py-6">
            {featureType === 'people' && <CharacterForm defaultValues={currentFeature as Character} id={Number(id)}></CharacterForm>}
            {featureType === 'planets' && <PlanetForm defaultValues={currentFeature as Planet} id={Number(id)}></PlanetForm>}
            {featureType === 'starships' && <StarshipForm defaultValues={currentFeature as Starship} id={Number(id) }></StarshipForm>}
        </div>
    )
}

export default FeaturePage;