---
name: I_COLLATERALAGREEMENTDATA
description: "Collateral Agreement Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALAGREEMENTDATA')/$value
semantic_en: "Collateral Agreement Details"
semantic_vi: "Collateral Agreement Details — CDS view giao diện dựa trên cms_cag."
keywords:
  - "collateral"
  - "agreement"
  - "details"
  - "type"
  - "nominal"
  - "agrmt"
  - "crcy"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALAGREEMENTDATA

**Collateral Agreement Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALAGREEMENTDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralAgreementUUID` | ✓ | |  | `cag_guid` | `RAW(16)` | GUID for Table CMS_CAG |
| `CollateralAgreementID` |  | |  | `cagmtid` | `CHAR(40)` | Collateral Agreement ID |
| `CollateralAgreementType` |  | |  | `cagmt_type` | `CHAR(6)` | Collateral Agreement Type |
| `CollateralAgreementNominalAmt` |  | |  | `nom_value` | `CURR(17)` | Nominal Value of the Collateral Agreement |
| `CollateralAgrmtNominalCrcy` |  | |  | `nom_value_curr` | `CUKY(5)` | Currency for Nominal Value of the Collateral Agreement |
| `ColltrlAgrmtAssessmentAmt` |  | |  | `asmt_amt` | `CURR(17)` | Assessment  Amount |
| `ColltrlAgrmtAssessmentCrcy` |  | |  | `asmt_curr` | `CUKY(5)` | Currency of Assessment Value |
| `ColltrlAgrmtAssessmentDate` |  | |  | `asmt_date` | `DATS(8)` | Date on which the Assessment Value was Calculated |
| `ColltrlAgreementConcludeDate` |  | |  | `cagmt_date` | `DATS(8)` | Date on which Collateral Agreement was Concluded |
| `ColltrlAgreementValidFromDate` |  | |  | `cast( substring(valid_from, 2, 8 ) as cms_dte_date )` | `DATS(8)` | Date |
| `ColltrlAgreementValidToDate` |  | |  | `cast( substring(valid_to, 2, 8 ) as cms_dte_date )` | `DATS(8)` | Date |
| `CollateralAdminOrgUnit` |  | |  | `admin_org_unit` | `CHAR(12)` | Administration Organizational Unit |
| `CollateralBankArea` |  | |  | `bankarea` | `CHAR(4)` | Bank Area in Collateral Management |
| `ColltrlAgrmtJurisdictionCntry` |  | |  | `country_key` | `CHAR(3)` | Jurisdiction Country/Region |
| `CollateralAgreementIsGlobal` |  | |  | `flg_global` | `CHAR(1)` | Flag to indicate a Global Collateral Agreement |
| `ColltrlAgrmtSpclMarkDwnPct` |  | |  | `spl_markdown_pct` | `DEC(10)` | Percentage of Special Markdown |
| `ColltrlAgrmtSpclMarkDwnAmt` |  | |  | `spl_markdown_amt` | `CURR(17)` | Amount of Special Markdown |
| `ColltrlAgrmtSpclMarkdownCrcy` |  | |  | `spl_mrkdown_curr` | `CUKY(5)` | Currency for Amount of Special Markdown |
| `CollateralAgreementDescription` |  | |  | `description` | `CHAR(30)` | Description of Collateral Agreement |
| `ColltrlAgrmtReleaseFrequency` |  | |  | `unit_rel_freq` | `CHAR(2)` | The unit for period of Release Frequency |
| `ColltrlAgrmtReleasePeriod` |  | |  | `period_rel_freq` | `NUMC(4)` | Period for Frequency of Release of Collateral Agreement |
| `ColltrlAgrmtExtRefNumber` |  | |  | `old_cagmtid` | `CHAR(40)` | External/Old Collateral Agreement ID |
| `ColltrlAgrmtMinQltatvExcptn` |  | |  | `min_ql_excep_typ` | `CHAR(6)` | Exceptions for Minimum Risk Weight |
| `ColltrlAgrmtMinQltatvCritraRsn` |  | |  | `min_ql_reason` | `CHAR(6)` | Reason for the Minimum Qualitative Criterion |
| `ColltrlAgrmtIsMinQltatvRqmts` |  | |  | `flg_min_ql_reqmt` | `CHAR(1)` | Flag:Minimum requirements fulfilled for CAG(for Basel II) |
| `ColltrlAgrmtMinQltatvCriteria` |  | |  | `min_ql_crite` | `CHAR(6)` | MInimum Qualitative Criterion |
| `CollateralAgreementAssetPct` |  | |  | `pct_asset_val` | `DEC(10)` | Percentage of the Asset Value used in Collateral Agreement |
| `ColltrlAgrmtTermnRightType` |  | |  | `term_right_typ` | `CHAR(6)` | Termination Right Type |
| `ColltrlAgrmtTermnFrequency` |  | |  | `unit_term_freq` | `CHAR(2)` | The Unit for Period of Termination Frequency |
| `ColltrlAgrmtTermnPeriod` |  | |  | `period_term_freq` | `NUMC(4)` | Period for Frequency of Termination of Collateral Agreement |
| `ColltrlAgrmtTermnNoticeFrqcy` |  | |  | `notice_prd_unit` | `CHAR(2)` | The Unit for the Termination Notice Period |
| `ColltrlAgrmtTermnNoticePeriod` |  | |  | `req_notice_prd` | `NUMC(4)` | Notice Period Required to Terminate Collateral Agreement |
| `ColltrlAgrmtTermnNoticeDate` |  | |  | `term_notice_date` | `DATS(8)` | Date on which Termination Notice was Sent |
| `ColltrlAgrmtTerminationReason` |  | |  | `term_reason` | `CHAR(6)` | Termination Type |
| `ColltrlAgrmtTermnGuarAmt` |  | |  | `term_guar_amt` | `CURR(17)` | Amount of Guarantee in the event of Termination |
| `ColltrlAgrmtTermnGuarCrcy` |  | |  | `termination_curr` | `CUKY(5)` | Currency for Amount of Guarantee in the event of Termination |
| `ColltrlAgrmtGuaranteePct` |  | |  | `guar_rate` | `DEC(10)` | Guarantee Rate |
| `ColltrlAgrmtHasCounterGuar` |  | |  | `flg_counter_guar` | `CHAR(1)` | Flag for Counter Guarantee |
| `ColltrlAgrmtHasAdditionalGuar` |  | |  | `flg_co_guar` | `CHAR(1)` | Flag for Co-guarantee |
| `ColltrlAgrmtGuarIsFxdLiability` |  | |  | `flg_fixed_liabty` | `CHAR(1)` | Flag for Fixed Liability |
| `ColltrlAgrmtGuarIsDfltLblty` |  | |  | `flg_def_liabty` | `CHAR(1)` | Flag for Default Liability |
| `ColltrlAgrmtGuarDfltLbltyPct` |  | |  | `pct_def_liabty` | `DEC(10)` | Default Liability in % |
| `ColltrlAgrmtGuarLinkInCalc` |  | |  | `flg_incl_cag_lnk` | `CHAR(1)` | Flag for back-up guarantee to be used in calculations or not |
| `ColltrlAgrmtGuarAuthApproval` |  | |  | `ind_appr_auth` | `CHAR(2)` | Approval from authorities |
| `ColltrlAgrmtGuarIsEnforceable` |  | |  | `flg_enforceable` | `CHAR(1)` | Agreement directly enforceable |
| `ColltrlAgrmtGuarLendingRate` |  | |  | `lending_rate` | `DEC(10)` | Lending Rate of a Guarantee |
| `ColltrlAgrmtGuarReducnFrqcy` |  | |  | `unit_redu_freq` | `CHAR(2)` | Unit for Period of Frequency for Reduction in Guarantee Valu |
| `ColltrlAgrmtGuarReducnPeriod` |  | |  | `period_redu_freq` | `NUMC(4)` | Period for Frequency of Reduction in Value of Guarantee |
| `ColltrlAgrmtGuarReducnAmt` |  | |  | `redu_amt` | `CURR(17)` | Reduction in Amount of Guarantee |
| `ColltrlAgrmtGuarReducnCrcy` |  | |  | `redu_curr` | `CUKY(5)` | Currency of the Reduced Amount of the Guarantee |
| `ColltrlAgrmtGuarReducnPct` |  | |  | `redu_pct` | `DEC(10)` | Percentage of Reduction in the Value of a Guarantee |
| `ColltrlAgrmtOriginalAmount` |  | |  | `ori_value` | `CURR(17)` | Original Protection of the Agreements |
| `ColltrlAgrmtOriginalCurrency` |  | |  | `ori_value_curr` | `CUKY(5)` | Currency of the Original Protection Value |
| `ColltrlAgrmtTransfIsLeasing` |  | |  | `flg_leasing_txn` | `CHAR(1)` | Flag:  Transfer is part of a leasing transaction |
| `ColltrlAgrmtTransfLessorLien` |  | |  | `ind_lessor_lien` | `CHAR(2)` | Indicator for Lessor Lien on Collateral Agreement |
| `ColltrlAgrmtTransfAccsryLblty` |  | |  | `ind_acc_liable` | `CHAR(2)` | Specifies the applicability of accessories liability |
| `ColltrlAgrmtAcctRblAssgmt` |  | |  | `flg_asgmt_ar` | `CHAR(1)` | Flag  for Assignment of Accounts Receivables(AR) from Sale |
| `ColltrlAgrmtMinStockAmount` |  | |  | `min_stock_amt` | `CURR(17)` | Minimum stock Amount agreed in the Collateral Agreement |
| `ColltrlAgrmtMinStockCurrency` |  | |  | `min_stock_curr` | `CUKY(5)` | Currency of the Minimum Stock Amount |
| `ColltrlAgrmtHasAdditionalRbl` |  | |  | `flg_addnl_rbl` | `CHAR(1)` | Flag for Additional receivable |
| `ColltrlAgrmtAdditionalRblDate` |  | |  | `addnl_rbl_date` | `DATS(8)` | Date on which Additional Receivable was Accepted |
| `AgrmtGenBusCndnLienWvr` |  | |  | `ind_gbc_lien` | `CHAR(2)` | GBC Lien on Agreement |
| `ColltrlAgrmtPledgeIsDisclosed` |  | |  | `flg_discl` | `CHAR(1)` | Flag to indicator whether the Agreement is disclosed or not |
| `ColltrlAgrmtPledgeDisclosedDte` |  | |  | `discl_date` | `DATS(8)` | Date of Disclosure to Third-party Debtor |
| `ColltrlAgrmtAssignmentReason` |  | |  | `asgmt_reason` | `CHAR(6)` | Reason for Assignment |
| `AgrmtLandChrgInterestRate` |  | |  | `int_rate` | `DEC(10)` | Land Charge Interest Rate |
| `AgrmtLandChrgIncidentalPaytPct` |  | |  | `incidental_paymt` | `DEC(10)` | Incidental Payments in Percentage |
| `AgrmtLandChrgPaytFrqcy` |  | |  | `unit_pmt_freq` | `CHAR(2)` | The unit for period of payment frequency |
| `AgrmtLandChrgPaytPeriod` |  | |  | `period_pmt_freq` | `NUMC(4)` | Period for Frequency of Payment of Land Charge Interest |
| `AgrmtLandChrgCalcStrtDate` |  | |  | `int_start_date` | `DATS(8)` | Start Date for Land Charge Interest Calculation |
| `AgrmtLandChrgIntrstCapitalYrs` |  | |  | `num_yr_lchg_int` | `NUMC(4)` | Number of Years the Land Charge Interest can be Capitalized |
| `AgrmtLandChrgEnforcementType` |  | |  | `ind_enforcmt_typ` | `CHAR(2)` | Enforcement Type |
| `AgrmtLandChrgEnforcementAmt` |  | |  | `enforcmt_amt` | `CURR(17)` | Enforcement Amount |
| `AgrmtLandChrgEnforcementCrcy` |  | |  | `enforcmt_curr` | `CUKY(5)` | Currency for Enforcement Amount of Land Charge |
| `AgrmtLandChrgRefEnforcementAmt` |  | |  | `ref_enforcmt_amt` | `CURR(17)` | Reference amount for part (Equal,Secondar) enforcebility |
| `AgrmtLandChrgEnfrcmntTtlType` |  | |  | `enforcmt_title` | `CHAR(2)` | Indicator for Enforcement Title |
| `ColAgrHtBlRgIntrstPayFrqUnit` |  | |  | `unit_int_freq` | `CHAR(2)` | Unit for period of Payment Frequency of HBR interest |
| `ColAgrHtBlRgIntrstPayFrqPerd` |  | |  | `period_int_freq` | `NUMC(4)` | Payment Frequency Period for HBR interest |
| `ColAgrHtBlRgIsIntrstIncreasing` |  | |  | `flg_interest_inc` | `CHAR(1)` | Flag for increase in HBR interest |
| `ColAgrHtBlRgIntIncFrqUnit` |  | |  | `unit_inc_freq` | `CHAR(2)` | Unit for Frequency Period of Increase in HBR Interest |
| `ColAgrHtBlRgIntIncFrqPerd` |  | |  | `period_inc_freq` | `NUMC(4)` | Frequency Period for Increase in HBR Interest |
| `ColAgrHtBlRgIncreasePct` |  | |  | `inc_pct` | `DEC(10)` | Percentage Increase in Heritable Building Rights Amount |
| `ColAgrHtBlRgIncreaseAmt` |  | |  | `inc_amt` | `CURR(17)` | Increase in Heritable Building Rights Amount |
| `ColAgrHtBlRgIncreaseCrcy` |  | |  | `inc_curr` | `CUKY(5)` |  Currency for Increase in HBR amount |
| `ColAgrHtBlRgIntrstIncrStartDte` |  | |  | `inc_start_date` | `DATS(8)` | Start date for Increase in Heritable Building Right Interest |
| `ColAgrHtBlRgEnfrcmntWvr` |  | |  | `ind_hbr_waiver` | `CHAR(2)` | Indicator for Waiver of HBR Enforcement |
| `ColAgrHtBlRgIntrstIncrLastDte` |  | |  | `inc_last_date` | `DATS(8)` | Last date of Increase in Heritable Building Right Interest |
| `AgrmtLandChrgIsCollective` |  | |  | `flg_coll_lchg` | `CHAR(1)` | Flag: Collective Land Charge |
| `AgrmtLandChrgHasCert` |  | |  | `flg_charge_cert` | `CHAR(1)` | Flag: Land Charge certificate exists |
| `AgrmtLandChrgCertNumber` |  | |  | `charge_cert_num` | `CHAR(30)` | Charge Certificate Number |
| `AgrmtLandChrgFileNumber` |  | |  | `file_num` | `CHAR(30)` | File Number |
| `ColltrlAgrmtCreditInsurCover` |  | |  | `scope_ins_cover` | `CHAR(6)` | Scope of Cover of Credit Insurance |
| `ColltrlAgrmtUnit1` |  | |  | `org_unit1` | `CHAR(10)` | Organizational Unit 1: Collateral Agreement |
| `ColltrlAgrmtUnit2` |  | |  | `org_unit2` | `CHAR(10)` | Organizational Unit 2: Collateral Agreement |
| `ColltrlAgrmtUnit3` |  | |  | `org_unit3` | `CHAR(10)` | Organizational Unit 3: Collateral Agreement |
| `ColltrlAgrmtUnit4` |  | |  | `org_unit4` | `CHAR(10)` | Organizational Unit 4: Collateral Agreement |
| `ColltrlAgrmtUnit5` |  | |  | `org_unit5` | `CHAR(10)` | Organizational Unit 5: Collateral Agreement |
| `ColltrlAgrmtLiquidationMode` |  | |  | `liqd_mode` | `CHAR(6)` | Mode of Liquidation decision for the pool agreement |
| `ColltrlAgrmtCorrespncRole` |  | |  | `cor_role` | `CHAR(4)` | Correspondence role |
| `ColltrlAgrmtPoolRelThreshold` |  | |  | `rel_threshold` | `DEC(10)` | Limit above which the Collaterals can be Released from Pool |
| `_AgreementPortion` | | ✓ | | | | |
| `_AgreementPartner` | | ✓ | | | | |
| `_AgreementSpecialArrangement` | | ✓ | | | | |
| `_AgreementTerminationAndCost` | | ✓ | | | | |
| `_AssetAgreementLinkData` | | ✓ | | | | |
| `_CollateralAgreementRelshp` | | ✓ | | | | |
| `_CollateralObjectCalcData` | | ✓ | | | | |
| `_AgreementAssetCalcData` | | ✓ | | | | |
| `_AgreementRelshpCalcData` | | ✓ | | | | |
| `_AgreementPortionCalcData` | | ✓ | | | | |
| `_AgreementReceivableCalcData` | | ✓ | | | | |
| `_CollateralAgreementType` | | ✓ | | | | |
| `_AgrmtGenBusCndnLienWvr` | | ✓ | | | | |
| `_ColltrlAgrmtReleaseFrequency` | | ✓ | | | | |
| `_ColltrlAgrmtTermnFrequency` | | ✓ | | | | |
| `_ColltrlAgrmtGuarReducnFrqcy` | | ✓ | | | | |
| `_AgrmtLandChrgPaytFrqcy` | | ✓ | | | | |
| `_ColAgrHtBlRgIntrstPayFrqUnit` | | ✓ | | | | |
| `_ColAgrHtBlRgIntIncFrqUnit` | | ✓ | | | | |
| `_CollateralAdminOrgUnitAttrib` | | ✓ | | | | |
| `_CollateralAgrmtNominalCrcy` | | ✓ | | | | |
| `_ColltrlAgrmtAssessmentCrcy` | | ✓ | | | | |
| `_ColltrlAgrmtMinStockCurrency` | | ✓ | | | | |
| `_ColltrlAgrmtSpclMarkdownCrcy` | | ✓ | | | | |
| `_ColltrlAgrmtTermnGuarCrcy` | | ✓ | | | | |
| `_ColltrlAgrmtGuarReducnCrcy` | | ✓ | | | | |
| `_ColltrlAgrmtOriginalCurrency` | | ✓ | | | | |
| `_AgrmtLandChrgEnforcementCrcy` | | ✓ | | | | |
| `_ColAgrHtBlRgIncreaseCrcy` | | ✓ | | | | |
| `_ColltrlAgrmtJurisdictionCntry` | | ✓ | | | | |
| `_ColltrlAgrmtMinQltatvExcptn` | | ✓ | | | | |
| `_ColltrlAgrmtMinQltatvCriteria` | | ✓ | | | | |
| `_ColltrlAgrmtTermnNoticeFrqcy` | | ✓ | | | | |
| `_ColltrlAgrmtGuarAuthApproval` | | ✓ | | | | |
| `_ColltrlAgrmtTransfLessorLien` | | ✓ | | | | |
| `_AgrmtLandChrgEnforcementType` | | ✓ | | | | |
| `_AgrmtLandChrgEnfrcmntTtlType` | | ✓ | | | | |
| `_ColltrlAgrmtTermnRightType` | | ✓ | | | | |
| `_AgrmtMinQltatvCritraRsn` | | ✓ | | | | |
| `_ColltrlAgrmtTerminationReason` | | ✓ | | | | |
| `_ColltrlAgrmtAssignmentReason` | | ✓ | | | | |
| `_ColltrlAgrmtCreditInsurCover` | | ✓ | | | | |
| `_ColAgrHtBlRgEnfrcmntWvr` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AgreementPortion` | `I_AgreementPortion` | [0..*] |
| `_AgreementPartner` | `I_AgreementPartner` | [0..*] |
| `_AgreementSpecialArrangement` | `I_AgreementSpecialArrangement` | [0..*] |
| `_AgreementTerminationAndCost` | `I_AgreementTerminationAndCost` | [0..*] |
| `_AssetAgreementLinkData` | `I_AssetAgreementLinkData` | [0..*] |
| `_CollateralAgreementRelshp` | `I_CollateralAgreementRelshp` | [0..*] |
| `_CollateralObjectCalcData` | `I_CollateralObjectCalcData` | [0..1] |
| `_AgreementAssetCalcData` | `I_AgreementAssetCalcData` | [0..*] |
| `_AgreementRelshpCalcData` | `I_AgreementRelshpCalcData` | [0..*] |
| `_AgreementPortionCalcData` | `I_AgreementPortionCalcData` | [0..*] |
| `_AgreementReceivableCalcData` | `I_AgreementReceivableCalcData` | [0..*] |
| `_CollateralAgreementType` | `I_AgreementType` | [0..1] |
| `_AgrmtGenBusCndnLienWvr` | `I_AgrmtGenBusCndnLienWvr` | [0..1] |
| `_ColltrlAgrmtReleaseFrequency` | `I_AgreementFrequencyUnit` | [0..1] |
| `_ColltrlAgrmtTermnFrequency` | `I_AgreementFrequencyUnit` | [0..1] |
| `_ColltrlAgrmtGuarReducnFrqcy` | `I_AgreementFrequencyUnit` | [0..1] |
| `_AgrmtLandChrgPaytFrqcy` | `I_AgreementFrequencyUnit` | [0..1] |
| `_ColAgrHtBlRgIntrstPayFrqUnit` | `I_AgreementFrequencyUnit` | [0..1] |
| `_ColAgrHtBlRgIntIncFrqUnit` | `I_AgreementFrequencyUnit` | [0..1] |
| `_CollateralAdminOrgUnitAttrib` | `I_CollateralAdminOrgUnitAttrib` | [0..1] |
| `_CollateralAgrmtNominalCrcy` | `I_Currency` | [0..1] |
| `_ColltrlAgrmtAssessmentCrcy` | `I_Currency` | [0..1] |
| `_ColltrlAgrmtMinStockCurrency` | `I_Currency` | [0..1] |
| `_ColltrlAgrmtSpclMarkdownCrcy` | `I_Currency` | [0..1] |
| `_ColltrlAgrmtTermnGuarCrcy` | `I_Currency` | [0..1] |
| `_ColltrlAgrmtGuarReducnCrcy` | `I_Currency` | [0..1] |
| `_ColltrlAgrmtOriginalCurrency` | `I_Currency` | [0..1] |
| `_AgrmtLandChrgEnforcementCrcy` | `I_Currency` | [0..1] |
| `_ColAgrHtBlRgIncreaseCrcy` | `I_Currency` | [0..1] |
| `_ColltrlAgrmtJurisdictionCntry` | `I_Country` | [0..1] |
| `_ColltrlAgrmtMinQltatvExcptn` | `I_AgreementMinQltatvException` | [0..1] |
| `_ColltrlAgrmtMinQltatvCriteria` | `I_AgreementMinQltatvCriteria` | [0..1] |
| `_ColltrlAgrmtTermnNoticeFrqcy` | `I_AgreementTermnNtcFrqcy` | [0..1] |
| `_ColltrlAgrmtGuarAuthApproval` | `I_AgrmtGuaranteeAuthApprvl` | [0..1] |
| `_ColltrlAgrmtTransfLessorLien` | `I_AgreementTransferLessorLien` | [0..1] |
| `_AgrmtLandChrgEnforcementType` | `I_AgrmtLandChrgEnforcementType` | [0..1] |
| `_AgrmtLandChrgEnfrcmntTtlType` | `I_AgrmtLandChrgEnforcementTtl` | [0..1] |
| `_ColltrlAgrmtTermnRightType` | `I_AgreementTermnRightType` | [0..1] |
| `_AgrmtMinQltatvCritraRsn` | `I_CollateralAttributeIndType` | [0..1] |
| `_ColltrlAgrmtTerminationReason` | `I_CollateralAttributeIndType` | [0..1] |
| `_ColltrlAgrmtAssignmentReason` | `I_CollateralAttributeIndType` | [0..1] |
| `_ColltrlAgrmtCreditInsurCover` | `I_CollateralAttributeIndType` | [0..1] |
| `_ColAgrHtBlRgEnfrcmntWvr` | `I_ColAgrHtBlRgEnfrcmntWvr` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALAGREEMENTDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALAGREEMENTDATA')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGDATA',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData:{
        blocking: #BLOCKED_DATA_EXCLUDED
    }
}
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'L',
        dataClass: 'MASTER'
    },
    supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'CollateralAgreementUUID'
}
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            automatic: true
        }
    }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Agreement Details'
