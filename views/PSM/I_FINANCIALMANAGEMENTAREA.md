---
name: I_FINANCIALMANAGEMENTAREA
description: Financialmanagementarea
app_component: PSM
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  | `fikrs` |
| `FinancialManagementAreaCrcy` |  | |  | `waers` |
| `FinMgmtAreaFiscalYearVariant` |  | |  | `ca_periv` |
| `CommitmentItemIsYearDependent` |  | |  | `yearpos` |
| `FundsCenterIsTimeDependent` |  | |  | `cast (yearctr as fmis_fc_time_dependent )` |
| `_Currency` | | ✓ | | |
| `_FiscalYearVariant` | | ✓ | | |
| `_Text` | | ✓ | | |

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
