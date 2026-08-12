---
name: I_CITCLASSFCTNCONFIGURATION
description: "CIT Classification Configiration"
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
