---
name: I_CNSLDTNPROFITCENTER
description: CNSLDTNProfit Center
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
  - profit-center
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:ProfitCenter
---
# I_CNSLDTNPROFITCENTER

**CNSLDTNProfit Center**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProfitCenter` | ✓ | |  | `cast( ProfitCenter as fincs_profitcenter preserving type )` |  |  |
| `ControllingArea` | ✓ | |  | `cast( ControllingArea as fincs_controllingarea preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | |  | `cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )` |  |  |
| `CreationDateTime` |  | |  | `cast( min ( CreationDateTime ) as fincs_creationdatetime preserving type )` |  |  |
| `_ControllingArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_TmprlNde` | | ✓ | | | | |
| `_ProfitCenterHierNode` | | ✓ | | | | |
| `_MDSource` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_CnsldtnControllingArea` | [1..1] |
| `_Text` | `I_CnsldtnProfitCenterT` | [0..*] |
| `_TmprlNde` | `I_CnsldtnPrftCtrTNHierNode` | [0..*] |
| `_ProfitCenterHierNode` | `I_CnsldtnProfitCenterHierNode` | [0..*] |
| `_MDSource` | `I_CnsldtnMDSource` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  viewEnhancementCategory: [ #PROJECTION_LIST, #GROUP_BY ]
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  technicalName: 'ICSPROFITCENTER',
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M},
  representativeKey: 'ProfitCenter',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnProfitCenter'
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Combined Profit Center'

// expose only additional master data entity in case of homonymous non-additional master data entity existence

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CnsldtnProfitCenter
  as select distinct from P_CnsldtnProfitCenter

  association [1..1] to I_CnsldtnControllingArea      as _ControllingArea      on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..*] to I_CnsldtnProfitCenterT        as _Text                 on  $projection.ProfitCenter    = _Text.ProfitCenter
                                                                               and $projection.ControllingArea = _Text.ControllingArea

  association [0..*] to I_CnsldtnPrftCtrTNHierNode    as _TmprlNde             on  $projection.ProfitCenter    = _TmprlNde.ProfitCenter
                                                                               and $projection.ControllingArea = _TmprlNde.ControllingArea

  association [0..*] to I_CnsldtnProfitCenterHierNode as _ProfitCenterHierNode on  $projection.ControllingArea = _ProfitCenterHierNode.ControllingArea
                                                                               and $projection.ProfitCenter    = _ProfitCenterHierNode.ProfitCenter

  association [1..1] to I_CnsldtnMDSource             as _MDSource             on  $projection.AdditionalMasterDataSource = _MDSource.AdditionalMasterDataSource

{

      @ObjectModel:{
        text.association: '_Text',
        hierarchy.association: '_ProfitCenterHierNode' }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnProfitCenterVH',
          element: 'ProfitCenter'},
        additionalBinding: [{ localElement: 'ControllingArea', element: 'ControllingArea', usage: #FILTER_AND_RESULT }]
      }]
  key cast( ProfitCenter as fincs_profitcenter preserving type )                                    as ProfitCenter,

      @ObjectModel: {
        sapObjectNodeTypeReference: 'CnsldtnControllingArea',
        foreignKey.association: '_ControllingArea' }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnControllingAreaVH',
          element: 'ControllingArea'
        }
      }]
  key cast( ControllingArea as fincs_controllingarea preserving type )                              as ControllingArea,

      @ObjectModel.foreignKey.association: '_MDSource'
      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )          as AdditionalMasterDataSource,

      cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,

      @Semantics.systemDateTime.createdAt
      cast( min ( CreationDateTime ) as fincs_creationdatetime preserving type )                    as CreationDateTime,


      /* associations */
      _ControllingArea,
      _Text,
      _ProfitCenterHierNode,
      _MDSource,
      @ObjectModel.association.toHierarchy: true
      _TmprlNde
}
where
      ControllingArea is not initial //required to avoid access to corrupt database entries
  and ProfitCenter    is not initial
group by
  ControllingArea,
  ProfitCenter
```
