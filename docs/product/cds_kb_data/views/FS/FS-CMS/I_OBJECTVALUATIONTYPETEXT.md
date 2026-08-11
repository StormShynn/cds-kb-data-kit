---
name: I_OBJECTVALUATIONTYPETEXT
description: "Object Valuation Type - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTVALUATIONTYPETEXT')/$value
semantic_en: "Object Valuation Type - Text"
semantic_vi: "Object Valuation Type - Text — CDS view giao diện dựa trên tcms_oms_valty_t."
keywords:
  - "object"
  - "valuation"
  - "type"
  - "text"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_OBJECTVALUATIONTYPETEXT

**Object Valuation Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTVALUATIONTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectValuationType` | ✓ | |  | `value_type` | `CHAR(6)` | Value Type |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `ObjectValuationTypeText` |  | |  | `name` | `CHAR(40)` | Value Name |
| `_Language` | | ✓ | | | | |
| `_ObjectValuationType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ObjectValuationType` | `I_ObjectValuationType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTVALUATIONTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTVALUATIONTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'IOBJVALTNTYPETXT',
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
    representativeKey: 'ObjectValuationType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Object Valuation Type - Text'
define view I_ObjectValuationTypeText
  as select from tcms_oms_valty_t
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
  association [0..1] to I_ObjectValuationType as _ObjectValuationType on $projection.ObjectValuationType = _ObjectValuationType.ObjectValuationType
{
      @ObjectModel.foreignKey.association: '_ObjectValuationType'
  key value_type as ObjectValuationType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language   as Language,
      @Semantics.text: true
      name       as ObjectValuationTypeText,

      _Language,
      _ObjectValuationType
}
```
