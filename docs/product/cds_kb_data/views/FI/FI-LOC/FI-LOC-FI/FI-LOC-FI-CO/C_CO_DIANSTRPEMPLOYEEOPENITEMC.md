---
name: C_CO_DIANSTRPEMPLOYEEOPENITEMC
description: "Empl. Pyrl Open Items Cube for CO DIAN"
app_component: FI-LOC-FI-CO
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CO_DIANSTRPEMPLOYEEOPENITEMC')/$value
semantic_en: "Empl. Pyrl Open Items Cube for CO DIAN"
semantic_vi: "Empl. Pyrl Open Items Cube for CO DIAN — CDS view tiêu dùng dựa trên I_CO_DIANStRpEmplAggrgdPyrl."
keywords:
  - "empl."
  - "pyrl"
  - "open"
  - "items"
  - "cube"
  - "for"
  - "dian"
  - "company"
  - "code"
  - "payroll"
  - "year"
  - "report"
  - "format"
  - "item"
  - "type"
tags:
  - FI
  - component:FI-LOC-FI-CO
  - consumption-view
  - FI-LOC
  - FI-LOC-FI
  - FI-LOC-FI-CO
  - lob:controlling
  - lob:finance
  - lob:logistics general
---
# C_CO_DIANSTRPEMPLOYEEOPENITEMC

**Empl. Pyrl Open Items Cube for CO DIAN**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-CO` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CO_DIANSTRPEMPLOYEEOPENITEMC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `PayrollYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `CO_DIANReportFormat` | ✓ | |  |  | `CHAR(6)` | DIAN Report Format |
| `CO_DIANReportItemType` | ✓ | |  |  | `NUMC(4)` | Report Format Item Type |
| `CO_DIANTaxNumberType` | ✓ | |  |  | `NUMC(2)` | DIAN Type of Document |
| `TaxNumber1` | ✓ | |  |  | `CHAR(16)` | Tax Number 1 |
| `CreationUTCDateTime` | ✓ | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `StatryRptgEntity` | ✓ | |  |  | `CHAR(10)` | Reporting Entity |
| `StatryRptCategory` | ✓ | |  |  | `CHAR(30)` | Report Category ID |
| `StatryRptRunID` | ✓ | |  |  | `NUMC(8)` | Report Run ID |
| `FirstName` |  | |  |  | `CHAR(40)` | Name 1 |
| `MiddleName` |  | |  |  | `CHAR(40)` | Name 2 |
| `LastName` |  | |  |  | `CHAR(40)` | Name 3 |
| `AdditionalLastName` |  | |  |  | `CHAR(40)` | Name 4 |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CompanyCodeCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CO_DIANCountry` |  | | `_CO_DIANCountryMapping` | `CO_DIANCountry` | `CHAR(4)` | DIAN Country/Region Code |
| `StreetName` |  | |  |  | `CHAR(60)` | Street |
| `CityCode` |  | |  |  | `CHAR(12)` | City code for city/street file |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CO_DIANPyrlItemTypeBaseAmt` |  | |  |  | `CURR(23)` | Amount for DIAN |
| `CO_DIANPyrlItemTypeBaseAmtCrcy` |  | |  |  | `CUKY(5)` | Currency for DIAN |
| `CO_DIANPyrlItmTypeCalcdAmt` |  | |  |  | `CURR(23)` | Amount for DIAN |
| `CO_DIANPyrlItmTypeCalcdAmtCrcy` |  | |  |  | `CUKY(5)` | Currency for DIAN |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | ABAP System Field: Name of Current User |
| `_EmplPyrlLg` | | ✓ | | | | |
| `_CO_DIANCountryMapping` | | ✓ | | | | |
| `_CompanyCodeCountryMapping` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_BaseAmountCurrency` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CO_DIANSTRPEMPLOYEEOPENITEMC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CO_DIANSTRPEMPLOYEEOPENITEMC')/$value)*

```abap
@AbapCatalog: {
  compiler.compareFilter: true,
  sqlViewName: 'CCODIANSTRPEOIC',
  preserveKey: true
}
@AccessControl.personalData.blocking: #BLOCKED_DATA_INCLUDED
@AccessControl.authorizationCheck: #CHECK
@Analytics: {
  dataCategory: #CUBE,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Empl. Pyrl Open Items Cube for CO DIAN'
@Metadata: {
 allowExtensions: true,
 ignorePropagatedAnnotations: true 
}
@ObjectModel: {
  modelingPattern: #ANALYTICAL_CUBE,
  usageType: {
    dataClass: #MIXED,
    serviceQuality: #D,
    sizeCategory: #XL },
  supportedCapabilities: [
    #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ],
    sapObjectNodeType.name: 'BusinessTransactionCategory'
}
@VDM.viewType: #CONSUMPTION

define view C_CO_DIANStRpEmployeeOpenItemC

  as select from I_CO_DIANStRpEmplAggrgdPyrl

{
  key CompanyCode,
  key PayrollYear,
  key CO_DIANReportFormat,
  key CO_DIANReportItemType,
  key CO_DIANTaxNumberType,
  key TaxNumber1,
  key CreationUTCDateTime,
  key StatryRptgEntity,
  key StatryRptCategory,
  key StatryRptRunID,

      FirstName,
      MiddleName,
      LastName,
      AdditionalLastName,
      Country,
      CompanyCodeCountry,
      _CO_DIANCountryMapping.CO_DIANCountry,
      StreetName,
      CityCode, --> Region + City
      Region,

      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'CO_DIANPyrlItemTypeBaseAmtCrcy'
      CO_DIANPyrlItemTypeBaseAmt,

      @Semantics.currencyCode: true
      CO_DIANPyrlItemTypeBaseAmtCrcy,

      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'CO_DIANPyrlItmTypeCalcdAmtCrcy'
      CO_DIANPyrlItmTypeCalcdAmt,

      @Semantics.currencyCode: true
      CO_DIANPyrlItmTypeCalcdAmtCrcy,

      CreatedByUser,
      _EmplPyrlLg,
      _CO_DIANCountryMapping,
      _CompanyCodeCountryMapping,
      _CompanyCode,
      _BaseAmountCurrency
}
where
  CO_DIANReportFormat = '1009'
```
