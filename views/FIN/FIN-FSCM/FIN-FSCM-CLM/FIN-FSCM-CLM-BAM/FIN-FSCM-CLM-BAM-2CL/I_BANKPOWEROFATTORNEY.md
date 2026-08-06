---
name: I_BANKPOWEROFATTORNEY
description: POA for Banking Transactions
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKPOWEROFATTORNEY')/$value
semantic_en: POA for Banking Transactions
tags:
  - FIN
  - bo:purchaseorder
  - component:FIN-FSCM-CLM-BAM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - interface-view
  - lob:finance
  - transaction
  - metadata-only
---
# I_BANKPOWEROFATTORNEY

**POA for Banking Transactions**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKPOWEROFATTORNEY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BankPowerOfAttorneyUUID` | `RAW(16)` | Power of Attorney UUID |
| `BankPowerOfAttorney` | `CHAR(20)` | Power of Attorney ID |
| `ValidityStartDate` | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` | `DATS(8)` | Valid-To Date |
| `BkPOAAdjustedValidityEndDate` | `DATS(8)` | Valid-To Date |
| `BkPOABankAccountAssignmentType` | `CHAR(2)` | Bank Account Assignment Type |
| `BankPowerOfAttorneyName` | `CHAR(40)` | Power of Attorney Description |
| `BankPowerOfAttorneyStatus` | `CHAR(2)` | Power of Attorney Status |
| `BkPOAAuthorizationGroup` | `CHAR(10)` | Authorization Group for Powers of Attorney |
| `PaymentApprovalRule` | `CHAR(20)` | Payment Approval Rule ID |
| `LastChangeDateTime` | `DEC(15)` | Power of Attorney: Change Timestamp |
| `CreatedByUser` | `CHAR(12)` | Created By |
| `CreationDateTime` | `DEC(15)` | Power of Attorney: Creation Timestamp |
| `LastChangedByUser` | `CHAR(12)` | Changed By |
| `LocalLastChangeDateTime` | `DEC(15)` | Power of Attorney: Local Change Timestamp |
| `BkPOARtntnPeriodStartDateTime` | `DEC(15)` | Power of Attorney: Start of Retention Period Timestamp |
| `BankPowerOfAttorneyIsBlocked` | `CHAR(1)` | Power of Attorney: Blocking Indicator |
| `BankPowerOfAttorneyType` | `CHAR(4)` | Power of Attorney Type |
