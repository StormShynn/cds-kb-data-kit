---
name: I_PRODUCTGROUPTEXT
description: "Product Group - Text"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTGROUPTEXT')/$value
semantic_en: "Product Group - Text"
semantic_vi: "Product Group - Text — CDS view giao diện dựa trên t023t."
keywords:
  - "product"
  - "group"
  - "text"
  - "material"
  - "language"
  - "name"
tags:
  - LO
  - bo:material
  - component:LO-MD-MM-2CL
  - interface-view
  - LO-MD
  - LO-MD-MM
  - LO-MD-MM-2CL
  - lob:logistics general
  - lob:sourcing & procurement
  - product
---
# I_PRODUCTGROUPTEXT

**Product Group - Text**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTGROUPTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialGroup` | ✓ | |  | `cast(t023t.matkl as productgroup preserving type )` | `CHAR(9)` | Product Group |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `MaterialGroupName` |  | |  | `cast(t023t.wgbez as productgroupname preserving type )` | `CHAR(20)` | Product Group Description |
| `MaterialGroupText` |  | |  | `wgbez60` | `CHAR(60)` | Description of the Material Group |
| `_MaterialGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaterialGroup` | `I_ProductGroup` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTGROUPTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTGROUPTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPRODUCTGRPTXT'
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@VDM.lifecycle.status: #DEPRECATED
@VDM.lifecycle.successor: 'I_ProductGroupText_2'
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Product Group - Text'
@ObjectModel.representativeKey: 'MaterialGroup'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY,
                                      #LANGUAGE_DEPENDENT_TEXT
]
define view I_ProductGroupText
  as select from t023t
  association [0..1] to I_ProductGroup as _MaterialGroup on $projection.MaterialGroup = _MaterialGroup.MaterialGroup
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.foreignKey.association: '_MaterialGroup'
  key cast(t023t.matkl as productgroup preserving type )     as MaterialGroup,
      @Semantics.language: true
  key t023t.spras                                            as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      cast(t023t.wgbez as productgroupname preserving type ) as MaterialGroupName,
      @Semantics.text: true
      t023t.wgbez60                                          as MaterialGroupText,
      _MaterialGroup
}
```
