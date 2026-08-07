---
name: D_GLADJMTITEMPOSTJOURNALENTRYP
description: "D GLADJMTITEMPOSTJournal EntryP"
app_component: AC-INT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AC
  - AC-INT
  - journal-entry
  - item-level
  - component:AC-INT-2CL
  - lob:Other
  - bo:JournalEntry
---
# D_GLADJMTITEMPOSTJOURNALENTRYP

**D GLADJMTITEMPOSTJournal EntryP**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GeneralLedgerAdjustmentItem` |  | |  | `fis_docln_numc` |  |  |
| `GLAccount` |  | |  | `hkont` |  |  |
| `Supplier` |  | |  | `lifnr` |  |  |
| `Customer` |  | |  | `kunnr` |  |  |
| `HouseBank` |  | |  | `hbkid` |  |  |
| `HouseBankAccount` |  | |  | `hktid` |  |  |
| `DocumentItemText` |  | |  | `sgtxt` |  |  |
| `AssignmentReference` |  | |  | `acpi_zuonr` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `PartnerProfitCenter` |  | |  | `pprctr` |  |  |
| `OriginProfitCenter` |  | |  | `fins_origin_prctr` |  |  |
| `Segment` |  | |  | `fb_segment` |  |  |
| `PartnerSegment` |  | |  | `fb_psegment` |  |  |
| `CostCenter` |  | |  | `kostl` |  |  |
| `CostCtrActivityType` |  | |  | `lstar` |  |  |
| `WBSElement` |  | |  | `ps_posid` |  |  |
| `MasterFixedAsset` |  | |  | `anln1` |  |  |
| `FixedAsset` |  | |  | `anln2` |  |  |
| `SalesOrder` |  | |  | `kdauf` |  |  |
| `SalesOrderItem` |  | |  | `kdpos` |  |  |
| `FunctionalArea` |  | |  | `fkber` |  |  |
| `ServiceDocumentType` |  | |  | `fco_srvdoc_type` |  |  |
| `ServiceDocument` |  | |  | `fco_srvdoc_id` |  |  |
| `ServiceDocumentItem` |  | |  | `fco_srvdoc_item_id` |  |  |
| `PersonnelNumber` |  | |  | `pernr_d` |  |  |
| `WorkItem` |  | |  | `/cpd/pfp_workitem_id` |  |  |
| `TaxCode` |  | |  | `mwskz` |  |  |
| `Plant` |  | |  | `werks_d` |  |  |
| `Material` |  | |  | `matnr40` |  |  |
| `BaseUnit` |  | |  | `meins` |  |  |
| `Quantity` |  | |  | `menge_d` |  |  |
| `PartnerCompany` |  | |  | `rassc` |  |  |
| `DebitCreditCode` |  | |  | `shkzg` |  |  |
| `TransactionCurrency` |  | |  | `fins_currw` |  |  |
| `BalanceTransactionCurrency` |  | |  | `fins_currt` |  |  |
| `CompanyCodeCurrency` |  | |  | `fins_currh` |  |  |
| `GlobalCurrency` |  | |  | `fins_currk` |  |  |
| `FreeDefinedCurrency1` |  | |  | `fins_curr1` |  |  |
| `FreeDefinedCurrency2` |  | |  | `fins_curr2` |  |  |
| `FreeDefinedCurrency3` |  | |  | `fins_curr3` |  |  |
| `FreeDefinedCurrency4` |  | |  | `fins_curr4` |  |  |
| `FreeDefinedCurrency5` |  | |  | `fins_curr5` |  |  |
| `FreeDefinedCurrency6` |  | |  | `fins_curr6` |  |  |
| `FreeDefinedCurrency7` |  | |  | `fins_curr7` |  |  |
| `FreeDefinedCurrency8` |  | |  | `fins_curr8` |  |  |
| `AmountInTransactionCurrency` |  | |  | `fins_vwcur12` |  |  |
| `AmountInBalanceTransacCrcy` |  | |  | `fins_vtcur12` |  |  |
| `AmountInCompanyCodeCurrency` |  | |  | `fins_vhcur12` |  |  |
| `AmountInGlobalCurrency` |  | |  | `fins_vkcur12` |  |  |
| `AmountInFreeDefinedCurrency1` |  | |  | `fins_vocur12` |  |  |
| `AmountInFreeDefinedCurrency2` |  | |  | `fins_vvcur12` |  |  |
| `AmountInFreeDefinedCurrency3` |  | |  | `fins_vbcur12` |  |  |
| `AmountInFreeDefinedCurrency4` |  | |  | `fins_vccur12` |  |  |
| `AmountInFreeDefinedCurrency5` |  | |  | `fins_vdcur12` |  |  |
| `AmountInFreeDefinedCurrency6` |  | |  | `fins_vecur12` |  |  |
| `AmountInFreeDefinedCurrency7` |  | |  | `fins_vfcur12` |  |  |
| `AmountInFreeDefinedCurrency8` |  | |  | `fins_vgcur12` |  |  |
| `_ChildToParent` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'G/L Adjustment Item Post Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@AbapCatalog.extensibility.extensible: true
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_GLAdjmtItemPostJournalEntryP

{
  GeneralLedgerAdjustmentItem  : fis_docln_numc;
  GLAccount                    : hkont;
  Supplier                     : lifnr;
  Customer                     : kunnr;
  HouseBank                    : hbkid;
  HouseBankAccount             : hktid;
  DocumentItemText             : sgtxt;
  AssignmentReference          : acpi_zuonr;
  ProfitCenter                 : prctr;
  PartnerProfitCenter          : pprctr;
  OriginProfitCenter           : fins_origin_prctr;
  Segment                      : fb_segment;
  PartnerSegment               : fb_psegment;
  CostCenter                   : kostl;
  CostCtrActivityType          : lstar;
  WBSElement                   : ps_posid;
  MasterFixedAsset             : anln1;
  FixedAsset                   : anln2;
  SalesOrder                   : kdauf;
  SalesOrderItem               : kdpos;
  FunctionalArea               : fkber;
  ServiceDocumentType          : fco_srvdoc_type;
  ServiceDocument              : fco_srvdoc_id;
  ServiceDocumentItem          : fco_srvdoc_item_id;
  PersonnelNumber              : pernr_d;
  WorkItem                     : /cpd/pfp_workitem_id;
  TaxCode                      : mwskz;
  Plant                        : werks_d;
  Material                     : matnr40;
  @Semantics.unitOfMeasure     :true
  BaseUnit                     : meins;
  @Semantics                   : { quantity : {unitOfMeasure: 'BaseUnit'} }
  Quantity                     : menge_d;
  PartnerCompany               : rassc;
  DebitCreditCode              : shkzg;
  TransactionCurrency          : fins_currw;
  BalanceTransactionCurrency   : fins_currt;
  CompanyCodeCurrency          : fins_currh;
  GlobalCurrency               : fins_currk;
  FreeDefinedCurrency1         : fins_curr1;
  FreeDefinedCurrency2         : fins_curr2;
  FreeDefinedCurrency3         : fins_curr3;
  FreeDefinedCurrency4         : fins_curr4;
  FreeDefinedCurrency5         : fins_curr5;
  FreeDefinedCurrency6         : fins_curr6;
  FreeDefinedCurrency7         : fins_curr7;
  FreeDefinedCurrency8         : fins_curr8;
  @Semantics.amount.currencyCode: 'transactioncurrency'
  AmountInTransactionCurrency  : fins_vwcur12;
  @Semantics.amount.currencyCode: 'balancetransactioncurrency'
  AmountInBalanceTransacCrcy   : fins_vtcur12;
  @Semantics.amount.currencyCode: 'companycodecurrency'
  AmountInCompanyCodeCurrency  : fins_vhcur12;
  @Semantics.amount.currencyCode: 'globalcurrency'
  AmountInGlobalCurrency       : fins_vkcur12;
  @Semantics.amount.currencyCode: 'freedefinedcurrency1'
  AmountInFreeDefinedCurrency1 : fins_vocur12;
  @Semantics.amount.currencyCode: 'freedefinedcurrency2'
  AmountInFreeDefinedCurrency2 : fins_vvcur12;
  @Semantics.amount.currencyCode: 'freedefinedcurrency3'
  AmountInFreeDefinedCurrency3 : fins_vbcur12;
  @Semantics.amount.currencyCode: 'freedefinedcurrency4'
  AmountInFreeDefinedCurrency4 : fins_vccur12;
  @Semantics.amount.currencyCode: 'freedefinedcurrency5'
  AmountInFreeDefinedCurrency5 : fins_vdcur12;
  @Semantics.amount.currencyCode: 'freedefinedcurrency6'
  AmountInFreeDefinedCurrency6 : fins_vecur12;
  @Semantics.amount.currencyCode: 'freedefinedcurrency7'
  AmountInFreeDefinedCurrency7 : fins_vfcur12;
  @Semantics.amount.currencyCode: 'freedefinedcurrency8'
  AmountInFreeDefinedCurrency8 : fins_vgcur12;

  _ChildToParent               : association to parent D_GLAdjmtPostJournalEntryP;
}
```
