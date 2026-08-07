---
name: I_APPLICATIONOFFUND
description: Application of Fund
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APPLICATIONOFFUND')/$value
semantic_en: Application of Fund
keywords:
  - Application of Fund
tags:
  - PSM
  - component:PSM
  - interface-view
  - metadata-only
---
# I_APPLICATIONOFFUND

**Application of Fund**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APPLICATIONOFFUND')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `ApplicationOfFunds` |  | |  |  | `CHAR(16)` | Application of Funds |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Application of Funds Validity Start Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Application of Funds Validity End Date |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Application of Funds Created by User |
| `CreationDate` |  | |  |  | `DATS(8)` | Application of Funds Created on Date |
| `LastChangeUser` |  | |  |  | `CHAR(12)` | Application of Funds Last Changed by User |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Application of Funds Last Changed on Date |
| `US_FedGvmntDepartmentRegular` |  | |  |  | `CHAR(2)` | Department Regular |
| `US_FedGvmntDepartmentTransfer` |  | |  |  | `CHAR(2)` | Department Transfer |
| `US_FedGvmntMainAccount` |  | |  |  | `CHAR(4)` | Main Account |
| `US_FedGvmntSubAccount` |  | |  |  | `CHAR(3)` | Subaccount |
| `US_FedGvmntSplitSequenceNumber` |  | |  |  | `CHAR(3)` | Split Sequence Number |
| `US_IsFedGvmntFACTS2Relevant` |  | |  |  | `CHAR(1)` | FACTS II Relevant |
| `US_FedGvmntPreparer` |  | |  |  | `CHAR(8)` | Preparer ID |
| `US_FedGvmntCertifier` |  | |  |  | `CHAR(8)` | Certifier ID |
