---
name: _DCO_I_CUSTOMERCOMPANY
description: Customer Company
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_CUSTOMERCOMPANY')/$value
semantic_en: Customer Company
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-COL-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - metadata-only
---
# _DCO_I_CUSTOMERCOMPANY

**Customer Company**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_CUSTOMERCOMPANY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Customer` | `CHAR(10)` | Customer |
| `CompanyCode` | `CHAR(4)` | Company Code (FI System) |
| `LogicalSystem` | `CHAR(10)` | Logical System |
| `IsBusinessPurposeCompleted` | `CHAR(1)` | Business Purpose Is Completed |
| `AccountingClerk` | `CHAR(2)` | Accounting Clerk |
| `AccountByCustomer` | `CHAR(12)` | Account at Customer |
| `CustomerHeadOffice` | `CHAR(10)` | Head Office |
| `AccountingClerkInternetAddress` | `SSTR(130)` | Internet Address |
| `DunningClerk` | `CHAR(2)` | Dunning Clerk |
