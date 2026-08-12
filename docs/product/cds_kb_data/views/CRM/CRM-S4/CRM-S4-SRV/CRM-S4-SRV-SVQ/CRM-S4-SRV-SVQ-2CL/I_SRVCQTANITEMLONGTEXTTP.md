---
name: I_SRVCQTANITEMLONGTEXTTP
description: "Srvcqtanitemlongtexttp"
app_component: CRM-S4-SRV-SVQ-2CL
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
  - component:CRM-S4-SRV-SVQ-2CL
  - lob:Other
---
# I_SRVCQTANITEMLONGTEXTTP

**Srvcqtanitemlongtexttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceQuotation` | ✓ | |  |  |  |  |
| `ServiceQuotationItem` | ✓ | |  |  |  |  |
| `TextObjectType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `SrvcDocLogTextIdentifier` | ✓ | |  |  |  |  |
| `TextObjectCategory` |  | |  |  |  |  |
| `SrvcDocLongTextMimeType` |  | |  |  |  |  |
| `SrvcQtanItemLongText` |  | |  |  |  |  |
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
| `_ServiceQuotationItemTP` | | ✓ | | | | |
| `_ServiceQuotationTP` | | ✓ | | | | |

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
                sizeCategory:   #L},
                dataCategory: #TEXT
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@EndUserText.label: 'Long Text for Service Quotation Item - TP'
define view entity I_SrvcQtanItemLongTextTP
  as projection on R_SrvcQtanItemLongTextTP as _SrvcQtanItemLongTextTP
{
  key ServiceQuotation,
  key ServiceQuotationItem,
  key TextObjectType,
      @Semantics.language:true
  key Language,
  key SrvcDocLogTextIdentifier,

      //ServiceDocumentLongTextUUID,

      TextObjectCategory,

      SrvcDocLongTextMimeType,
      @Semantics.text:true
      @EndUserText.label: 'Long Text Item'
      SrvcQtanItemLongText,
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

      _ServiceQuotationItemTP : redirected to parent I_ServiceQuotationItemTP,
      _ServiceQuotationTP     : redirected to I_ServiceQuotationTP
}
```
