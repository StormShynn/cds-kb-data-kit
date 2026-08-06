---
name: I_CABILLGCYCLETEXT
description: Cabillgcycletext
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - text-view
  - text
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGCYCLETEXT

**Cabillgcycletext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CABillgCycle` | `_tfk2607t.cycle` |
| key `Language` | `_tfk2607t.langu` |
| `CABillgCycleText` | `_tfk2607t.text` |
| `_CABillgCycle` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgCycle` | `I_CABillgCycle` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Bezeichnung des Abrechnungszyklus'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABillgCycle',
  sapObjectNodeType.name: 'ContrAcctgBillingCycleText',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CABillgCycleText
  as select from tfk2607t as _tfk2607t

  association [1..1] to I_CABillgCycle as _CABillgCycle on $projection.CABillgCycle = _CABillgCycle.CABillgCycle
  association [0..1] to I_Language     as _Language     on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CABillgCycle'
  key _tfk2607t.cycle as CABillgCycle,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk2607t.langu as Language,
      @Semantics.text: true
      _tfk2607t.text  as CABillgCycleText,

      _CABillgCycle,
      _Language
}
```
