---
name: I_CNTRLINVCMGMTCOMPANYCODE
description: CNTRLINVCMGMTCompany Code
app_component: MM-IV-HUB-CIM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-HUB
  - interface-view
  - company-code
  - component:MM-IV-HUB-CIM-2CL
  - lob:Sourcing & Procurement
  - bo:CompanyCode
---
# I_CNTRLINVCMGMTCOMPANYCODE

**CNTRLINVCMGMTCompany Code**

| Property | Value |
|---|---|
| App Component | `MM-IV-HUB-CIM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `LanguageISOCode` |  | |  |  |  |  |
| `TimeZoneText` |  | |  | `cast( _IANATimeZone.TimeZoneIANACode as cimic_time_zone )` |  |  |
| `EndDateFiscalYearPeriod` |  | |  | `cast( concat( substring(_FiscalYearCC.FiscalYearEndDate, 5, 2), concat('-', substring(_FiscalYearCC.FiscalYearEndDate, 7, 2) )) as cimic_fyear_enddate )` |  |  |
| `TaxCalculationProcedure` |  | |  |  |  |  |
| `ExternalTaxSystem` |  | |  | `cast( _TxJxProced.ExternalTaxSystem as cimic_external_tax_system )` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalYearCC` | `I_FiscalYearForCompanyCode` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICIMCOCODE'
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Company Code for Import'
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType: {
  dataClass: #ORGANIZATIONAL,
  serviceQuality: #C,
  sizeCategory: #L
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern:#NONE
define view I_CntrlInvcMgmtCompanyCode
  as select distinct from I_CntrlInvcMgmtCompanyCodeDEX
  association [0..*] to I_FiscalYearForCompanyCode as _FiscalYearCC on $projection.CompanyCode = _FiscalYearCC.CompanyCode

{
  key CompanyCode,
      Currency,
      LanguageISOCode,
      cast( _IANATimeZone.TimeZoneIANACode as cimic_time_zone )                                as TimeZoneText,
      cast( concat( substring(_FiscalYearCC.FiscalYearEndDate, 5, 2),
      concat('-', substring(_FiscalYearCC.FiscalYearEndDate, 7, 2) )) as cimic_fyear_enddate ) as EndDateFiscalYearPeriod,
      TaxCalculationProcedure,
      cast( _TxJxProced.ExternalTaxSystem as cimic_external_tax_system )                       as ExternalTaxSystem
}
```
