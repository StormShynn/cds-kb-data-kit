---
name: I_PRAROYTYWYPRODUCTTYPET
description: "Royalty Wyoming Product Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYWYPRODUCTTYPET')/$value
semantic_en: "Royalty Wyoming Product Type - Text"
semantic_vi: "Royalty Wyoming Product Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "royalty"
  - "wyoming"
  - "product"
  - "type"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - bo:material
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - product
---
# I_PRAROYTYWYPRODUCTTYPET

**Royalty Wyoming Product Type - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYWYPRODUCTTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductType` | ✓ | |  | `cast (domvalue_l as oiuy6_wy_product_code )` | `NUMC(3)` | Royalty 2.0 - Wyoming - Product Code |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `ProductTypeName` |  | |  | `cast (ddtext as oiu_vdm_wyoming_prod_typ_name )` | `CHAR(60)` | Wyoming Product Type Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYWYPRODUCTTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYWYPRODUCTTYPET')/$value)*

```abap
@EndUserText.label: 'Royalty Wyoming Product Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVROYWYPRODTPT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'ProductType'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRARoytyWYProductTypeT
  as select from dd07t
{
  key cast (domvalue_l as oiuy6_wy_product_code )              as ProductType,
      @Semantics.language
  key cast( ddlanguage as spras )                              as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_wyoming_prod_typ_name )          as ProductTypeName
}
where
      domname  = 'OIUY6_WY_PRODUCT_CODE'
  and as4local = 'A';
```
