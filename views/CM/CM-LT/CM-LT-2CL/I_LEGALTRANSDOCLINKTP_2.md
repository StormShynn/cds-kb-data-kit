---
name: I_LEGALTRANSDOCLINKTP_2
description: Legaltransdoclinktp 2
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-LT
  - interface-view
  - transactional-processing
  - component:CM-LT-2CL
  - lob:Other
---
# I_LEGALTRANSDOCLINKTP_2

**Legaltransdoclinktp 2**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `LegalTransactionDocLinkUUID` | ✓ | |  |  |
| `LegalTransactionUUID` |  | |  |  |
| `LglCntntMDocument` |  | |  |  |
| `LglCntntMDocAccessLvl` |  | |  |  |
| `LglCntntMDocContentType` |  | |  |  |
| `InternalDocumentStatus` |  | |  |  |
| `_LegalTransaction` | | ✓ | | |

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #CHECK,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}
@EndUserText.label: 'Legal Transaction Linked Documents'
@ObjectModel: {
  usageType: {
    sizeCategory: #M,
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
define view entity I_LegalTransDocLinkTP_2
  as projection on R_LegalTransDocLinkTP
{
  key LegalTransactionDocLinkUUID,
      LegalTransactionUUID,
      LglCntntMDocument,
                                                                      
      //Only for Authorization Check in DCL
      @Consumption.hidden: true                           
      LglCntntMDocAccessLvl,
      @Consumption.hidden: true
      LglCntntMDocContentType,
      @Consumption.hidden: true
      InternalDocumentStatus,
      
      /* Associations */
      _LegalTransaction : redirected to parent I_LegalTransactionTP_2
}
```
