---
name: I_OBJECTREFERENCESYSTEMTEXT
description: "Object Reference System - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTREFERENCESYSTEMTEXT')/$value
semantic_en: "Object Reference System - Text"
semantic_vi: "Object Reference System - Text — CDS view giao diện dựa trên tcms_obj_sys_t."
keywords:
  - "object"
  - "reference"
  - "system"
  - "text"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_OBJECTREFERENCESYSTEMTEXT

**Object Reference System - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTREFERENCESYSTEMTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectReferenceSystem` | ✓ | |  | `objsystemid` | `CHAR(6)` | Object System Reference ID |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `ObjectReferenceSystemText` |  | |  | `name` | `CHAR(40)` | Object System Name |
| `_Language` | | ✓ | | | | |
| `_ObjectReferenceSystem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ObjectReferenceSystem` | `I_ObjectReferenceSystem` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTREFERENCESYSTEMTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTREFERENCESYSTEMTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'IOBJREFSYSTXT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    dataCategory: #TEXT,
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'ObjectReferenceSystem'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Object Reference System - Text'
define view I_ObjectReferenceSystemText
  as select from tcms_obj_sys_t
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
  association [0..1] to I_ObjectReferenceSystem as _ObjectReferenceSystem on $projection.ObjectReferenceSystem = _ObjectReferenceSystem.ObjectReferenceSystem
{
      @ObjectModel.foreignKey.association: '_ObjectReferenceSystem'
  key objsystemid as ObjectReferenceSystem,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language    as Language,
      @Semantics.text: true
      name        as ObjectReferenceSystemText,

      _Language,
      _ObjectReferenceSystem
}
```
