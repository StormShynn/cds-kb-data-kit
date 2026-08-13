---
name: D_OUTBDELIVCRTDLVITMFRMSLSDOCP
description: "D Outbdelivcrtdlvitmfrmslsdocp"
semantic_vi: "View này hiển thị các mặt hàng vận chuyển cho một ngày chọn vận chuyển cụ thể, được sử dụng để lấy các mặt hàng cần vận chuyển vào ngày cụ thể."
keywords:
  - "delivery"
  - "delivery item"
  - "delivery selection date"
  - "sap"
  - "cds view"
  - "logistics execution"
  - "le-shp-api-2cl"
  - "vận chuyển"
  - "đơn vận chuyển"
  - "ngày chọn vận chuyển"
semantic_en: "This view exposes delivery items for a specific delivery selection date, used to retrieve the items to be delivered on a particular date."
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
# D_OUTBDELIVCRTDLVITMFRMSLSDOCP

**D Outbdelivcrtdlvitmfrmslsdocp**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliverySelectionDate` |  | |  | `lfdat_a` |  |  |

## Source Code

```abap
@EndUserText.label: 'Outb Deliv Crt Dlv Itm Frm Sls Doc P'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_OutbDelivCrtDlvItmFrmSlsDocP
{
  DeliverySelectionDate     : lfdat_a;
  _ReferenceSDDocumentItem : association [1..*] to D_OutbDelivCrteFrmSlsDocItemP on 1 = 0;
}
```
