---
name: I_COLLTRLINSURPERSNSPEC
description: Specification of Persn for Colltrl Insur
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLINSURPERSNSPEC')/$value
semantic_en: Specification of Persn for Colltrl Insur
tags:
  - FS
  - bo:companycode
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_COLLTRLINSURPERSNSPEC

**Specification of Persn for Colltrl Insur**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLINSURPERSNSPEC')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CollateralInsurancePersonUUID` | `RAW(16)` | Insurance Person GUID |
| `CollateralInsuranceUUID` | `RAW(16)` | Insurance GUID |
| `CollateralInsuredPersonName` | `CHAR(30)` | Name of the insured person |
| `CollateralInsuranceStatus` | `CHAR(6)` | Status of  insurance |
| `CollateralInsuranceStatusDate` | `DATS(8)` | Status date of  insurance |
| `ColltrlInsurRankDescription` | `CHAR(30)` | Specification on the insurance rank of the person |
| `CollateralInsuredRiskType` | `CHAR(6)` | Insured risk |
| `ColltrlInsurSglPremiumAmount` | `CURR(17)` | Insurance one time Cntribution /Single Premium insurance |
| `ColltrlInsurSglPremiumCurrency` | `CUKY(5)` | Currency |
| `ColltrlInsurOneTmeContrbnAmt` | `CURR(17)` | Undrawn(unused) one time contribution |
| `ColltrlInsurOneTmeContrbnCrcy` | `CUKY(5)` | Currency |
| `ColltrlInsurPremiumRenewalDate` | `DATS(8)` | Renewal date(insurance premium) |
| `CollateralInsuranceEnteredBy` | `CHAR(12)` | Login ID of the User who created the Record |
| `ColltrlInsurEnteredDateTime` | `DEC(15)` | Creation Timestamp |
| `ColltrlInsuranceLastChangedBy` | `CHAR(12)` | Last Changed By |
| `ColltrlInsurLastChgdDateTime` | `DEC(15)` | Change Timestamp |
| `ColltrlInsuranceEnteredSource` | `CHAR(32)` | Source of Entry |
