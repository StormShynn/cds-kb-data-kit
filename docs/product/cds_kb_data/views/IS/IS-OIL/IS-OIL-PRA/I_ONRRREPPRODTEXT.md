---
name: I_ONRRREPPRODTEXT
description: "ONRR Reported Product - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRREPPRODTEXT')/$value
semantic_en: "ONRR Reported Product - Text"
semantic_vi: "ONRR Reported Product - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "onrr"
  - "reported"
  - "product"
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
# I_ONRRREPPRODTEXT

**ONRR Reported Product - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRREPPRODTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ONRRReportedProduct` | ✓ | |  | `cast (domvalue_l as /pra/fp_product_code )` | `CHAR(2)` | ONRR-2014 - Product Code |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `ONRRReportedProductName` |  | |  | `cast (ddtext as oiu_vdm_onrr_product_code )` | `CHAR(60)` | ONRR Reproted Product Code Text |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRREPPRODTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRREPPRODTEXT')/$value)*

```abap
@EndUserText.label: 'ONRR Reported Product - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVONRRREPPRODT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'ONRRReportedProduct'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_ONRRRepProdText
  as select from dd07t
{
  key cast (domvalue_l as /pra/fp_product_code )                                   as ONRRReportedProduct,
      @Semantics.language
  key cast( ddlanguage as spras )                                                  as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_onrr_product_code )                                  as ONRRReportedProductName
}
where
      domname  = 'OIUREP_MMS_PRODUCT_CODE'
  and as4local = 'A';
```
