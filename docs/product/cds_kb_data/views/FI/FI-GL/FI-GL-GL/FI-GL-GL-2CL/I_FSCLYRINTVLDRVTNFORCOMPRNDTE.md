---
name: I_FSCLYRINTVLDRVTNFORCOMPRNDTE
description: "Fiscal Years for Posting Dates"
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLYRINTVLDRVTNFORCOMPRNDTE')/$value
semantic_en: "Fiscal Years for Posting Dates"
semantic_vi: "Fiscal Years for Posting Dates — CDS view giao diện dựa trên P_FsclYrIntvlDrvtnForComprnDte."
keywords:
  - "fiscal"
  - "years"
  - "for"
  - "posting"
  - "dates"
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
# I_FSCLYRINTVLDRVTNFORCOMPRNDTE

**Fiscal Years for Posting Dates**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLYRINTVLDRVTNFORCOMPRNDTE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FromFiscalYear` |  | |  | `min(P_FsclYrIntvlDrvtnForComprnDte.FromFiscalYear)` | `NUMC(4)` |  |
| `ToFiscalYear` |  | |  | `max(P_FsclYrIntvlDrvtnForComprnDte.ToFiscalYear)` | `NUMC(4)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLYRINTVLDRVTNFORCOMPRNDTE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLYRINTVLDRVTNFORCOMPRNDTE')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Fiscal Years for Posting Dates'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #C,
  sizeCategory: #M
  }
@ObjectModel.supportedCapabilities: [#DERIVATION_FUNCTION] 
@ObjectModel.modelingPattern: #DERIVATION_FUNCTION    
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_FsclYrIntvlDrvtnForComprnDte 
with parameters P_FromPostingDate              : fis_budat_from,
                P_ToPostingDate                : fis_budat_to,
                P_ComprnFromPostingDate        : fis_budat_from,
                P_ComprnToPostingDate          : fis_budat_to

as select from P_FsclYrIntvlDrvtnForComprnDte 
( P_FromPostingDate: $parameters.P_FromPostingDate, P_ToPostingDate: $parameters.P_ToPostingDate, 
  P_ComprnFromPostingDate: $parameters.P_ComprnFromPostingDate, P_ComprnToPostingDate: $parameters.P_ComprnToPostingDate ) as P_FsclYrIntvlDrvtnForComprnDte


{
    
    key P_FsclYrIntvlDrvtnForComprnDte.CompanyCode,
    key P_FsclYrIntvlDrvtnForComprnDte.Ledger,
    P_FsclYrIntvlDrvtnForComprnDte.FiscalYearVariant,
    min(P_FsclYrIntvlDrvtnForComprnDte.FromFiscalYear) as FromFiscalYear,
    max(P_FsclYrIntvlDrvtnForComprnDte.ToFiscalYear) as ToFiscalYear
    
}

group by
    P_FsclYrIntvlDrvtnForComprnDte.CompanyCode,
    P_FsclYrIntvlDrvtnForComprnDte.Ledger,
    P_FsclYrIntvlDrvtnForComprnDte.FiscalYearVariant
```
