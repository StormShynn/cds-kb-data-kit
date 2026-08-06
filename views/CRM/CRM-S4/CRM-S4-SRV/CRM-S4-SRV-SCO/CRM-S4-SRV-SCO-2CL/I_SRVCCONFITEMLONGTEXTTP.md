---
name: I_SRVCCONFITEMLONGTEXTTP
description: Srvcconfitemlongtexttp
app_component: CRM-S4-SRV-SCO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - text
  - item-level
  - component:CRM-S4-SRV-SCO-2CL
  - lob:Other
---
# I_SRVCCONFITEMLONGTEXTTP

**Srvcconfitemlongtexttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceConfirmation` | `ServiceConfirmation` |
| key `ServiceConfirmationItem` | `ServiceConfirmationItem` |
| key `TextObjectType` | `TextObjectType` |
| key `Language` | `Language` |
| key `SrvcDocLogTextIdentifier` | `SrvcDocLogTextIdentifier` |
| `TextObjectCategory` | `TextObjectCategory` |
| `SrvcDocLongTextMimeType` | `SrvcDocLongTextMimeType` |
| `SrvcConfItemLongText` | `SrvcConfItemLongText` |
| `ReferenceTextObjectCategory` | `ReferenceTextObjectCategory` |
| `ReferenceTextObjectType` | `ReferenceTextObjectType` |
| `ReferenceLongTextKey` | `ReferenceLongTextKey` |
| `ReferenceServiceObjectType` | `ReferenceServiceObjectType` |
| `ReferenceServiceDocument` | `ReferenceServiceDocument` |
| `ReferenceServiceDocumentItem` | `ReferenceServiceDocumentItem` |
| `SrvcDocLongTxtCreationDateTime` | `SrvcDocLongTxtCreationDateTime` |
| `SrvcDocLongTextCreatedByUser` | `SrvcDocLongTextCreatedByUser` |
| `SrvcDocLongTextChangedDateTime` | `SrvcDocLongTextChangedDateTime` |
| `SrvcDocLongTextChangedByUser` | `SrvcDocLongTextChangedByUser` |
| `_Language` | *Association* |
| `_ReferenceTextObjectCategory` | *Association* |
| `_ReferenceTextObjectType` | *Association* |
| `_TextObjectCategory` | *Association* |
| `_TextObjectType` | *Association* |
| `_ServiceConfirmationItemTP` | *Association* |
| `_ServiceConfirmationTP` | *Association* |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {

   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
  // dataCategory: #TEXT
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@EndUserText.label: 'Service Conf Item Notes - TP'
define view entity I_SrvcConfItemLongTextTP
  as projection on R_SrvcConfItemLongTextTP as _SrvcConfItemLongTextTP
{
  key ServiceConfirmation,
  key ServiceConfirmationItem,
  key TextObjectType,
      @Semantics.language:true
  key Language,
  key SrvcDocLogTextIdentifier,

      //ServiceDocumentLongTextUUID,
      TextObjectCategory,

      SrvcDocLongTextMimeType,
      @Semantics.text:true
      @EndUserText.label: 'Long Text Item'
      SrvcConfItemLongText,
      ReferenceTextObjectCategory,
      ReferenceTextObjectType,
      ReferenceLongTextKey,
      ReferenceServiceObjectType,
      ReferenceServiceDocument,
      ReferenceServiceDocumentItem,

      SrvcDocLongTxtCreationDateTime,
      SrvcDocLongTextCreatedByUser,
      SrvcDocLongTextChangedDateTime,
      SrvcDocLongTextChangedByUser,

      /* Associations */
      _Language,
      _ReferenceTextObjectCategory,
      _ReferenceTextObjectType,
      _TextObjectCategory,
      _TextObjectType,

      _ServiceConfirmationItemTP : redirected to parent I_ServiceConfirmationItemTP,
      _ServiceConfirmationTP     : redirected to I_ServiceConfirmationTP
}
```
