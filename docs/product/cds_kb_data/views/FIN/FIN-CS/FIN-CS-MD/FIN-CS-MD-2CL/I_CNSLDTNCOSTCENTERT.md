---
name: I_CNSLDTNCOSTCENTERT
description: "CNSLDTNCost CenterT"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - cost-center
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:CostCenter
---
# I_CNSLDTNCOSTCENTERT

**CNSLDTNCost CenterT**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_Source` | `Language` |  |  |
| `CostCenter` | ✓ | |  | `cast( _Source.CostCenter as fincs_costcenter preserving type )` |  |  |
| `ControllingArea` | ✓ | |  | `cast( _Source.ControllingArea as fincs_controllingarea preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |  |  |
| `AdditionalMasterDataText` |  | |  | `cast( _Source.CostCenterName as fincs_description_text_20 preserving type )` |  |  |
| `CostCenterName` |  | |  | `cast( _Source.CostCenterName as fincs_costcentername preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_ControllingArea` | `I_CnsldtnControllingArea` | [1..1] |
| `_CostCenter` | `I_CnsldtnCostCenter` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCOSTCENTERT',
  compiler.compareFilter: true
  }
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L},
  dataCategory: #TEXT,
  representativeKey: 'CostCenter',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnCostCenterText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Combined Cost Center - Txt'

define view I_CnsldtnCostCenterT
  as select distinct from P_CnsldtnCostCenterT as _Source

    inner join            I_CnsldtnCostCenter  as _Main on  _Main.ControllingArea               = _Source.ControllingArea
                                                        and _Main.CostCenter                    = _Source.CostCenter
                                                        and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language               as _Language        on  $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnControllingArea as _ControllingArea on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [1..1] to I_CnsldtnCostCenter      as _CostCenter      on  $projection.CostCenter      = _CostCenter.CostCenter
                                                                     and $projection.ControllingArea = _CostCenter.ControllingArea
{

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key _Source.Language,

      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnCostCenterVH',
          element: 'CostCenter' },
        additionalBinding: [{ localElement: 'ControllingArea', element: 'ControllingArea', usage: #FILTER_AND_RESULT }]
      }]
  key cast( _Source.CostCenter as fincs_costcenter preserving type )                       as CostCenter,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnControllingAreaVH',
          element: 'ControllingArea'
        }
      }]
  key cast( _Source.ControllingArea as fincs_controllingarea preserving type )             as ControllingArea,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type ) as AdditionalMasterDataSource,

      @Semantics.text
      @API.element: {releaseState: #DEPRECATED, successor: 'CostCenterName'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CostCenterName' }
      cast( _Source.CostCenterName as fincs_description_text_20 preserving type )          as AdditionalMasterDataText,

      @Semantics.text
      cast( _Source.CostCenterName as fincs_costcentername preserving type )               as CostCenterName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _ControllingArea,
      _CostCenter
}
where
  _Source.Language is not null
```
