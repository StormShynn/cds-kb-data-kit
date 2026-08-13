---
name: D_CEPUCOASLIOBJTOLGLTRNEXTP
description: "D Cepucoasliobjtolgltrnextp"
semantic_vi: "View này hiển thị dữ liệu vật tư đơn mua hàng cho các giao dịch pháp lý, cho phép bạn truy cập và xử lý vật tư đơn mua hàng trong ngữ cảnh giao dịch pháp lý. Nó được sử dụng trong xử lý giao dịch cho nguồn cung và quản lý mua hàng."
keywords:
  - "purchase order"
  - "đơn mua hàng"
  - "ekko"
  - "legal transaction"
  - "giao dịch pháp lý"
  - "transactional processing"
  - "xử lý giao dịch"
  - "sourcing & procurement"
  - "nguồn cung & quản lý mua hàng"
  - "mm-pur-hub-ctr-2cl"
semantic_en: "This view exposes purchase order item data for legal transactions, allowing you to access and process purchase order items in a legal transaction context. It is used in transactional processing for sourcing and procurement."
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - transactional-processing
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# D_CEPUCOASLIOBJTOLGLTRNEXTP

**D Cepucoasliobjtolgltrnextp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LegalTransaction` |  | |  | `lcm_legaltr_id` |  |  |

## Source Code

```abap
@EndUserText.label: 'Cntrl Pur Contr Assg Lgl Trans Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_CePuCoAsLiObjToLglTrnExtP {
    LegalTransaction : lcm_legaltr_id;    
}
```
