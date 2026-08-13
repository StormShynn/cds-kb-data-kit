---
name: D_OUTBDELIVCRTEFRMSLSDOCITEMP
description: "D Outbdelivcrtefrmslsdocitemp"
semantic_vi: "View D Outbdelivcrtefrmslsdocitemp hiển thị các mục đơn hàng vận chuyển cho dịch vụ vận chuyển bên ngoài, có thể được sử dụng để lấy hoặc cập nhật thông tin chi tiết về mục hàng trong logistics thực thi."
keywords:
  - "delivery document"
  - "đơn vận chuyển"
  - "logistics execution"
  - "ekko"
  - "external freight service"
  - "dịch vụ vận chuyển bên ngoài"
  - "item-level"
  - "component:le-shp-api-2cl"
  - "lob:logistics execution"
  - "le-shp-api"
  - "le-shp"
semantic_en: "The D Outbdelivcrtefrmslsdocitemp view exposes delivery document items for external freight services, which can be used to retrieve or update item-level information in logistics execution."
app_component: LE-SHP-API-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-API
  - item-level
  - component:LE-SHP-API-2CL
  - lob:Logistics Execution
---
# D_OUTBDELIVCRTEFRMSLSDOCITEMP

**D Outbdelivcrtefrmslsdocitemp**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReferenceSDDocument` |  | |  | `vbeln` |  |  |
| `ReferenceSDDocumentItem` |  | |  | `posnr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Outb Deliv Crte Frm Sls Doc Item P'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_OutbDelivCrteFrmSlsDocItemP {
    ReferenceSDDocument : vbeln;
    ReferenceSDDocumentItem : posnr;
}
```
