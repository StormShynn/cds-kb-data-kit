---
name: I_LEGALDOCTMPLINFOTP
description: "Legaldoctmplinfotp"
app_component: CM-DOC-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
# I_LEGALDOCTMPLINFOTP

**Legaldoctmplinfotp**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMDocTemplateInfoUUID` | ✓ | |  |  |  |  |
| `LglCntntMDocumentUUID` |  | |  |  |  |  |
| `LglCntntMDocTemplateName` |  | |  |  |  |  |
| `LglCntntMDocTemplateVersion` |  | |  |  |  |  |
| `LglCntntMDocTemplateDate` |  | |  |  |  |  |
| `_Document` | | ✓ | | | | |

## Source Code

```abap
@AccessControl:{    
    authorizationCheck: #CHECK,
    personalData.blocking: #BLOCKED_DATA_EXCLUDED 
    }
@EndUserText.label: 'Legal Document Template Info - TP'
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

define view entity I_LegalDocTmplInfoTP
  as projection on R_LegalDocTmplInfoTP as LegalDocTmplInfo
{
  key LglCntntMDocTemplateInfoUUID,
      LglCntntMDocumentUUID,
      LglCntntMDocTemplateName,
      LglCntntMDocTemplateVersion,
      LglCntntMDocTemplateDate,
//      LglCntntMChangedUTCDateTime,

      /* Associations */
      _Document : redirected to parent I_LegalDocumentTP
}
```
