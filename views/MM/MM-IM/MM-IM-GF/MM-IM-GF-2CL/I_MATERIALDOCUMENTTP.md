---
name: I_MATERIALDOCUMENTTP
description: Materialdocumenttp
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
  - document
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
  - bo:Material
---
# I_MATERIALDOCUMENTTP

**Materialdocumenttp**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaterialDocumentYear` | `MaterialDocumentYear` |
| key `MaterialDocument` | `MaterialDocument` |
| `DocumentDate` | `DocumentDate` |
| `PostingDate` | `PostingDate` |
| `GoodsMovementCode` | `GoodsMovementCode` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `MaterialDocumentHeaderText` | `MaterialDocumentHeaderText` |
| `ReferenceDocument` | `ReferenceDocument` |
| `ManualPrintIsTriggered` | `ManualPrintIsTriggered` |
| `VersionForPrintingSlip` | `VersionForPrintingSlip` |
| `_MaterialDocumentItem` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Material Document - TP'
@ObjectModel:{ 
  usageType: {
              serviceQuality: #B, 
              sizeCategory  : #XXL, 
              dataClass     : #TRANSACTIONAL },
              supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
              modelingPattern: #TRANSACTIONAL_INTERFACE 
              }

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL  
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.sapObjectNodeType.name: 'MaterialDocument'
define root view entity I_MaterialDocumentTP   provider contract transactional_interface
  as projection on R_MaterialDocumentTP as _MaterialDocument {
    key MaterialDocumentYear,
    key MaterialDocument,
        DocumentDate,
        PostingDate,
        GoodsMovementCode,  
        CreatedByUser,
        CreationDate,
        CreationTime,
        MaterialDocumentHeaderText,
        @Feature: 'MM_IM_MATDOC_PAAS_ENHANCE'
        ReferenceDocument,
        @Semantics.booleanIndicator
        ManualPrintIsTriggered,
        VersionForPrintingSlip, 
        
       
       _MaterialDocumentItem: redirected to composition child I_MaterialDocumentItemTP
}
```
