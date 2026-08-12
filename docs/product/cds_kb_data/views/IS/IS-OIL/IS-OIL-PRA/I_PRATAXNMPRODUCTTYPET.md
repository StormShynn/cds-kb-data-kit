---
name: I_PRATAXNMPRODUCTTYPET
description: "Tax New Mexico Product Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMPRODUCTTYPET')/$value
semantic_en: "Tax New Mexico Product Type - Text"
semantic_vi: "Tax New Mexico Product Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "tax"
  - "new"
  - "mexico"
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
# I_PRATAXNMPRODUCTTYPET

**Tax New Mexico Product Type - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMPRODUCTTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductType` | ✓ | |  | `cast (domvalue_l as oiux8_nm_product_code )` | `CHAR(2)` | Tax 2.0 - NM - Product Code |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `ProductTypeName` |  | |  | `cast (ddtext as oiu_vdm_nm_prod_typ_name )` | `CHAR(60)` | New Mexico Product Type Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMPRODUCTTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMPRODUCTTYPET')/$value)*

```abap
@EndUserText.label: 'Tax New Mexico Product Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXNMPRODTPT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'ProductType'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRATaxNMProductTypeT
  as select from dd07t
{
  key cast (domvalue_l as oiux8_nm_product_code )              as ProductType,
      @Semantics.language
  key cast( ddlanguage as spras )                              as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_nm_prod_typ_name )               as ProductTypeName
}
where
      domname  = 'OIUX8_NM_PRODUCT_CODE'
  and as4local = 'A';
```
