---
name: I_FSCLYRINTVLDRVTNFORPOSTGDATE
description: "Derive Fiscal Years for Posting Date"
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLYRINTVLDRVTNFORPOSTGDATE')/$value
semantic_en: "Derive Fiscal Years for Posting Date"
semantic_vi: "Derive Fiscal Years for Posting Date — CDS view giao diện dựa trên I_FiscalCalendarDateForLedger."
keywords:
  - "derive"
  - "fiscal"
  - "years"
  - "for"
  - "posting"
  - "date"
  - "company"
  - "code"
  - "ledger"
  - "year"
  - "variant"
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
# I_FSCLYRINTVLDRVTNFORPOSTGDATE

**Derive Fiscal Years for Posting Date**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLYRINTVLDRVTNFORPOSTGDATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FromFiscalYear` |  | |  | `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `ToFiscalYear` |  | |  | `FiscalYear` | `NUMC(4)` | Fiscal Year |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLYRINTVLDRVTNFORPOSTGDATE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLYRINTVLDRVTNFORPOSTGDATE')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Derive Fiscal Years for Posting Date'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #C,
  sizeCategory: #M
  }
@ObjectModel.supportedCapabilities: [#DERIVATION_FUNCTION]  
@ObjectModel.modelingPattern: #NONE
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_FsclYrIntvlDrvtnForPostgDate 
with parameters P_FromPostingDate              : fis_budat_from,
                P_ToPostingDate                : fis_budat_to
as select from I_FiscalCalendarDateForLedger as FromYear
inner join I_FiscalCalendarDateForLedger as ToYear 
     on FromYear.CompanyCode = ToYear.CompanyCode
     and FromYear.Ledger = ToYear.Ledger
     and ToYear.CalendarDate = $parameters.P_ToPostingDate
{
    
    key FromYear.CompanyCode,
    key FromYear.Ledger,
    FromYear.FiscalYearVariant,
    
    FromYear.FiscalYear as FromFiscalYear,
    ToYear.FiscalYear as ToFiscalYear
    
}
where FromYear.CalendarDate = $parameters.P_FromPostingDate
```
