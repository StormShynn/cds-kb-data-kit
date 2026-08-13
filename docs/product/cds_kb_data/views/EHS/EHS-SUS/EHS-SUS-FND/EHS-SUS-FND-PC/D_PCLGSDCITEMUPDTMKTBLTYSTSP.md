---
name: D_PCLGSDCITEMUPDTMKTBLTYSTSP
description: "D Pclgsdcitemupdtmktbltystsp"
semantic_vi: "View này hiển thị trạng thái khả dụng của sản phẩm tuân thủ tại cấp hàng hóa, có thể được sử dụng để theo dõi và quản lý trạng thái khả dụng của hàng hóa trong thành phần EHS-SUS-FND-PC."
keywords:
  - "marketability status"
  - "trạng thái khả dụng"
  - "compliance product"
  - "sản phẩm tuân thủ"
  - "item-level"
  - "cấp hàng hóa"
  - "ehs-sus-fnd-pc"
  - "ekko"
  - "ehs"
  - "sus"
  - "fnd-pc"
semantic_en: "This view exposes item-level marketability status data for compliance products, which can be used to track and manage marketability status of items in the EHS-SUS-FND-PC component."
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-FND
  - item-level
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# D_PCLGSDCITEMUPDTMKTBLTYSTSP

**D Pclgsdcitemupdtmktbltystsp**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdCmplncMarketabilityStatus` |  | |  | `ehfnd_cci_logistics_status` |  |  |

## Source Code

```abap
@EndUserText.label: 'Product Marketability Status Parameters'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
define root abstract entity D_PCLgsDcItemUpdtMktbltyStsP
{  
  ProdCmplncMarketabilityStatus  : ehfnd_cci_logistics_status;
}
```
