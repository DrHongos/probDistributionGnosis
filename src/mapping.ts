import {
  DistributorCreated,
  DistributorTemplateChanged,
  OwnershipTransferred
} from "../generated/SimpleDistributorFactory/SimpleDistributorFactory"
import { Prediction } from "../generated/schema"
import { SimpleDistributor } from "../generated/templates"

//DistributorCreated(address distributorAddress, uint256 distributorIndex)
export function handleDistributorCreated(event: DistributorCreated): void {
  let dir = event.params.distributorAddress.toHexString();
  SimpleDistributor.create(event.params.distributorAddress);
  let pred = new Prediction(dir);
  pred.created = event.block.timestamp;
  pred.index = event.params.distributorIndex;
  pred.probabilitiesTotal = []; // loop to set the qty?
  pred.probabilities = [];
  pred.users = [];
  pred.save();

}

export function handleDistributorTemplateChanged(
  event: DistributorTemplateChanged
): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
