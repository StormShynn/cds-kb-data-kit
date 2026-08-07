---
name: C_BALANCESHEETCURRENCYROLEVH
description: This CDS view is designed to provide a value help for balance sheet currency roles, offering a structured way to retrieve and display currency-related information associated with ledgers and company codes. It serves as a reference for users to understand the roles of different currencies in the context of balance sheets. This view provides the value help for the currency role. This view should be used for value help purposes only. If you intend to select the entire business data, use the view instead. This CDS view provides the data to answer the following business questions: What are the different currency roles available for balance sheets within a specific ledger and company code? How can I retrieve the name and detailed description of a specific currency role used in balance sheets? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BALANCESHEETCURRENCYROLEVH')/$value
semantic_en: This CDS view is designed to provide a value help for balance sheet currency roles, offering a structured way to retrieve and display currency-related information associated with ledgers and company codes. It serves as a reference for users to understand the roles of different currencies in the context of balance sheets. This view provides the value help for the currency role. This view should be used for value help purposes only. If you intend to select the entire business data, use the view instead. This CDS view provides the data to answer the following business questions: What are the different currency roles available for balance sheets within a specific ledger and company code? How can I retrieve the name and detailed description of a specific currency role used in balance sheets? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FI
  - bo:companycode
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
  - metadata-only
---
# C_BALANCESHEETCURRENCYROLEVH

**This CDS view is designed to provide a value help for balance sheet currency roles, offering a structured way to retrieve and display currency-related information associated with ledgers and company codes. It serves as a reference for users to understand the roles of different currencies in the context of balance sheets. This view provides the value help for the currency role. This view should be used for value help purposes only. If you intend to select the entire business data, use the view instead. This CDS view provides the data to answer the following business questions: What are the different currency roles available for balance sheets within a specific ledger and company code? How can I retrieve the name and detailed description of a specific currency role used in balance sheets? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BALANCESHEETCURRENCYROLEVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CurrencyField` |  | |  |  | `CHAR(4)` | Currency Role Field |
| `CurrencyRole` |  | |  |  | `CHAR(2)` | Currency Type |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CurrencyRoleName` |  | |  |  | `CHAR(80)` | Currency Role Name |
| `CurrencyRoleLongName` |  | |  |  | `CHAR(100)` | Currency Role Name |
| `CurrencyFieldName` |  | |  |  | `CHAR(60)` | Text for Currency Role Field |
