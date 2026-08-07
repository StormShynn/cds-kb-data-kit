---
name: I_CNSLDTNFINMANAGEMENTAREA
description: Cnsldtnfinmanagementarea
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
# I_CNSLDTNFINMANAGEMENTAREA

**Cnsldtnfinmanagementarea**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  | `cast( _Source.FinancialManagementArea as fincs_financialmanagementarea preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | |  | `cast( max ( _Source.CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnFinManagementAreaT` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
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
    serviceQuality: #C,
    sizeCategory: #M
  },
  representativeKey: 'FinancialManagementArea',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnFinancialManagementArea'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Financial Management Area'
define view entity I_CnsldtnFinManagementArea
  as select from P_CnsldtnFinManagementArea as _Source

  //  prevent exposure of result set in case the assigned business switch is disabled
    inner join   I_CnsldtnBusinessSwitch    as _BusinessSwitch on  _BusinessSwitch.ConsolidationBusinessSwitch    = 'FINCS_ENABLE_PS_FIELDS'
                                                               and _BusinessSwitch.CnsldtnBusinessSwitchIsEnabled = 'X'

  association [0..*] to I_CnsldtnFinManagementAreaT as _Text on $projection.FinancialManagementArea = _Text.FinancialManagementArea
{

      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnFinManagementAreaVH',
          element: 'FinancialManagementArea'
        }
      }]
  key cast( _Source.FinancialManagementArea as fincs_financialmanagementarea preserving type )              as FinancialManagementArea,

      cast( max ( _Source.CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,

      /* associations */
      _Text
}
where
  _Source.FinancialManagementArea is not initial //required to avoid access to corrupt database entries
group by
  _Source.FinancialManagementArea
```
