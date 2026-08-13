---
name: D_INBDELIVCRTEDELIVFRMPURGDOCP
description: "D Inbdelivcrtedelivfrmpurgdocp"
semantic_vi: "View D_INBDELIVCRTEDELIVFRMPURGDOCP hiển thị thông tin về chứng từ vận chuyển từ góc độ nhà cung cấp, bao gồm ngày giờ vận chuyển và phương tiện vận chuyển. Nó được sử dụng để lấy dữ liệu cho chứng từ vận chuyển được tạo bởi nhà cung cấp."
keywords:
  - "delivery document"
  - "chứng từ vận chuyển"
  - "supplier"
  - "nhà cung cấp"
  - "delivery date"
  - "ngày vận chuyển"
  - "means of transport"
  - "phương tiện vận chuyển"
  - "sap logistics execution"
  - "logistics execution"
  - "ekko"
  - "công ty logistics"
semantic_en: "The D_INBDELIVCRTEDELIVFRMPURGDOCP CDS view exposes delivery document information from the supplier's perspective, including delivery dates, times, and means of transport. It is used to retrieve data for delivery documents created by suppliers."
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
  - component:LE-SHP-API-2CL
  - lob:Logistics Execution
---
# D_INBDELIVCRTEDELIVFRMPURGDOCP

**D Inbdelivcrtedelivfrmpurgdocp**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` |  | |  | `lifnr` |  |  |
| `DeliveryDate` |  | |  | `lfdat_v` |  |  |
| `DeliveryTime` |  | |  | `lfuhr` |  |  |
| `DeliveryDocumentBySupplier` |  | |  | `lifex` |  |  |
| `MeansOfTransportType` |  | |  | `traty` |  |  |
| `MeansOfTransport` |  | |  | `traid` |  |  |

## Source Code

```abap
@EndUserText.label: 'Inb Deliv Crte Deliv Frm Purg Doc Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_InbDelivCrteDelivFrmPurgDocP
{
  Supplier                   : lifnr;
  DeliveryDate               : lfdat_v;
  DeliveryTime               : lfuhr;
  DeliveryDocumentBySupplier : lifex;
  MeansOfTransportType       : traty;
  MeansOfTransport           : traid;
  _ReferencePurgDocumentItem  : association [1..*] to D_InbDelivCrteFrmPurgDocItemP on 1 = 0;
}
```
