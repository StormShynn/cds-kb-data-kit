---
name: I_CAINVCGDOCREVERSALREASON
description: "Cainvcgdocreversalreason"
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
# I_CAINVCGDOCREVERSALREASON

**Cainvcgdocreversalreason**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgDocumentReversalReason` | ✓ | | `_tfk2661` | `revreason` |  |  |
| `_CAInvcgDocReversalReasonText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocReversalReasonText` | `I_CAInvcgDocReversalReasonText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Storn.grund für Fakt.belege'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAInvcgDocumentReversalReason',
  sapObjectNodeType.name: 'ContrAcctgInvcgDocRvslRsn',
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
define view entity I_CAInvcgDocReversalReason
  as select from tfk2661 as _tfk2661
  association [0..*] to I_CAInvcgDocReversalReasonText as _CAInvcgDocReversalReasonText on $projection.CAInvcgDocumentReversalReason = _CAInvcgDocReversalReasonText.CAInvcgDocumentReversalReason

{
      @ObjectModel.text.association: '_CAInvcgDocReversalReasonText'
  key _tfk2661.revreason as CAInvcgDocumentReversalReason,
      _CAInvcgDocReversalReasonText
}
```
