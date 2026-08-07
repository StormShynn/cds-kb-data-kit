---
name: I_SRVCCONFLONGTEXTTP
description: Srvcconflongtexttp
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
  - component:CRM-S4-SRV-SCO-2CL
  - lob:Other
---
# I_SRVCCONFLONGTEXTTP

**Srvcconflongtexttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceConfirmation` | ✓ | |  |  |
| `TextObjectType` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `SrvcDocLogTextIdentifier` | ✓ | |  |  |
| `TextObjectCategory` |  | |  |  |
| `ServiceObjectType` |  | |  |  |
| `SrvcDocLongTextMimeType` |  | |  |  |
| `SrvcConfLongText` |  | |  |  |
| `ReferenceTextObjectCategory` |  | |  |  |
| `ReferenceTextObjectType` |  | |  |  |
| `ReferenceLongTextKey` |  | |  |  |
| `SrvcDocLongTxtCreationDateTime` |  | |  |  |
| `SrvcDocLongTextCreatedByUser` |  | |  |  |
| `SrvcDocLongTextChangedDateTime` |  | |  |  |
| `SrvcDocLongTextChangedByUser` |  | |  |  |
| `_ServiceConfirmationTP` | | ✓ | | |

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
@EndUserText.label: 'Projection of Long Text - TP'
define view entity I_SrvcConfLongTextTP
  as projection on R_SrvcConfLongTextTP as _SrvcConfLongTextTP
{
  key ServiceConfirmation,
  key TextObjectType,
      @Semantics.language:true
  key Language,
  key SrvcDocLogTextIdentifier,
      TextObjectCategory,

      //ServiceDocumentLongTextUUID,

      ServiceObjectType,

      SrvcDocLongTextMimeType,

      @Semantics.text:true
      @EndUserText.label: 'Long Text'
      SrvcConfLongText,
      ReferenceTextObjectCategory,
      ReferenceTextObjectType,
      ReferenceLongTextKey,

      SrvcDocLongTxtCreationDateTime,
      SrvcDocLongTextCreatedByUser,
      SrvcDocLongTextChangedDateTime,
      SrvcDocLongTextChangedByUser,

      /* Associations */
      _ServiceConfirmationTP : redirected to parent I_ServiceConfirmationTP
}
```
