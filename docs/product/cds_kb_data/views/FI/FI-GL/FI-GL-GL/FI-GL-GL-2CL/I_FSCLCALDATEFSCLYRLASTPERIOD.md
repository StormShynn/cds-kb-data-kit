---
name: I_FSCLCALDATEFSCLYRLASTPERIOD
description: "This CDS view provides the prerequisites for answering the following business question: What is the last fiscal period of the fiscal year on a key date for a company code and ledger? This CDS view can be used as a derivation entity."
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLCALDATEFSCLYRLASTPERIOD')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What is the last fiscal period of the fiscal year on a key date for a company code and ledger? This CDS view can be used as a derivation entity."
semantic_vi: "Last fiscal period of fiscal year — CDS view giao diện dựa trên I_FiscalCalendarDateForLedger."
keywords:
  - "last"
  - "fiscal"
  - "period"
  - "year"
  - "company"
  - "code"
  - "ledger"
  - "calendar"
  - "date"
tags:
  - FI
  - bo:companycode
  - component:FI-GL-GL-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-2CL
  - interface-view
  - lob:finance
---
# I_FSCLCALDATEFSCLYRLASTPERIOD

**This CDS view provides the prerequisites for answering the following business question: What is the last fiscal period of the fiscal year on a key date for a company code and ledger? This CDS view can be used as a derivation entity.**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLCALDATEFSCLYRLASTPERIOD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger |
| `CalendarDate` | ✓ | |  |  | `DATS(8)` | Calendar Date |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `_CompanyCode` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Ledger` | `I_Ledger` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLCALDATEFSCLYRLASTPERIOD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLCALDATEFSCLYRLASTPERIOD')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IFIFISCCALLP', preserveKey: true}
@EndUserText.label: 'Last fiscal period of fiscal year'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@ObjectModel: { usageType.serviceQuality: #B,
                usageType.sizeCategory: #L,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #DERIVATION_FUNCTION,
                supportedCapabilities: [#DERIVATION_FUNCTION]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_FsclCalDateFsclYrLastPeriod
  as select from I_FiscalCalendarDateForLedger
    inner join   I_FiscalCalendarDate on  I_FiscalCalendarDateForLedger.FiscalYearVariant = I_FiscalCalendarDate.FiscalYearVariant
                                      and I_FiscalCalendarDateForLedger.FiscalYearEndDate = I_FiscalCalendarDate.CalendarDate

  association [0..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Ledger      as _Ledger      on $projection.Ledger = _Ledger.Ledger
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_Ledger'
  key Ledger,

  key I_FiscalCalendarDateForLedger.CalendarDate,
      I_FiscalCalendarDate.FiscalYear,
      I_FiscalCalendarDate.FiscalPeriod,

      _Ledger,
      _CompanyCode
}
```
