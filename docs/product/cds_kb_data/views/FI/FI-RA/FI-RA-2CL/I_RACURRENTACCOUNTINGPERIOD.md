---
name: I_RACURRENTACCOUNTINGPERIOD
description: "Current Accounting Period"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RACURRENTACCOUNTINGPERIOD')/$value
semantic_en: "Current Accounting Period"
semantic_vi: "Current Accounting Period — CDS view giao diện dựa trên Current Accounting Period."
keywords:
  - "current"
  - "accounting"
  - "period"
  - "company"
  - "code"
  - "principle"
  - "fiscal"
  - "year"
tags:
  - FI
  - account
  - component:FI-RA-2CL
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - lob:finance
---
# I_RACURRENTACCOUNTINGPERIOD

**Current Accounting Period**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RACURRENTACCOUNTINGPERIOD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | | `_RACompanyCodeSetting` | `CompanyCode` | `CHAR(4)` | Company Code |
| `AccountingPrinciple` | ✓ | | `_RACompanyCodeSetting` | `AccountingPrinciple` | `CHAR(4)` | Accounting Principle |
| `FiscalYearCurrentPeriod` |  | | `_CalendarLedger` | `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `CurrentFiscalYear` |  | | `_CalendarLedger` | `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `CurrentFiscalPeriod` |  | | `_CalendarLedger` | `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `_CompanyCode` | | ✓ | | | | |
| `_AccountingPrinciple` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_AccountingPrinciple` | `I_AccountingPrinciple` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RACURRENTACCOUNTINGPERIOD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RACURRENTACCOUNTINGPERIOD')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Current Accounting Period'

@Metadata.ignorePropagatedAnnotations: true // Views which are released to contract C1 or C2 shall be annotated with this

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #CUSTOMIZING }

@VDM.viewType: #COMPOSITE

define view entity I_RACurrentAccountingPeriod
  as select distinct from  I_RACompanyCodeSetting      as _RACompanyCodeSetting

    // LedgerGroup Info for AccountingPrinciple
    left outer to one join I_AccountingPrincipleAssgmt as _AccountingPrincipleAssgmt
      on _RACompanyCodeSetting.AccountingPrinciple = _AccountingPrincipleAssgmt.AccountingPrinciple

    // Representative Ledger Info for LedgerGroup
    left outer to one join I_LedgerGroupAssignment     as _RepresentativeLedger
      on  _AccountingPrincipleAssgmt.LedgerGroup       = _RepresentativeLedger.LedgerGroup
      and _RepresentativeLedger.IsRepresentativeLedger = 'X'

    // 1st Priority: Rep Ledger -> Fiscal Year/Period
    left outer to one join I_FiscalYearPeriodForLedger as _CalendarLedger
      on  _CalendarLedger.Ledger                 = _RepresentativeLedger.Ledger
      and _CalendarLedger.CompanyCode            = _RACompanyCodeSetting.CompanyCode
      and _CalendarLedger.FiscalPeriodStartDate <= $session.system_date
      and _CalendarLedger.FiscalPeriodEndDate   >= $session.system_date
      and _CalendarLedger.IsSpecialPeriod       <> 'X'

  association [1..1] to I_CompanyCode         as _CompanyCode
    on $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_AccountingPrinciple as _AccountingPrinciple
    on $projection.AccountingPrinciple = _AccountingPrinciple.AccountingPrinciple

{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key _RACompanyCodeSetting.CompanyCode,

      @ObjectModel.foreignKey.association: '_AccountingPrinciple'
  key _RACompanyCodeSetting.AccountingPrinciple,

      _CalendarLedger.FiscalYearPeriod as FiscalYearCurrentPeriod,

      _CalendarLedger.FiscalYear       as CurrentFiscalYear,

      _CalendarLedger.FiscalPeriod     as CurrentFiscalPeriod,

      _CompanyCode,

      _AccountingPrinciple

}
```
