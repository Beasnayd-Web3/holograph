import {beforeAll, describe, expect, it} from 'vitest'

import {LayerZeroModule} from '../../contracts'
import {Providers, Config} from '../../services'
import {getChainIdsByNetworksConfig} from '../../utils/helpers'
import {REGEX} from '../../utils/transformers'

import {configObject} from './utils'

//NOTICE: the expected values are for the development env
const expectedValues = {
  layerZeroModuleAddress: '0x422cfa9d656588e55fdd5d34a55c89f711f724cc',
  optimismGasPriceOracleAddress: '0xd17C85EE12114bE77Ed0451c42c701fb2aE77C6f',
  bridgeAddress: '0x747f62b66cec00AC36E33CFda63238aEdc8a08d8',
  interfacesAddress: '0xD9E5f062A539B421af91013a401F93677D439ee1',
  operatorAddress: '0xe5CBE551D7717141f430fC1dC3bD71009BedE017',
  lzEndpoint: {
    5: '0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23',
    80001: '0xf69186dfBa60DdB133E91E9A4B5673624293d8F8',
  },
}

describe('Contract class: LayerZeroModule', () => {
  let config: Config
  let providersWrapper: Providers
  let layerZeroModule: LayerZeroModule
  const chainIds = getChainIdsByNetworksConfig(configObject.networks)

  beforeAll(() => {
    config = Config.getInstance(configObject)
    providersWrapper = new Providers(config)
    layerZeroModule = new LayerZeroModule(config)
  })

  it('should be able to get the correct providers', () => {
    const multiProviders = providersWrapper.providers
    expect(multiProviders).toHaveProperty(String(chainIds[0]))
    expect(multiProviders).toHaveProperty(String(chainIds[1]))
  })

  it('should be able to get the LayerZeroModule wrapper class', () => {
    expect(layerZeroModule).toHaveProperty('getAddress')
    expect(layerZeroModule).toHaveProperty('getGasParametersByNetworks')
    expect(layerZeroModule).toHaveProperty('getOptimismGasPriceOracleByNetworks')
    expect(layerZeroModule).toHaveProperty('getLZEndpointByNetworks')
    expect(layerZeroModule).toHaveProperty('getBridgeByNetworks')
    expect(layerZeroModule).toHaveProperty('getInterfacesByNetworks')
    expect(layerZeroModule).toHaveProperty('getOperatorByNetworks')
    expect(layerZeroModule).toHaveProperty('getMessageFee')
    expect(layerZeroModule).toHaveProperty('getHlgFee')
    expect(layerZeroModule).toHaveProperty('send')
    expect(layerZeroModule).toHaveProperty('setInterfaces')
    expect(layerZeroModule).toHaveProperty('setLZEndpoint')
    expect(layerZeroModule).toHaveProperty('setOperator')
    expect(layerZeroModule).toHaveProperty('setOptimismGasPriceOracle')
    expect(layerZeroModule).toHaveProperty('setGasParameters')
  })

  it('should be able to get the correct LayerZeroModule contract address according to the environment and chainId', () => {
    expect(layerZeroModule.getAddress()).toBe(expectedValues.layerZeroModuleAddress)
  })

  it('getGasParametersByNetworks(): should be able to get the correct gas parameters per network', async () => {
    const gasParametersByNetworks = await layerZeroModule.getGasParametersByNetworks()
    expect(Object.keys(gasParametersByNetworks)).toEqual(chainIds.map(String))

    Object.values(gasParametersByNetworks).forEach(gasParameters => {
      expect(gasParameters).toBeInstanceOf(Object)
      expect(gasParameters).toHaveProperty('msgBaseGas')
      expect(gasParameters).toHaveProperty('msgGasPerByte')
      expect(gasParameters).toHaveProperty('jobBaseGas')
      expect(gasParameters).toHaveProperty('jobGasPerByte')
      expect(gasParameters).toHaveProperty('minGasPrice')
      expect(gasParameters).toHaveProperty('maxGasLimit')
    })
  })

  it('getOptimismGasPriceOracleByNetworks(): should be able to get the correct Optimism gas price oracle address per network', async () => {
    const optimismGasPriceOracleByNetworks = await layerZeroModule.getOptimismGasPriceOracleByNetworks()
    expect(Object.keys(optimismGasPriceOracleByNetworks)).toEqual(chainIds.map(String))

    Object.values(optimismGasPriceOracleByNetworks).forEach(optimismGasPriceOracle => {
      expect(optimismGasPriceOracle).toMatch(REGEX.WALLET_ADDRESS)
      expect(optimismGasPriceOracle).toBe(expectedValues.optimismGasPriceOracleAddress)
    })
  })

  it('getLZEndpointByNetworks(): should be able to get the correct LZ endpoint addresses per network', async () => {
    const lzEndpointByNetworks = await layerZeroModule.getLZEndpointByNetworks()
    expect(Object.keys(lzEndpointByNetworks)).toEqual(chainIds.map(String))

    Object.entries(lzEndpointByNetworks).map(([chainId, lzEndpoint]) => {
      expect(lzEndpoint).toMatch(REGEX.WALLET_ADDRESS)
      expect(lzEndpoint).toBe(expectedValues.lzEndpoint[chainId])
    })
  })

  it('getBridgeByNetworks(): should be able to get the correct HolographBridge address per network', async () => {
    const bridgeAddressByNetworks = await layerZeroModule.getBridgeByNetworks()
    expect(Object.keys(bridgeAddressByNetworks)).toEqual(chainIds.map(String))

    Object.values(bridgeAddressByNetworks).forEach(bridgeAddress => {
      expect(bridgeAddress).toMatch(REGEX.WALLET_ADDRESS)
      expect(bridgeAddress).toBe(expectedValues.bridgeAddress)
    })
  })

  it('getInterfacesByNetworks(): should be able to get the correct HolographInterfaces address per network', async () => {
    const interfacesAddressByNetworks = await layerZeroModule.getInterfacesByNetworks()
    expect(Object.keys(interfacesAddressByNetworks)).toEqual(chainIds.map(String))

    Object.values(interfacesAddressByNetworks).forEach(interfacesAddress => {
      expect(interfacesAddress).toMatch(REGEX.WALLET_ADDRESS)
      expect(interfacesAddress).toBe(expectedValues.interfacesAddress)
    })
  })

  it('getOperatorByNetworks(): should be able to get the correct HolographOperator address per network', async () => {
    const operatorAddressByNetworks = await layerZeroModule.getOperatorByNetworks()
    expect(Object.keys(operatorAddressByNetworks)).toEqual(chainIds.map(String))

    Object.values(operatorAddressByNetworks).forEach(operatorAddress => {
      expect(operatorAddress).toMatch(REGEX.WALLET_ADDRESS)
      expect(operatorAddress).toBe(expectedValues.operatorAddress)
    })
  })

  // TODO: Finish the following tests
  it.skip('getMessageFee(): should be able to get the correct message fee', async () => {
    const chainId = chainIds[0]
  })

  it.skip('getHlgFee(): should be able to get the correct HLG fee', async () => {
    const chainId = chainIds[0]
  })

  it.skip('send(): should be able to send a transaction', async () => {
    const chainId = chainIds[0]
  })

  it.skip('setInterfaces(): should be able to set the HolographInterfaces address', async () => {
    const chainId = chainIds[0]
  })

  it.skip('setLZEndpoint(): should be able to set the LZ endpoint address', async () => {
    const chainId = chainIds[0]
  })

  it.skip('setOperator(): should be able to set the HolographOperator address', async () => {
    const chainId = chainIds[0]
  })

  it.skip('setOptimismGasPriceOracle(): should be able to set the Optimism gas price oracle address', async () => {
    const chainId = chainIds[0]
  })

  it.skip('setGasParameters(): should be able to set the gas parameters', async () => {
    const chainId = chainIds[0]
  })
})
