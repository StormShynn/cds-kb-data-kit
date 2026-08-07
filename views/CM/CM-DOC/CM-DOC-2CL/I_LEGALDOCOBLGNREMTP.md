---
name: I_LEGALDOCOBLGNREMTP
description: Legaldocoblgnremtp
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
# I_LEGALDOCOBLGNREMTP

**Legaldocoblgnremtp**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMDocOblgnRemUUID` | ✓ | |  |  |  |  |
| `LglCntntMDocOblgnUUID` |  | |  |  |  |  |
| `LglCntntMDocumentUUID` |  | |  |  |  |  |
| `LglCntntMDocOblgnRemType` |  | |  |  |  |  |
| `LglCntntMDocOblgnRemDate` |  | |  |  |  |  |
| `LglCntntMDocOblgnRemRcpntUsr` |  | |  |  |  |  |
| `LglCntntMDocOblgnRemSubject` |  | |  |  |  |  |
| `LglCntntMDocObligation` |  | |  |  |  |  |
| `LglCntntMDocOblgnType` |  | |  |  |  |  |
| `_Document` | | ✓ | | | | |
| `_LegalDocObligation` | | ✓ | | | | |

## Source Code

```abap
@AccessControl:{    
    authorizationCheck: #CHECK,
    personalData.blocking: #BLOCKED_DATA_EXCLUDED 
    }
@EndUserText.label: 'Legal Document Obligation Reminders - TP'

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
define view entity I_LegalDocOblgnRemTP
  as projection on R_LegalDocOblgnRemTP as LegalDocOblgnRem
{
  key LglCntntMDocOblgnRemUUID     as LglCntntMDocOblgnRemUUID,
      LglCntntMDocOblgnUUID        as LglCntntMDocOblgnUUID,
      LglCntntMDocumentUUID        as LglCntntMDocumentUUID,
      LglCntntMDocOblgnRemType     as LglCntntMDocOblgnRemType,
      LglCntntMDocOblgnRemDate     as LglCntntMDocOblgnRemDate,
      LglCntntMDocOblgnRemRcpntUsr as LglCntntMDocOblgnRemRcpntUsr,
      LglCntntMDocOblgnRemSubject  as LglCntntMDocOblgnRemSubject,
      LglCntntMDocObligation       as LglCntntMDocObligation,
      LglCntntMDocOblgnType        as LglCntntMDocOblgnType,
//      LglCntntMChangedUTCDateTime  as LglCntntMChangedUTCDateTime,

      /* Associations */
      _Document           : redirected to I_LegalDocumentTP,
      _LegalDocObligation : redirected to parent I_LegalDocObligationTP

}
```
