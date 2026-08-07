---
name: I_CNSLDTNBRKDWNBYSUBASSGMT
description: Cnsldtnbrkdwnbysubassgmt
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
# I_CNSLDTNBRKDWNBYSUBASSGMT

**Cnsldtnbrkdwnbysubassgmt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  | `itclg` |  |  |
| `ConsolidationBreakdownCategory` | ✓ | |  | `cast(tf103a.itgrp as fincs_breakdowncategory preserving type )` |  |  |
| `CnsldtnSubassignment` | ✓ | |  | `cast( case tf103a.fieldname when 'RTCUR' then 'TransactionCurrency' when 'RBUPTR' then 'PartnerConsolidationUnit' when 'SITYP' then 'SubItemCategory' when 'SUBIT' then 'SubItem' when 'RUNIT' then 'BaseUnit' else '' end as fincs_md_subassignment )` |  |  |
| `ConsolidationBreakdownType` |  | |  | `cast(tf103a.breakdown as fincs_breakdowntype preserving type )` |  |  |
| `CnsldtnFixedValueOfSubassgmt` |  | |  | `cast(tf103a.value as fincs_fixedvalueofsubassgmt preserving type )` |  |  |
| `CnsldtnFixedValOfSubassgmtExt` |  | |  | `cast(case when tf103a.fieldname = 'RUNIT' and tf103a.value <> '' then _UnitOfMeasure.UnitOfMeasure_E else tf103a.value end as fincs_fxdvalofsubssgm_ext preserving type )` |  |  |
| `ConsolidationSelection` |  | |  | `cast(tf103a.selnm_max as fincs_consolidationselection preserving type )` |  |  |
| `_CnsldtnChartOfAccounts` | | ✓ | | | | |
| `_Subassignment` | | ✓ | | | | |
| `_BreakdownType` | | ✓ | | | | |
| `_BreakdownCategory` | | ✓ | | | | |
| `_CnsldtnSelection` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |
| `_Subassignment` | `I_CnsldtnSubassignment` | [1..1] |
| `_BreakdownType` | `I_CnsldtnBreakdownType` | [1..1] |
| `_BreakdownCategory` | `I_CnsldtnBreakdownCategory` | [1..1] |
| `_CnsldtnSelection` | `I_CnsldtnSelection` | [0..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'IBRKDWNSUBASSG',
  compiler.compareFilter: true
  }
@Analytics: {
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
    sizeCategory: #M},
  representativeKey: 'ConsolidationBreakdownCategory',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'ConsolidationBrkdwnBySubassgmt'
  }
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Breakdown By Subassignment'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnBrkdwnBySubassgmt
  as select from           tf103a

    left outer to one join I_UnitOfMeasure as _UnitOfMeasure on  _UnitOfMeasure.UnitOfMeasure = tf103a.value
                                                             and tf103a.fieldname             = 'RUNIT'

  association [1..1] to I_CnsldtnChartOfAccounts   as _CnsldtnChartOfAccounts on  $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts

  association [1..1] to I_CnsldtnSubassignment     as _Subassignment          on  $projection.CnsldtnSubassignment = _Subassignment.CnsldtnSubassignment

  association [1..1] to I_CnsldtnBreakdownType     as _BreakdownType          on  $projection.ConsolidationBreakdownType = _BreakdownType.ConsolidationBreakdownType

  association [1..1] to I_CnsldtnBreakdownCategory as _BreakdownCategory      on  $projection.ConsolidationChartOfAccounts   = _BreakdownCategory.ConsolidationChartOfAccounts
                                                                              and $projection.ConsolidationBreakdownCategory = _BreakdownCategory.ConsolidationBreakdownCategory

  association [0..1] to I_CnsldtnSelection         as _CnsldtnSelection       on  $projection.ConsolidationSelection = _CnsldtnSelection.ConsolidationSelection

{
      @ObjectModel: { foreignKey.association: '_CnsldtnChartOfAccounts',
                      sapObjectNodeTypeReference: 'ConsolidationChartOfAccounts' }
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnChartOfAccountsVH', element: 'ConsolidationChartOfAccounts' } }]
  key tf103a.itclg                                                            as ConsolidationChartOfAccounts,

      @ObjectModel: {
         foreignKey.association: '_BreakdownCategory',
         sapObjectNodeTypeReference: 'ConsolidationBreakdownCategory' }
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnBreakdownCategoryVH', element: 'ConsolidationBreakdownCategory' },
        additionalBinding: [{ localElement: 'ConsolidationChartOfAccounts', element: 'ConsolidationChartOfAccounts', usage: #FILTER_AND_RESULT }]
      }]
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key cast(tf103a.itgrp as fincs_breakdowncategory preserving type )          as ConsolidationBreakdownCategory,

      @ObjectModel: { foreignKey.association: '_Subassignment',
                      sapObjectNodeTypeReference: 'ConsolidationSubassignment' }
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnSubassignmentVH', element: 'CnsldtnSubassignment' } }]
      // search not possible due to calculation
  key cast( case tf103a.fieldname
    when 'RTCUR' then 'TransactionCurrency'
    when 'RBUPTR' then 'PartnerConsolidationUnit'
    when 'SITYP' then 'SubItemCategory'
    when 'SUBIT' then 'SubItem'
    when 'RUNIT' then 'BaseUnit'
    else ''
  end as fincs_md_subassignment )                                             as CnsldtnSubassignment,

      @ObjectModel: {
        foreignKey.association: '_BreakdownType',
        sapObjectNodeTypeReference: 'ConsolidationBreakdownType' }
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnBreakdownTypeVH', element: 'ConsolidationBreakdownType' } }]
      cast(tf103a.breakdown as fincs_breakdowntype preserving type )          as ConsolidationBreakdownType,

      // unconverted always
      cast(tf103a.value as fincs_fixedvalueofsubassgmt preserving type )      as CnsldtnFixedValueOfSubassgmt,

      // converted in case of BaseUnit, otherwise equal to CnsldtnFixedValueOfSubassgmt
      cast(case
        when tf103a.fieldname = 'RUNIT' and tf103a.value <> '' then
            _UnitOfMeasure.UnitOfMeasure_E
       else tf103a.value
       end as  fincs_fxdvalofsubssgm_ext preserving type )                    as CnsldtnFixedValOfSubassgmtExt,

      @ObjectModel: {
        foreignKey.association: '_CnsldtnSelection',
        sapObjectNodeTypeReference: 'ConsolidationSelection'
      }
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnSelectionVH', element: 'ConsolidationSelection' } }]
      cast(tf103a.selnm_max as fincs_consolidationselection preserving type ) as ConsolidationSelection,


      _Subassignment,
      _BreakdownType,
      _BreakdownCategory,
      _CnsldtnChartOfAccounts,
      _CnsldtnSelection
}
where
  (
       tf103a.fieldname = 'RTCUR'
    or tf103a.fieldname = 'RBUPTR'
    or tf103a.fieldname = 'SITYP'
    or tf103a.fieldname = 'SUBIT'
    or tf103a.fieldname = 'RUNIT'
  );
```
