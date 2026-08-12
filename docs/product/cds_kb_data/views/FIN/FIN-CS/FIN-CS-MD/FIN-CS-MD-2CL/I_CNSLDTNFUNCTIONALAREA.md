---
name: I_CNSLDTNFUNCTIONALAREA
description: "Cnsldtnfunctionalarea"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_CNSLDTNFUNCTIONALAREA

**Cnsldtnfunctionalarea**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalArea` | ✓ | |  | `cast( FunctionalArea as fincs_functionalarea preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | |  | `cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )` |  |  |
| `CreationDateTime` |  | |  | `cast( min ( CreationDateTime ) as fincs_creationdatetime preserving type )` |  |  |
| `_Text` | | ✓ | | | | |
| `_FuncnlAreaHierNode` | | ✓ | | | | |
| `_MDSource` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnFunctionalAreaT` | [0..*] |
| `_FuncnlAreaHierNode` | `I_CnsldtnFuncnlAreaHierNode` | [0..*] |
| `_MDSource` | `I_CnsldtnMDSource` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSFUNCAREA',
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
  allowExtensions: true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M},
  representativeKey: 'FunctionalArea',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnFunctionalArea'
  }
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Combined Functional Area'

// C1 Released for Cloud Dev since Jan 2022, C1 Released for Key User Apps since Dec 2019 (?)
// expose only additional master data entity in case of homonymous non-additional master data entity existence

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnFunctionalArea
  as select distinct from P_CnsldtnFunctionalArea

  association [0..*] to I_CnsldtnFunctionalAreaT    as _Text               on $projection.FunctionalArea = _Text.FunctionalArea

  association [0..*] to I_CnsldtnFuncnlAreaHierNode as _FuncnlAreaHierNode on $projection.FunctionalArea = _FuncnlAreaHierNode.FunctionalArea

  association [1..1] to I_CnsldtnMDSource           as _MDSource           on $projection.AdditionalMasterDataSource = _MDSource.AdditionalMasterDataSource
{

      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_FuncnlAreaHierNode'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnFunctionalAreaVH',
          element: 'FunctionalArea'
        }
      }]
  key cast( FunctionalArea as fincs_functionalarea preserving type )                                as FunctionalArea,

      @ObjectModel.foreignKey.association: '_MDSource'
      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )          as AdditionalMasterDataSource,

      cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,

      @Semantics.systemDateTime.createdAt
      cast( min ( CreationDateTime ) as fincs_creationdatetime preserving type )                    as CreationDateTime,


      /* associations */
      _Text,
      _FuncnlAreaHierNode,
      _MDSource
}
where
  FunctionalArea is not initial //required to avoid access to corrupt database entries
group by
  FunctionalArea
```
