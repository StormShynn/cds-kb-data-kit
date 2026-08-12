---
name: I_ACTCOSTINGRUNTYPEVH
description: "Actcostingruntypevh"
app_component: CO-PC-ACT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-ACT
  - interface-view
  - value-help
  - component:CO-PC-ACT-2CL
  - lob:Controlling
---
# I_ACTCOSTINGRUNTYPEVH

**Actcostingruntypevh**

| Property | Value |
|---|---|
| App Component | `CO-PC-ACT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostingRunType` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  | `cast( FiscalYear as fis_gjahr_no_conv preserving type )` |  |  |
| `FiscalPeriod` | ✓ | |  | `cast( FiscalPeriod as fins_fiscalperiod preserving type )` |  |  |
| `CostingRunTypeName` |  | |  |  |  |  |
| `CostingRunReferenceType` |  | |  |  |  |  |
| `CostingRunReferenceTypeName` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'CostingRunType'
@EndUserText.label: 'Costing Run Type in Actual Costing'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
                usageType: {
                            serviceQuality: #C,
                            sizeCategory: #M,
                            dataClass: #MIXED
                           },
                modelingPattern: #VALUE_HELP_PROVIDER,
                supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #VALUE_HELP_PROVIDER]
              }
@VDM.viewType: #COMPOSITE
@ObjectModel.dataCategory:#VALUE_HELP
@Search.searchable: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_ActCostingRunTypeVH
  as select distinct from P_ActCostingRunType

{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @UI.lineItem: [{ position: 10 }]
      @ObjectModel.text.element: ['CostingRunTypeName']
  key CostingRunType,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #MEDIUM
      @UI.lineItem: [{ position: 20 }]
  key cast( FiscalYear as fis_gjahr_no_conv preserving type )   as FiscalYear,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #MEDIUM
      @UI.lineItem: [{ position: 30 }]
  key cast( FiscalPeriod as fins_fiscalperiod preserving type ) as FiscalPeriod,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #MEDIUM
      @UI.lineItem: [{ position: 40 }]
      @Semantics.text: true
      CostingRunTypeName,

      @Search.defaultSearchElement: false
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #MEDIUM
      @UI.lineItem: [{ position: 50 }]
      CostingRunReferenceType,

      @Search.defaultSearchElement: false
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #MEDIUM
      @UI.lineItem: [{ position: 40 }]
      CostingRunReferenceTypeName

}
```
