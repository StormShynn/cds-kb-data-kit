---
name: I_BUSINESSOBJTYPETEXT
description: "Business Object Type - Text"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSOBJTYPETEXT')/$value
semantic_en: "Business Object Type - Text"
semantic_vi: "Business Object Type - Text — CDS view giao diện dựa trên tojtt."
keywords:
  - "business"
  - "object"
  - "type"
  - "text"
  - "language"
  - "name"
  - "description"
tags:
  - LO
  - bo:salesorder
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
---
# I_BUSINESSOBJTYPETEXT

**Business Object Type - Text**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSOBJTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessObjectType` | ✓ | |  | `name` | `CHAR(10)` | Object type |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `BusinessObjectTypeName` |  | |  | `stext` | `CHAR(20)` | Name |
| `BusinessObjectTypeDescription` |  | |  | `ntext` | `CHAR(80)` | Description |
| `_Language` | | ✓ | | | | |
| `_BusinessObjectType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_BusinessObjectType` | `I_BusinessObjType` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSOBJTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSOBJTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Business Object Type - Text'
//@Analytics.dataCategory: #TEXT
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK
@AbapCatalog.sqlViewName: 'IBOTYPET'
@ObjectModel.representativeKey: 'BusinessObjectType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_BusinessObjTypeText
  as select from tojtt

  association [0..1] to I_Language        as _Language           on $projection.Language = _Language.Language
  association [1..1] to I_BusinessObjType as _BusinessObjectType on $projection.BusinessObjectType = _BusinessObjectType.BusinessObjectType

{

  key name     as BusinessObjectType,
      @Semantics.language: true
  key language as Language,
      @Semantics.text: true
      stext    as BusinessObjectTypeName,
      @Semantics.text: true
      ntext    as BusinessObjectTypeDescription,
      _BusinessObjectType,
      _Language

}
```
