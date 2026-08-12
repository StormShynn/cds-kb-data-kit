---
name: I_CNSLDTNFINANCIALDATASOURCE
description: "Cnsldtnfinancialdatasource"
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
# I_CNSLDTNFINANCIALDATASOURCE

**Cnsldtnfinancialdatasource**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialDataSource` | ✓ | |  | `cast( _Source.FinancialDataSource as fincs_financialdatasource preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | |  | `cast( max ( _Source.CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnFinancialDataSourceT` | [0..*] |

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
  representativeKey: 'FinancialDataSource',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnFinancialDataSource'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Financial Data Source'

// expose only additional master data entity in case of homonymous non-additional master data entity existence

define view entity I_CnsldtnFinancialDataSource
  as select distinct from P_CnsldtnFinancialDataSource as _Source

  // prevent exposure of result set in case the assigned business switch is disabled
    inner join            I_CnsldtnBusinessSwitch      as _BusinessSwitch on  _BusinessSwitch.ConsolidationBusinessSwitch    = 'FINCS_ENABLE_FS_FIELDS'
                                                                          and _BusinessSwitch.CnsldtnBusinessSwitchIsEnabled = 'X'


  association [0..*] to I_CnsldtnFinancialDataSourceT as _Text on $projection.FinancialDataSource = _Text.FinancialDataSource

{

      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnFinancialDataSourceVH',
          element: 'FinancialDataSource'
        }
      }]
  key cast( _Source.FinancialDataSource as fincs_financialdatasource preserving type )                      as FinancialDataSource,

      cast( max ( _Source.CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,


      /* associations */
      _Text
}
where
  _Source.FinancialDataSource is not initial //required to avoid access to corrupt database entries
group by
  _Source.FinancialDataSource
```
