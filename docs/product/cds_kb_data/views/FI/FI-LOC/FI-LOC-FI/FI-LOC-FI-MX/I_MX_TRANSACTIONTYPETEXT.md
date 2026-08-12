---
name: I_MX_TRANSACTIONTYPETEXT
description: "MX Transactiontypetext"
app_component: FI-LOC-FI-MX
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
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - text-view
  - text
  - component:FI-LOC-FI-MX
  - lob:Finance
---
# I_MX_TRANSACTIONTYPETEXT

**MX Transactiontypetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-MX` |
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
| `BusinessTransactionType` | ✓ | |  | `cast(domvalue_l as transaction_type)` |  |  |
| `Language` | ✓ | |  | `cast(ddlanguage as spras)` |  |  |
| `BusinessTransactionTypeName` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMXTRANSTYPET'
@EndUserText.label: 'Mexico Transaction Type - Text'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@Analytics: { dataExtraction.enabled: true  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'BusinessTransactionType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]

define view I_MX_TransactionTypeText as select from dd07t 

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  
  {
  
    key cast(domvalue_l as transaction_type) as BusinessTransactionType,
  
        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
    key cast(ddlanguage as spras) as Language,
  
        @Semantics.text
        ddtext                    as BusinessTransactionTypeName,
  
        _Language
  
  }
    where domname  = 'MXTRANSTYPE'
      and as4local = 'A';
```
