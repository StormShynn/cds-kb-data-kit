---
name: I_MULTICURRENCYACCOUNTINGTEXT
description: Multicurrencyaccountingtext
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - text-view
  - currency
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_MULTICURRENCYACCOUNTINGTEXT

**Multicurrencyaccountingtext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MultiCurrencyAccountingCode` | ✓ | |  | `mcakey` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `MultiCurrencyAcctgCodeName` |  | |  | `text` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Multiple Currency Accounting - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IFIMCAT'
@ObjectModel.representativeKey: 'MultiCurrencyAccountingCode'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT]
define view I_MultiCurrencyAccountingText
  as select from gle_mca_tmcakeyt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key mcakey   as MultiCurrencyAccountingCode,
      @Semantics.language: true
  key langu    as Language,
      @Semantics.text: true
      text     as MultiCurrencyAcctgCodeName,

      _Language
}
```
