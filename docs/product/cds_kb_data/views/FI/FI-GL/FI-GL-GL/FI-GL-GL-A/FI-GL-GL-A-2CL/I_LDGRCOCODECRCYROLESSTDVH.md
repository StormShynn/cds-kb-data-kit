---
name: I_LDGRCOCODECRCYROLESSTDVH
description: "Currency Roles for Ledger"
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LDGRCOCODECRCYROLESSTDVH')/$value
semantic_en: "Currency Roles for Ledger"
semantic_vi: "Currency Roles for Ledger — CDS view giao diện dựa trên I_LedgerCompanyCodeCrcyRoles."
keywords:
  - "currency"
  - "roles"
  - "for"
  - "ledger"
  - "company"
  - "code"
  - "role"
  - "global"
  - "free"
  - "defined"
  - "currency1"
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
# I_LDGRCOCODECRCYROLESSTDVH

**Currency Roles for Ledger**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LDGRCOCODECRCYROLESSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeCurrencyRole` |  | |  |  | `CHAR(2)` | Company Code Currency Role |
| `GlobalCurrencyRole` |  | |  |  | `CHAR(2)` | Global Currency Role |
| `FreeDefinedCurrency1Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 1 Role  (Currency Type) |
| `FreeDefinedCurrency2Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 2 Role  (Currency Type) |
| `FreeDefinedCurrency3Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 3 Role  (Currency Type) |
| `FreeDefinedCurrency4Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 4 Role  (Currency Type) |
| `FreeDefinedCurrency5Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 5 Role  (Currency Type) |
| `FreeDefinedCurrency6Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 6 Role  (Currency Type) |
| `FreeDefinedCurrency7Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 7 Role  (Currency Type) |
| `FreeDefinedCurrency8Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 8 Role  (Currency Type) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LDGRCOCODECRCYROLESSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LDGRCOCODECRCYROLESSTDVH')/$value)*

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'CompanyCode',
                usageType.sizeCategory: #S,
                usageType.dataClass: #MASTER,
                usageType.serviceQuality: #A,
                supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
                modelingPattern: #VALUE_HELP_PROVIDER }
@Analytics.technicalName: 'IFILCCCR__VH'
@AccessControl.authorizationCheck: #CHECK

@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true

@EndUserText.label: 'Currency Roles for Ledger'
define view entity I_LdgrCoCodeCrcyRolesStdVH as select from I_LedgerCompanyCodeCrcyRoles as I_LedgerCompanyCodeCrcyRoles {
  @ObjectModel.foreignKey.association: '_Ledger'
  @Search.defaultSearchElement: true
  key I_LedgerCompanyCodeCrcyRoles.Ledger,
  @ObjectModel.foreignKey.association: '_CompanyCode'
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  key I_LedgerCompanyCodeCrcyRoles.CompanyCode,

  I_LedgerCompanyCodeCrcyRoles.CompanyCodeCurrencyRole,   
  I_LedgerCompanyCodeCrcyRoles.GlobalCurrencyRole,
  I_LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency1Role,
  I_LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency2Role,
  I_LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency3Role,
  I_LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency4Role,
  I_LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency5Role,
  I_LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency6Role,
  I_LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency7Role,
  I_LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency8Role,

  @Consumption.hidden: true
  I_LedgerCompanyCodeCrcyRoles._Ledger,
  @Consumption.hidden: true
  I_LedgerCompanyCodeCrcyRoles._CompanyCode
}
```
