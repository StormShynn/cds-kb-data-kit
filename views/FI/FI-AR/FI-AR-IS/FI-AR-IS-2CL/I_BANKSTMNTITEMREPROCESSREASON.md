---
name: I_BANKSTMNTITEMREPROCESSREASON
description: This basic CDS view provides you with access to the bank statement reprocessing reason. It is associated with I_BankStmntItmReprocessRsnName, which provides an explanation for each reason code. This CDS view provides you with the necessary information to answer the following business question: What is the reason for reprocessing a bank statement item?
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKSTMNTITEMREPROCESSREASON')/$value
semantic_en: This basic CDS view provides you with access to the bank statement reprocessing reason. It is associated with I_BankStmntItmReprocessRsnName, which provides an explanation for each reason code. This CDS view provides you with the necessary information to answer the following business question: What is the reason for reprocessing a bank statement item?
tags:
  - FI
  - bo:salesorder
  - component:FI-AR-IS-2CL
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - interface-view
  - lob:finance
  - plan
  - metadata-only
---
# I_BANKSTMNTITEMREPROCESSREASON

**This basic CDS view provides you with access to the bank statement reprocessing reason. It is associated with I_BankStmntItmReprocessRsnName, which provides an explanation for each reason code. This CDS view provides you with the necessary information to answer the following business question: What is the reason for reprocessing a bank statement item?**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKSTMNTITEMREPROCESSREASON')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BankStmntItemReprocessReason` | `CHAR(2)` | Reprocessing Reason Code |
