---
name: I_CNSLDTNBREAKDOWNCATEGORYT
description: "Cnsldtnbreakdowncategoryt"
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNBREAKDOWNCATEGORYT

**Cnsldtnbreakdowncategoryt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  |  |  |
| `ConsolidationChartOfAccounts` | ✓ | |  |  |  |  |
| `ConsolidationBreakdownCategory` | ✓ | |  | `cast(ConsolidationBreakdownCategory as fincs_breakdowncategory preserving type )` |  |  |
| `CnsldtnBreakdownCategoryText` |  | |  | `cast(CnsldtnBreakdownCategoryText as fincs_breakdowncategory_text preserving type )` |  |  |
| `_BreakdownCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_CnsldtnChartOfAccounts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BreakdownCategory` | `I_CnsldtnBreakdownCategory` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSBRKDWNCATT',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S},
  dataCategory: #TEXT,
  representativeKey: 'ConsolidationBreakdownCategory',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
  }
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Breakdown Category - Text'

define view I_CnsldtnBreakdownCategoryT
  as select from P_CnsldtnBreakdownCategoryT

  association [1..1] to I_CnsldtnBreakdownCategory as _BreakdownCategory on  $projection.ConsolidationChartOfAccounts   = _BreakdownCategory.ConsolidationChartOfAccounts
                                                                         and $projection.ConsolidationBreakdownCategory = _BreakdownCategory.ConsolidationBreakdownCategory

{
       @ObjectModel.foreignKey.association: '_Language'
       @Semantics.language
  key  Language,

       @ObjectModel.foreignKey.association: '_CnsldtnChartOfAccounts'
       @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnBreakdownCategoryVH', element: 'ConsolidationBreakdownCategory' } }]
  key  ConsolidationChartOfAccounts,

       @ObjectModel.foreignKey.association: '_BreakdownCategory'
       @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnBreakdownCategoryVH', element: 'ConsolidationBreakdownCategory' },
         additionalBinding: [{ localElement: 'ConsolidationChartOfAccounts', element: 'ConsolidationChartOfAccounts' }]
       }]
  key  cast(ConsolidationBreakdownCategory as fincs_breakdowncategory preserving type )    as ConsolidationBreakdownCategory,

       @Semantics.text
       @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
       cast(CnsldtnBreakdownCategoryText as fincs_breakdowncategory_text preserving type ) as CnsldtnBreakdownCategoryText,


       _Language,
       _CnsldtnChartOfAccounts,
       _BreakdownCategory
}
```
