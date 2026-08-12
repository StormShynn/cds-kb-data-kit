---
name: I_FINANCIALMANAGEMENTAREA
description: "Financialmanagementarea"
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
  - component:PSM
  - lob:Other
---
# I_FINANCIALMANAGEMENTAREA

**Financialmanagementarea**

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
| `FinancialManagementArea` | ✓ | |  | `fikrs` |  |  |
| `FinancialManagementAreaCrcy` |  | |  | `waers` |  |  |
| `FinMgmtAreaFiscalYearVariant` |  | |  | `ca_periv` |  |  |
| `CommitmentItemIsYearDependent` |  | |  | `yearpos` |  |  |
| `FundsCenterIsTimeDependent` |  | |  | `cast (yearctr as fmis_fc_time_dependent )` |  |  |
| `_Currency` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Currency` | `I_Currency` | [0..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [1..1] |
| `_Text` | `I_FinancialManagementAreaText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Financial Management Area'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true, internalName: #LOCAL }
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'FinancialManagementArea'
@ObjectModel.sapObjectNodeType.name: 'FinancialManagementArea'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.usageType: { 
  sizeCategory: #S,
  dataClass: #MASTER,
  serviceQuality: #A
}
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true 
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering: { status: #ACTIVE, type: #FULL }
@AbapCatalog.sqlViewName: 'IFMAREA'
@AbapCatalog.preserveKey: true
define view I_FinancialManagementArea
  as select from fm01
  association [0..1] to I_Currency                    as _Currency          on $projection.FinancialManagementAreaCrcy = _Currency.Currency
  association [1..1] to I_FiscalYearVariant           as _FiscalYearVariant on $projection.FinMgmtAreaFiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
  association [1..*] to I_FinancialManagementAreaText as _Text              on $projection.FinancialManagementArea = _Text.FinancialManagementArea
{
      @ObjectModel.text.association: '_Text'
  key fikrs                                        as FinancialManagementArea,
      @ObjectModel.foreignKey.association: '_Currency'
      waers                                        as FinancialManagementAreaCrcy,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      ca_periv                                     as FinMgmtAreaFiscalYearVariant,
      yearpos                                      as CommitmentItemIsYearDependent,
      cast (yearctr as fmis_fc_time_dependent )    as FundsCenterIsTimeDependent,

      _Currency,
      _FiscalYearVariant,
      _Text

};
```
