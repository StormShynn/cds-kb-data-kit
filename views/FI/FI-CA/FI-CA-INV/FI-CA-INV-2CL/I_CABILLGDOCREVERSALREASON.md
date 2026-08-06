---
name: I_CABILLGDOCREVERSALREASON
description: Cabillgdocreversalreason
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
# I_CABILLGDOCREVERSALREASON

**Cabillgdocreversalreason**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CABillgDocumentReversalReason` | `_tfk2646.bill_revreason` |
| `_CABillgDocReversalReasonText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgDocReversalReasonText` | `I_CABillgDocReversalReasonText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Storn.grund für Abr. belege'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgDocumentReversalReason',
  sapObjectNodeType.name: 'ContrAcctgBillgDocRvslRsn',
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
define view entity I_CABillgDocReversalReason
  as select from tfk2646 as _tfk2646
  association [0..*] to I_CABillgDocReversalReasonText as _CABillgDocReversalReasonText on $projection.CABillgDocumentReversalReason = _CABillgDocReversalReasonText.CABillgDocumentReversalReason

{
      @ObjectModel.text.association: '_CABillgDocReversalReasonText'
  key _tfk2646.bill_revreason as CABillgDocumentReversalReason,
      _CABillgDocReversalReasonText
}
```
