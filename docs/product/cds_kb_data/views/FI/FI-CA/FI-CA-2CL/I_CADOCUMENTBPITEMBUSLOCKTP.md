---
name: I_CADOCUMENTBPITEMBUSLOCKTP
description: "Cadocumentbpitembuslocktp"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - transactional-processing
  - document
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADOCUMENTBPITEMBUSLOCKTP

**Cadocumentbpitembuslocktp**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CADocumentNumber` | ✓ | |  |  |  |  |
| `CARepetitionItemNumber` | ✓ | |  |  |  |  |
| `CABPItemNumber` | ✓ | |  |  |  |  |
| `CASubItemNumber` | ✓ | |  |  |  |  |
| `CABusinessProcess` | ✓ | |  |  |  |  |
| `CABusinessLockReason` | ✓ | |  |  |  |  |
| `CABusinessLockValidFrom` | ✓ | |  |  |  |  |
| `CABusinessLockValidTo` | ✓ | |  |  |  |  |
| `_DocHeader` | | ✓ | | | | |
| `_BPItem` | | ✓ | | | | |

## Source Code

```abap
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@VDM.usage.type:[#TRANSACTIONAL_PROCESSING_SERVICE]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #C

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #CHECK

@EndUserText.label: 'Document BP Item Business Lock - TP'

define view entity I_CADocumentBPItemBusLockTP
  as projection on R_CADocumentBPItemBusLockTP

{
  key CADocumentNumber,
  key CARepetitionItemNumber,
  key CABPItemNumber,
  key CASubItemNumber,
  key CABusinessProcess,
  key CABusinessLockReason,
  key CABusinessLockValidFrom,
  key CABusinessLockValidTo,

      /* Associations */
      _DocHeader : redirected to I_CADocumentTP,
      _BPItem    : redirected to parent I_CADocumentBPItemTP
}
```
