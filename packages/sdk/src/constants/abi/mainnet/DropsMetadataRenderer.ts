import {narrow} from 'abitype'

export default narrow([
  {
    inputs: [],
    name: 'Access_OnlyAdmin',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MetadataFrozen',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'metadataBase',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'metadataExtension',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'contractURI',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'freezeAt',
        type: 'uint256',
      },
    ],
    name: 'MetadataUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'provenanceHash',
        type: 'bytes32',
      },
    ],
    name: 'ProvenanceHashUpdated',
    type: 'event',
  },
  {
    inputs: [],
    name: 'contractURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'init',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'initializeWithData',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'metadataBaseByContract',
    outputs: [
      {
        internalType: 'string',
        name: 'base',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'extension',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'contractURI',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'freezeAt',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'provenanceHashes',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'baseUri',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'newContractUri',
        type: 'string',
      },
    ],
    name: 'updateMetadataBase',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'metadataBase',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'metadataExtension',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'newContractURI',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'freezeAt',
        type: 'uint256',
      },
    ],
    name: 'updateMetadataBaseWithDetails',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'provenanceHash',
        type: 'bytes32',
      },
    ],
    name: 'updateProvenanceHash',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
])
