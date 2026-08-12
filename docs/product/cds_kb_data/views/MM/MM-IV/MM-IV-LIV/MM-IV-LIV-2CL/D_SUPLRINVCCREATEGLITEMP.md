---
name: D_SUPLRINVCCREATEGLITEMP
description: "D Suplrinvccreateglitemp"
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
  - item-level
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# D_SUPLRINVCCREATEGLITEMP

**D Suplrinvccreateglitemp**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierInvoiceItem` |  | |  | `cobl_nr` |  |  |
| `GLAccount` |  | |  | `saknr` |  |  |
| `DocumentCurrency` |  | |  | `waers` |  |  |
| `SupplierInvoiceItemAmount` |  | |  | `wrbtr_cs` |  |  |
| `DebitCreditCode` |  | |  | `shkzg` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `TaxCode` |  | |  | `mwskz` |  |  |
| `TaxJurisdiction` |  | |  | `txjcd` |  |  |
| `SupplierInvoiceItemText` |  | |  | `sgtxt` |  |  |
| `CostCenter` |  | |  | `kostl` |  |  |
| `SalesOrder` |  | |  | `vbeln` |  |  |
| `SalesOrderItem` |  | |  | `vbelp` |  |  |
| `InternalOrder` |  | |  | `aufnr` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `BusinessArea` |  | |  | `gsber` |  |  |
| `CostObject` |  | |  | `kstrg` |  |  |
| `WBSElementInternalID` |  | |  | `ps_s4_pspnr` |  |  |
| `CostCtrActivityType` |  | |  | `lstar` |  |  |
| `PersonnelNumber` |  | |  | `pernr_d` |  |  |
| `BusinessProcess` |  | |  | `co_prznr` |  |  |
| `GrantID` |  | |  | `gm_grant_nbr` |  |  |
| `QuantityUnit` |  | |  | `meins` |  |  |
| `Quantity` |  | |  | `menge_d` |  |  |
| `AssignmentReference` |  | |  | `dzuonr` |  |  |
| `IsNotCashDiscountLiable` |  | |  | `xskrl` |  |  |
| `TaxBaseAmountInDocCry` |  | |  | `fwbas_cs` |  |  |
| `WorkItem` |  | |  | `/cpd/pfp_workitem_id` |  |  |
| `TaxCountry` |  | |  | `fot_tax_country` |  |  |
| `FinancialTransactionType` |  | |  | `rmvct` |  |  |
| `BudgetPeriod` |  | |  | `fm_budget_period` |  |  |
| `_SupplierInvoice` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Direct Postings to GL account'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@AbapCatalog.extensibility.extensible: true

define abstract entity D_SuplrInvcCreateGLItemP
{
      SupplierInvoiceItem       : cobl_nr;
      GLAccount                 : saknr;
      @Semantics.currencyCode   : true
      DocumentCurrency          : waers;
      @Semantics                : { amount : {currencyCode: 'DocumentCurrency'} }
      SupplierInvoiceItemAmount : wrbtr_cs;
      DebitCreditCode           : shkzg;
      CompanyCode               : bukrs;
      TaxCode                   : mwskz;
      TaxJurisdiction           : txjcd;
      SupplierInvoiceItemText   : sgtxt;
      CostCenter                : kostl;
      SalesOrder                : vbeln;
      SalesOrderItem            : vbelp;
      InternalOrder             : aufnr;
      ProfitCenter              : prctr;
      BusinessArea              : gsber;
      CostObject                : kstrg;
      WBSElementInternalID      : ps_s4_pspnr;
      CostCtrActivityType       : lstar;
      PersonnelNumber           : pernr_d;
      BusinessProcess           : co_prznr;
      GrantID                   : gm_grant_nbr;
      @Semantics.unitOfMeasure  : true
      QuantityUnit              : meins;
      @Semantics                : { quantity : {unitOfMeasure: 'QuantityUnit'} }
      Quantity                  : menge_d;
      AssignmentReference       : dzuonr;
      IsNotCashDiscountLiable   : xskrl;
      @Semantics                : { amount : {currencyCode: 'DocumentCurrency'} }
      TaxBaseAmountInDocCry     : fwbas_cs;
      WorkItem                  : /cpd/pfp_workitem_id;
      TaxCountry                : fot_tax_country;
      FinancialTransactionType  : rmvct;
      BudgetPeriod              : fm_budget_period;

      _SupplierInvoice          : association to parent D_SuplrInvcCreateP;
}
```
