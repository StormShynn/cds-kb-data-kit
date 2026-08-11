---
name: I_PRODUCTBALANCINGAGREEMENT
description: "Product Balancing Agreement"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTBALANCINGAGREEMENT')/$value
semantic_en: "Product Balancing Agreement"
semantic_vi: "Product Balancing Agreement — CDS view giao diện dựa trên oiubl01_pba."
keywords:
  - "product"
  - "balancing"
  - "agreement"
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
# I_PRODUCTBALANCINGAGREEMENT

**Product Balancing Agreement**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTBALANCINGAGREEMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductBalancingAgreement` | ✓ | |  | `pba_no` | `CHAR(10)` | PBA Number |
| `ProductBalancingAgreementName` |  | |  | `cast( pba_de as oiu_vdm_pba_name)` | `CHAR(35)` | Product Balancing Agreement Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTBALANCINGAGREEMENT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTBALANCINGAGREEMENT')/$value)*

```abap
@EndUserText.label: 'Product Balancing Agreement'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVPBA'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ProductBalancingAgreement'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'PRAProductBalancingAgreement'

define view I_ProductBalancingAgreement
  as select from oiubl01_pba
{
      @ObjectModel.text.element:  [ 'ProductBalancingAgreementName' ]
  key pba_no                            as ProductBalancingAgreement,
      @Semantics.text: true
      cast( pba_de as oiu_vdm_pba_name) as ProductBalancingAgreementName
}
```
