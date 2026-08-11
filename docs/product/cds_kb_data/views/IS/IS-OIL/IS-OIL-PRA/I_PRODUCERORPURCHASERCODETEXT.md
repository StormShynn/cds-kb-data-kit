---
name: I_PRODUCERORPURCHASERCODETEXT
description: "Producer Or Purchaser Code - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCERORPURCHASERCODETEXT')/$value
semantic_en: "Producer Or Purchaser Code - Text"
semantic_vi: "Producer Or Purchaser Code - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "producer"
  - "purchaser"
  - "code"
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
# I_PRODUCERORPURCHASERCODETEXT

**Producer Or Purchaser Code - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCERORPURCHASERCODETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProducerOrPurchaserCode` | ✓ | |  | `cast (domvalue_l as oiux3_producer_purchaser_ind )` | `CHAR(1)` | Producer or Purchaser |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `ProducerOrPurchaserCodeName` |  | |  | `cast (ddtext as oiu_vdm_prod_or_purch_name )` | `CHAR(60)` | Producer or Purchaser Code Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCERORPURCHASERCODETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCERORPURCHASERCODETEXT')/$value)*

```abap
@EndUserText.label: 'Producer Or Purchaser Code - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVPRODORPURCHT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'ProducerOrPurchaserCode'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_ProducerOrPurchaserCodeText
  as select from dd07t
{
  key cast (domvalue_l as oiux3_producer_purchaser_ind )  as ProducerOrPurchaserCode,
      @Semantics.language
  key cast( ddlanguage as spras )                         as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_prod_or_purch_name )        as ProducerOrPurchaserCodeName
}
where
      domname  = 'OIUX3_PRODUCER_PURCHASER_IND'
  and as4local = 'A';
```
