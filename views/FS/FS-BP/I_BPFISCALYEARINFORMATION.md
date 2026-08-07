---
name: I_BPFISCALYEARINFORMATION
description: Bpfiscalyearinformation
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FS
  - FS-BP
  - interface-view
  - component:FS-BP
  - lob:Other
---
# I_BPFISCALYEARINFORMATION

**Bpfiscalyearinformation**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partnr` |
| `BusinessPartnerFiscalYear` | ✓ | |  | `business_y` |
| `BPBalanceSheetCurrency` |  | |  | `bal_sh_cur` |
| `BPAnnualStockholderMeetingDate` |  | |  | `gen_meet_d` |
| `BPFiscalYearStartDate` |  | |  | `bu_y_begin` |
| `BPFiscalYearEndDate` |  | |  | `bu_y_end` |
| `BPFiscalYearIsClosed` |  | |  | `annual_acc` |
| `BPFiscalYearClosingDate` |  | |  | `annu_acc_d` |
| `BPFsclYrCnsldtdFinStatementDte` |  | |  | `cons_fst_d` |
| `BPCapitalStockAmtInBalShtCrcy` |  | |  | `capi_stock` |
| `BPIssdStockCptlAmtInBalShtCrcy` |  | |  | `shar_stock` |
| `BPPartcipnCertAmtInBalShtCrcy` |  | |  | `prsh_stock` |
| `BPEquityCapitalAmtInBalShtCrcy` |  | |  | `equity` |
| `BPGrossPremiumAmtInBalShtCrcy` |  | |  | `gross_amnt` |
| `BPNetPremiumAmtInBalShtCrcy` |  | |  | `net_amount` |
| `BPAnnualSalesAmtInBalShtCrcy` |  | |  | `turnover` |
| `BPAnnualNetIncAmtInBalShtCrcy` |  | |  | `net_income` |
| `BPDividendDistrAmtInBalShtCrcy` |  | |  | `div_dis_am` |
| `BPDebtRatioInYears` |  | |  | `debts_fact` |
| `BPAnnualPnLAmtInBalShtCrcy` |  | |  | `dis_profit` |
| `BPBalSheetTotalAmtInBalShtCrcy` |  | |  | `bal_amount` |
| `BPNumberOfEmployees` |  | |  | `staff_count` |
| `BPCptlReserveAmtInBalShtCrcy` |  | |  | `cap_res` |
| `BPLglRevnRsrvAmtInBalShtCrcy` |  | |  | `rev_res_leg` |
| `RevnRsrvOwnStkAmtInBalShtCrcy` |  | |  | `rev_res_own_shr` |
| `BPStatryReserveAmtInBalShtCrcy` |  | |  | `rev_res_by_laws` |
| `BPOthRevnRsrvAmtInBalShtCrcy` |  | |  | `rev_res_others` |
| `BPPnLCarryfwdAmtInBalShtCrcy` |  | |  | `forw_profit_loss` |
| `BPSuborddLbltyAmtInBalShtCrcy` |  | |  | `liabilit_second` |
| `BPRetOnTotalCptlEmpldInPercent` |  | |  | `ret_tot_cap_empl` |
| `BPDebtClearancePeriodInYears` |  | |  | `reduc_long_term` |
| `BPFinancingCoeffInPercent` |  | |  | `coeff_finance` |
| `BPEquityRatioInPercent` |  | |  | `equity_capit` |
| `_BusinessPartner` | | ✓ | | |
| `_BPFinancialServicesExtn` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1] |
| `_BPFinancialServicesExtn` | `I_BPFinancialServicesExtn` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPFYINFORMATION',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #XXL
                            },
                representativeKey: 'BusinessPartnerFiscalYear',
                sapObjectNodeType.name: 'BPFiscalYearInformation',
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE ],
                modelingPattern: #ANALYTICAL_DIMENSION            
              }
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL
            }
@Metadata: { allowExtensions:true, 
             ignorePropagatedAnnotations: true 
           }            
@AccessControl: { personalData.blocking: #REQUIRED,
                  authorizationCheck: #MANDATORY
                }
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@EndUserText.label: 'Fiscal year information of BP'

define view I_BPFiscalYearInformation 
  as select from bp021 
  association [1]    to I_BusinessPartner         as _BusinessPartner         on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner      // <--- to inherit authorizations in DCL
  association [0..1] to I_BPFinancialServicesExtn as _BPFinancialServicesExtn on $projection.BusinessPartner  = _BPFinancialServicesExtn.BusinessPartner // <--- to inherit authorizations in DCL
{
  @ObjectModel.foreignKey.association: '_BusinessPartner'
  key bp021.partnr           as BusinessPartner,
  @Semantics.calendar.year: true
  key bp021.business_y       as BusinessPartnerFiscalYear,
      bp021.bal_sh_cur       as BPBalanceSheetCurrency,
      bp021.gen_meet_d       as BPAnnualStockholderMeetingDate,
      @Semantics.businessDate.from: true
      bp021.bu_y_begin       as BPFiscalYearStartDate,
      @Semantics.businessDate.to: true
      bp021.bu_y_end         as BPFiscalYearEndDate,
      bp021.annual_acc       as BPFiscalYearIsClosed,
      //@EndUserText.label: 'Year-End Closing Date'
      bp021.annu_acc_d       as BPFiscalYearClosingDate,
      @Semantics.businessDate.at: true
      bp021.cons_fst_d       as BPFsclYrCnsldtdFinStatementDte,
      @Semantics.amount.currencyCode: 'BPBalanceSheetCurrency'
      bp021.capi_stock       as BPCapitalStockAmtInBalShtCrcy,
      @Semantics.amount.currencyCode: 'BPBalanceSheetCurrency'
      bp021.shar_stock       as BPIssdStockCptlAmtInBalShtCrcy,
      @Semantics.amount.currencyCode: 'BPBalanceSheetCurrency'
      bp021.prsh_stock       as BPPartcipnCertAmtInBalShtCrcy,
      @Semantics.amount.currencyCode: 'BPBalanceSheetCurrency'
      bp021.equity           as BPEquityCapitalAmtInBalShtCrcy,
      @Semantics.amount.currencyCode: 'BPBalanceSheetCurrency'
      bp021.gross_amnt       as BPGrossPremiumAmtInBalShtCrcy,
      @Semantics.amount.currencyCode: 'BPBalanceSheetCurrency'
      bp021.net_amount       as BPNetPremiumAmtInBalShtCrcy,
      @Semantics.amount.currencyCode: 'BPBalanceSheetCurrency'
      bp021.turnover         as BPAnnualSalesAmtInBalShtCrcy,
      @Semantics.amount.currencyCode: 'BPBalanceSheetCurrency'
      bp021.net_income       as BPAnnualNetIncAmtInBalShtCrcy,
      @Semantics.amount.currencyCode: 'BPBalanceSheetCurrency'
      bp021.div_dis_am       as BPDividendDistrAmtInBalShtCrcy,
      bp021.debts_fact       as BPDebtRatioInYears,
      @Semantics.amount.currencyCode: 'BPBalanceSheetCurrency'
      bp021.dis_profit       as BPAnnualPnLAmtInBalShtCrcy,
      @Semantics.amount.currencyCode: 'BPBalanceSheetCurrency'
      bp021.bal_amount       as BPBalSheetTotalAmtInBalShtCrcy,
      bp021.staff_count      as BPNumberOfEmployees,
      @Semantics.amount.currencyCode: 'BPBalanceSheetCurrency'
      bp021.cap_res          as BPCptlReserveAmtInBalShtCrcy,
      @Semantics.amount.currencyCode: 'BPBalanceSheetCurrency'
      bp021.rev_res_leg      as BPLglRevnRsrvAmtInBalShtCrcy,
      @Semantics.amount.currencyCode: 'BPBalanceSheetCurrency'
      bp021.rev_res_own_shr  as RevnRsrvOwnStkAmtInBalShtCrcy,
      @Semantics.amount.currencyCode: 'BPBalanceSheetCurrency'
      bp021.rev_res_by_laws  as BPStatryReserveAmtInBalShtCrcy,
      @Semantics.amount.currencyCode: 'BPBalanceSheetCurrency'
      bp021.rev_res_others   as BPOthRevnRsrvAmtInBalShtCrcy,
      @Semantics.amount.currencyCode: 'BPBalanceSheetCurrency'
      bp021.forw_profit_loss as BPPnLCarryfwdAmtInBalShtCrcy,
      @Semantics.amount.currencyCode: 'BPBalanceSheetCurrency'
      bp021.liabilit_second  as BPSuborddLbltyAmtInBalShtCrcy,
      bp021.ret_tot_cap_empl as BPRetOnTotalCptlEmpldInPercent,
      bp021.reduc_long_term  as BPDebtClearancePeriodInYears,
      bp021.coeff_finance    as BPFinancingCoeffInPercent,
      bp021.equity_capit     as BPEquityRatioInPercent, 
           
      _BusinessPartner,
      _BPFinancialServicesExtn
}
```
