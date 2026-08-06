---
name: I_LEGALDOCPARCATEGORYTP
description: Legaldocparcategorytp
app_component: CM-DOC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-DOC
  - interface-view
  - transactional-processing
  - component:CM-DOC-2CL
  - lob:Other
---
# I_LEGALDOCPARCATEGORYTP

**Legaldocparcategorytp**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `LglCntntMDocParCatUUID` | `LglCntntMDocParCatUUID` |
| `LglCntntMDocumentUUID` | `LglCntntMDocumentUUID` |
| `LglCntntMParentCategory` | `LglCntntMParentCategory` |
| `_Document` | *Association* |
| `_LegalDocCategory` | *Association* |

## Source Code

```abap
@AccessControl:{    
    authorizationCheck: #CHECK,
    personalData.blocking: #BLOCKED_DATA_EXCLUDED 
    }
@EndUserText.label: 'Legal Document Parent Category - TP'
@ObjectModel: {
    usageType: {
        sizeCategory: #L,
        serviceQuality: #C,
        dataClass:#TRANSACTIONAL
    },
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@VDM.viewType: #TRANSACTIONAL
@VDM.usage.type:[#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true

define view entity I_LegalDocParCategoryTP
  as projection on R_LegalDocParCategoryTP as LegalDocParCategory
{
  key LglCntntMDocParCatUUID,

      LglCntntMDocumentUUID,

      LglCntntMParentCategory,
      
//      LglCntntMChangedUTCDateTime,

      /* Associations */
      _Document         : redirected to parent I_LegalDocumentTP,
      _LegalDocCategory : redirected to composition child I_LegalDocCategoryTP
}
```
