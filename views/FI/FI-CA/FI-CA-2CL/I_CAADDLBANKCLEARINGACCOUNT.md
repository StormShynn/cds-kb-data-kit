---
name: I_CAADDLBANKCLEARINGACCOUNT
description: Additional Bank Clearing Account
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAADDLBANKCLEARINGACCOUNT')/$value
semantic_en: Additional Bank Clearing Account
tags:
  - FI
  - account
  - component:FI-CA-2CL
  - FI-CA
  - FI-CA-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
  - metadata-only
---
# I_CAADDLBANKCLEARINGACCOUNT

**Additional Bank Clearing Account**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAADDLBANKCLEARINGACCOUNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CABankClearingAccount` |  | |  |  | `CHAR(10)` | Bank clearing account |
| `HouseBank` |  | |  |  | `CHAR(5)` | Short Key for a House Bank |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | ID for Account Details |
