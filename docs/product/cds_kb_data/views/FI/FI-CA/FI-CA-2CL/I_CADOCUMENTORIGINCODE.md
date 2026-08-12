---
name: I_CADOCUMENTORIGINCODE
description: "Cadocumentorigincode"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - document
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADOCUMENTORIGINCODE

**Cadocumentorigincode**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CADocumentOriginCode` | ✓ | |  | `herkf` |  |  |
| `CADocumentIsFromPaymentLot` |  | |  | `xplot` |  |  |
| `ReturnsArePermitted` |  | |  | `xrefp` |  |  |
| `PostingInDialogIsPermitted` |  | |  | `xdial` |  |  |
| `IsUsableForReversal` |  | |  | `xreve` |  |  |
| `DirectGLTransferIsPermitted` |  | |  | `xhdir` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CADocumentOriginCodeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@Analytics : { dataCategory: #DIMENSION, 
               dataExtraction.enabled : true}

@EndUserText.label: 'Document Origin Code'

@Metadata: { allowExtensions:true,
             ignorePropagatedAnnotations: true }

@ObjectModel: { modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'CADocumentOriginCode',
                sapObjectNodeType.name: 'ContrAcctgDocumentOriginCode',
                supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                                         #CDS_MODELING_ASSOCIATION_TARGET, 
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CADocumentOriginCode
  as select from tfk001

  association [0..*] to I_CADocumentOriginCodeText as _Text on $projection.CADocumentOriginCode = _Text.CADocumentOriginCode

{
      @ObjectModel.text.association: '_Text'
  key herkf as CADocumentOriginCode,
  
      xplot as CADocumentIsFromPaymentLot,
      xrefp as ReturnsArePermitted,
      xdial as PostingInDialogIsPermitted,
      xreve as IsUsableForReversal,
      xhdir as DirectGLTransferIsPermitted,

      _Text
}
```
