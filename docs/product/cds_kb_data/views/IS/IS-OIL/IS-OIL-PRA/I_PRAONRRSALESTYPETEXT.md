---
name: I_PRAONRRSALESTYPETEXT
description: "PRA ONRR Sales Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAONRRSALESTYPETEXT')/$value
semantic_en: "PRA ONRR Sales Type - Text"
semantic_vi: "PRA ONRR Sales Type - Text — CDS view giao diện dựa trên oiurep_salesty_t."
keywords:
  - "pra"
  - "onrr"
  - "sales"
  - "type"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAONRRSALESTYPETEXT

**PRA ONRR Sales Type - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAONRRSALESTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ONRRSalesType` | ✓ | |  | `cast (sales_type_cd as /pra/fp_sales_type_code )` | `CHAR(4)` | ONRR-2014 - Sales Type Code |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ONRRSalesTypeName` |  | |  | `cast (description as oiu_vdm_onrr_sales_type_name )` | `CHAR(50)` | General Description - 50 Characters |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAONRRSALESTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAONRRSALESTYPETEXT')/$value)*

```abap
@EndUserText.label: 'PRA ONRR Sales Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVONRRSLSTYPET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'ONRRSalesType'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRAONRRSalesTypeText
  as select from oiurep_salesty_t

{
  key cast (sales_type_cd as /pra/fp_sales_type_code )                                                                as ONRRSalesType,
      @Semantics.language
  key spras                                                                                                           as Language,
      @Semantics.text
      cast (description as oiu_vdm_onrr_sales_type_name )                                                             as ONRRSalesTypeName
}
```
