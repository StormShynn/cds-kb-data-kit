---
name: I_LEGALDOCOBLIGATIONTP
description: Legaldocobligationtp
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
# I_LEGALDOCOBLIGATIONTP

**Legaldocobligationtp**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `LglCntntMDocOblgnUUID` | ✓ | |  |  |
| `LglCntntMDocumentUUID` |  | |  |  |
| `LglCntntMDocObligation` |  | |  |  |
| `LglCntntMDocOblgnType` |  | |  |  |
| `LglCntntMDocument` |  | |  |  |
| `LglCntntMDocOblgnRisk` |  | |  |  |
| `LglCntntMDocOblgnStrtDte` |  | |  |  |
| `LglCntntMDocOblgnEndDte` |  | |  |  |
| `LglCntntMDocOblgnHasRem` |  | |  |  |
| `_Document` | | ✓ | | |
| `_LegalDocOblgnRcpnt` | | ✓ | | |
| `_LegalDocOblgnEntity` | | ✓ | | |
| `_LegalDocOblgnRem` | | ✓ | | |

## Source Code

```abap
@AccessControl:{    
    authorizationCheck: #CHECK,
    personalData.blocking: #BLOCKED_DATA_EXCLUDED 
    }
@EndUserText.label: 'Legal Document Obligations - TP'
@ObjectModel:{
             usageType:{
                          dataClass:  #TRANSACTIONAL,
                          serviceQuality: #C,
                          sizeCategory: #L
                        },
             modelingPattern: #TRANSACTIONAL_INTERFACE,
             supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
             }
@VDM.viewType: #TRANSACTIONAL
@VDM.usage.type:[#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
define view entity I_LegalDocObligationTP
  as projection on R_LegalDocObligationTP as LegalDocObligation
{
  key LglCntntMDocOblgnUUID,
      LglCntntMDocumentUUID,
      LglCntntMDocObligation,
      LglCntntMDocOblgnType,
      LglCntntMDocument,
      LglCntntMDocOblgnRisk,
      LglCntntMDocOblgnStrtDte,
      LglCntntMDocOblgnEndDte,
      LglCntntMDocOblgnHasRem,
//      LglCntntMChangedUTCDateTime,

      /* Associations */
      _Document            : redirected to parent I_LegalDocumentTP,
      _LegalDocOblgnRcpnt  : redirected to composition child I_LegalDocOblgnRcpntTP,
      _LegalDocOblgnEntity : redirected to composition child I_LegalDocOblgnEntityTP,
      _LegalDocOblgnRem    : redirected to composition child I_LegalDocOblgnRemTP
}
```
