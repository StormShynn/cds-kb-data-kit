---
name: _DCO_I_CUSTOMERCOMPANY
description: "This CDS view is provides company code data of customers in Financial Accounting, specifically focusing on accounting and dunning-related information. It extracts and organizes data from the customer master data, making it accessible for various business processes and analyses. This CDS view provides the data to answer the following business questions: What are the key identifiers (company code, logical system) for each customer? Is the business purpose for each customer completed in a company code? Who is the accounting clerk responsible for each customer in a company code, and what is their internet address? What is the account number assigned to each customer in the company code? Where is the head office of each customer located for a specific company code? Who is the dunning clerk responsible for managing overdue payments for each company code of a customer? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_CUSTOMERCOMPANY')/$value
semantic_en: "This CDS view is provides company code data of customers in Financial Accounting, specifically focusing on accounting and dunning-related information. It extracts and organizes data from the customer master data, making it accessible for various business processes and analyses. This CDS view provides the data to answer the following business questions: What are the key identifiers (company code, logical system) for each customer? Is the business purpose for each customer completed in a company code? Who is the accounting clerk responsible for each customer in a company code, and what is their internet address? What is the account number assigned to each customer in the company code? Where is the head office of each customer located for a specific company code? Who is the dunning clerk responsible for managing overdue payments for each company code of a customer? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - account
  - bo:businesspartner
  - component:FIN-FSCM-COL-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - master-data
  - payment
  - metadata-only
---
# _DCO_I_CUSTOMERCOMPANY

**This CDS view is provides company code data of customers in Financial Accounting, specifically focusing on accounting and dunning-related information. It extracts and organizes data from the customer master data, making it accessible for various business processes and analyses. This CDS view provides the data to answer the following business questions: What are the key identifiers (company code, logical system) for each customer? Is the business purpose for each customer completed in a company code? Who is the accounting clerk responsible for each customer in a company code, and what is their internet address? What is the account number assigned to each customer in the company code? Where is the head office of each customer located for a specific company code? Who is the dunning clerk responsible for managing overdue payments for each company code of a customer? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_CUSTOMERCOMPANY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` |  | |  |  | `CHAR(10)` | Customer |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code (FI System) |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Is Completed |
| `AccountingClerk` |  | |  |  | `CHAR(2)` | Accounting Clerk |
| `AccountByCustomer` |  | |  |  | `CHAR(12)` | Account at Customer |
| `CustomerHeadOffice` |  | |  |  | `CHAR(10)` | Head Office |
| `AccountingClerkInternetAddress` |  | |  |  | `SSTR(130)` | Internet Address |
| `DunningClerk` |  | |  |  | `CHAR(2)` | Dunning Clerk |
