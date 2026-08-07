---
name: I_CNSLDTNBREAKDOWNCATEGORY
description: Cnsldtnbreakdowncategory
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
# I_CNSLDTNBREAKDOWNCATEGORY

**Cnsldtnbreakdowncategory**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  | `cast(ConsolidationChartOfAccounts as fincs_conschartofaccounts preserving type )` |
| `ConsolidationBreakdownCategory` |  | |  | `}] key cast(ConsolidationBreakdownCategory as fincs_breakdowncategory preserving type )` |
| `_Text` | | ✓ | | |
| `_BreakdownBySubassignment` | | ✓ | | |
| `_CnsldtnChartOfAccounts` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnBreakdownCategoryT` | [0..*] |
| `_BreakdownBySubassignment` | `I_CnsldtnBrkdwnBySubassgmt` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSBRKDWNCAT',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #M },
  representativeKey: 'ConsolidationBreakdownCategory',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'ConsolidationBreakdownCategory'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Breakdown Category'

define view I_CnsldtnBreakdownCategory
  as select from P_CnsldtnBreakdownCategory

  association [0..*] to I_CnsldtnBreakdownCategoryT as _Text                     on  $projection.ConsolidationChartOfAccounts   = _Text.ConsolidationChartOfAccounts
                                                                                 and $projection.ConsolidationBreakdownCategory = _Text.ConsolidationBreakdownCategory

  association [0..*] to I_CnsldtnBrkdwnBySubassgmt  as _BreakdownBySubassignment on  $projection.ConsolidationChartOfAccounts   = _BreakdownBySubassignment.ConsolidationChartOfAccounts
                                                                                 and $projection.ConsolidationBreakdownCategory = _BreakdownBySubassignment.ConsolidationBreakdownCategory

{
       @ObjectModel: { foreignKey.association: '_CnsldtnChartOfAccounts' }
       @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnChartOfAccountsVH', element: 'ConsolidationChartOfAccounts' } }]
  key  cast(ConsolidationChartOfAccounts as fincs_conschartofaccounts preserving type ) as ConsolidationChartOfAccounts,

       @ObjectModel.text.association: '_Text'
       @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnBreakdownCategoryVH', element: 'ConsolidationBreakdownCategory' },
         additionalBinding: [{ localElement: 'ConsolidationChartOfAccounts', element: 'ConsolidationChartOfAccounts', usage: #FILTER_AND_RESULT }]
       }]
       @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key  cast(ConsolidationBreakdownCategory as fincs_breakdowncategory preserving type ) as ConsolidationBreakdownCategory,


       _CnsldtnChartOfAccounts,
       _Text,
       _BreakdownBySubassignment
};
```
