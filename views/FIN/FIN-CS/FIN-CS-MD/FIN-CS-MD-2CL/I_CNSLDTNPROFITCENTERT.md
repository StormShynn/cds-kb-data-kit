---
name: I_CNSLDTNPROFITCENTERT
description: "CNSLDTNProfit CenterT"
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
# I_CNSLDTNPROFITCENTERT

**CNSLDTNProfit CenterT**

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
| `ProfitCenter` | ✓ | |  | `cast( _Source.ProfitCenter as fincs_profitcenter preserving type )` |  |  |
| `ControllingArea` | ✓ | |  | `cast( _Source.ControllingArea as fincs_controllingarea preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |  |  |
| `AdditionalMasterDataText` |  | |  | `cast( _Source.ProfitCenterName as fincs_description_text_20 preserving type )` |  |  |
| `ProfitCenterName` |  | |  | `cast( _Source.ProfitCenterName as fincs_profitcenter_name preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | |  | `cast( _Source.CnsldtnIsAdditionalMasterData as fincs_isadditionalmasterdata preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_ControllingArea` | `I_CnsldtnControllingArea` | [1..1] |
| `_ProfitCenter` | `I_CnsldtnProfitCenter` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSPROFITCENTERT'
  }
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L},
  representativeKey: 'ProfitCenter',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnProfitCenterText'                        
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Combined Profit Center - Text'

define view I_CnsldtnProfitCenterT
  as select distinct from P_CnsldtnProfitCenterT as _Source

    inner join            I_CnsldtnProfitCenter  as _Main on  _Main.ControllingArea               = _Source.ControllingArea
                                                          and _Main.ProfitCenter                  = _Source.ProfitCenter
                                                          and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language               as _Language        on  $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnControllingArea as _ControllingArea on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [1..1] to I_CnsldtnProfitCenter    as _ProfitCenter    on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                     and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
{

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key _Source.Language,

      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnProfitCenterVH',
          element: 'ProfitCenter'},
        additionalBinding: [{ localElement: 'ControllingArea', element: 'ControllingArea', usage: #FILTER_AND_RESULT }]
      }]
  key cast( _Source.ProfitCenter as fincs_profitcenter preserving type )                            as ProfitCenter,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnControllingAreaVH',
          element: 'ControllingArea'
        }
      }]
  key cast( _Source.ControllingArea as fincs_controllingarea preserving type )                      as ControllingArea,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )          as AdditionalMasterDataSource,

      @Semantics.text
      @API.element: {releaseState: #DEPRECATED, successor: 'ProfitCenterName'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'ProfitCenterName' }
      cast( _Source.ProfitCenterName as fincs_description_text_20 preserving type )                 as AdditionalMasterDataText,

      @Semantics.text
      cast( _Source.ProfitCenterName as fincs_profitcenter_name preserving type )                   as ProfitCenterName,

      cast( _Source.CnsldtnIsAdditionalMasterData as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _ControllingArea,
      _ProfitCenter
}
where
  _Source.Language is not null
```
