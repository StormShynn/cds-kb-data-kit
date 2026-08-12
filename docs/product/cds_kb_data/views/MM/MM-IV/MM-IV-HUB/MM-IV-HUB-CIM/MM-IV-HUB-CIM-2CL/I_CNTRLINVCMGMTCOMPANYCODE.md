---
name: I_CNTRLINVCMGMTCOMPANYCODE
description: "CNTRLINVCMGMTCompany Code"
app_component: MM-IV-HUB-CIM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
