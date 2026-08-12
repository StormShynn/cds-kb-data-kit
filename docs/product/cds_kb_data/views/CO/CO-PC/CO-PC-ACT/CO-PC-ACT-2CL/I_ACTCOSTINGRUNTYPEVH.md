---
name: I_ACTCOSTINGRUNTYPEVH
description: "Actcostingruntypevh"
app_component: CO-PC-ACT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
