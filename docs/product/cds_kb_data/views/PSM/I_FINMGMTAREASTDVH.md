---
name: I_FINMGMTAREASTDVH
description: "Finmgmtareastdvh"
app_component: PSM
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
  - PSM
  - interface-view
  - value-help
  - standard-value-help
  - component:PSM
  - lob:Other
---
# I_FINMGMTAREASTDVH

**Finmgmtareastdvh**

| Property | Value |
|---|---|
| App Component | `PSM` |
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
| `FinancialManagementArea` | ✓ | |  |  |  |  |
| `FinancialManagementAreaCrcy` |  | |  |  |  |  |
| `FinMgmtAreaFiscalYearVariant` |  | |  |  |  |  |
| `CommitmentItemIsYearDependent` |  | |  |  |  |  |
| `FundsCenterIsTimeDependent` |  | |  |  |  |  |
| `_Currency` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Financial Management Area'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'FinancialManagementArea'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #VALUE_HELP_PROVIDER]

@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IFMA__VH'

@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true
@Consumption.ranked: true

define view I_FinMgmtAreaStdVH
  as select from I_FinancialManagementArea
{
      @ObjectModel.text.association: '_Text'
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key FinancialManagementArea,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.7 }
      @UI.hidden: true
      _Text[1:Language = $session.system_language].FinancialManagementAreaName,     
      @ObjectModel.foreignKey.association: '_Currency'
      FinancialManagementAreaCrcy,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      FinMgmtAreaFiscalYearVariant,
      CommitmentItemIsYearDependent,
      FundsCenterIsTimeDependent,

      _Currency,
      _FiscalYearVariant,
      _Text

};
```
