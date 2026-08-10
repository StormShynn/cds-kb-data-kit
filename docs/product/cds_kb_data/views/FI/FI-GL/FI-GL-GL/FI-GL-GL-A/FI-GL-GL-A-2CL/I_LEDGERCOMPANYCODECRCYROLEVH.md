---
name: I_LEDGERCOMPANYCODECRCYROLEVH
description: "This CDS view is designed to provide a comprehensive overview of currency roles associated with ledgers and company codes. It serves as a value help provider, offering detailed information about various currency roles and their corresponding currencies within a company's financial structure. This CDS view provides the data to answer the following business questions: What are the currency roles defined for a specific ledger and company code? What are the names and types of currencies associated with each currency role for a company code? How can I retrieve the global currency role and its associated currency for a company code? What are the free-defined currency roles and their corresponding currencies for a company code? How is the functional currency role defined for a company code, and what currency is associated with it? This view provides value help for CompanyCode. This view should be used for value help purposes only. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERCOMPANYCODECRCYROLEVH')/$value
semantic_en: "This CDS view is designed to provide a comprehensive overview of currency roles associated with ledgers and company codes. It serves as a value help provider, offering detailed information about various currency roles and their corresponding currencies within a company's financial structure. This CDS view provides the data to answer the following business questions: What are the currency roles defined for a specific ledger and company code? What are the names and types of currencies associated with each currency role for a company code? How can I retrieve the global currency role and its associated currency for a company code? What are the free-defined currency roles and their corresponding currencies for a company code? How is the functional currency role defined for a company code, and what currency is associated with it? This view provides value help for CompanyCode. This view should be used for value help purposes only. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - bo:companycode
  - component:FI-GL-GL-A-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-A
  - FI-GL-GL-A-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_LEDGERCOMPANYCODECRCYROLEVH

**This CDS view is designed to provide a comprehensive overview of currency roles associated with ledgers and company codes. It serves as a value help provider, offering detailed information about various currency roles and their corresponding currencies within a company's financial structure. This CDS view provides the data to answer the following business questions: What are the currency roles defined for a specific ledger and company code? What are the names and types of currencies associated with each currency role for a company code? How can I retrieve the global currency role and its associated currency for a company code? What are the free-defined currency roles and their corresponding currencies for a company code? How is the functional currency role defined for a company code, and what currency is associated with it? This view provides value help for CompanyCode. This view should be used for value help purposes only. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERCOMPANYCODECRCYROLEVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeCurrencyRole` |  | |  |  | `CHAR(2)` | Company Code Currency Role |
| `CompanyCodeCurrencyRoleName` |  | |  |  | `CHAR(60)` | Currency Role Name |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `GlobalCurrencyRole` |  | |  |  | `CHAR(2)` | Global Currency Role |
| `GlobalCurrencyRoleName` |  | |  |  | `CHAR(60)` | Global Currency Role Name |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `FreeDefinedCurrency1Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 1 Role  (Currency Type) |
| `FreeDefinedCurrency1RoleName` |  | |  |  | `CHAR(60)` | Freely Defined Currency 1 Role Name |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `FreeDefinedCurrency2Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 2 Role  (Currency Type) |
| `FreeDefinedCurrency2RoleName` |  | |  |  | `CHAR(60)` | Freely Defined Currency 2 Role Name |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `FreeDefinedCurrency3Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 3 Role  (Currency Type) |
| `FreeDefinedCurrency3RoleName` |  | |  |  | `CHAR(60)` | Freely Defined Currency 3 Role Name |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `FreeDefinedCurrency4Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 4 Role  (Currency Type) |
| `FreeDefinedCurrency4RoleName` |  | |  |  | `CHAR(60)` | Freely Defined Currency 4 Role Name |
| `FreeDefinedCurrency4` |  | |  |  | `CUKY(5)` | Freely Defined Currency 4 |
| `FreeDefinedCurrency5Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 5 Role  (Currency Type) |
| `FreeDefinedCurrency5RoleName` |  | |  |  | `CHAR(60)` | Freely Defined Currency 5 Role Name |
| `FreeDefinedCurrency5` |  | |  |  | `CUKY(5)` | Freely Defined Currency 5 |
| `FreeDefinedCurrency6Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 6 Role  (Currency Type) |
| `FreeDefinedCurrency6RoleName` |  | |  |  | `CHAR(60)` | Freely Defined Currency 6 Role Name |
| `FreeDefinedCurrency6` |  | |  |  | `CUKY(5)` | Freely Defined Currency 6 |
| `FreeDefinedCurrency7Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 7 Role  (Currency Type) |
| `FreeDefinedCurrency7RoleName` |  | |  |  | `CHAR(60)` | Freely Defined Currency 7 Role Name |
| `FreeDefinedCurrency7` |  | |  |  | `CUKY(5)` | Freely Defined Currency 7 |
| `FreeDefinedCurrency8Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 8 Role  (Currency Type) |
| `FreeDefinedCurrency8RoleName` |  | |  |  | `CHAR(60)` | Freely Defined Currency 8 Role Name |
| `FreeDefinedCurrency8` |  | |  |  | `CUKY(5)` | Freely Defined Currency 8 |
| `FunctionalCurrencyRole` |  | |  |  | `CHAR(2)` | Functional Currency Role (Currency Type) |
| `FunctionalCurrencyRoleName` |  | |  |  | `CHAR(60)` | Functional Currency Role Name |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
