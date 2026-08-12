---
name: I_JVAGLOBALCOMPANYPARAMETER
description: "Jvaglobalcompanyparameter"
app_component: CA-JVA
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - interface-view
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JVAGLOBALCOMPANYPARAMETER

**Jvaglobalcompanyparameter**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `JVAInceptionToDateActiveVal` |  | |  | `itd` |  |  |
| `JVANetAccountActiveVal` |  | |  | `netaccopt` |  |  |
| `JVARegionVal` |  | |  | `int_us` |  |  |
| `JVAOperator` |  | |  | `opaccnumb` |  |  |
| `JVABillingBasis` |  | |  | `billbasis` |  |  |
| `JVADefaultVenture` |  | |  | `corpvent` |  |  |
| `JVADefaultEquityGroup` |  | |  | `corpeqgp` |  |  |
| `JVADefaultCostRecoveryCode` |  | |  | `corprecind` |  |  |
| `JVARecIndVntrFunded` |  | |  | `corpvbacri` |  |  |
| `JVABalancedVenturesActiveVal` |  | |  | `balancvent` |  |  |
| `JVAVentureBankAccountVal` |  | |  | `vbank` |  |  |
| `JVAInputTaxCode` |  | |  | `taxin` |  |  |
| `JVAInvoiceLevel` |  | |  | `invlevel` |  |  |
| `JVAOutputTaxCode` |  | |  | `taxout` |  |  |
| `JVATaxJurisdictionCode` |  | |  | `txjcd` |  |  |
| `JVACorpTaxCode` |  | |  | `crptaxcode` |  |  |
| `JVABillingStructure` |  | |  | `bstruct` |  |  |
| `JVAAcctsExclCnstrctnOvhdVal` |  | |  | `xsetcon` |  |  |
| `JVAAcctsExclCatastropheOvhdVal` |  | |  | `xsetcat` |  |  |
| `JVAAcctsExclPctg1OvhdRateVal` |  | |  | `xper1` |  |  |
| `JVAAcctsExclPctg2OvhdRateVal` |  | |  | `xper2` |  |  |
| `JVAAccountsExclCptlOvhdVal` |  | |  | `xsetcap` |  |  |
| `JVADefaultOffsetCostCenterVal` |  | |  | `offcc` |  |  |
| `JVALineItmsUncompressedActvVal` |  | |  | `expand` |  |  |
| `JVATxExpndtrDetailsActvVal` |  | |  | `taxexpdtl` |  |  |
| `JVAPostTaxInNextPeriodActvVal` |  | |  | `taxper` |  |  |
| `JVAMaxNmbrEquityGrpsPerVntrVal` |  | |  | `eqgnum` |  |  |
| `JVAOperationalMonthActiveVal` |  | |  | `pomact` |  |  |
| `JVARegnGSTNumberVal` |  | |  | `gstno` |  |  |
| `JVADeprAreaForBookDeprVal` |  | |  | `afabe_han` |  |  |
| `JVADeprAreaForNonBillVal` |  | |  | `afabe_nb` |  |  |
| `JVADeprAreaForGrossVal` |  | |  | `afabe_bi` |  |  |
| `JVACstmRtlPrcCalcActvVal` |  | |  | `crpcal` |  |  |
| `JVAPostgRuleForAstPostingsVal` |  | |  | `am_meth` |  |  |
| `JVAIndexForEstBookCostVal` |  | |  | `wbind` |  |  |
| `JVATblForAddlSelFldVal` |  | |  | `seltab` |  |  |
| `JVAAddSelForCRPTransfersVal` |  | |  | `selfld` |  |  |
| `JVACutbackYearDateVal` |  | |  | `cbyear` |  |  |
| `JVACutbackPeriodVal` |  | |  | `cbperi` |  |  |
| `JVAExchangeRateTypeVal` |  | |  | `kurst` |  |  |
| `JVACorpParCoOvhdCostCtrVal` |  | |  | `offpcocc` |  |  |
| `JVACorpParCoOvhdProjectVal` |  | |  | `cast(offpcoproj as ps_s4_pspnr preserving type)` |  |  |
| `JVACorpParCoOvhdOrderVal` |  | |  | `offpcoornr` |  |  |
| `JVAPostToDefaultVentureActvVal` |  | |  | `postcorp` |  |  |
| `JVAVntrDerivationTypeAssetsVal` |  | |  | `asstvent` |  |  |
| `JVAGrssPostToIntrstPrtnActvVal` |  | |  | `ci_gross` |  |  |
| `JVACarriedIntrstPostings01Val` |  | |  | `ci_fb01` |  |  |
| `JVAUseTransCrcyCutbackPostsVal` |  | |  | `cb_tcurr` |  |  |
| `JVAFldStsTypeCostCtrVal` |  | |  | `fsjvct` |  |  |
| `JVAFieldStatusTypeOrderVal` |  | |  | `fsjvot` |  |  |
| `JVAFieldStatusTypeProjectVal` |  | |  | `fsjvpt` |  |  |
| `JVAMessageImpactActiveVal` |  | |  | `budgetmess` |  |  |
| `JVAVentureDistrAssetLinesVal` |  | |  | `vidist` |  |  |
| `JVAOperatorAsPartnerActiveVal` |  | |  | `op_as_part` |  |  |
| `JVADefaultCostCenterVal` |  | |  | `kostl_corp` |  |  |
| `JVADfltCostRcvryCodeForAstVal` |  | |  | `am_corp_ri` |  |  |
| `JVACostRecCodeForBkSwitchVal` |  | |  | `bank_ri_sw` |  |  |
| `JVADefaultBillingCrcyVal` |  | |  | `bcurr` |  |  |
| `JVABankAccountSwitchActiveVal` |  | |  | `xvba` |  |  |
| `JVANoCostObjOnAstActvVal` |  | |  | `xasst_co` |  |  |
| `Currency` |  | | `_CompanyCode` | `Currency` |  |  |
| `JVABillingThresholdDebitAmt` |  | |  | `billthres` |  |  |
| `JVABillingThresholdCreditAmt` |  | |  | `billthresc` |  |  |
| `JVATransVarInterCompAstVal` |  | |  | `tvarcurr` |  |  |
| `JVASplitByLineItemVal` |  | |  | `split_by_li` |  |  |
| `JVARtlPrCalcActvVal` |  | |  | `ec_use` |  |  |
| `JVASprtRptSpprsdPerdsVal` |  | |  | `billthress` |  |  |
| `JVAProductionMonthActiveVal` |  | |  | `pm_act` |  |  |
| `JVADeriveEquityGrpProdnMnthVal` |  | |  | `pm_eg` |  |  |
| `JVAProductionMonthFromYearVal` |  | |  | `pm_act_year` |  |  |
| `JVAFundingActvVal` |  | |  | `funding_active` |  |  |
| `JVAIntrstCalcActvVal` |  | |  | `intcalc_active` |  |  |
| `JVAIntrstCalcAutoGrpgTypeVal` |  | |  | `ic_auto_group` |  |  |
| `JVAInterestCalcRefGroupVal` |  | |  | `ic_group_ref` |  |  |
| `JVALedgerVal` |  | |  | `rldnr` |  |  |
| `JVAFromYearVal` |  | |  | `coalesce(_MasterData.JVAFromYearVal, _t8jz.fryear)` |  |  |
| `JVAFromPeriodVal` |  | |  | `coalesce(_MasterData.JVAFromYearVal, _t8jz.frperiod)` |  |  |
| `JVAToYearVal` |  | |  | `coalesce(_MasterData.JVAToYearVal, _t8jz.toyear)` |  |  |
| `JVAToPeriodVal` |  | |  | `coalesce(_MasterData.JVAToPeriodVal, _t8jz.toperiod)` |  |  |
| `JVAStandardPaymentVal` |  | |  | `coalesce(_MasterData.JVAStandardPaymentRate, _t8jz.stpay)` |  |  |
| `JVANonCompulsoryBenefitsVal` |  | |  | `coalesce(_MasterData.JVANonCompulsoryBenefitsRate, _t8jz.noncomp)` |  |  |
| `JVACompulsoryBenefitsVal` |  | |  | `coalesce(_MasterData.JVACompulsoryBenefitsRate, _t8jz.compuls)` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_MasterData` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_MasterData` | `I_JVAGlobCoCodeMDSetting` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVAGLCOPARM'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@ObjectModel:{
  usageType.serviceQuality: #B,
  usageType.sizeCategory: #S,
  usageType.dataClass: #MASTER,
  supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #UI_PROVIDER_PROJECTION_SOURCE ],
  modelingPattern: #NONE
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status : #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'JV Global Company Parameter C1'
define view I_JVAGlobalCompanyParameter
  as select from t8jz as _t8jz 
  association [0..1] to I_CompanyCode            as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_JVAGlobCoCodeMDSetting as _MasterData  on $projection.CompanyCode = _MasterData.CompanyCode
{
          @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
         @EndUserText: { label: 'Company Code' , quickInfo: 'Company Code' }
  key    bukrs                                                             as CompanyCode,
         @EndUserText: { label: 'Inception to date' , quickInfo: 'Inception to date' }
         itd                                                               as JVAInceptionToDateActiveVal,
         @EndUserText: { label: 'JV Net Account option' , quickInfo: 'JV Net Account option' }
         netaccopt                                                         as JVANetAccountActiveVal,
         @EndUserText: { label: 'Joint Venture Region' , quickInfo: 'Joint Venture Region' }
         int_us                                                            as JVARegionVal,
         @EndUserText: { label: 'Joint Venture Operator' , quickInfo: 'Joint Venture Operator' }
         opaccnumb                                                         as JVAOperator,
         @EndUserText: { label: 'Billing Basis' , quickInfo: 'Billing Basis' }
         billbasis                                                         as JVABillingBasis,
         @EndUserText: { label: 'Default Venture' , quickInfo: 'Default Venture' }
         corpvent                                                          as JVADefaultVenture,
         @EndUserText: { label: 'Default Equity Group' , quickInfo: 'Equity Group' }
         corpeqgp                                                          as JVADefaultEquityGroup,
         @EndUserText: { label: 'Default Recovery Indicator' , quickInfo: 'Default Recovery Indicator (corporately funded)' }
         corprecind                                                        as JVADefaultCostRecoveryCode,
         @EndUserText: { label: 'Default Recovery Indicator (vent funded)' , quickInfo: 'Default Recovery Indicator (venture funded)' }
         corpvbacri                                                        as JVARecIndVntrFunded,
         @EndUserText: { label: 'Balanced Venture Active' , quickInfo: 'Balanced Venture Active' }
         balancvent                                                        as JVABalancedVenturesActiveVal,
         @EndUserText: { label: 'Venture Bank Accounts' , quickInfo: 'Venture Bank Accounts' }
         vbank                                                             as JVAVentureBankAccountVal,
         @EndUserText: { label: 'Input Tax Code (for Expense Postings)' , quickInfo: 'Input Tax Code (for posting expenses)' }
         taxin                                                             as JVAInputTaxCode,
         @EndUserText: { label: 'Joint Venture Invoice Level' , quickInfo: 'Joint Venture Invoice Level' }
         invlevel                                                          as JVAInvoiceLevel,
         @EndUserText: { label: 'Output Tax Code (for Revenue postings)' , quickInfo: 'Output Tax Code (for posting revenues)' }
         taxout                                                            as JVAOutputTaxCode,
         @EndUserText: { label: 'Tax Jurisdiction Code' , quickInfo: 'Tax Jurisdiction Code' }
         txjcd                                                             as JVATaxJurisdictionCode,
         @EndUserText: { label: 'CRP Tax Code' , quickInfo: 'Tax Code for Custom Retail Price postings' }
         crptaxcode                                                        as JVACorpTaxCode,
         @EndUserText: { label: 'JV Billing Structure' , quickInfo: 'JV Billing Structure' }
         bstruct                                                           as JVABillingStructure,
         @EndUserText: { label: 'Accounts Excluded Constr. Overh. Calc.' , quickInfo: 'Set of accounts excluded from construction overhead calculation' }
         xsetcon                                                           as JVAAcctsExclCnstrctnOvhdVal,
         @EndUserText: { label: 'Accounts Excluded Catastr. Overh. Calc.' , quickInfo: 'Set of accounts excluded from catastrophe overhead calculation' }
         xsetcat                                                           as JVAAcctsExclCatastropheOvhdVal,
         @EndUserText: { label: 'Accounts Excluded Percentage Overhead 1' , quickInfo: 'Set of accounts excluded from percentage overhead calculation 1' }
         xper1                                                             as JVAAcctsExclPctg1OvhdRateVal,
         @EndUserText: { label: 'Accounts Excluded Percentage Overhead 2' , quickInfo: 'Set of accounts excluded from percentage overhead calculation 2' }
         xper2                                                             as JVAAcctsExclPctg2OvhdRateVal,
         @EndUserText: { label: 'Accounts Excluded Capital Overhead Calc.' , quickInfo: 'Set of accounts excluded from capital overhead calculation' }
         xsetcap                                                           as JVAAccountsExclCptlOvhdVal,
         @EndUserText: { label: 'Corporate Offset Cost Centre' , quickInfo: 'Default Offset Cost Centre' }
         offcc                                                             as JVADefaultOffsetCostCenterVal,
         @EndUserText: { label: 'Store JVA Single Line Items Uncompressed' , quickInfo: 'Store lines in JVA single item ledger uncompressed' }
         expand                                                            as JVALineItmsUncompressedActvVal,
         @EndUserText: { label: 'Include Tax in Expenditure Details' , quickInfo: 'Option to include tax in expenditure details reporting' }
         taxexpdtl                                                         as JVATxExpndtrDetailsActvVal,
         @EndUserText: { label: 'Post Tax in Next Period' , quickInfo: 'Post Tax in Next Period' }
         taxper                                                            as JVAPostTaxInNextPeriodActvVal,
         @EndUserText: { label: 'Max. No. Active Equity Groups Vent./Type' , quickInfo: 'Maximum Number of Active Equity Groups per Vent./Equity Type' }
         eqgnum                                                            as JVAMaxNmbrEquityGrpsPerVntrVal,
         @EndUserText: { label: 'Processing Oper. Billing Month active' , quickInfo: 'Processing Operational Month and Billing Month active' }
         pomact                                                            as JVAOperationalMonthActiveVal,
         @EndUserText: { label: 'GST Registration No.' , quickInfo: 'GST registration number' }
         gstno                                                             as JVARegnGSTNumberVal,
         @EndUserText: { label: 'Depreciation Area for Book Depreciation' , quickInfo: ' Depreciation Area for Book Depreciation' }
         afabe_han                                                         as JVADeprAreaForBookDeprVal,
         @EndUserText: { label: 'Depr. Area for non billable Cost (Gross)' , quickInfo: 'Depreciation Area for non billable Cost (Gross)' }
         afabe_nb                                                          as JVADeprAreaForNonBillVal,
         @EndUserText: { label: 'Depr. Area for Gross billable cost' , quickInfo: 'Depreciation Area for Gross billable cost' }
         afabe_bi                                                          as JVADeprAreaForGrossVal,
         @EndUserText: { label: 'Custom Retail Price Calculation Active' , quickInfo: 'Custom Retail Price calculation is active' }
         crpcal                                                            as JVACstmRtlPrcCalcActvVal,
         @EndUserText: { label: 'Rule for AM/MM Postings' , quickInfo: 'Posting Rule for AM/MM Postings' }
         am_meth                                                           as JVAPostgRuleForAstPostingsVal,
         @EndUserText: { label: 'Index Series for Est. Book Cost (EBC)' , quickInfo: 'Index series for calculation of estimated book cost (EBC)' }
         wbind                                                             as JVAIndexForEstBookCostVal,
         @EndUserText: { label: 'Table for Additional Selection Fields' , quickInfo: 'Table for additional selection fields' }
         seltab                                                            as JVATblForAddlSelFldVal,
         @EndUserText: { label: 'Add. Selection Field for CRP transfers' , quickInfo: 'Field for additional selection in CRP transfers' }
         selfld                                                            as JVAAddSelForCRPTransfersVal,
         @EndUserText: { label: 'JV Cutback Year' , quickInfo: 'JV Cutback Year' }
         cbyear                                                            as JVACutbackYearDateVal,
         @EndUserText: { label: 'JV Cutback Period' , quickInfo: 'JV Cutback Period' }
         cbperi                                                            as JVACutbackPeriodVal,
         @EndUserText: { label: 'JV Exchange Rate Type' , quickInfo: 'JV exchange rate type' }
         kurst                                                             as JVAExchangeRateTypeVal,
         @EndUserText: { label: 'Corporate PCO Cost Centre' , quickInfo: 'Corporate PCO Cost Centre' }
         offpcocc                                                          as JVACorpParCoOvhdCostCtrVal,
         @EndUserText: { label: 'Corporate PCO Project' , quickInfo: 'Corporate PCO Project' }
         cast(offpcoproj as ps_s4_pspnr preserving type)                   as JVACorpParCoOvhdProjectVal,
         @EndUserText: { label: 'Corporate PCO Order' , quickInfo: 'Corporate PCO Order' }
         offpcoornr                                                        as JVACorpParCoOvhdOrderVal,
         @EndUserText: { label: 'Post Documents with Default Venture Only' , quickInfo: 'Post documents with default venture data only' }
         postcorp                                                          as JVAPostToDefaultVentureActvVal,
         @EndUserText: { label: 'Venture derivation from Asset' , quickInfo: 'Venture derivation from Asset' }
         asstvent                                                          as JVAVntrDerivationTypeAssetsVal,
         @EndUserText: { label: 'Gross postings to CI Partner Active' , quickInfo: 'Gross postings to CI Partner active' }
         ci_gross                                                          as JVAGrssPostToIntrstPrtnActvVal,
         @EndUserText: { label: 'Carried Interest Postings with FB01' , quickInfo:   'Create Carried Interest postings with transaction FB01' }
         ci_fb01                                                           as JVACarriedIntrstPostings01Val,
         @EndUserText: { label: 'JV Cutback in Transaction Currency' , quickInfo: 'Use the given transaction currency for cutback postings' }
         cb_tcurr                                                          as JVAUseTransCrcyCutbackPostsVal,
         @EndUserText: { label: 'Field Status JV Cost Center' , quickInfo: 'Field status for JV Cost Center' }
         fsjvct                                                            as JVAFldStsTypeCostCtrVal,
         @EndUserText: { label: 'Field Status JV Order' , quickInfo: 'Field status for JV Internal Order' }
         fsjvot                                                            as JVAFieldStatusTypeOrderVal,
         @EndUserText: { label: 'Field Status JV Project' , quickInfo: 'Field status for JV project (WBS element)' }
         fsjvpt                                                            as JVAFieldStatusTypeProjectVal,
         @EndUserText: { label: 'Message for Budget Impact Asset Xfers' , quickInfo:   'Message for impact on budget for JV Asset Xfers active' }
         budgetmess                                                        as JVAMessageImpactActiveVal,
         @EndUserText: { label: 'Venture Data Dist. from Asset Lines' , quickInfo:   'Venture data distribution from Asset lines' }
         vidist                                                            as JVAVentureDistrAssetLinesVal,
         @EndUserText: { label: 'Operator as Partner Active' , quickInfo:   'Operator as partner active' }
         op_as_part                                                        as JVAOperatorAsPartnerActiveVal,
         @EndUserText: { label: 'Default Cost Center for Cost Elements' , quickInfo:   'Default cost center for cost element postings' }
         kostl_corp                                                        as JVADefaultCostCenterVal,
         @EndUserText: { label: 'Default Recovery Ind. for AM Postings' , quickInfo:   'Default recovery indicator for AM postings' }
         am_corp_ri                                                        as JVADfltCostRcvryCodeForAstVal,
         @EndUserText: { label: 'Recovery Ind. Switch Bank non-clear Tr.' , quickInfo:   'Recovery Indicator switch for bank lines in non-clearing trans.' }
         bank_ri_sw                                                        as JVACostRecCodeForBkSwitchVal,
         @EndUserText: { label: 'Default JVA Billing Currency' , quickInfo:   'Default JVA Billing Currency' }
         bcurr                                                             as JVADefaultBillingCrcyVal,
         @EndUserText: { label: 'Venture Bank Account Switching active' , quickInfo:   'Venture Bank Account Switching is active' }
         xvba                                                              as JVABankAccountSwitchActiveVal,
         @EndUserText: { label: 'No CO Object on Asset Lines Active' , quickInfo:   'No CO object on asset lines is active' }
         xasst_co                                                          as JVANoCostObjOnAstActvVal,

         @Semantics.currencyCode: true
         @ObjectModel.foreignKey.association: '_Currency'
         _CompanyCode.Currency,

         @EndUserText: { label: 'Billing Threshold (Debit)' , quickInfo:   'Billing threshold (debit)' }
         @Semantics: { amount : { currencyCode: 'Currency'} }
         billthres                                                         as JVABillingThresholdDebitAmt,
         @EndUserText: { label: 'Billing Threshold (Credit)' , quickInfo:   'Billing threshold (credit)' }
         @Semantics: { amount : { currencyCode: 'Currency'} }
         billthresc                                                        as JVABillingThresholdCreditAmt,
         @EndUserText: { label: 'Transfer Var. InterCompany Asset' , quickInfo:   'Transfer variant for intercompany asset transfers' }
         tvarcurr                                                          as JVATransVarInterCompAstVal,
         //@EndUserText: { label: 'Transfer Var. InterCompany Asset' , quickInfo:   'Transfer variant for intercompany asset transfers' }
         //tvarold                                        as JVAOldTransVarInterCompAsset,  //NOT USED ANYMORE!
         @EndUserText: { label: 'Split by Line Item' , quickInfo:   'Split by line item' }
         split_by_li                                                       as JVASplitByLineItemVal,
         @EndUserText: { label: 'Custom Retail Price Calculation Active' , quickInfo:   'Custom Retail Price calculation (CRP) is active' }
         ec_use                                                            as JVARtlPrCalcActvVal,
         @EndUserText: { label: 'Prepare Separate Reports Suppr. Periods' , quickInfo:   'Prepare separate reports for suppressed periods' }
         billthress                                                        as JVASprtRptSpprsdPerdsVal,
         @EndUserText: { label: 'JV Production Month Processing Active' , quickInfo:   'Joint Venture Production month processing active' }
         pm_act                                                            as JVAProductionMonthActiveVal,
         @EndUserText: { label: 'Derive Equity Group from Prod. Month' , quickInfo:   'Derive Equity Group from Production Month' }
         pm_eg                                                             as JVADeriveEquityGrpProdnMnthVal,
         @EndUserText: { label: 'No. of Years Prod. Month Active' , quickInfo:   'Number of years Production month information is available' }
         pm_act_year                                                       as JVAProductionMonthFromYearVal,
         @EndUserText: { label: 'JV Funding Active' , quickInfo:   'JV Funding Is Active' }
         funding_active                                                    as JVAFundingActvVal,
         @EndUserText: { label: 'JV Interest Calculation Active' , quickInfo:   'JV Interest Calculation Is Active' }
         intcalc_active                                                    as JVAIntrstCalcActvVal,
         @EndUserText: { label: 'JV Interest Calc. Autom. Grouping Type' , quickInfo:   'Type of automatic grouping for JV interest calculation' }
         ic_auto_group                                                     as JVAIntrstCalcAutoGrpgTypeVal,
         @EndUserText: { label: 'JV Interest Calculation Reference Group' , quickInfo:   'JV Interest Calculation Reference Group' }
         ic_group_ref                                                      as JVAInterestCalcRefGroupVal,
         @EndUserText: { label: 'GL Ledger used by JVA' , quickInfo:   'GL ledger used by JVA processes for retrieving cost data' }
         rldnr                                                             as JVALedgerVal,

         @EndUserText: { label: 'Billable Postings Allowed: From-Year' , quickInfo: 'Fiscal year as of which billable postings are allowed' }
         coalesce(_MasterData.JVAFromYearVal, _t8jz.fryear)                as JVAFromYearVal,
         @EndUserText: { label: 'Billable Postings Allowed: From-Period' , quickInfo: 'Fiscal period as of which billable postings are allowed' }
         coalesce(_MasterData.JVAFromYearVal, _t8jz.frperiod)              as JVAFromPeriodVal,
         @EndUserText: { label: 'Billable Postings Allowed: To-Year' , quickInfo: 'Fiscal year up to which billable postings are allowed' }
         coalesce(_MasterData.JVAToYearVal, _t8jz.toyear)                  as JVAToYearVal,
         @EndUserText: { label: 'Billable Postings Allowed: To-Period' , quickInfo: 'Fiscal period up to which billable postings are allowed' }
         coalesce(_MasterData.JVAToPeriodVal, _t8jz.toperiod)              as JVAToPeriodVal,

         @EndUserText: { label: 'Percentage for Payroll Burden Clearing' , quickInfo: 'Percentage to be used for payroll burden clearing' }
         coalesce(_MasterData.JVAStandardPaymentRate, _t8jz.stpay)         as JVAStandardPaymentVal,
         @EndUserText: { label: 'Non-Comp. Rate Payroll Burden Clearing' , quickInfo: 'Non-compulsory benefits rate for payroll burden clearing' }
         coalesce(_MasterData.JVANonCompulsoryBenefitsRate, _t8jz.noncomp) as JVANonCompulsoryBenefitsVal,
         @EndUserText: { label: 'Comp. Rate For Canadian Payroll Burden' , quickInfo: 'Compulsory benefits rate for Canadian payroll burden' }
         coalesce(_MasterData.JVACompulsoryBenefitsRate, _t8jz.compuls)    as JVACompulsoryBenefitsVal,

         
         _CompanyCode,
         _CompanyCode._Currency,
         _MasterData


}
```
