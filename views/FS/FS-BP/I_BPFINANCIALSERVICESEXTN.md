---
name: I_BPFINANCIALSERVICESEXTN
description: Bpfinancialservicesextn
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
  - service
  - component:FS-BP
  - lob:Other
---
# I_BPFINANCIALSERVICESEXTN

**Bpfinancialservicesextn**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusinessPartner` | `bp001.partner` |
| `BusinessPartnerIsVIP` | `bp001.vip` |
| `TradingPartner` | `bp001.vbund` |
| `FactoryCalendar` | `bp001.calendarid` |
| `BusinessPartnerOfficeCountry` | `bp001.cntry_comp` |
| `BusinessPartnerOfficeRegion` | `bp001.regio` |
| `BPRegisteredOfficeName` | `bp001.comp_head` |
| `BPBalanceSheetCurrency` | `bp001.bal_sh_cur` |
| `BPLastCptlIncrAmtInBalShtCrcy` | `bp001.cap_incr_a` |
| `BPLastCapitalIncreaseYear` | `bp001.cap_incr_y` |
| `BPBalanceSheetDisplayType` | `bp001.balance_fl` |
| `BusinessPartnerCitizenship` | `bp001.state` |
| `BPMaritalPropertyRegime` | `bp001.proprty_st` |
| `BusinessPartnerIncomeCurrency` | `bp001.income_cur` |
| `BPNumberOfChildren` | `bp001.children` |
| `BPNumberOfHouseholdMembers` | `bp001.mem_house` |
| `BPAnnualNetIncAmtInIncomeCrcy` | `bp001.net_income` |
| `BPMonthlyNetIncAmtInIncomeCrcy` | `bp001.mo_net_inc` |
| `BPAnnualNetIncomeYear` | `bp001.net_inc_y` |
| `BPMonthlyNetIncomeMonth` | `bp001.mo_inc_m` |
| `BPMonthlyNetIncomeYear` | `bp001.mo_inc_y` |
| `BPPlaceOfDeathName` | `bp001.dying_place` |
| `CustomerIsUnwanted` | `bp001.unw_customer` |
| `UndesirabilityReason` | `bp001.unw_reason` |
| `UndesirabilityComment` | `bp001.unw_remark` |
| `LastCustomerContactDate` | `bp001.last_cust_cont` |
| `BPGroupingCharacter` | `bp001.group_feature` |
| `BPLetterSalutation` | `bp001.title_let` |
| `BusinessPartnerTargetGroup` | `bp001.group_d` |
| `BusinessPartnerEmployeeGroup` | `bp001.staff_grp` |
| `BusinessPartnerIsEmployee` | `bp001.staff_ref` |
| `BPTermnBusRelationsBankDate` | `bp001.bank_del_d` |
| `_BusinessPartner` | *Association* |
| `_BPLetterSalutation` | *Association* |
| `_BPTradingPartner` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1] |
| `_BPLetterSalutation` | `I_BPLetterSalutation` | [0..1] |
| `_BPTradingPartner` | `I_BPTradingPartner` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPFINSERVEXTN',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }

@ObjectModel: { usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #XL
                            },
                representativeKey: 'BusinessPartner',
                sapObjectNodeType.name: 'BPFinancialServicesExtension',
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
@Metadata: { allowExtensions: true,
             ignorePropagatedAnnotations: true
           }   
@AccessControl: { personalData.blocking: #REQUIRED,
                  authorizationCheck: #MANDATORY
                }                                  
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@EndUserText.label: 'Financial Services Attributes for BP'

define view I_BPFinancialServicesExtn   
  as select from bp001
  association [1]    to I_BusinessPartner       as _BusinessPartner    on $projection.BusinessPartner         = _BusinessPartner.BusinessPartner
  association [0..1] to I_BPLetterSalutation    as _BPLetterSalutation on $projection.BPLetterSalutation      = _BPLetterSalutation.BPLetterSalutation
  association [0..1] to I_BPTradingPartner      as _BPTradingPartner   on $projection.TradingPartner          = _BPTradingPartner.TradingPartner
{
  key bp001.partner        as BusinessPartner,
      bp001.vip            as BusinessPartnerIsVIP,
      bp001.vbund          as TradingPartner,
      bp001.calendarid     as FactoryCalendar,
      bp001.cntry_comp     as BusinessPartnerOfficeCountry,
      bp001.regio          as BusinessPartnerOfficeRegion,
      bp001.comp_head      as BPRegisteredOfficeName,
      bp001.bal_sh_cur     as BPBalanceSheetCurrency,
      
      @Semantics.amount.currencyCode: 'BPBalanceSheetCurrency'
      bp001.cap_incr_a     as BPLastCptlIncrAmtInBalShtCrcy,
      
      bp001.cap_incr_y     as BPLastCapitalIncreaseYear,
      bp001.balance_fl     as BPBalanceSheetDisplayType,
      bp001.state          as BusinessPartnerCitizenship,
      bp001.proprty_st     as BPMaritalPropertyRegime,
      bp001.income_cur     as BusinessPartnerIncomeCurrency,
      bp001.children       as BPNumberOfChildren,
      bp001.mem_house      as BPNumberOfHouseholdMembers,
      
      @Semantics.amount.currencyCode: 'BusinessPartnerIncomeCurrency'
      bp001.net_income     as BPAnnualNetIncAmtInIncomeCrcy,
      
      @Semantics.amount.currencyCode: 'BusinessPartnerIncomeCurrency'
      bp001.mo_net_inc     as BPMonthlyNetIncAmtInIncomeCrcy,
      
      bp001.net_inc_y      as BPAnnualNetIncomeYear,
      bp001.mo_inc_m       as BPMonthlyNetIncomeMonth,
      bp001.mo_inc_y       as BPMonthlyNetIncomeYear,
      bp001.dying_place    as BPPlaceOfDeathName,
      bp001.unw_customer   as CustomerIsUnwanted,
      bp001.unw_reason     as UndesirabilityReason,
      bp001.unw_remark     as UndesirabilityComment,
      bp001.last_cust_cont as LastCustomerContactDate,
      bp001.group_feature  as BPGroupingCharacter,
      bp001.title_let      as BPLetterSalutation,

      bp001.group_d        as BusinessPartnerTargetGroup,
      bp001.staff_grp      as BusinessPartnerEmployeeGroup,
      bp001.staff_ref      as BusinessPartnerIsEmployee,
      bp001.bank_del_d     as BPTermnBusRelationsBankDate,

      _BPTradingPartner,
      _BPLetterSalutation,
      _BusinessPartner


}
```
