---
name: I_CNSLDTNPROFITCTRFORELIMT_2
description: Cnsldtnprofitctrforelimt 2
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
# I_CNSLDTNPROFITCTRFORELIMT_2

**Cnsldtnprofitctrforelimt 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  |  |
| `ControllingArea` | ✓ | |  |  |
| `ProfitCenter` |  | |  | `}] key ProfitCenter` |
| `ProfitCenterName` |  | |  | `cast( _Source.ProfitCenterName as fincs_elim_profitcentername preserving type )` |
| `_ControllingArea` | | ✓ | | |
| `_ProfitCenterForElim` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_CnsldtnControllingArea` | [1..1] |
| `_ProfitCenterForElim` | `I_CnsldtnProfitCenterForElim` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICCPCFORELIMT2'
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M
  },
  representativeKey: 'ProfitCenter',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE,
                           #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnProfitCenterForElimText'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Profit Center for Elim - Text'
define view entity I_CnsldtnProfitCtrForElimT_2
  as select from P_CnsldtnPrftCtrForElimT as _Source

  association [1..1] to I_CnsldtnControllingArea     as _ControllingArea     on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [1..1] to I_CnsldtnProfitCenterForElim as _ProfitCenterForElim on  $projection.ControllingArea = _ProfitCenterForElim.ControllingArea
                                                                             and $projection.ProfitCenter    = _ProfitCenterForElim.ProfitCenter
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key Language,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnControllingAreaVH',
          element: 'ControllingArea'
        }
      }]
  key ControllingArea,

      @ObjectModel.foreignKey.association: '_ProfitCenterForElim'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnProfitCenterForElimVH',
          element: 'ProfitCenter'},
        additionalBinding: [{ localElement: 'ControllingArea', element: 'ControllingArea', usage: #FILTER_AND_RESULT }]
      }]
  key ProfitCenter,

      @Semantics.text
      cast( _Source.ProfitCenterName as fincs_elim_profitcentername preserving type ) as ProfitCenterName,


      /* associations */
      _ControllingArea,
      _ProfitCenterForElim,
      _Language
}
```
