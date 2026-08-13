---
name: D_CABILLGDOCCREATEDSOURCETRANS
description: "D Cabillgdoccreatedsourcetrans"
semantic_vi: "View này hiển thị các giao dịch nguồn tạo tài liệu hóa đơn cho kế toán phải trả. Nó được sử dụng để phân tích và quản lý nguồn của hóa đơn được tạo trong hệ thống."
keywords:
  - "invoice"
  - "đơn hóa đơn"
  - "accounts payable"
  - "giao dịch nguồn"
  - "tài liệu hóa đơn"
  - "sourcetrans"
  - "cds view"
  - "fi-ca-inv-2cl"
  - "finance"
  - "ke toan phai tra"
semantic_en: "This view exposes invoice document creation source transactions for accounts payable. It is used to analyze and manage the source of invoices created in the system."
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
# D_CABILLGDOCCREATEDSOURCETRANS

**D Cabillgdoccreatedsourcetrans**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABllbleItmSourceTransType` |  | |  | `srctatype_kk` |  |  |
| `CABllbleItmSourceTransId` |  | |  | `srctaid_kk` |  |  |
| `_Parent` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Billing Document Created - Source Trans'
@ObjectModel: {
  sapObjectNodeType.name: 'ContrAcctgBillingDocument',
  supportedCapabilities: [#DATA_STRUCTURE]
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions
define abstract entity D_CABillgDocCreatedSourceTrans
{
  CABllbleItmSourceTransType : srctatype_kk;
  CABllbleItmSourceTransId   : srctaid_kk;
  _Parent                    : association to parent D_ContrAcctgBlgDocumentCreated;
}
```
