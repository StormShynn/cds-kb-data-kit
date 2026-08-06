---
name: I_FUNDSTDVH
description: Fundstdvh
app_component: PSM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - interface-view
  - value-help
  - standard-value-help
  - component:PSM
  - lob:Other
---
# I_FUNDSTDVH

**Fundstdvh**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Fund` | `Fund` |
| key `FinancialManagementArea` | `FinancialManagementArea` |
| `FundName` | `_Text[1:Language = $session.system_language].FundName` |
| `FundDescription` | `_Text[1:Language = $session.system_language].FundDescription` |
| `FundAuthznGrp` | `FundAuthznGrp` |
| `FundFinMgmtAreaForAuthzn` | `FundFinMgmtAreaForAuthzn` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `FundPeriodicity` | `FundPeriodicity` |
| `FundPeriodicityText` | `_FundPeriodicity._Text[1:Language = $session.system_language].FundPeriodicityText` |
| `_FinMgmtArea` | *Association* |
| `_Text` | *Association* |

## Source Code

```abap
//GENERATED:003:GlBfhyFV7jU}e25o35YSlG
@AbapCatalog.sqlViewName: 'IFU_VH4'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'Fund'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.text.element: ['FundName']


@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #VALUE_HELP_PROVIDER]

@Search.searchable: true
@Consumption.ranked: true

@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true



@EndUserText.label: 'Fund'
define view I_FundStdVH
  as select from I_Fund
  //  association[0..*] to I_FundPeriodicityText as _PeriodicityText on $projection.FundPeriodicity = _PeriodicityText.FundPeriodicity

{
      // changes to include default search help
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @ObjectModel.text.element: ['FundName']
  key Fund,

      //    @feature: 'BF:PSMOP_BUDGET_ACCOUNTING_CONTRO'
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_FinMgmtAreaStdVH',
                    element: 'FinancialManagementArea' } }]
      @ObjectModel.foreignKey.association: '_FinMgmtArea'
  key FinancialManagementArea,

      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      _Text[1:Language = $session.system_language].FundName                             as FundName,

      //text added for fund to include it in view IFU_VH4, so that text is there in SAP GUI fund F4 help as well
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      _Text[1:Language = $session.system_language].FundDescription                      as FundDescription,
      @Consumption.hidden: true
      FundAuthznGrp,

      @Consumption.hidden: true
      FundFinMgmtAreaForAuthzn,

      @Semantics.businessDate.from: true
      @Consumption.filter.multipleSelections: false
      @Consumption.filter.selectionType: #SINGLE
      ValidityStartDate,

      @Semantics.businessDate.to: true
      @Consumption.filter.multipleSelections: false
      @Consumption.filter.selectionType: #SINGLE
      ValidityEndDate,

      @Consumption.hidden: true
      @Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL' //Cloud only
      FundPeriodicity,

      //@Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.7 }
      //      @Consumption.valueHelpDefinition.entity: {name: 'I_GranteeMgmtFundType', element: 'GranteeMgmtFundType'}  cannot use until I_GranteeMgmtFundType is C1 released
      _FundType._GranteeMgmtFundType._Text[1:Language = $session.system_language].GranteeMgmtFundTypeName,

      @Consumption.hidden: true
      //@Analytics.hidden: true
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      _FundType._GranteeMgmtFundType._Text[1:Language = $session.system_language].GrnteMgmtFundTypeNameSearchTxt, //GranteeMgmtFundTypeName itself is not searchable (Substring)

      //text added for periodicity instead of periodicity itself //fuzzy search added
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      @Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL' //Cloud only
      _FundPeriodicity._Text[1:Language = $session.system_language].FundPeriodicityText as FundPeriodicityText,

      @Consumption.hidden: true
      _FinMgmtArea,

      _Text

      //   _PeriodicityText
}
```
