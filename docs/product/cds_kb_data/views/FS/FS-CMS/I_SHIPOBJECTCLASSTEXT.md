---
name: I_SHIPOBJECTCLASSTEXT
description: "Ship Class - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SHIPOBJECTCLASSTEXT')/$value
semantic_en: "Ship Class - Text"
semantic_vi: "Ship Class - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "ship"
  - "class"
  - "text"
  - "language"
  - "object"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_SHIPOBJECTCLASSTEXT

**Ship Class - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SHIPOBJECTCLASSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `ShipObjectClass` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_shp_class preserving type )` | `CHAR(2)` | Specifies whether the Ship is Sea Ship or Inland Ship |
| `ShipObjectClassText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_ShipObjectClass` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ShipObjectClass` | `I_ShipObjectClass` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SHIPOBJECTCLASSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SHIPOBJECTCLASSTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ISHIPOBJCLASSTXT',
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
    representativeKey: 'ShipObjectClass'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Ship Class - Text'
define view I_ShipObjectClassText
  as select from dd07t
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language
  association [0..1] to I_ShipObjectClass as _ShipObjectClass on $projection.ShipObjectClass = _ShipObjectClass.ShipObjectClass
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                              as Language,
      @ObjectModel.foreignKey.association: '_ShipObjectClass'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_shp_class preserving type ) as ShipObjectClass,
      @Semantics.text: true
      ddtext                                                                  as ShipObjectClassText,

      _Language,
      _ShipObjectClass
}
where
      dd07t.domname  = 'CMS_SHP_CLASS'
  and dd07t.as4local = 'A'
```
