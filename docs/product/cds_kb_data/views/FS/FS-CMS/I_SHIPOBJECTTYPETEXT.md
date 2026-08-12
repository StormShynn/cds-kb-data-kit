---
name: I_SHIPOBJECTTYPETEXT
description: "Ship Type - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SHIPOBJECTTYPETEXT')/$value
semantic_en: "Ship Type - Text"
semantic_vi: "Ship Type - Text — CDS view giao diện dựa trên tcms_shp_typ_t."
keywords:
  - "ship"
  - "type"
  - "text"
  - "object"
  - "language"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_SHIPOBJECTTYPETEXT

**Ship Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SHIPOBJECTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ShipObjectType` | ✓ | |  | `shp_type` | `CHAR(6)` | Ship Type |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `ShipObjectTypeText` |  | |  | `shp_typ_name` | `CHAR(40)` | Ship type name in a specified language |
| `_Language` | | ✓ | | | | |
| `_ShipObjectType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ShipObjectType` | `I_ShipObjectType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SHIPOBJECTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SHIPOBJECTTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ISHIPOBJTYPETXT',
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
    representativeKey: 'ShipObjectType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Ship Type - Text'
define view I_ShipObjectTypeText
  as select from tcms_shp_typ_t
  association [0..1] to I_Language       as _Language       on $projection.Language = _Language.Language
  association [0..1] to I_ShipObjectType as _ShipObjectType on $projection.ShipObjectType = _ShipObjectType.ShipObjectType
{
      @ObjectModel.foreignKey.association: '_ShipObjectType'
  key shp_type     as ShipObjectType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language     as Language,
      @Semantics.text: true
      shp_typ_name as ShipObjectTypeText,

      _Language,
      _ShipObjectType
}
```
