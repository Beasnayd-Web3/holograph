import {narrow} from 'abitype'

export default narrow([
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'fromChain',
        type: 'uint32',
      },
      {
        internalType: 'bytes',
        name: 'payload',
        type: 'bytes',
      },
    ],
    name: 'bridgeIn',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'toChain',
        type: 'uint32',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'payload',
        type: 'bytes',
      },
    ],
    name: 'bridgeOut',
    outputs: [
      {
        internalType: 'bytes4',
        name: 'selector',
        type: 'bytes4',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'eventId',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'eventData',
        type: 'bytes',
      },
    ],
    name: 'sourceEmit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'eventData',
        type: 'bytes',
      },
    ],
    name: 'sourceEmit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'eventId',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'topic1',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'topic2',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'topic3',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'eventData',
        type: 'bytes',
      },
    ],
    name: 'sourceEmit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'eventId',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'topic1',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'eventData',
        type: 'bytes',
      },
    ],
    name: 'sourceEmit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'eventId',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'topic1',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 'topic2',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'eventData',
        type: 'bytes',
      },
    ],
    name: 'sourceEmit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceID',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
])
