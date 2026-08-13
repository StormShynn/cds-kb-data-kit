---
name: D_SUPLRINVCCREATEWITHTAXP
description: "D Suplrinvccreatewithtaxp"
semantic_vi: "View D_SUPLRINVCCREATEWITHTAXP hiển thị dữ liệu thuế giữ lại cho hóa đơn nhà cung cấp, được sử dụng khi tạo hoặc xử lý hóa đơn nhà cung cấp có thuế."
keywords:
  - "supplier invoice"
  - "hóa đơn nhà cung cấp"
  - "withholding tax"
  - "tax"
  - "invoice"
  - "hóa đơn"
  - "supplier"
  - "nhà cung cấp"
  - "sap mm"
  - "mm iv liv"
  - "lob sourcing & procurement"
semantic_en: "The D_SUPLRINVCCREATEWITHTAXP view exposes withholding tax data for supplier invoices, which is used when creating or processing supplier invoices with tax."
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-LIV
  - tax
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# D_SUPLRINVCCREATEWITHTAXP

**D Suplrinvccreatewithtaxp**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WithholdingTaxType` |  | |  | `witht` |  |  |
| `WithholdingTaxCode` |  | |  | `wt_withcd` |  |  |
| `DocumentCurrency` |  | |  | `waers` |  |  |
| `WhldgTxBaseAmtInDocCry` |  | |  | `wt_bs1_cs` |  |  |
| `MnllyEnteredWhldgTxAmtInDocCry` |  | |  | `wt_qbuihb_cs` |  |  |
| `WhldgTaxIsEnteredManually` |  | |  | `wt_amnman` |  |  |
| `WhldgTaxBaseIsEnteredManually` |  | |  | `wt_basman` |  |  |
| `_SupplierInvoice` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Withholding Taxes'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define abstract entity D_SuplrInvcCreateWithTaxP
{
      WithholdingTaxType             : witht;
      WithholdingTaxCode             : wt_withcd;
      @Semantics.currencyCode        : true
      DocumentCurrency               : waers;
      @Semantics                     : { amount : {currencyCode: 'DocumentCurrency'} }
      WhldgTxBaseAmtInDocCry         : wt_bs1_cs;
      @Semantics                     : { amount : {currencyCode: 'DocumentCurrency'} }
      MnllyEnteredWhldgTxAmtInDocCry : wt_qbuihb_cs;
      WhldgTaxIsEnteredManually      : wt_amnman;
      WhldgTaxBaseIsEnteredManually  : wt_basman;

      _SupplierInvoice               : association to parent D_SuplrInvcCreateP;
}
```
