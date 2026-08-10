---
name: I_LEDGERCOMPANYCODEVH
description: "This CDS view is designed to provide a comprehensive value help for company codes associated with specific ledgers. It combines information from ledger roles and company code details to facilitate easy access and searchability for end users. The view is optimized for use in applications where users need to select or search for company codes based on ledger information, ensuring efficient data retrieval and usability. This view should be used for value help purposes only This CDS view provides the data to answer the following business questions: Which company codes are associated with a specific ledger? What are the details of a company code, such as its name, controlling area, chart of accounts, city, and currency? How can users efficiently search for company codes using fuzzy search capabilities? What fiscal year variant is associated with a particular company code and ledger combination? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERCOMPANYCODEVH')/$value
semantic_en: "This CDS view is designed to provide a comprehensive value help for company codes associated with specific ledgers. It combines information from ledger roles and company code details to facilitate easy access and searchability for end users. The view is optimized for use in applications where users need to select or search for company codes based on ledger information, ensuring efficient data retrieval and usability. This view should be used for value help purposes only This CDS view provides the data to answer the following business questions: Which company codes are associated with a specific ledger? What are the details of a company code, such as its name, controlling area, chart of accounts, city, and currency? How can users efficiently search for company codes using fuzzy search capabilities? What fiscal year variant is associated with a particular company code and ledger combination? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - account
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
# I_LEDGERCOMPANYCODEVH

**This CDS view is designed to provide a comprehensive value help for company codes associated with specific ledgers. It combines information from ledger roles and company code details to facilitate easy access and searchability for end users. The view is optimized for use in applications where users need to select or search for company codes based on ledger information, ensuring efficient data retrieval and usability. This view should be used for value help purposes only This CDS view provides the data to answer the following business questions: Which company codes are associated with a specific ledger? What are the details of a company code, such as its name, controlling area, chart of accounts, city, and currency? How can users efficiently search for company codes using fuzzy search capabilities? What fiscal year variant is associated with a particular company code and ledger combination? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERCOMPANYCODEVH')/$value) |

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
