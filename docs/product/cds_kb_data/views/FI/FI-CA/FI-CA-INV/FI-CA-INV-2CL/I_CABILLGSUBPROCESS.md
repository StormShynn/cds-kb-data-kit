---
name: I_CABILLGSUBPROCESS
description: "Cabillgsubprocess"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CABILLGSUBPROCESS

**Cabillgsubprocess**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgSubprocess` | ✓ | | `_TFK8104` | `subprocess` |  |  |
| `_CABillgSubprocessText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgSubprocessText` | `I_CABillgSubProcessText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Teilprozess der Abrechnung'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgSubprocess',
  sapObjectNodeType.name: 'ContrAcctgBillingSubProcess',
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
define view entity I_CABillgSubProcess
  as select from tfk8104 as _TFK8104
  association [0..*] to I_CABillgSubProcessText as _CABillgSubprocessText on $projection.CABillgSubprocess = _CABillgSubprocessText.CABillgSubprocess
{
      @ObjectModel.text.association: '_CABillgSubprocessText'
  key _TFK8104.subprocess as CABillgSubprocess,
      _CABillgSubprocessText
}
```
