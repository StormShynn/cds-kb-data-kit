---
name: I_PRODUCERORPURCHASERCODE
description: "Producer Or Purchaser Code"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCERORPURCHASERCODE')/$value
semantic_en: "Producer Or Purchaser Code"
semantic_vi: "Producer Or Purchaser Code — CDS view giao diện dựa trên dd07l."
keywords:
  - "producer"
  - "purchaser"
  - "code"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRODUCERORPURCHASERCODE

**Producer Or Purchaser Code**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCERORPURCHASERCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProducerOrPurchaserCode` | ✓ | |  | `cast (domvalue_l as oiux3_producer_purchaser_ind )` | `CHAR(1)` | Producer or Purchaser |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProducerOrPurchaserCodeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCERORPURCHASERCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCERORPURCHASERCODE')/$value)*

```abap
@EndUserText.label: 'Producer Or Purchaser Code'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVPRODORPURCH'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ProducerOrPurchaserCode'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRATaxProducerPurchaserCode'

define view I_ProducerOrPurchaserCode
  as select from dd07l
  association [0..*] to I_ProducerOrPurchaserCodeText as _Text on $projection.ProducerOrPurchaserCode = _Text.ProducerOrPurchaserCode
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as oiux3_producer_purchaser_ind ) as ProducerOrPurchaserCode,
      _Text
}
where
      domname  = 'OIUX3_PRODUCER_PURCHASER_IND'
  and as4local = 'A';
```
