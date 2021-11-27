import React from 'react'; 
import {InfoCol, InfoWrapperRow} from "./OrderElements";
import Image from "../../../images/Group 91.png";

import Rewards from "../Rewards";

import PreStaking from "../PreStaking";
import Balance from "../Token-Balance";
import { Unstake } from "../Unstake";
import Available from "../Available";
import Stakings from "../Stakings/index.js";
import { ImgWrapper } from '../../Hero/InfoSection.elements';


const Order = () => {
    return (
        <div>


            

            <InfoWrapperRow>

                <InfoCol>
                    <PreStaking />
                    <Stakings />
                </InfoCol>



                <InfoCol>
                    <Available />
                    <Unstake />
                </InfoCol>


                <InfoCol>
                    <Rewards />
                    <Balance />

                </InfoCol>




            </InfoWrapperRow>

            
        </div>
    )
}

export default Order
