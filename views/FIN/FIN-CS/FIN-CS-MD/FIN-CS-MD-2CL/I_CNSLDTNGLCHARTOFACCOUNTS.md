---
name: I_CNSLDTNGLCHARTOFACCOUNTS
description: Cnsldtnglchartofaccounts
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
# I_CNSLDTNGLCHARTOFACCOUNTS

**Cnsldtnglchartofaccounts**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ChartOfAccounts` | `cast( ChartOfAccounts as fincs_chartofaccounts preserving type )` |
| `AdditionalMasterDataSource` | `cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )` |
| `CnsldtnIsAdditionalMasterData` | `cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )` |
| `_Text` | *Association* |
| `_MDSource` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnGLChartOfAccountsT` | [0..*] |
| `_MDSource` | `I_CnsldtnMDSource` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSGLCHOFAC',
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
@Metadata: {
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M },
  representativeKey: 'ChartOfAccounts',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnGLChartOfAccounts'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cnsldtn Combined G/L Chart Of Accounts'

// Fully C1 Released in CE2208
// expose only additional master data entity in case of homonymous non-additional master data entity existence

define view I_CnsldtnGLChartOfAccounts
  as select distinct from P_CnsldtnGLChartOfAccounts

  association [0..*] to I_CnsldtnGLChartOfAccountsT as _Text     on $projection.ChartOfAccounts = _Text.ChartOfAccounts

  association [1..1] to I_CnsldtnMDSource           as _MDSource on $projection.AdditionalMasterDataSource = _MDSource.AdditionalMasterDataSource

{

      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGLChartOfAccountsVH',
          element: 'ChartOfAccounts'
        }
      }]
  key cast( ChartOfAccounts as fincs_chartofaccounts preserving type )                              as ChartOfAccounts,

      @ObjectModel.foreignKey.association: '_MDSource'
      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )          as AdditionalMasterDataSource,

      cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,


      /* associations */
      _MDSource,
      _Text
}
where
  ChartOfAccounts is not initial //required to avoid access to corrupt database entries
group by
  ChartOfAccounts
```
