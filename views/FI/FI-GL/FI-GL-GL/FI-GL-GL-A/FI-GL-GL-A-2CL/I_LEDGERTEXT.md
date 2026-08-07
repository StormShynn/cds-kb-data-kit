---
name: I_LEDGERTEXT
description: Ledgertext
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
  - text-view
  - text
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_LEDGERTEXT

**Ledgertext**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Ledger` | ✓ | |  | `rldnr` |
| `Language` | ✓ | |  | `langu` |
| `LedgerName` |  | |  | `name` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Ledger - Text'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'Ledger'
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFILEDGERT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AbapCatalog.preserveKey:true
@Analytics.dataExtraction.enabled: true 
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
define view I_LedgerText
  as select from finsc_ledger_t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

  key rldnr as Ledger,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key langu as Language,

      @Semantics.text
      name  as LedgerName,

      _Language


};
```
