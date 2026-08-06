---
name: I_SRVCORDLONGTEXTTP
description: Srvcordlongtexttp
app_component: CRM-S4-SRV-SVO-2CL
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
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCORDLONGTEXTTP

**Srvcordlongtexttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceOrder` | `ServiceOrder` |
| key `TextObjectType` | `TextObjectType` |
| key `Language` | `Language` |
| key `SrvcDocLogTextIdentifier` | `SrvcDocLogTextIdentifier` |
| `TextObjectCategory` | `TextObjectCategory` |
| `SrvcDocLongTextMimeType` | `SrvcDocLongTextMimeType` |
| `ServiceObjectType` | `ServiceObjectType` |
| `ServiceOrderLongText` | `ServiceOrderLongText` |
| `ReferenceTextObjectCategory` | `ReferenceTextObjectCategory` |
| `ReferenceTextObjectType` | `ReferenceTextObjectType` |
| `ReferenceLongTextKey` | `ReferenceLongTextKey` |
| `SrvcDocLongTxtCreationDateTime` | `SrvcDocLongTxtCreationDateTime` |
| `SrvcDocLongTextCreatedByUser` | `SrvcDocLongTextCreatedByUser` |
| `SrvcDocLongTextChangedDateTime` | `SrvcDocLongTextChangedDateTime` |
| `SrvcDocLongTextChangedByUser` | `SrvcDocLongTextChangedByUser` |
| `_ServiceOrderTP` | *Association* |

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
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@EndUserText.label: 'Projection of Long Text - TP'

define view entity I_SrvcOrdLongTextTP
  as projection on R_SrvcOrdLongTextTP as _SrvcOrdLongTextTP
{
  key ServiceOrder,
  key TextObjectType,
  key Language,
  key SrvcDocLogTextIdentifier,

      //ServiceDocumentLongTextUUID,

      TextObjectCategory,
      SrvcDocLongTextMimeType,
      ServiceObjectType,
      @Semantics.text:true
      @EndUserText.label: 'Long Text'
      ServiceOrderLongText,
      ReferenceTextObjectCategory,
      ReferenceTextObjectType,
      ReferenceLongTextKey,

      SrvcDocLongTxtCreationDateTime,
      SrvcDocLongTextCreatedByUser,
      SrvcDocLongTextChangedDateTime,
      SrvcDocLongTextChangedByUser,

      /* Associations */
      _ServiceOrderTP : redirected to parent I_ServiceOrderTP
}
```
