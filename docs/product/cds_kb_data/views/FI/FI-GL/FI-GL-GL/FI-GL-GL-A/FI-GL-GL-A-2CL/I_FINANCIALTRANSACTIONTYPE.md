---
name: I_FINANCIALTRANSACTIONTYPE
description: "Financialtransactiontype"
app_component: FI-GL-GL-A-2CL
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
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_FINANCIALTRANSACTIONTYPE

**Financialtransactiontype**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
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
| `FinancialTransactionType` | ✓ | |  | `cast( trtyp as fis_rmvct preserving type )` |  |  |
| `FinancialTransactionTypeGroup` |  | |  | `cast( ttgrp as fis_rmvct_grp preserving type )` |  |  |
| `CarryForwardTransactionType` |  | |  | `ttcfo` |  |  |
| `TransactionTypeIsDerived` |  | |  | `toind` |  |  |
| `TransacTypeTotalsFormulaText` |  | |  | `sumru` |  |  |
| `BalanceCarryForwardIsFixed` |  | |  | `cfind` |  |  |
| `AcquisitionIsCurrentYearOnly` |  | |  | `cyind` |  |  |
| `BrkdwnByYearsIsNotApplicable` |  | |  | `cydbi` |  |  |
| `RetirementTransactionType` |  | |  | `ttret` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FinancialTransactionTypeT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Financial Transaction Type'
@AbapCatalog.sqlViewName: 'IFITRANSTYPE'
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL

@ObjectModel: {representativeKey: 'FinancialTransactionType', 
               sapObjectNodeType.name: 'FinancialTransactionType', 
               modelingPattern: #ANALYTICAL_DIMENSION,
               supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE],
               usageType: { sizeCategory: #S,
                            dataClass:  #MASTER,
                            serviceQuality: #A }
               }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering.numberOfKeyFields: 1

@Search.searchable: true
define view I_FinancialTransactionType
  as select from t856
  association [0..*] to I_FinancialTransactionTypeT as _Text on $projection.FinancialTransactionType = _Text.FinancialTransactionType
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key cast( trtyp as fis_rmvct preserving type ) as FinancialTransactionType,

      cast( ttgrp as fis_rmvct_grp preserving type ) as FinancialTransactionTypeGroup,

      ttcfo as CarryForwardTransactionType,

      //sign,

      toind as TransactionTypeIsDerived,

      sumru as TransacTypeTotalsFormulaText,

      cfind as BalanceCarryForwardIsFixed,

      cyind as AcquisitionIsCurrentYearOnly,

      cydbi as BrkdwnByYearsIsNotApplicable,

      ttret as RetirementTransactionType,
      
      _Text

};
```
