---
name: I_ASSIGNEDORDERCATEGORYTXT
description: "Order Category for ETO - Text"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSIGNEDORDERCATEGORYTXT')/$value
semantic_en: "Order Category for ETO - Text"
semantic_vi: "Order Category for ETO - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "order"
  - "category"
  - "for"
  - "eto"
  - "text"
  - "language"
  - "name"
tags:
  - CO
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - order
---
# I_ASSIGNEDORDERCATEGORYTXT

**Order Category for ETO - Text**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSIGNEDORDERCATEGORYTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `ETOOrdCategory` | ✓ | |  | `cast( dd07t.domvalue_l as fins_ordcategory )` | `CHAR(2)` | Order Category |
| `ETOOrdCategoryName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSIGNEDORDERCATEGORYTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSIGNEDORDERCATEGORYTXT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Order Category for ETO - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
}
@VDM.viewType: #BASIC
@ObjectModel.modelingPattern:#LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ETOOrdCategory'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT]
                                     
//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.internalName:#LOCAL 

define view entity I_AssignedOrderCategoryTxt  as select from dd07t

association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
  key cast( dd07t.domvalue_l as fins_ordcategory ) as ETOOrdCategory,
  @Semantics.text: true
//  cast( dd07t.ddtext as fis_order_text preserving type ) as ETOOrdCategoryName,
  dd07t.ddtext as ETOOrdCategoryName,
  _Language
  
}
where dd07t.domname = 'FINS_ORDCATEGORY' and dd07t.as4local = 'A';
```
