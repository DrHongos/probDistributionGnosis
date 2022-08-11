// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class PredictionFunded extends ethereum.Event {
  get params(): PredictionFunded__Params {
    return new PredictionFunded__Params(this);
  }
}

export class PredictionFunded__Params {
  _event: PredictionFunded;

  constructor(event: PredictionFunded) {
    this._event = event;
  }

  get who(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class SimpleDistributorInitialized extends ethereum.Event {
  get params(): SimpleDistributorInitialized__Params {
    return new SimpleDistributorInitialized__Params(this);
  }
}

export class SimpleDistributorInitialized__Params {
  _event: SimpleDistributorInitialized;

  constructor(event: SimpleDistributorInitialized) {
    this._event = event;
  }

  get conditionId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get parentCollection(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get collateralToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ctAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get indexSets(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }

  get amountToSplit(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get timeOut(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class StatusChanged extends ethereum.Event {
  get params(): StatusChanged__Params {
    return new StatusChanged__Params(this);
  }
}

export class StatusChanged__Params {
  _event: StatusChanged;

  constructor(event: StatusChanged) {
    this._event = event;
  }

  get status(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class TimeOutUpdated extends ethereum.Event {
  get params(): TimeOutUpdated__Params {
    return new TimeOutUpdated__Params(this);
  }
}

export class TimeOutUpdated__Params {
  _event: TimeOutUpdated;

  constructor(event: TimeOutUpdated) {
    this._event = event;
  }

  get timeOut(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class UserRedemption extends ethereum.Event {
  get params(): UserRedemption__Params {
    return new UserRedemption__Params(this);
  }
}

export class UserRedemption__Params {
  _event: UserRedemption;

  constructor(event: UserRedemption) {
    this._event = event;
  }

  get who(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get redemption(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }
}

export class UserSetProbability extends ethereum.Event {
  get params(): UserSetProbability__Params {
    return new UserSetProbability__Params(this);
  }
}

export class UserSetProbability__Params {
  _event: UserSetProbability;

  constructor(event: UserSetProbability) {
    this._event = event;
  }

  get who(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get userDistribution(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get justification(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class SimpleDistributor extends ethereum.SmartContract {
  static bind(address: Address): SimpleDistributor {
    return new SimpleDistributor("SimpleDistributor", address);
  }

  ctAddress(): Address {
    let result = super.call("ctAddress", "ctAddress():(address)", []);

    return result[0].toAddress();
  }

  try_ctAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("ctAddress", "ctAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  justifiedPositions(param0: Address): string {
    let result = super.call(
      "justifiedPositions",
      "justifiedPositions(address):(string)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toString();
  }

  try_justifiedPositions(param0: Address): ethereum.CallResult<string> {
    let result = super.tryCall(
      "justifiedPositions",
      "justifiedPositions(address):(string)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  positionsSum(param0: BigInt): BigInt {
    let result = super.call("positionsSum", "positionsSum(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_positionsSum(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "positionsSum",
      "positionsSum(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  probabilityDistribution(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "probabilityDistribution",
      "probabilityDistribution(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_probabilityDistribution(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "probabilityDistribution",
      "probabilityDistribution(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalCollateral(): BigInt {
    let result = super.call(
      "totalCollateral",
      "totalCollateral():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalCollateral(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalCollateral",
      "totalCollateral():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userSet(param0: Address): boolean {
    let result = super.call("userSet", "userSet(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_userSet(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("userSet", "userSet(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddFundsCall extends ethereum.Call {
  get inputs(): AddFundsCall__Inputs {
    return new AddFundsCall__Inputs(this);
  }

  get outputs(): AddFundsCall__Outputs {
    return new AddFundsCall__Outputs(this);
  }
}

export class AddFundsCall__Inputs {
  _call: AddFundsCall;

  constructor(call: AddFundsCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AddFundsCall__Outputs {
  _call: AddFundsCall;

  constructor(call: AddFundsCall) {
    this._call = call;
  }
}

export class ChangeTimeOutCall extends ethereum.Call {
  get inputs(): ChangeTimeOutCall__Inputs {
    return new ChangeTimeOutCall__Inputs(this);
  }

  get outputs(): ChangeTimeOutCall__Outputs {
    return new ChangeTimeOutCall__Outputs(this);
  }
}

export class ChangeTimeOutCall__Inputs {
  _call: ChangeTimeOutCall;

  constructor(call: ChangeTimeOutCall) {
    this._call = call;
  }

  get _timeOut(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeTimeOutCall__Outputs {
  _call: ChangeTimeOutCall;

  constructor(call: ChangeTimeOutCall) {
    this._call = call;
  }
}

export class CloseCall extends ethereum.Call {
  get inputs(): CloseCall__Inputs {
    return new CloseCall__Inputs(this);
  }

  get outputs(): CloseCall__Outputs {
    return new CloseCall__Outputs(this);
  }
}

export class CloseCall__Inputs {
  _call: CloseCall;

  constructor(call: CloseCall) {
    this._call = call;
  }
}

export class CloseCall__Outputs {
  _call: CloseCall;

  constructor(call: CloseCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _conditionId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get parentCollection(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _collateralToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _ctAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _indexSets(): Array<BigInt> {
    return this._call.inputValues[4].value.toBigIntArray();
  }

  get _amountToSplit(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _timeOut(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class OnERC1155BatchReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155BatchReceivedCall__Inputs {
    return new OnERC1155BatchReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155BatchReceivedCall__Outputs {
    return new OnERC1155BatchReceivedCall__Outputs(this);
  }
}

export class OnERC1155BatchReceivedCall__Inputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get value3(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155BatchReceivedCall__Outputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC1155ReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155ReceivedCall__Inputs {
    return new OnERC1155ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155ReceivedCall__Outputs {
    return new OnERC1155ReceivedCall__Outputs(this);
  }
}

export class OnERC1155ReceivedCall__Inputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155ReceivedCall__Outputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OpenCall extends ethereum.Call {
  get inputs(): OpenCall__Inputs {
    return new OpenCall__Inputs(this);
  }

  get outputs(): OpenCall__Outputs {
    return new OpenCall__Outputs(this);
  }
}

export class OpenCall__Inputs {
  _call: OpenCall;

  constructor(call: OpenCall) {
    this._call = call;
  }
}

export class OpenCall__Outputs {
  _call: OpenCall;

  constructor(call: OpenCall) {
    this._call = call;
  }
}

export class RedeemCall extends ethereum.Call {
  get inputs(): RedeemCall__Inputs {
    return new RedeemCall__Inputs(this);
  }

  get outputs(): RedeemCall__Outputs {
    return new RedeemCall__Outputs(this);
  }
}

export class RedeemCall__Inputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }
}

export class RedeemCall__Outputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }
}

export class RedemptionTimeCall extends ethereum.Call {
  get inputs(): RedemptionTimeCall__Inputs {
    return new RedemptionTimeCall__Inputs(this);
  }

  get outputs(): RedemptionTimeCall__Outputs {
    return new RedemptionTimeCall__Outputs(this);
  }
}

export class RedemptionTimeCall__Inputs {
  _call: RedemptionTimeCall;

  constructor(call: RedemptionTimeCall) {
    this._call = call;
  }
}

export class RedemptionTimeCall__Outputs {
  _call: RedemptionTimeCall;

  constructor(call: RedemptionTimeCall) {
    this._call = call;
  }
}

export class SetProbabilityDistributionCall extends ethereum.Call {
  get inputs(): SetProbabilityDistributionCall__Inputs {
    return new SetProbabilityDistributionCall__Inputs(this);
  }

  get outputs(): SetProbabilityDistributionCall__Outputs {
    return new SetProbabilityDistributionCall__Outputs(this);
  }
}

export class SetProbabilityDistributionCall__Inputs {
  _call: SetProbabilityDistributionCall;

  constructor(call: SetProbabilityDistributionCall) {
    this._call = call;
  }

  get distribution(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get justification(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class SetProbabilityDistributionCall__Outputs {
  _call: SetProbabilityDistributionCall;

  constructor(call: SetProbabilityDistributionCall) {
    this._call = call;
  }
}
