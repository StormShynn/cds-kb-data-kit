---
name: I_LEDGERCOMPANYCODEVH
description: "Company Codes for Ledger"
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERCOMPANYCODEVH')/$value
semantic_en: "Company Codes for Ledger"
semantic_vi: "Company Codes for Ledger — CDS view tổng hợp dựa trên I_LedgerCompanyCodeCrcyRoles."
keywords:
  - "company"
  - "codes"
  - "for"
  - "ledger"
  - "code"
  - "name"
  - "controlling"
  - "area"
  - "chart"
  - "accounts"
tags:
  - FI
  - component:FI-GL-GL-A-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-A
  - FI-GL-GL-A-2CL
  - interface-view
  - lob:finance
---
# I_LEDGERCOMPANYCODEVH

**Company Codes for Ledger**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERCOMPANYCODEVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `CityName` |  | |  |  | `CHAR(25)` | City |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERCOMPANYCODEVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERCOMPANYCODEVH')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'IFILEDGERCCODE',
                preserveKey: true,
                compiler.compareFilter: true }
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Company Codes for Ledger'
@ObjectModel: { dataCategory: #VALUE_HELP,
                usageType: { sizeCategory: #S,
                             dataClass:  #MIXED,
                             serviceQuality: #C },
                supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
                modelingPattern: #VALUE_HELP_PROVIDER }
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #COMPOSITE }

define view I_LedgerCompanyCodeVH as select from I_LedgerCompanyCodeCrcyRoles
inner join I_CompanyCodeVH on I_LedgerCompanyCodeCrcyRoles.CompanyCode = I_CompanyCodeVH.CompanyCode
 
{
key I_LedgerCompanyCodeCrcyRoles.Ledger,
@ObjectModel.text.element: ['CompanyCodeName']
@Search.defaultSearchElement:true
@Search.fuzzinessThreshold:0.8
@Search.ranking:#HIGH
key I_LedgerCompanyCodeCrcyRoles.CompanyCode,
@Semantics.text
@Search.defaultSearchElement:true
@Search.fuzzinessThreshold:0.8
@Search.ranking:#LOW
I_CompanyCodeVH.CompanyCodeName,
I_CompanyCodeVH.ControllingArea,
I_CompanyCodeVH.ChartOfAccounts,
I_CompanyCodeVH.CityName,
I_CompanyCodeVH.Currency,
I_LedgerCompanyCodeCrcyRoles.FiscalYearVariant  

}
```
