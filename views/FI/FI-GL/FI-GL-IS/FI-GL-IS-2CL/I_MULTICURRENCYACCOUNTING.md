---
name: I_MULTICURRENCYACCOUNTING
description: Multicurrencyaccounting
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
  - currency
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_MULTICURRENCYACCOUNTING

**Multicurrencyaccounting**

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
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MultiCurrencyAccountingText` | [0..*] |

## Source Code

```abap
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IFIMCA'
@ObjectModel.representativeKey: 'MultiCurrencyAccountingCode'
@EndUserText.label: 'Multiple Currency Accounting'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE]
define view I_MultiCurrencyAccounting
  as select from gle_mca_tmcakey
  association [0..*] to I_MultiCurrencyAccountingText as _Text on $projection.MultiCurrencyAccountingCode = _Text.MultiCurrencyAccountingCode
{
      @ObjectModel.text.association: '_Text'
  key mcakey as MultiCurrencyAccountingCode,

      _Text
}
```
