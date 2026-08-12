---
name: I_ROYALTYPAYTDISTRIBUTEETYPE
description: "Royalty Payment Distributee Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ROYALTYPAYTDISTRIBUTEETYPE')/$value
semantic_en: "Royalty Payment Distributee Type"
semantic_vi: "Royalty Payment Distributee Type — CDS view giao diện dựa trên Royalty Payment Distributee Type."
keywords:
  - "royalty"
  - "payment"
  - "distributee"
  - "type"
  - "payt"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - payment
---
# I_ROYALTYPAYTDISTRIBUTEETYPE

**Royalty Payment Distributee Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ROYALTYPAYTDISTRIBUTEETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RoyaltyPaytDistributeeType` | ✓ | |  | `distributee_cd` | `NUMC(3)` | ONRR-2014 - Distributee Code |
| `RoyaltyPaytDistributeeTypeName` |  | |  | `cast (distributee_desc as oiu_vdm_roy_pay_dis_type_name )` | `CHAR(30)` | Distributee Code Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ROYALTYPAYTDISTRIBUTEETYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ROYALTYPAYTDISTRIBUTEETYPE')/$value)*

```abap
@EndUserText.label: 'Royalty Payment Distributee Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVROPAYDISTY'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'RoyaltyPaytDistributeeType'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'ONRRDistributeeCode'

define view I_RoyaltyPaytDistributeeType
  as select from /pra/c_fp_dis_cd
{
      @ObjectModel.text.element:  [ 'RoyaltyPaytDistributeeTypeName' ]
  key distributee_cd                                                                as RoyaltyPaytDistributeeType,
      @Semantics.text: true
      cast (distributee_desc as oiu_vdm_roy_pay_dis_type_name )                     as RoyaltyPaytDistributeeTypeName


}
```
