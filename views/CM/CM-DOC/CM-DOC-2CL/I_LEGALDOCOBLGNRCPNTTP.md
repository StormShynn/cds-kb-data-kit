---
name: I_LEGALDOCOBLGNRCPNTTP
description: Legaldocoblgnrcpnttp
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
# I_LEGALDOCOBLGNRCPNTTP

**Legaldocoblgnrcpnttp**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `LglCntntMDocOblgnRcpntUUID` | ✓ | |  |  |
| `LglCntntMDocOblgnUUID` |  | |  |  |
| `LglCntntMDocumentUUID` |  | |  |  |
| `LglCntntMDocOblgnRcpnt` |  | |  |  |
| `_Document` | | ✓ | | |
| `_LegalDocObligation` | | ✓ | | |

## Source Code

```abap
@AccessControl:{    
    authorizationCheck: #CHECK,
    personalData.blocking: #BLOCKED_DATA_EXCLUDED 
    }
@EndUserText.label: 'Legal Document Obligation Recipient - TP'

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
define view entity I_LegalDocOblgnRcpntTP
  as projection on R_LegalDocOblgnRcpntTP as LegalDocOblgnRcpnt
{
  key LglCntntMDocOblgnRcpntUUID  as LglCntntMDocOblgnRcpntUUID,
      LglCntntMDocOblgnUUID       as LglCntntMDocOblgnUUID,
      LglCntntMDocumentUUID       as LglCntntMDocumentUUID,
      LglCntntMDocOblgnRcpnt      as LglCntntMDocOblgnRcpnt,
//      LglCntntMChangedUTCDateTime as LglCntntMChangedUTCDateTime,
      
      /* Associations */
      _Document           : redirected to I_LegalDocumentTP,
      _LegalDocObligation : redirected to parent I_LegalDocObligationTP
}
```
