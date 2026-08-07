---
name: I_COLLATERALAGREEMENTDATA
description: Collateral Agreement Details
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALAGREEMENTDATA')/$value
semantic_en: Collateral Agreement Details
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_COLLATERALAGREEMENTDATA

**Collateral Agreement Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALAGREEMENTDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralAgreementUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_CAG |
| `CollateralAgreementID` |  | |  |  | `CHAR(40)` | Collateral Agreement ID |
| `CollateralAgreementType` |  | |  |  | `CHAR(6)` | Collateral Agreement Type |
| `CollateralAgreementNominalAmt` |  | |  |  | `CURR(17)` | Nominal Value of the Collateral Agreement |
| `CollateralAgrmtNominalCrcy` |  | |  |  | `CUKY(5)` | Currency for Nominal Value of the Collateral Agreement |
| `ColltrlAgrmtAssessmentAmt` |  | |  |  | `CURR(17)` | Assessment  Amount |
| `ColltrlAgrmtAssessmentCrcy` |  | |  |  | `CUKY(5)` | Currency of Assessment Value |
| `ColltrlAgrmtAssessmentDate` |  | |  |  | `DATS(8)` | Date on which the Assessment Value was Calculated |
| `ColltrlAgreementConcludeDate` |  | |  |  | `DATS(8)` | Date on which Collateral Agreement was Concluded |
| `ColltrlAgreementValidFromDate` |  | |  |  | `DATS(8)` | Date |
| `ColltrlAgreementValidToDate` |  | |  |  | `DATS(8)` | Date |
| `CollateralAdminOrgUnit` |  | |  |  | `CHAR(12)` | Administration Organizational Unit |
| `CollateralBankArea` |  | |  |  | `CHAR(4)` | Bank Area in Collateral Management |
| `ColltrlAgrmtJurisdictionCntry` |  | |  |  | `CHAR(3)` | Jurisdiction Country/Region |
| `CollateralAgreementIsGlobal` |  | |  |  | `CHAR(1)` | Flag to indicate a Global Collateral Agreement |
| `ColltrlAgrmtSpclMarkDwnPct` |  | |  |  | `DEC(10)` | Percentage of Special Markdown |
| `ColltrlAgrmtSpclMarkDwnAmt` |  | |  |  | `CURR(17)` | Amount of Special Markdown |
| `ColltrlAgrmtSpclMarkdownCrcy` |  | |  |  | `CUKY(5)` | Currency for Amount of Special Markdown |
| `CollateralAgreementDescription` |  | |  |  | `CHAR(30)` | Description of Collateral Agreement |
| `ColltrlAgrmtReleaseFrequency` |  | |  |  | `CHAR(2)` | The unit for period of Release Frequency |
| `ColltrlAgrmtReleasePeriod` |  | |  |  | `NUMC(4)` | Period for Frequency of Release of Collateral Agreement |
| `ColltrlAgrmtExtRefNumber` |  | |  |  | `CHAR(40)` | External/Old Collateral Agreement ID |
| `ColltrlAgrmtMinQltatvExcptn` |  | |  |  | `CHAR(6)` | Exceptions for Minimum Risk Weight |
| `ColltrlAgrmtMinQltatvCritraRsn` |  | |  |  | `CHAR(6)` | Reason for the Minimum Qualitative Criterion |
| `ColltrlAgrmtIsMinQltatvRqmts` |  | |  |  | `CHAR(1)` | Flag:Minimum requirements fulfilled for CAG(for Basel II) |
| `ColltrlAgrmtMinQltatvCriteria` |  | |  |  | `CHAR(6)` | MInimum Qualitative Criterion |
| `CollateralAgreementAssetPct` |  | |  |  | `DEC(10)` | Percentage of the Asset Value used in Collateral Agreement |
| `ColltrlAgrmtTermnRightType` |  | |  |  | `CHAR(6)` | Termination Right Type |
| `ColltrlAgrmtTermnFrequency` |  | |  |  | `CHAR(2)` | The Unit for Period of Termination Frequency |
| `ColltrlAgrmtTermnPeriod` |  | |  |  | `NUMC(4)` | Period for Frequency of Termination of Collateral Agreement |
| `ColltrlAgrmtTermnNoticeFrqcy` |  | |  |  | `CHAR(2)` | The Unit for the Termination Notice Period |
| `ColltrlAgrmtTermnNoticePeriod` |  | |  |  | `NUMC(4)` | Notice Period Required to Terminate Collateral Agreement |
| `ColltrlAgrmtTermnNoticeDate` |  | |  |  | `DATS(8)` | Date on which Termination Notice was Sent |
| `ColltrlAgrmtTerminationReason` |  | |  |  | `CHAR(6)` | Termination Type |
| `ColltrlAgrmtTermnGuarAmt` |  | |  |  | `CURR(17)` | Amount of Guarantee in the event of Termination |
| `ColltrlAgrmtTermnGuarCrcy` |  | |  |  | `CUKY(5)` | Currency for Amount of Guarantee in the event of Termination |
| `ColltrlAgrmtGuaranteePct` |  | |  |  | `DEC(10)` | Guarantee Rate |
| `ColltrlAgrmtHasCounterGuar` |  | |  |  | `CHAR(1)` | Flag for Counter Guarantee |
| `ColltrlAgrmtHasAdditionalGuar` |  | |  |  | `CHAR(1)` | Flag for Co-guarantee |
| `ColltrlAgrmtGuarIsFxdLiability` |  | |  |  | `CHAR(1)` | Flag for Fixed Liability |
| `ColltrlAgrmtGuarIsDfltLblty` |  | |  |  | `CHAR(1)` | Flag for Default Liability |
| `ColltrlAgrmtGuarDfltLbltyPct` |  | |  |  | `DEC(10)` | Default Liability in % |
| `ColltrlAgrmtGuarLinkInCalc` |  | |  |  | `CHAR(1)` | Flag for back-up guarantee to be used in calculations or not |
| `ColltrlAgrmtGuarAuthApproval` |  | |  |  | `CHAR(2)` | Approval from authorities |
| `ColltrlAgrmtGuarIsEnforceable` |  | |  |  | `CHAR(1)` | Agreement directly enforceable |
| `ColltrlAgrmtGuarLendingRate` |  | |  |  | `DEC(10)` | Lending Rate of a Guarantee |
| `ColltrlAgrmtGuarReducnFrqcy` |  | |  |  | `CHAR(2)` | Unit for Period of Frequency for Reduction in Guarantee Valu |
| `ColltrlAgrmtGuarReducnPeriod` |  | |  |  | `NUMC(4)` | Period for Frequency of Reduction in Value of Guarantee |
| `ColltrlAgrmtGuarReducnAmt` |  | |  |  | `CURR(17)` | Reduction in Amount of Guarantee |
| `ColltrlAgrmtGuarReducnCrcy` |  | |  |  | `CUKY(5)` | Currency of the Reduced Amount of the Guarantee |
| `ColltrlAgrmtGuarReducnPct` |  | |  |  | `DEC(10)` | Percentage of Reduction in the Value of a Guarantee |
| `ColltrlAgrmtOriginalAmount` |  | |  |  | `CURR(17)` | Original Protection of the Agreements |
| `ColltrlAgrmtOriginalCurrency` |  | |  |  | `CUKY(5)` | Currency of the Original Protection Value |
| `ColltrlAgrmtTransfIsLeasing` |  | |  |  | `CHAR(1)` | Flag:  Transfer is part of a leasing transaction |
| `ColltrlAgrmtTransfLessorLien` |  | |  |  | `CHAR(2)` | Indicator for Lessor Lien on Collateral Agreement |
| `ColltrlAgrmtTransfAccsryLblty` |  | |  |  | `CHAR(2)` | Specifies the applicability of accessories liability |
| `ColltrlAgrmtAcctRblAssgmt` |  | |  |  | `CHAR(1)` | Flag  for Assignment of Accounts Receivables(AR) from Sale |
| `ColltrlAgrmtMinStockAmount` |  | |  |  | `CURR(17)` | Minimum stock Amount agreed in the Collateral Agreement |
| `ColltrlAgrmtMinStockCurrency` |  | |  |  | `CUKY(5)` | Currency of the Minimum Stock Amount |
| `ColltrlAgrmtHasAdditionalRbl` |  | |  |  | `CHAR(1)` | Flag for Additional receivable |
| `ColltrlAgrmtAdditionalRblDate` |  | |  |  | `DATS(8)` | Date on which Additional Receivable was Accepted |
| `AgrmtGenBusCndnLienWvr` |  | |  |  | `CHAR(2)` | GBC Lien on Agreement |
| `ColltrlAgrmtPledgeIsDisclosed` |  | |  |  | `CHAR(1)` | Flag to indicator whether the Agreement is disclosed or not |
| `ColltrlAgrmtPledgeDisclosedDte` |  | |  |  | `DATS(8)` | Date of Disclosure to Third-party Debtor |
| `ColltrlAgrmtAssignmentReason` |  | |  |  | `CHAR(6)` | Reason for Assignment |
| `AgrmtLandChrgInterestRate` |  | |  |  | `DEC(10)` | Land Charge Interest Rate |
| `AgrmtLandChrgIncidentalPaytPct` |  | |  |  | `DEC(10)` | Incidental Payments in Percentage |
| `AgrmtLandChrgPaytFrqcy` |  | |  |  | `CHAR(2)` | The unit for period of payment frequency |
| `AgrmtLandChrgPaytPeriod` |  | |  |  | `NUMC(4)` | Period for Frequency of Payment of Land Charge Interest |
| `AgrmtLandChrgCalcStrtDate` |  | |  |  | `DATS(8)` | Start Date for Land Charge Interest Calculation |
| `AgrmtLandChrgIntrstCapitalYrs` |  | |  |  | `NUMC(4)` | Number of Years the Land Charge Interest can be Capitalized |
| `AgrmtLandChrgEnforcementType` |  | |  |  | `CHAR(2)` | Enforcement Type |
| `AgrmtLandChrgEnforcementAmt` |  | |  |  | `CURR(17)` | Enforcement Amount |
| `AgrmtLandChrgEnforcementCrcy` |  | |  |  | `CUKY(5)` | Currency for Enforcement Amount of Land Charge |
| `AgrmtLandChrgRefEnforcementAmt` |  | |  |  | `CURR(17)` | Reference amount for part (Equal,Secondar) enforcebility |
| `AgrmtLandChrgEnfrcmntTtlType` |  | |  |  | `CHAR(2)` | Indicator for Enforcement Title |
| `ColAgrHtBlRgIntrstPayFrqUnit` |  | |  |  | `CHAR(2)` | Unit for period of Payment Frequency of HBR interest |
| `ColAgrHtBlRgIntrstPayFrqPerd` |  | |  |  | `NUMC(4)` | Payment Frequency Period for HBR interest |
| `ColAgrHtBlRgIsIntrstIncreasing` |  | |  |  | `CHAR(1)` | Flag for increase in HBR interest |
| `ColAgrHtBlRgIntIncFrqUnit` |  | |  |  | `CHAR(2)` | Unit for Frequency Period of Increase in HBR Interest |
| `ColAgrHtBlRgIntIncFrqPerd` |  | |  |  | `NUMC(4)` | Frequency Period for Increase in HBR Interest |
| `ColAgrHtBlRgIncreasePct` |  | |  |  | `DEC(10)` | Percentage Increase in Heritable Building Rights Amount |
| `ColAgrHtBlRgIncreaseAmt` |  | |  |  | `CURR(17)` | Increase in Heritable Building Rights Amount |
| `ColAgrHtBlRgIncreaseCrcy` |  | |  |  | `CUKY(5)` | Currency for Increase in HBR amount |
| `ColAgrHtBlRgIntrstIncrStartDte` |  | |  |  | `DATS(8)` | Start date for Increase in Heritable Building Right Interest |
| `ColAgrHtBlRgEnfrcmntWvr` |  | |  |  | `CHAR(2)` | Indicator for Waiver of HBR Enforcement |
| `ColAgrHtBlRgIntrstIncrLastDte` |  | |  |  | `DATS(8)` | Last date of Increase in Heritable Building Right Interest |
| `AgrmtLandChrgIsCollective` |  | |  |  | `CHAR(1)` | Flag: Collective Land Charge |
| `AgrmtLandChrgHasCert` |  | |  |  | `CHAR(1)` | Flag: Land Charge certificate exists |
| `AgrmtLandChrgCertNumber` |  | |  |  | `CHAR(30)` | Charge Certificate Number |
| `AgrmtLandChrgFileNumber` |  | |  |  | `CHAR(30)` | File Number |
| `ColltrlAgrmtCreditInsurCover` |  | |  |  | `CHAR(6)` | Scope of Cover of Credit Insurance |
| `ColltrlAgrmtUnit1` |  | |  |  | `CHAR(10)` | Organizational Unit 1: Collateral Agreement |
| `ColltrlAgrmtUnit2` |  | |  |  | `CHAR(10)` | Organizational Unit 2: Collateral Agreement |
| `ColltrlAgrmtUnit3` |  | |  |  | `CHAR(10)` | Organizational Unit 3: Collateral Agreement |
| `ColltrlAgrmtUnit4` |  | |  |  | `CHAR(10)` | Organizational Unit 4: Collateral Agreement |
| `ColltrlAgrmtUnit5` |  | |  |  | `CHAR(10)` | Organizational Unit 5: Collateral Agreement |
| `ColltrlAgrmtLiquidationMode` |  | |  |  | `CHAR(6)` | Mode of Liquidation decision for the pool agreement |
| `ColltrlAgrmtCorrespncRole` |  | |  |  | `CHAR(4)` | Correspondence role |
| `ColltrlAgrmtPoolRelThreshold` |  | |  |  | `DEC(10)` | Limit above which the Collaterals can be Released from Pool |
