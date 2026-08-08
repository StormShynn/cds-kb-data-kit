---
name: I_CAINVCGPROCESS
description: "Cainvcgprocess"
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
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGPROCESS

**Cainvcgprocess**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgProcess` | ✓ | | `_tfk2602` | `inv_process` |  |  |
| `CAApplicationArea` | ✓ | | `_tfk2602` | `applk` |  |  |
| `_CAInvcgProcessText` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgProcessText` | `I_CAInvcgProcessText` | [0..*] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Fakturierungsprozess'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAInvcgProcess',
  sapObjectNodeType.name: 'ContrAcctgInvoicingProcess',
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CAInvcgProcess
  as select from tfk2602 as _tfk2602
  association [0..*] to I_CAInvcgProcessText as _CAInvcgProcessText on  $projection.CAInvcgProcess    = _CAInvcgProcessText.CAInvcgProcess
                                                                    and $projection.CAApplicationArea = _CAInvcgProcessText.CAApplicationArea
  association [1..1] to I_CAApplicationArea  as _CAApplicationArea  on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
{
      @ObjectModel.text.association: '_CAInvcgProcessText'
  key _tfk2602.inv_process as CAInvcgProcess,
      _CAInvcgProcessText,
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
  key _tfk2602.applk       as CAApplicationArea,

      _CAApplicationArea
}
```
