---
name: D_BILLGDOCCRTEFRMEXTDATAIP
description: "D Billgdoccrtefrmextdataip"
semantic_vi: "View D_BILLGDOCCRTEFRMEXTDATAIP hiển thị dữ liệu ngoài liên quan đến hóa đơn và phiếu hoàn tiền trong thành phần bán hàng và phân phối. Nó được sử dụng để truy cập thông tin bổ sung về hóa đơn và phiếu hoàn tiền."
keywords:
  - "sales"
  - "distribution"
  - "billing"
  - "document"
  - "credit"
  - "memo"
  - "external"
  - "data"
  - "sap"
  - "sd"
  - "billgdoccrtefrmextdataip"
semantic_en: "The D_BILLGDOCCRTEFRMEXTDATAIP view exposes external data related to billing documents and credit memos in the sales and distribution component. It is used to access additional information about billing documents and credit memos."
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# D_BILLGDOCCRTEFRMEXTDATAIP

**D Billgdoccrtefrmextdataip**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReferenceLogicalSystem` |  | |  | `sdbil_odata_source_system` |  |  |

## Source Code

```abap
@EndUserText.label: 'Billing Document Create From External - Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define root abstract entity D_BillgDocCrteFrmExtDataIP
{
  ReferenceLogicalSystem : sdbil_odata_source_system; // Mandatory
  _BillableDocument      : association [1..*] to D_BlgDcCrteFrmExtBllbleDocIP on 1 = 0;

}
```
