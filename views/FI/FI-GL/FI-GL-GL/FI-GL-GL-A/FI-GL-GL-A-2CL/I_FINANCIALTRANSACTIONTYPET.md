---
name: I_FINANCIALTRANSACTIONTYPET
description: Financialtransactiontypet
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
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
# I_FINANCIALTRANSACTIONTYPET

**Financialtransactiontypet**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |
| `FinancialTransactionType` | ✓ | |  | `cast( trtyp as fis_rmvct preserving type )` |
| `FinancialTransactionTypeName` |  | |  | `txt` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Financial Transaction Type - Text'
@AbapCatalog.sqlViewName: 'IFITRANSTYPET'
@VDM.viewType: #BASIC
@Analytics: { dataExtraction.enabled: true  }
@ObjectModel.representativeKey: 'FinancialTransactionType'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering.numberOfKeyFields: 1
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT,#EXTRACTION_DATA_SOURCE]
@Search.searchable: true
define view I_FinancialTransactionTypeT
  as select from t856t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key langu as Language,
      @ObjectModel.text.element: ['FinancialTransactionTypeName']
  key cast( trtyp as fis_rmvct preserving type ) as FinancialTransactionType,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      txt   as FinancialTransactionTypeName,
      _Language
};
```
