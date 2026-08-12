---
name: I_PRATAXWYPRODUCTTYPETEXT
description: "PRA Tax WY Product Type Name - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXWYPRODUCTTYPETEXT')/$value
semantic_en: "PRA Tax WY Product Type Name - Text"
semantic_vi: "PRA Tax WY Product Type Name - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "pra"
  - "tax"
  - "product"
  - "type"
  - "name"
  - "text"
  - "language"
tags:
  - IS
  - bo:material
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - product
---
# I_PRATAXWYPRODUCTTYPETEXT

**PRA Tax WY Product Type Name - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXWYPRODUCTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductType` | ✓ | |  | `cast (domvalue_l as oiurep_oil_gas_ind )` | `CHAR(1)` | Oil and Gas Indicator |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `ProductTypeName` |  | |  | `cast (ddtext as oiu_vdm_product_type_name )` | `CHAR(60)` | PRA Tax Wyoming Product Type Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXWYPRODUCTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXWYPRODUCTTYPETEXT')/$value)*

```abap
@EndUserText.label: 'PRA Tax WY Product Type Name - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVPRODUCTTYPET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ProductType'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
define view I_PRATaxWYProductTypeText
  as select from dd07t
{
  key cast (domvalue_l as oiurep_oil_gas_ind )                                   as ProductType,
      @Semantics.language
  key cast( ddlanguage as spras )                                                as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_product_type_name )                                as ProductTypeName
      //New Data element to be created for the above ddtext field
}
where
      domname  = 'OIUREP_OIL_GAS_IND'
  and as4local = 'A';
```
