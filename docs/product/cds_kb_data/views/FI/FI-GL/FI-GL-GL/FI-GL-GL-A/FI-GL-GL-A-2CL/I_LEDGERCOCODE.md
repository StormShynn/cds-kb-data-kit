---
name: I_LEDGERCOCODE
description: "This CDS view provides the settings for active ledger and company code combinations. It combines ledger-company code relationships with essential master data attributes such as chart of accounts, controlling area, fiscal year variant, and currency settings. The view serves as a reference point for understanding how company codes are configured within different ledgers and provides access to related organizational and accounting configuration data. This CDS view provides the data to answer the following business questions: Which company codes are assigned to a specific ledger and what are their basic organizational details (name, city)? What chart of accounts, controlling area, and fiscal year variant are configured for each company code-ledger combination? What is the company code currency assigned to each company code operating within a particular ledger? How can I navigate from a ledger-company code combination to related master data such as fiscal year variants or currency definitions? Which company codes share the same accounting configuration settings (chart of accounts, controlling area) across different ledgers? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERCOCODE')/$value
semantic_en: "This CDS view provides the settings for active ledger and company code combinations. It combines ledger-company code relationships with essential master data attributes such as chart of accounts, controlling area, fiscal year variant, and currency settings. The view serves as a reference point for understanding how company codes are configured within different ledgers and provides access to related organizational and accounting configuration data. This CDS view provides the data to answer the following business questions: Which company codes are assigned to a specific ledger and what are their basic organizational details (name, city)? What chart of accounts, controlling area, and fiscal year variant are configured for each company code-ledger combination? What is the company code currency assigned to each company code operating within a particular ledger? How can I navigate from a ledger-company code combination to related master data such as fiscal year variants or currency definitions? Which company codes share the same accounting configuration settings (chart of accounts, controlling area) across different ledgers? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-GL-GL-A-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-A
  - FI-GL-GL-A-2CL
  - interface-view
  - lob:finance
  - master-data
  - metadata-only
---
# I_LEDGERCOCODE

**This CDS view provides the settings for active ledger and company code combinations. It combines ledger-company code relationships with essential master data attributes such as chart of accounts, controlling area, fiscal year variant, and currency settings. The view serves as a reference point for understanding how company codes are configured within different ledgers and provides access to related organizational and accounting configuration data. This CDS view provides the data to answer the following business questions: Which company codes are assigned to a specific ledger and what are their basic organizational details (name, city)? What chart of accounts, controlling area, and fiscal year variant are configured for each company code-ledger combination? What is the company code currency assigned to each company code operating within a particular ledger? How can I navigate from a ledger-company code combination to related master data such as fiscal year variants or currency definitions? Which company codes share the same accounting configuration settings (chart of accounts, controlling area) across different ledgers? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERCOCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `CityName` |  | |  |  | `CHAR(25)` | City |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
