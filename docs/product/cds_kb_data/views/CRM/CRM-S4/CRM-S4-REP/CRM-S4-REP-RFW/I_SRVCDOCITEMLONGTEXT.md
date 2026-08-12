---
name: I_SRVCDOCITEMLONGTEXT
description: "Srvcdocitemlongtext"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - text-view
  - text
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCDOCITEMLONGTEXT

**Srvcdocitemlongtext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceDocumentLongTextUUID` | ✓ | |  | `text_uuid` |  |  |
| `TextObjectCategory` |  | |  | `text_object` |  |  |
| `TextObjectType` |  | |  | `text_id` |  |  |
| `Language` |  | |  | `language` |  |  |
| `ServiceObjectType` |  | |  | `objtype_h` |  |  |
| `ServiceDocument` |  | |  | `object_id` |  |  |
| `ServiceDocumentItem` |  | |  | `number_int` |  |  |
| `ServiceDocumentLongText` |  | |  | `text_content` |  |  |
| `SrvcDocLongTextMimeType` |  | |  | `mimetype` |  |  |
| `_TextObjectCategory` | | ✓ | | | | |
| `_TextObjectType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TextObjectCategory` | `I_TextObjectCategory` | [1..1] |
| `_TextObjectType` | `I_TextObjectType` | [1..1] |
| `_Language` | `I_Language` | [1..1] |
| `_ServiceObjType` | `I_CustMgmtBusObjType` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Service Transaction Item Long Text'

@AccessControl: {
    authorizationCheck: #PRIVILEGED_ONLY,
    personalData.blocking: #NOT_REQUIRED
}

@ObjectModel: {
    usageType: {
        dataClass: #TRANSACTIONAL,
        serviceQuality: #A,
        sizeCategory: #L
    },
    supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, 
                             #SQL_DATA_SOURCE, 
                             #CDS_MODELING_DATA_SOURCE ],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}

@Metadata.ignorePropagatedAnnotations: true

@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_SrvcDocItemLongText as select from crms4d_text as ServiceDocumentText
  association [1..1] to I_TextObjectCategory as _TextObjectCategory on  $projection.TextObjectCategory = _TextObjectCategory.TextObjectCategory
  association [1..1] to I_TextObjectType     as _TextObjectType     on  $projection.TextObjectCategory = _TextObjectType.TextObjectCategory
                                                                    and $projection.TextObjectType     = _TextObjectType.TextObjectType
  association [1..1] to I_Language           as _Language           on  $projection.Language = _Language.Language
  association [1..1] to I_CustMgmtBusObjType as _ServiceObjType     on  $projection.ServiceObjectType = _ServiceObjType.BusinessObjectType
{
  key ServiceDocumentText.text_uuid    as ServiceDocumentLongTextUUID,
      @ObjectModel.foreignKey.association: '_TextObjectCategory'
      ServiceDocumentText.text_object  as TextObjectCategory,
      @ObjectModel.foreignKey.association: '_TextObjectType'
      ServiceDocumentText.text_id      as TextObjectType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language:true
      ServiceDocumentText.language     as Language,
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceDocumentText.objtype_h    as ServiceObjectType,
      ServiceDocumentText.object_id    as ServiceDocument,
      ServiceDocumentText.number_int   as ServiceDocumentItem,
      @EndUserText: { label: 'Item Long Text', quickInfo: 'Long Text' } 
      ServiceDocumentText.text_content as ServiceDocumentLongText,
      ServiceDocumentText.mimetype     as SrvcDocLongTextMimeType,
      _TextObjectCategory,
      _TextObjectType,
      _Language,
      _ServiceObjType
}
where
  ServiceDocumentText.text_object = 'CRM_ORDERI'
```
