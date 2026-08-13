---
name: D_SUPLRQTANCRTEFRMRFQALLITMSP
description: "D Suplrqtancrtefrmrfqallitmsp"
semantic_vi: "View D_SUPLRQTANCRTEFRMRFQALLITMSP hiển thị dữ liệu trích dẫn nhà cung cấp cho tất cả các mặt hàng trong một yêu cầu trích dẫn giá, có thể được sử dụng để phân tích và so sánh trích dẫn của nhà cung cấp."
keywords:
  - "supplier quotation"
  - "trích dẫn nhà cung cấp"
  - "request for quotation"
  - "yêu cầu trích dẫn giá"
  - "purchase requisition"
  - "yêu cầu mua hàng"
  - "rfq"
  - "ekko"
  - "mm-pur-rfq"
  - "sourcing and procurement"
semantic_en: "The D_SUPLRQTANCRTEFRMRFQALLITMSP view exposes supplier quotation data for all items in a request for quotation, which can be used to analyze and compare supplier quotes."
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# D_SUPLRQTANCRTEFRMRFQALLITMSP

**D Suplrqtancrtefrmrfqallitmsp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequestForQuotation` |  | |  | `ebeln` |  |  |
| `Supplier` |  | |  | `md_supplier` |  |  |
| `QuotationSubmissionDate` |  | |  | `ihran` |  |  |

## Source Code

```abap
@EndUserText.label: 'Supplr Qtn Crte from All RFQ Items Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define root abstract entity D_SuplrQtanCrteFrmRFQAllItmsP{
  RequestForQuotation : ebeln;
  Supplier : md_supplier ;
  QuotationSubmissionDate : ihran ;
}
```
