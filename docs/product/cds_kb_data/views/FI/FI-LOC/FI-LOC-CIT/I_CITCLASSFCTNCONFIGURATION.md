---
name: I_CITCLASSFCTNCONFIGURATION
description: "CIT Classification Configiration"
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITCLASSFCTNCONFIGURATION')/$value
semantic_en: "CIT Classification Configiration"
semantic_vi: "CIT Classification Configiration — CDS view giao diện dựa trên ficitc_clsf_cust."
keywords:
  - "cit"
  - "classification"
  - "configiration"
  - "ledger"
  - "company"
  - "code"
  - "corporate"
  - "income"
  - "hierarchy"
  - "source"
  - "reporting"
  - "date"
  - "type"
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-CIT
  - FI-LOC
  - FI-LOC-CIT
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_CITCLASSFCTNCONFIGURATION

**CIT Classification Configiration**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITCLASSFCTNCONFIGURATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  | `ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `CorporateIncomeTaxHierarchy` | ✓ | |  | `hryid` | `CHAR(42)` | Hierarchy ID |
| `SourceLedger` | ✓ | |  | `rldnr_pers` | `CHAR(2)` | Source Ledger |
| `CITReportingDateType` |  | |  | `date_conf` | `CHAR(1)` | CIT Reporting Date Selection |
| `CurrencyRole` |  | |  | `curtype` | `CHAR(2)` | Currency Type |
| `CITClfnDuringPostingIsActive` |  | |  | `posting` | `CHAR(1)` | Classification During Document Posting |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITCLASSFCTNCONFIGURATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITCLASSFCTNCONFIGURATION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICITCLSFCNF'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering:{ status: #ACTIVE, type: #FULL }
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'CIT Classification Configiration'
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ClientHandling.algorithm: #SESSION_VARIABLE

define view I_CITClassfctnConfiguration
  as select from ficitc_clsf_cust
    //finsc_ledger_rep is used instead of I_LedgerSourceLedger because 'Views with views as base objects cannot be buffered'
    inner join   finsc_ledger_rep on ficitc_clsf_cust.ledger = finsc_ledger_rep.rldnr
{
  key ficitc_clsf_cust.ledger          as Ledger,
  key ficitc_clsf_cust.bukrs           as CompanyCode,
  key ficitc_clsf_cust.hryid           as CorporateIncomeTaxHierarchy,
  key finsc_ledger_rep.rldnr_pers      as SourceLedger,
      ficitc_clsf_cust.date_conf       as CITReportingDateType,
      ficitc_clsf_cust.curtype         as CurrencyRole,
      ficitc_clsf_cust.posting         as CITClfnDuringPostingIsActive
}
```
