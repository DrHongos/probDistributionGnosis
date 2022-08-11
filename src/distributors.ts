import { BigInt } from "@graphprotocol/graph-ts";
import {
    UserSetProbability,
    StatusChanged,
    UserRedemption,
    PredictionFunded,
    TimeOutUpdated,
    SimpleDistributorInitialized,   
} from "../generated/templates/SimpleDistributor/SimpleDistributor"
import { Prediction } from "../generated/schema"

/* SimpleDistributorInitialized(
    bytes32 conditionId,
    bytes32 parentCollection,
    address collateralToken,
    address ctAddress,
    uint[] indexSets,
    uint amountToSplit,
    uint timeOut
); */
export function handleSimpleDistributorInitialized(event: SimpleDistributorInitialized): void {
    let pred = Prediction.load(event.address.toHexString());
    pred.condition = event.params.conditionId;
    pred.parent = event.params.parentCollection;
    pred.collateral = event.params.collateralToken;
    pred.totalCollateral = event.params.amountToSplit;
    pred.status = BigInt.fromI32(1);
    pred.timeout = event.params.timeOut;
    ///for event.params.indexSets { pred.predictionsTotal[i] = 0}
    pred.save();
}
//UserSetProbability(address who, uint[] userDistribution, string justification);
export function handleUserSetProbability(
    event: UserSetProbability
): void {
    let pred = Prediction.load(event.address.toHexString());
    // for loop
    //pred.probabilities = [Position!]!
    //pred.users = [Predictor!]!
    pred.save();
}
    
//StatusChanged(Stages status);
export function handleStatusChange(event: StatusChanged): void {
    let pred = Prediction.load(event.address.toHexString());
    pred.status = BigInt.fromI32(event.params.status);
    pred.save();    
}

//UserRedemption(address who, uint[] redemption);
export function handleRedemption(event: UserRedemption): void {}

//PredictionFunded(address who, uint amount);
export function handlePredictionFunded(event: PredictionFunded): void {
    let pred = Prediction.load(event.address.toHexString());
    pred.totalCollateral += event.params.amount;
    pred.save();
}

//TimeOutUpdated(uint timeOut);
export function handleTimeOutUpdated(event: TimeOutUpdated): void {
    let pred = Prediction.load(event.address.toHexString());
    pred.timeout = event.params.timeOut;
    pred.save();
}
