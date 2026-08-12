---
name: I_SRVCORDTMPLITEMLONGTEXTTP
description: "Srvcordtmplitemlongtexttp"
app_component: CRM-S4-SRV-SVT-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - text
  - item-level
  - component:CRM-S4-SRV-SVT-2CL
  - lob:Other
---
# I_SRVCORDTMPLITEMLONGTEXTTP

**Srvcordtmplitemlongtexttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceOrderTemplate` | ✓ | |  |  |  |  |
| `ServiceOrderTemplateItem` | ✓ | |  |  |  |  |
| `TextObjectType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `SrvcDocLogTextIdentifier` | ✓ | |  |  |  |  |
| `TextObjectCategory` |  | |  |  |  |  |
| `SrvcDocLongTextMimeType` |  | |  |  |  |  |
| `SrvcOrdTmplItemLongText` |  | |  |  |  |  |
| `ReferenceTextObjectCategory` |  | |  |  |  |  |
| `ReferenceTextObjectType` |  | |  |  |  |  |
| `ReferenceLongTextKey` |  | |  |  |  |  |
| `ReferenceServiceObjectType` |  | |  |  |  |  |
| `ReferenceServiceDocument` |  | |  |  |  |  |
| `ReferenceServiceDocumentItem` |  | |  |  |  |  |
| `SrvcDocLongTxtCreationDateTime` |  | |  |  |  |  |
| `SrvcDocLongTextCreatedByUser` |  | |  |  |  |  |
| `SrvcDocLongTextChangedDateTime` |  | |  |  |  |  |
| `SrvcDocLongTextChangedByUser` |  | |  |  |  |  |
| `_Language` | | ✓ | | | | |
| `_ReferenceTextObjectCategory` | | ✓ | | | | |
| `_ReferenceTextObjectType` | | ✓ | | | | |
| `_TextObjectCategory` | | ✓ | | | | |
| `_TextObjectType` | | ✓ | | | | |
| `_ServiceOrderTemplateItemTP` | | ✓ | | | | |
| `_ServiceOrderTemplateTP` | | ✓ | | | | |

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
@EndUserText.label: 'Projection for Long Text of Item - TP'
define view entity I_SrvcOrdTmplItemLongTextTP
  as projection on R_SrvcOrdTmplItemLongTextTP as _SrvcOrdTmplItemLongTextTP
{
  key ServiceOrderTemplate,
  key ServiceOrderTemplateItem,
  key TextObjectType,
  key Language,
  key SrvcDocLogTextIdentifier,

      //ServiceDocumentLongTextUUID,

      TextObjectCategory,

      SrvcDocLongTextMimeType,
      @Semantics.text:true
      @EndUserText.label: 'Long Text Item'
      SrvcOrdTmplItemLongText,
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

      _ServiceOrderTemplateItemTP : redirected to parent I_ServiceOrderTemplateItemTP,
      _ServiceOrderTemplateTP     : redirected to I_ServiceOrderTemplateTP
}
```
