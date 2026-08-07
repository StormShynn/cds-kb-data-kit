---
name: I_MATERIALDOCITEMSERIALNOTP
description: Materialdocitemserialnotp
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-GF
  - interface-view
  - transactional-processing
  - material
  - item-level
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
  - bo:Material
---
# I_MATERIALDOCITEMSERIALNOTP

**Materialdocitemserialnotp**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SerialNumber` | ✓ | |  |  |
| `MaterialDocument` | ✓ | |  |  |
| `MaterialDocumentItem` | ✓ | |  |  |
| `MaterialDocumentYear` | ✓ | |  |  |
| `_MaterialDocumentHeader` | | ✓ | | |
| `_MaterialDocumentItem` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Serial Number - TP'
@ObjectModel: {
                usageType: {
                             sizeCategory: #XXL,
                             serviceQuality: #C,
                             dataClass:#TRANSACTIONAL
                           }
                }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY
@Metadata.ignorePropagatedAnnotations: true                           
define view entity I_MaterialDocItemSerialNoTP as projection on R_MaterialDocItemSerialNoTP as _SerialNumber {
  key SerialNumber,
  key MaterialDocument,
  key MaterialDocumentItem,
  key MaterialDocumentYear,
  /* Associations */
  _MaterialDocumentHeader : redirected to I_MaterialDocumentTP,
  _MaterialDocumentItem : redirected to parent I_MaterialDocumentItemTP
   
  
}
```
