---
name: D_OUTBDELIVCRTEDELIVFRMSLSDOCP
description: "D Outbdelivcrtedelivfrmslsdocp"
semantic_vi: "View D_OUTBDELIVCRTEDELIVFRMSLSDOCP hiển thị dữ liệu tạo đơn vận chuyển cho các công ty vận chuyển bên ngoài, được sử dụng khi tạo đơn vận chuyển cho các công ty vận chuyển bên ngoài."
keywords:
  - "delivery document"
  - "đơn vận chuyển"
  - "external delivery firm"
  - "công ty vận chuyển bên ngoài"
  - "sap logistics execution"
  - "logistics execution"
  - "ekko"
  - "shipping point"
  - "điểm giao hàng"
semantic_en: "The D_OUTBDELIVCRTEDELIVFRMSLSDOCP view exposes delivery document creation data for external delivery firms, used when creating delivery documents for external delivery firms."
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
# D_OUTBDELIVCRTEDELIVFRMSLSDOCP

**D Outbdelivcrtedelivfrmslsdocp**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ShippingPoint` |  | |  | `vstel` |  |  |
| `DeliverySelectionDate` |  | |  | `lfdat_a` |  |  |
| `DeliveryDocumentType` |  | |  | `lfart` |  |  |

## Source Code

```abap
@EndUserText.label: 'Outb Deliv Crte Deliv Frm Sls Doc Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_OutbDelivCrteDelivFrmSlsDocP
{
  ShippingPoint             : vstel;
  DeliverySelectionDate     : lfdat_a;
  DeliveryDocumentType      : lfart;
  _ReferenceSDDocumentItem : association [1..*] to D_OutbDelivCrteFrmSlsDocItemP on 1 = 0;
}
```
