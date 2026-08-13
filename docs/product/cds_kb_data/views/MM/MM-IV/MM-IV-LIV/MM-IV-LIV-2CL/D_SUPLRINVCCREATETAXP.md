---
name: D_SUPLRINVCCREATETAXP
description: "D Suplrinvccreatetaxp"
semantic_vi: "View D_SUPLRINVCCREATETAXP hiển thị dữ liệu thuế tạo hóa đơn nhà cung cấp, có liên quan khi xử lý hóa đơn cho nhà cung cấp."
keywords:
  - "supplier invoice"
  - "hóa đơn nhà cung cấp"
  - "tax data"
  - "dữ liệu thuế"
  - "invoice creation"
  - "tạo hóa đơn"
  - "sap mm"
  - "mm iv"
  - "lob sourcing & procurement"
semantic_en: "The D_SUPLRINVCCREATETAXP view exposes supplier invoice creation tax data, which is relevant when processing invoices for suppliers."
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
# D_SUPLRINVCCREATETAXP

**D Suplrinvccreatetaxp**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaxCode` |  | |  | `mwskz` |  |  |
| `TaxJurisdiction` |  | |  | `txjcd` |  |  |
| `TaxCountry` |  | |  | `fot_tax_country` |  |  |
| `DocumentCurrency` |  | |  | `waers` |  |  |
| `CompanyCodeCurrency` |  | |  | `hwaer` |  |  |
| `TaxAmountInDocCry` |  | |  | `fwstev` |  |  |
| `TaxBaseAmountInDocCry` |  | |  | `fwbas_bses_cs` |  |  |
| `TaxAmountInCoCodeCrcy` |  | |  | `hwste_cs` |  |  |
| `TaxBaseAmountInCoCodeCrcy` |  | |  | `hwbas_bses_cs` |  |  |
| `_SupplierInvoice` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Taxes'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define abstract entity D_SuplrInvcCreateTaxP
{
      TaxCode                   : mwskz;
      TaxJurisdiction           : txjcd; // auch die Konditionsfelder aufnehmen?
      TaxCountry                : fot_tax_country;
      @Semantics.currencyCode   : true
      DocumentCurrency          : waers;
      @Semantics.currencyCode   : true
      CompanyCodeCurrency       : hwaer;
      @Semantics                : { amount : {currencyCode: 'DocumentCurrency'} }
      TaxAmountInDocCry         : fwstev;
      @Semantics                : { amount : {currencyCode: 'DocumentCurrency'} }
      TaxBaseAmountInDocCry     : fwbas_bses_cs;
      @Semantics                : { amount : {currencyCode: 'CompanyCodeCurrency'} }
      TaxAmountInCoCodeCrcy     : hwste_cs;
      @Semantics                : { amount : {currencyCode: 'CompanyCodeCurrency'} }
      TaxBaseAmountInCoCodeCrcy : hwbas_bses_cs;

      _SupplierInvoice          : association to parent D_SuplrInvcCreateP;
}
```
