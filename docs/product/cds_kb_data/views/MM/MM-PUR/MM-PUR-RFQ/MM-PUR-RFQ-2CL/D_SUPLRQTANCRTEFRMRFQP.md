---
name: D_SUPLRQTANCRTEFRMRFQP
description: "D Suplrqtancrtefrmrfqp"
semantic_vi: "View D_SUPLRQTANCRTEFRMRFQP hiển thị dữ liệu trích dẫn nhà cung cấp cho yêu cầu trích dẫn giá trong SAP MM-PUR-RFQ-2CL. Nó được sử dụng để truy cập và quản lý trích dẫn nhà cung cấp cho mục đích mua sắm."
keywords:
  - "supplier quotation"
  - "trích dẫn nhà cung cấp"
  - "request for quotation"
  - "yêu cầu trích dẫn giá"
  - "sap mm-pur-rfq-2cl"
  - "purchasing"
  - "mua sắm"
  - "ekko"
  - "purchase order"
  - "đơn mua hàng"
  - "rfq"
semantic_en: "The D_SUPLRQTANCRTEFRMRFQP view exposes supplier quotation data for a request for quotation in SAP MM-PUR-RFQ-2CL. It is used to access and manage supplier quotations for procurement purposes."
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
# D_SUPLRQTANCRTEFRMRFQP

**D Suplrqtancrtefrmrfqp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequestForQuotation` |  | |  | `vdm_requestforquotation` |  |  |
| `Supplier` |  | |  | `md_supplier` |  |  |
| `Language` |  | |  | `spras` |  |  |
| `BindingPeriodValidityEndDate` |  | |  | `ebndt` |  |  |
| `SupplierQuotationExternalID` |  | |  | `angnr` |  |  |
| `QuotationSubmissionDate` |  | |  | `ihran` |  |  |
| `FollowOnDocumentCategory` |  | |  | `followondoccat` |  |  |
| `PurgDocFollowOnDocumentType` |  | |  | `followondoctype` |  |  |
| `D_SuplrQtanCrteFrmRFQItemP` |  | |  | `_Items : composition [0..*] of D_SuplrQtanCrteFrmRFQItemP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Supplr Qtn Crte from RFQ Item Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define root abstract entity D_SuplrQtanCrteFrmRFQP {


RequestForQuotation :   vdm_requestforquotation ;
Supplier    : md_supplier ;
Language   : spras ;
BindingPeriodValidityEndDate  : ebndt ;
SupplierQuotationExternalID :   angnr; 
QuotationSubmissionDate :   ihran ;
FollowOnDocumentCategory : followondoccat;
PurgDocFollowOnDocumentType :   followondoctype;
 _Items                     : composition [0..*] of D_SuplrQtanCrteFrmRFQItemP;   
 
}
```
