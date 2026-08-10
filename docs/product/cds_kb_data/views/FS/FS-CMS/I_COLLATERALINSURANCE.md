---
name: I_COLLATERALINSURANCE
description: "Collateral Insurance Object Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALINSURANCE')/$value
semantic_en: "Collateral Insurance Object Details"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_COLLATERALINSURANCE

**Collateral Insurance Object Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALINSURANCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralInsuranceUUID` |  | |  |  | `RAW(16)` | Insurance GUID |
| `CollateralInsuranceConvertedID` |  | |  |  | `CHAR(40)` | Reference ID for the object |
| `CollateralObjectCategory` |  | |  |  | `CHAR(6)` | Object Category |
| `CollateralInsuranceType` |  | |  |  | `CHAR(6)` | Insurance Type |
| `CollateralInsuranceIdentifier` |  | |  |  | `CHAR(40)` | Insurance ID |
| `CollateralInsuranceDescription` |  | |  |  | `CHAR(30)` | Insurance Description |
| `ColltrlInsuranceBankTaxDebit` |  | |  |  | `CHAR(1)` |  Insurance tax to the debit of the bank |
| `ColltrlInsuranceSettlementType` |  | |  |  | `CHAR(6)` | Type of settlement |
| `CollateralInsuranceSumAmount` |  | |  |  | `CURR(17)` | Insurance Sum |
| `CollateralInsuranceSumCurrency` |  | |  |  | `CUKY(5)` | Insurance Currency |
| `CollateralInsurancePremiumRate` |  | |  |  | `DEC(10)` | Premium Rate |
| `ColltrlInsurancePremiumAmount` |  | |  |  | `CURR(17)` | Insurance Premium |
| `ColltrlInsurPremiumCurrency` |  | |  |  | `CUKY(5)` | Insurance Currency |
| `CollateralInsuranceTaxRate` |  | |  |  | `DEC(10)` | Insurance tax rate (in %) |
| `CollateralInsuranceTaxAmount` |  | |  |  | `CURR(17)` | Insurance tax amount |
| `CollateralInsuranceTaxCurrency` |  | |  |  | `CUKY(5)` | Tax Currency |
| `CollateralInsuranceStartDate` |  | |  |  | `DATS(8)` | Start date of  insurance |
| `CollateralInsuranceExpiryDate` |  | |  |  | `DATS(8)` | Date of expiry of  insurance |
| `ColltrlInsurRqdCoverAmount` |  | |  |  | `CURR(17)` | Required insurance cover |
| `ColltrlInsurRqdCoverCurrency` |  | |  |  | `CUKY(5)` | Insurance Currency |
| `CollateralInsuranceInsurerName` |  | |  |  | `CHAR(30)` | Name of the insurer |
| `ColltrlInsurInsurerDescription` |  | |  |  | `CHAR(30)` | Remarks on insurer |
| `CollateralInsuranceCoverMarket` |  | |  |  | `CHAR(3)` | Cover Market |
| `ColltrlInsurCovrMktShareAmount` |  | |  |  | `CURR(17)` | Share of cover market |
| `ColltrlInsurCovrMktShrCurrency` |  | |  |  | `CUKY(5)` | Currency for Share of Cover Market |
| `ColltrlInsurContactFirmName` |  | |  |  | `CHAR(30)` | Contact firm |
| `ColltrlInsurContactPartnerName` |  | |  |  | `CHAR(30)` | Contact partner |
| `ColltrlInsurTariffDescription` |  | |  |  | `CHAR(30)` | Insurance tariff |
| `ColltrlInsurContractBeginDate` |  | |  |  | `DATS(8)` | Contract begin date |
| `ColltrlInsurContractEndDate` |  | |  |  | `DATS(8)` | Contract end date |
| `ColltrlInsurContrCnclsnDate` |  | |  |  | `DATS(8)` | Date of conclusion of contract |
| `CollateralInsuranceStatus` |  | |  |  | `CHAR(6)` | Status of  insurance |
| `CollateralInsuranceStatusDate` |  | |  |  | `DATS(8)` | Status date of  insurance |
| `ColltrlInsurOneTmeContrbnAmt` |  | |  |  | `CURR(17)` | Sum of one time contribution |
| `ColltrlInsurOneTmeContrbnCrcy` |  | |  |  | `CUKY(5)` | Currency |
| `ColltrlInsurHasDynamicAdaption` |  | |  |  | `CHAR(1)` | Dynamics |
| `ColltrlInsurDynamicsPercent` |  | |  |  | `DEC(10)` | Percentage of the dynamics |
| `ColltrlInsurTerminationPeriod` |  | |  |  | `NUMC(4)` | Termination period |
| `ColltrlInsurTermnPeriodUnit` |  | |  |  | `CHAR(2)` | Indicator: Units of termination period |
| `ColltrlInsuranceRecallPeriod` |  | |  |  | `NUMC(4)` | Recall period |
| `ColltrlInsurRecallPeriodUnit` |  | |  |  | `CHAR(2)` | Indicator: Units of Recall Period |
| `ColltrlInsurSurvlBenefitAmount` |  | |  |  | `CURR(17)` | Insurance sum incase of survival |
| `ColltrlInsurSurvlBnftCurrency` |  | |  |  | `CUKY(5)` | Insurance survival Currency |
| `ColltrlInsurDeathBenefitAmount` |  | |  |  | `CURR(17)` | Insurance sum in case of death |
| `ColltrlInsurDthBenefitCurrency` |  | |  |  | `CUKY(5)` | Death benefit currency |
| `ColltrlInsurExpryBenefitAmount` |  | |  |  | `CURR(17)` | Probable benefit on expiry |
| `ColltrlInsurExpryBnftCurrency` |  | |  |  | `CUKY(5)` | Currency for probable benefit on expiry |
| `ColltrlInsurExpiryBenefitDate` |  | |  |  | `DATS(8)` | Date of probable benefit on expiry |
| `CollateralAdminOrgUnit` |  | |  |  | `CHAR(12)` | Administration Organizational Unit |
| `CollateralBankArea` |  | |  |  | `CHAR(4)` | Bank Area in Collateral Management |