define view I_CollateralAgreementData
  as select from cms_cag
  association [0..*] to I_AgreementPortion             as _AgreementPortion              on  $projection.CollateralAgreementUUID = _AgreementPortion.CollateralAgreementUUID
  association [0..*] to I_AgreementPartner             as _AgreementPartner              on  $projection.CollateralAgreementUUID = _AgreementPartner.CollateralAgreementUUID
  association [0..*] to I_AgreementSpecialArrangement  as _AgreementSpecialArrangement   on  $projection.CollateralAgreementUUID = _AgreementSpecialArrangement.AgrmtSpecialArrangementRefUUID
  association [0..*] to I_AgreementTerminationAndCost  as _AgreementTerminationAndCost   on  $projection.CollateralAgreementUUID = _AgreementTerminationAndCost.AgreementTermnAndCostLinkUUID
  association [0..*] to I_AssetAgreementLinkData       as _AssetAgreementLinkData        on  $projection.CollateralAgreementUUID = _AssetAgreementLinkData.CollateralAgreementUUID
  association [0..*] to I_CollateralAgreementRelshp    as _CollateralAgreementRelshp     on  $projection.CollateralAgreementUUID = _CollateralAgreementRelshp.AgreementRelationshipSrceUUID
                                                                                         or  $projection.CollateralAgreementUUID = _CollateralAgreementRelshp.AgreementRelationshipDestUUID
  association [0..1] to I_CollateralObjectCalcData     as _CollateralObjectCalcData      on  $projection.CollateralAgreementUUID            = _CollateralObjectCalcData.CollateralObjectUUID
                                                                                         and _CollateralObjectCalcData.CollateralObjectType = 'CAG'
  association [0..*] to I_AgreementAssetCalcData       as _AgreementAssetCalcData        on  $projection.CollateralAgreementUUID = _AgreementAssetCalcData.CollateralAgreementUUID
  association [0..*] to I_AgreementRelshpCalcData      as _AgreementRelshpCalcData       on  $projection.CollateralAgreementUUID = _AgreementRelshpCalcData.AgreementRelationshipSrceUUID
                                                                                         or  $projection.CollateralAgreementUUID = _AgreementRelshpCalcData.AgreementRelationshipDestUUID
  association [0..*] to I_AgreementPortionCalcData     as _AgreementPortionCalcData      on  $projection.CollateralAgreementUUID = _AgreementPortionCalcData.CollateralAgreementUUID
  association [0..*] to I_AgreementReceivableCalcData  as _AgreementReceivableCalcData   on  $projection.CollateralAgreementUUID = _AgreementReceivableCalcData.CollateralAgreementUUID
  association [0..1] to I_AgreementType                as _CollateralAgreementType       on  $projection.CollateralAgreementType = _CollateralAgreementType.CollateralAgreementType
  association [0..1] to I_AgrmtGenBusCndnLienWvr       as _AgrmtGenBusCndnLienWvr        on  $projection.AgrmtGenBusCndnLienWvr = _AgrmtGenBusCndnLienWvr.AgrmtGenBusCndnLienWvr
  association [0..1] to I_AgreementFrequencyUnit       as _ColltrlAgrmtReleaseFrequency  on  $projection.ColltrlAgrmtReleaseFrequency = _ColltrlAgrmtReleaseFrequency.AgreementFrequencyUnit
  association [0..1] to I_AgreementFrequencyUnit       as _ColltrlAgrmtTermnFrequency    on  $projection.ColltrlAgrmtTermnFrequency = _ColltrlAgrmtTermnFrequency.AgreementFrequencyUnit
  association [0..1] to I_AgreementFrequencyUnit       as _ColltrlAgrmtGuarReducnFrqcy   on  $projection.ColltrlAgrmtGuarReducnFrqcy = _ColltrlAgrmtGuarReducnFrqcy.AgreementFrequencyUnit
  association [0..1] to I_AgreementFrequencyUnit       as _AgrmtLandChrgPaytFrqcy        on  $projection.AgrmtLandChrgPaytFrqcy = _AgrmtLandChrgPaytFrqcy.AgreementFrequencyUnit
  association [0..1] to I_AgreementFrequencyUnit       as _ColAgrHtBlRgIntrstPayFrqUnit  on  $projection.ColAgrHtBlRgIntrstPayFrqUnit = _ColAgrHtBlRgIntrstPayFrqUnit.AgreementFrequencyUnit
  association [0..1] to I_AgreementFrequencyUnit       as _ColAgrHtBlRgIntIncFrqUnit     on  $projection.ColAgrHtBlRgIntIncFrqUnit = _ColAgrHtBlRgIntIncFrqUnit.AgreementFrequencyUnit
  association [0..1] to I_CollateralAdminOrgUnitAttrib as _CollateralAdminOrgUnitAttrib  on  $projection.CollateralAdminOrgUnit = _CollateralAdminOrgUnitAttrib.CollateralAdminOrgUnit
  association [0..1] to I_Currency                     as _CollateralAgrmtNominalCrcy    on  $projection.CollateralAgrmtNominalCrcy = _CollateralAgrmtNominalCrcy.Currency
  association [0..1] to I_Currency                     as _ColltrlAgrmtAssessmentCrcy    on  $projection.ColltrlAgrmtAssessmentCrcy = _ColltrlAgrmtAssessmentCrcy.Currency
  association [0..1] to I_Currency                     as _ColltrlAgrmtMinStockCurrency  on  $projection.ColltrlAgrmtMinStockCurrency = _ColltrlAgrmtMinStockCurrency.Currency
  association [0..1] to I_Currency                     as _ColltrlAgrmtSpclMarkdownCrcy  on  $projection.ColltrlAgrmtSpclMarkdownCrcy = _ColltrlAgrmtSpclMarkdownCrcy.Currency
  association [0..1] to I_Currency                     as _ColltrlAgrmtTermnGuarCrcy     on  $projection.ColltrlAgrmtTermnGuarCrcy = _ColltrlAgrmtTermnGuarCrcy.Currency
  association [0..1] to I_Currency                     as _ColltrlAgrmtGuarReducnCrcy    on  $projection.ColltrlAgrmtGuarReducnCrcy = _ColltrlAgrmtGuarReducnCrcy.Currency
  association [0..1] to I_Currency                     as _ColltrlAgrmtOriginalCurrency  on  $projection.ColltrlAgrmtOriginalCurrency = _ColltrlAgrmtOriginalCurrency.Currency
  association [0..1] to I_Currency                     as _AgrmtLandChrgEnforcementCrcy  on  $projection.AgrmtLandChrgEnforcementCrcy = _AgrmtLandChrgEnforcementCrcy.Currency
  association [0..1] to I_Currency                     as _ColAgrHtBlRgIncreaseCrcy      on  $projection.ColAgrHtBlRgIncreaseCrcy = _ColAgrHtBlRgIncreaseCrcy.Currency
  association [0..1] to I_Country                      as _ColltrlAgrmtJurisdictionCntry on  $projection.ColltrlAgrmtJurisdictionCntry = _ColltrlAgrmtJurisdictionCntry.Country
  association [0..1] to I_AgreementMinQltatvException  as _ColltrlAgrmtMinQltatvExcptn   on  $projection.ColltrlAgrmtMinQltatvExcptn = _ColltrlAgrmtMinQltatvExcptn.ColltrlAgrmtMinQltatvExcptn
  association [0..1] to I_AgreementMinQltatvCriteria   as _ColltrlAgrmtMinQltatvCriteria on  $projection.ColltrlAgrmtMinQltatvCriteria = _ColltrlAgrmtMinQltatvCriteria.ColltrlAgrmtMinQltatvCriteria
  association [0..1] to I_AgreementTermnNtcFrqcy       as _ColltrlAgrmtTermnNoticeFrqcy  on  $projection.ColltrlAgrmtTermnNoticeFrqcy = _ColltrlAgrmtTermnNoticeFrqcy.ColltrlAgrmtTermnNoticeFrqcy
  association [0..1] to I_AgrmtGuaranteeAuthApprvl     as _ColltrlAgrmtGuarAuthApproval  on  $projection.ColltrlAgrmtGuarAuthApproval = _ColltrlAgrmtGuarAuthApproval.ColltrlAgrmtGuarAuthApproval
  association [0..1] to I_AgreementTransferLessorLien  as _ColltrlAgrmtTransfLessorLien  on  $projection.ColltrlAgrmtTransfLessorLien = _ColltrlAgrmtTransfLessorLien.ColltrlAgrmtTransfLessorLien
  association [0..1] to I_AgrmtLandChrgEnforcementType as _AgrmtLandChrgEnforcementType  on  $projection.AgrmtLandChrgEnforcementType = _AgrmtLandChrgEnforcementType.AgrmtLandChrgEnforcementType
  association [0..1] to I_AgrmtLandChrgEnforcementTtl  as _AgrmtLandChrgEnfrcmntTtlType  on  $projection.AgrmtLandChrgEnfrcmntTtlType = _AgrmtLandChrgEnfrcmntTtlType.AgrmtLandChrgEnfrcmntTtlType
  association [0..1] to I_AgreementTermnRightType      as _ColltrlAgrmtTermnRightType    on  $projection.ColltrlAgrmtTermnRightType = _ColltrlAgrmtTermnRightType.AgreementTermnRightType
  association [0..1] to I_CollateralAttributeIndType   as _AgrmtMinQltatvCritraRsn       on  $projection.ColltrlAgrmtMinQltatvCritraRsn         = _AgrmtMinQltatvCritraRsn.CollateralAttributeIndType
                                                                                         and _AgrmtMinQltatvCritraRsn.CollateralAttributeIndCat = 'CAG001'
  association [0..1] to I_CollateralAttributeIndType   as _ColltrlAgrmtTerminationReason on  $projection.ColltrlAgrmtTerminationReason                = _ColltrlAgrmtTerminationReason.CollateralAttributeIndType
                                                                                         and _ColltrlAgrmtTerminationReason.CollateralAttributeIndCat = 'CAG002'
  association [0..1] to I_CollateralAttributeIndType   as _ColltrlAgrmtAssignmentReason  on  $projection.ColltrlAgrmtAssignmentReason                = _ColltrlAgrmtAssignmentReason.CollateralAttributeIndType
                                                                                         and _ColltrlAgrmtAssignmentReason.CollateralAttributeIndCat = 'CAG006'
  association [0..1] to I_CollateralAttributeIndType   as _ColltrlAgrmtCreditInsurCover  on  $projection.ColltrlAgrmtCreditInsurCover                = _ColltrlAgrmtCreditInsurCover.CollateralAttributeIndType
                                                                                         and _ColltrlAgrmtCreditInsurCover.CollateralAttributeIndCat = 'CAG004'
  association [0..1] to I_ColAgrHtBlRgEnfrcmntWvr      as _ColAgrHtBlRgEnfrcmntWvr       on  $projection.ColAgrHtBlRgEnfrcmntWvr = _ColAgrHtBlRgEnfrcmntWvr.ColAgrHtBlRgEnfrcmntWvr
{
  key cag_guid                                             as CollateralAgreementUUID,
      cagmtid                                              as CollateralAgreementID,
      @ObjectModel.foreignKey.association: '_CollateralAgreementType'
      cagmt_type                                           as CollateralAgreementType,
      @Semantics.amount.currencyCode: 'CollateralAgrmtNominalCrcy'
      nom_value                                            as CollateralAgreementNominalAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CollateralAgrmtNominalCrcy'
      nom_value_curr                                       as CollateralAgrmtNominalCrcy,
      @Semantics.amount.currencyCode: 'ColltrlAgrmtAssessmentCrcy'
      asmt_amt                                             as ColltrlAgrmtAssessmentAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtAssessmentCrcy'
      asmt_curr                                            as ColltrlAgrmtAssessmentCrcy,
      asmt_date                                            as ColltrlAgrmtAssessmentDate,
      cagmt_date                                           as ColltrlAgreementConcludeDate,
      cast( substring(valid_from, 2, 8 ) as cms_dte_date ) as ColltrlAgreementValidFromDate,
      cast( substring(valid_to, 2, 8 ) as cms_dte_date )   as ColltrlAgreementValidToDate,
      admin_org_unit                                       as CollateralAdminOrgUnit,
      bankarea                                             as CollateralBankArea,
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtJurisdictionCntry'
      country_key                                          as ColltrlAgrmtJurisdictionCntry,
      @Semantics.booleanIndicator: true
      flg_global                                           as CollateralAgreementIsGlobal,
      spl_markdown_pct                                     as ColltrlAgrmtSpclMarkDwnPct,
      @Semantics.amount.currencyCode: 'ColltrlAgrmtSpclMarkdownCrcy'
      spl_markdown_amt                                     as ColltrlAgrmtSpclMarkDwnAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtSpclMarkdownCrcy'
      spl_mrkdown_curr                                     as ColltrlAgrmtSpclMarkdownCrcy,
      description                                          as CollateralAgreementDescription,
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtReleaseFrequency'
      unit_rel_freq                                        as ColltrlAgrmtReleaseFrequency,
      period_rel_freq                                      as ColltrlAgrmtReleasePeriod,
      old_cagmtid                                          as ColltrlAgrmtExtRefNumber,
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtMinQltatvExcptn'
      min_ql_excep_typ                                     as ColltrlAgrmtMinQltatvExcptn,
      @ObjectModel.foreignKey.association: '_AgrmtMinQltatvCritraRsn'
      min_ql_reason                                        as ColltrlAgrmtMinQltatvCritraRsn,
      @Semantics.booleanIndicator: true
      flg_min_ql_reqmt                                     as ColltrlAgrmtIsMinQltatvRqmts,
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtMinQltatvCriteria'
      min_ql_crite                                         as ColltrlAgrmtMinQltatvCriteria,
      pct_asset_val                                        as CollateralAgreementAssetPct,
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtTermnRightType'
      term_right_typ                                       as ColltrlAgrmtTermnRightType,
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtTermnFrequency'
      unit_term_freq                                       as ColltrlAgrmtTermnFrequency,
      period_term_freq                                     as ColltrlAgrmtTermnPeriod,
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtTermnNoticeFrqcy'
      notice_prd_unit                                      as ColltrlAgrmtTermnNoticeFrqcy,
      req_notice_prd                                       as ColltrlAgrmtTermnNoticePeriod,
      term_notice_date                                     as ColltrlAgrmtTermnNoticeDate,
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtTerminationReason'
      term_reason                                          as ColltrlAgrmtTerminationReason,
      @Semantics.amount.currencyCode: 'ColltrlAgrmtTermnGuarCrcy'
      term_guar_amt                                        as ColltrlAgrmtTermnGuarAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtTermnGuarCrcy'
      termination_curr                                     as ColltrlAgrmtTermnGuarCrcy,
      guar_rate                                            as ColltrlAgrmtGuaranteePct,
      @Semantics.booleanIndicator: true
      flg_counter_guar                                     as ColltrlAgrmtHasCounterGuar,
      @Semantics.booleanIndicator: true
      flg_co_guar                                          as ColltrlAgrmtHasAdditionalGuar,
      @Semantics.booleanIndicator: true
      flg_fixed_liabty                                     as ColltrlAgrmtGuarIsFxdLiability,
      @Semantics.booleanIndicator: true
      flg_def_liabty                                       as ColltrlAgrmtGuarIsDfltLblty,
      pct_def_liabty                                       as ColltrlAgrmtGuarDfltLbltyPct,
      @Semantics.booleanIndicator: true
      flg_incl_cag_lnk                                     as ColltrlAgrmtGuarLinkInCalc,
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtGuarAuthApproval'
      ind_appr_auth                                        as ColltrlAgrmtGuarAuthApproval,
      @Semantics.booleanIndicator: true
      flg_enforceable                                      as ColltrlAgrmtGuarIsEnforceable,
      lending_rate                                         as ColltrlAgrmtGuarLendingRate,
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtGuarReducnFrqcy'
      unit_redu_freq                                       as ColltrlAgrmtGuarReducnFrqcy,
      period_redu_freq                                     as ColltrlAgrmtGuarReducnPeriod,
      @Semantics.amount.currencyCode: 'ColltrlAgrmtGuarReducnCrcy'
      redu_amt                                             as ColltrlAgrmtGuarReducnAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtGuarReducnCrcy'
      redu_curr                                            as ColltrlAgrmtGuarReducnCrcy,
      redu_pct                                             as ColltrlAgrmtGuarReducnPct,
      @Semantics.amount.currencyCode: 'ColltrlAgrmtOriginalCurrency'
      ori_value                                            as ColltrlAgrmtOriginalAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtOriginalCurrency'
      ori_value_curr                                       as ColltrlAgrmtOriginalCurrency,
      @Semantics.booleanIndicator: true
      flg_leasing_txn                                      as ColltrlAgrmtTransfIsLeasing,
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtTransfLessorLien'
      ind_lessor_lien                                      as ColltrlAgrmtTransfLessorLien,
      ind_acc_liable                                       as ColltrlAgrmtTransfAccsryLblty,
      @Semantics.booleanIndicator: true
      flg_asgmt_ar                                         as ColltrlAgrmtAcctRblAssgmt,
      @Semantics.amount.currencyCode: 'ColltrlAgrmtMinStockCurrency'
      min_stock_amt                                        as ColltrlAgrmtMinStockAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtMinStockCurrency'
      min_stock_curr                                       as ColltrlAgrmtMinStockCurrency,
      @Semantics.booleanIndicator: true
      flg_addnl_rbl                                        as ColltrlAgrmtHasAdditionalRbl,
      addnl_rbl_date                                       as ColltrlAgrmtAdditionalRblDate,
      @ObjectModel.foreignKey.association: '_AgrmtGenBusCndnLienWvr'
      ind_gbc_lien                                         as AgrmtGenBusCndnLienWvr,
      @Semantics.booleanIndicator: true
      flg_discl                                            as ColltrlAgrmtPledgeIsDisclosed,
      discl_date                                           as ColltrlAgrmtPledgeDisclosedDte,
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtAssignmentReason'
      asgmt_reason                                         as ColltrlAgrmtAssignmentReason,
      int_rate                                             as AgrmtLandChrgInterestRate,
      incidental_paymt                                     as AgrmtLandChrgIncidentalPaytPct,
      @ObjectModel.foreignKey.association: '_AgrmtLandChrgPaytFrqcy'
      unit_pmt_freq                                        as AgrmtLandChrgPaytFrqcy,
      period_pmt_freq                                      as AgrmtLandChrgPaytPeriod,
      int_start_date                                       as AgrmtLandChrgCalcStrtDate,
      num_yr_lchg_int                                      as AgrmtLandChrgIntrstCapitalYrs,
      @ObjectModel.foreignKey.association: '_AgrmtLandChrgEnforcementType'
      ind_enforcmt_typ                                     as AgrmtLandChrgEnforcementType,
      @Semantics.amount.currencyCode: 'AgrmtLandChrgEnforcementCrcy'
      enforcmt_amt                                         as AgrmtLandChrgEnforcementAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_AgrmtLandChrgEnforcementCrcy'
      enforcmt_curr                                        as AgrmtLandChrgEnforcementCrcy,
      @Semantics.amount.currencyCode: 'AgrmtLandChrgEnforcementCrcy'
      ref_enforcmt_amt                                     as AgrmtLandChrgRefEnforcementAmt,
      @ObjectModel.foreignKey.association: '_AgrmtLandChrgEnfrcmntTtlType'
      enforcmt_title                                       as AgrmtLandChrgEnfrcmntTtlType,
      @ObjectModel.foreignKey.association: '_ColAgrHtBlRgIntrstPayFrqUnit'
      unit_int_freq                                        as ColAgrHtBlRgIntrstPayFrqUnit,
      period_int_freq                                      as ColAgrHtBlRgIntrstPayFrqPerd,
      @Semantics.booleanIndicator: true
      flg_interest_inc                                     as ColAgrHtBlRgIsIntrstIncreasing,
      @ObjectModel.foreignKey.association: '_ColAgrHtBlRgIntIncFrqUnit'
      unit_inc_freq                                        as ColAgrHtBlRgIntIncFrqUnit,
      period_inc_freq                                      as ColAgrHtBlRgIntIncFrqPerd,
      inc_pct                                              as ColAgrHtBlRgIncreasePct,
      @Semantics.amount.currencyCode: 'ColAgrHtBlRgIncreaseCrcy'
      inc_amt                                              as ColAgrHtBlRgIncreaseAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColAgrHtBlRgIncreaseCrcy'
      inc_curr                                             as ColAgrHtBlRgIncreaseCrcy,
      inc_start_date                                       as ColAgrHtBlRgIntrstIncrStartDte,
      @ObjectModel.foreignKey.association: '_ColAgrHtBlRgEnfrcmntWvr'
      ind_hbr_waiver                                       as ColAgrHtBlRgEnfrcmntWvr,
      inc_last_date                                        as ColAgrHtBlRgIntrstIncrLastDte,
      @Semantics.booleanIndicator: true
      flg_coll_lchg                                        as AgrmtLandChrgIsCollective,
      @Semantics.booleanIndicator: true
      flg_charge_cert                                      as AgrmtLandChrgHasCert,
      charge_cert_num                                      as AgrmtLandChrgCertNumber,
      file_num                                             as AgrmtLandChrgFileNumber,
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtCreditInsurCover'
      scope_ins_cover                                      as ColltrlAgrmtCreditInsurCover,
      org_unit1                                            as ColltrlAgrmtUnit1,
      org_unit2                                            as ColltrlAgrmtUnit2,
      org_unit3                                            as ColltrlAgrmtUnit3,
      org_unit4                                            as ColltrlAgrmtUnit4,
      org_unit5                                            as ColltrlAgrmtUnit5,
      liqd_mode                                            as ColltrlAgrmtLiquidationMode,
      cor_role                                             as ColltrlAgrmtCorrespncRole,
      rel_threshold                                        as ColltrlAgrmtPoolRelThreshold,

      _AgreementPortion,
      _AgreementPartner,
      _AgreementSpecialArrangement,
      _AgreementTerminationAndCost,
      _AssetAgreementLinkData,
      _CollateralAgreementRelshp,
      _CollateralObjectCalcData,
      _AgreementAssetCalcData,
      _AgreementRelshpCalcData,
      _AgreementPortionCalcData,
      _AgreementReceivableCalcData,
      _CollateralAgreementType,
      _AgrmtGenBusCndnLienWvr,
      _ColltrlAgrmtReleaseFrequency,
      _ColltrlAgrmtTermnFrequency,
      _ColltrlAgrmtGuarReducnFrqcy,
      _AgrmtLandChrgPaytFrqcy,
      _ColAgrHtBlRgIntrstPayFrqUnit,
      _ColAgrHtBlRgIntIncFrqUnit,
      _CollateralAdminOrgUnitAttrib,
      _CollateralAgrmtNominalCrcy,
      _ColltrlAgrmtAssessmentCrcy,
      _ColltrlAgrmtMinStockCurrency,
      _ColltrlAgrmtSpclMarkdownCrcy,
      _ColltrlAgrmtTermnGuarCrcy,
      _ColltrlAgrmtGuarReducnCrcy,
      _ColltrlAgrmtOriginalCurrency,
      _AgrmtLandChrgEnforcementCrcy,
      _ColAgrHtBlRgIncreaseCrcy,
      _ColltrlAgrmtJurisdictionCntry,
      _ColltrlAgrmtMinQltatvExcptn,
      _ColltrlAgrmtMinQltatvCriteria,
      _ColltrlAgrmtTermnNoticeFrqcy,
      _ColltrlAgrmtGuarAuthApproval,
      _ColltrlAgrmtTransfLessorLien,
      _AgrmtLandChrgEnforcementType,
      _AgrmtLandChrgEnfrcmntTtlType,
      _ColltrlAgrmtTermnRightType,
      _AgrmtMinQltatvCritraRsn,
      _ColltrlAgrmtTerminationReason,
      _ColltrlAgrmtAssignmentReason,
      _ColltrlAgrmtCreditInsurCover,
      _ColAgrHtBlRgEnfrcmntWvr

}
```
