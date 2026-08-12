---
name: I_CABILLGDOCORIGINPROCESS
description: "Cabillgdocoriginprocess"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_CABILLGDOCORIGINPROCESS

**Cabillgdocoriginprocess**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgDocOriginProcess` | ✓ | | `_tfk2641` | `srcprocess` |  |  |
| `_CABillgDocOriginProcessText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgDocOriginProcessText` | `I_CABillgDocOriginProcessText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Herkunftsprozess des Abr.belegs'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgDocOriginProcess',
  sapObjectNodeType.name: 'ContrAcctgBillgDocOrignProcess',
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
define view entity I_CABillgDocOriginProcess
  as select from tfk2641 as _tfk2641
  association [0..*] to I_CABillgDocOriginProcessText as _CABillgDocOriginProcessText on $projection.CABillgDocOriginProcess = _CABillgDocOriginProcessText.CABillgDocOriginProcess
{
      @ObjectModel.text.association: '_CABillgDocOriginProcessText'
  key _tfk2641.srcprocess as CABillgDocOriginProcess,
      _CABillgDocOriginProcessText
}
```
