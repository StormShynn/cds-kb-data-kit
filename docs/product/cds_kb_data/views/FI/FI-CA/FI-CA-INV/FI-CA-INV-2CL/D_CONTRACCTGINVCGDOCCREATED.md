---
name: D_CONTRACCTGINVCGDOCCREATED
description: "D Contracctginvcgdoccreated"
semantic_vi: "View D_CONTRACCTGINVCGDOCCREATED hiển thị các tài liệu hóa đơn từ hợp đồng được tạo trong thành phần FI-CA-INV-2CL của SAP FI-CA. Nó được sử dụng để lấy dữ liệu về các tài liệu hóa đơn được tạo từ hợp đồng."
keywords:
  - "contract account"
  - "invoice document"
  - "fi-ca-inv-2cl"
  - "sap fi-ca"
  - "hợp đồng"
  - "tài liệu hóa đơn"
  - "thành phần fi-ca-inv-2cl"
  - "sap fi-ca-inv-2cl"
  - "đơn vị kế toán"
  - "tài khoản hợp đồng"
semantic_en: "The D_CONTRACCTGINVCGDOCCREATED view exposes contract account invoice documents created in SAP FI-CA-INV-2CL component. It is used to retrieve data about invoice documents created from contracts."
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# D_CONTRACCTGINVCGDOCCREATED

**D Contracctginvcgdoccreated**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ContractAccount` |  | |  | `vkont_kk` |  |  |
| `D_CAInvcgDocCreatedSourceDoc` |  | |  | `_SourceDocument : composition [0..*] of D_CAInvcgDocCreatedSourceDoc` |  |  |

## Source Code

```abap
@EndUserText.label: 'Invoicing Document Created'
@ObjectModel: {
  sapObjectNodeType.name: 'ContrAcctgInvoicingDocument',
  supportedCapabilities: [#DATA_STRUCTURE]
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions
define root abstract entity D_ContrAcctgInvcgDocCreated
{
  ContractAccount : vkont_kk;
  _SourceDocument : composition [0..*] of D_CAInvcgDocCreatedSourceDoc;
}
```
