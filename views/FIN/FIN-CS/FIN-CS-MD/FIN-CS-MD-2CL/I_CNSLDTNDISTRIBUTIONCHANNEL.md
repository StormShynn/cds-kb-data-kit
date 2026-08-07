---
name: I_CNSLDTNDISTRIBUTIONCHANNEL
description: "Cnsldtndistributionchannel"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNDISTRIBUTIONCHANNEL

**Cnsldtndistributionchannel**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DistributionChannel` | ✓ | |  | `cast( DistributionChannel as fincs_distributionchannel preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | |  | `cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )` |  |  |
| `_Text` | | ✓ | | | | |
| `_MDSource` | | ✓ | | | | |
| `_HierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnDistributionChannelT` | [0..*] |
| `_MDSource` | `I_CnsldtnMDSource` | [1..1] |
| `_HierarchyNode` | `I_CnsldtnDistrChannelHierNode` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSDISTRICHL',
  compiler.compareFilter: true,
  viewEnhancementCategory: [ #PROJECTION_LIST, #GROUP_BY ]
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S},
  representativeKey: 'DistributionChannel',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnDistributionChannel'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cnsldtn Combined Distribution Channel'

// expose only additional master data entity in case of homonymous non-additional master data entity existence

define view I_CnsldtnDistributionChannel
  as select distinct from P_CnsldtnDistributionChannel

  association [0..*] to I_CnsldtnDistributionChannelT as _Text          on $projection.DistributionChannel = _Text.DistributionChannel

  association [1..1] to I_CnsldtnMDSource             as _MDSource      on $projection.AdditionalMasterDataSource = _MDSource.AdditionalMasterDataSource

  association [0..*] to I_CnsldtnDistrChannelHierNode as _HierarchyNode on $projection.DistributionChannel = _HierarchyNode.DistributionChannel


{

      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_HierarchyNode'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnDistributionChannelVH',
          element: 'DistributionChannel'
        }
      }]
  key cast( DistributionChannel as fincs_distributionchannel preserving type )                      as DistributionChannel,

      @ObjectModel.foreignKey.association: '_MDSource'
      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )          as AdditionalMasterDataSource,

      cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,


      /* associations */
      _MDSource,
      _Text,  
      _HierarchyNode     
}
where
  DistributionChannel is not initial //required to avoid access to corrupt database entries
group by
  DistributionChannel;
```
