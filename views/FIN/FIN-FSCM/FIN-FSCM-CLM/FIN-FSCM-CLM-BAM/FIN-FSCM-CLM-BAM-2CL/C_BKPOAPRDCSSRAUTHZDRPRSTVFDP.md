---
name: C_BKPOAPRDCSSRAUTHZDRPRSTVFDP
description: Predecessor Auth Rep Form Data Provider
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAPRDCSSRAUTHZDRPRSTVFDP')/$value
semantic_en: Predecessor Auth Rep Form Data Provider
tags:
  - FIN
  - bo:purchaseorder
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - metadata-only
---
# C_BKPOAPRDCSSRAUTHZDRPRSTVFDP

**Predecessor Auth Rep Form Data Provider**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAPRDCSSRAUTHZDRPRSTVFDP')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BankPowerOfAttorneyUUID` | `RAW(16)` | Power of Attorney UUID |
| `PredecessorBankPOAUUID` | `RAW(16)` | Power of Attorney UUID |
| `BkPOAAuthzdRepresentative` | `CHAR(10)` | Business Partner Number of Authorized Representative |
| `PaymentApproverGroup` | `CHAR(3)` | Payment Approver Group |
| `BkPOAComparisonResult` | `INT1(3)` | Comparison Result |
| `BusinessPartnerName` | `CHAR(81)` |  |
| `FormOfAddressName` | `CHAR(30)` | Title text |
| `FirstName` | `CHAR(40)` | First Name of Business Partner (Person) |
| `LastName` | `CHAR(40)` | Last Name of Business Partner (Person) |
| `BirthDate` | `DATS(8)` | Date of Birth of Business Partner |
| `BankPowerOfAttorney` | `CHAR(20)` | Power of Attorney ID |
| `BankPowerOfAttorneyPredecessor` | `CHAR(20)` | ID of Predecessor Power of Attorney |
