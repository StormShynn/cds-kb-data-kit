---
name: I_RECONTRORGLASSGMTTERM
description: "Recontrorglassgmtterm"
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - component:RE-FX-2CL
  - lob:Other
---
# I_RECONTRORGLASSGMTTERM

**Recontrorglassgmtterm**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InternalRealEstateNumber` | ✓ | |  | `intreno` |  |  |
| `RETermType` | ✓ | |  | `termtype` |  |  |
| `RETermNumber` | ✓ | |  | `termno` |  |  |
| `ValidityStartDate` | ✓ | |  | `cast(validfrom as rebdvdmvalidfrom preserving type )` |  |  |
| `ValidityEndDate` |  | |  | `cast(validto as rebdvdmvalidto preserving type )` |  |  |
| `BusinessArea` |  | |  | `gsber` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `REStatusObject` |  | |  | `cast(addobjnr as retmvdmraaddobjnr preserving type )` |  |  |
| `TaxJurisdiction` |  | |  | `txjcd` |  |  |
| `Fund` |  | |  | `cast(fund as bp_geber)` |  |  |
| `FundsCenter` |  | |  | `cast(fundscenter as fm_fictr)` |  |  |
| `CommitmentItem` |  | |  | `cast( commitmentitem as fm_fipex preserving type )` |  |  |
| `FunctionalArea` |  | |  | `cast(functionalarea as fm_farea)` |  |  |
| `REFundsManagementGrantID` |  | |  | `cast(grantnumber as reravdmgrantnumber preserving type )` |  |  |
| `BudgetPeriod` |  | |  | `cast(budgetperiod as fm_budget_period)` |  |  |
| `RealEstateObjectType` |  | | `_REKeyAssgmt` | `RealEstateObjectType` |  |  |
| `ControllingArea` |  | | `_REKeyAssgmt._CompanyCode` | `ControllingArea` |  |  |
| `TaxCalculationProcedure` |  | | `_REKeyAssgmt._CompanyCode._Country` | `TaxCalculationProcedure` |  |  |
| `FinancialManagementArea` |  | | `_REKeyAssgmt._CompanyCode` | `FinancialManagementArea` |  |  |
| `CompanyCode` |  | | `_REKeyAssgmt._CompanyCode` | `CompanyCode` |  |  |
| `_REKeyAssgmt` | | ✓ | | | | |
| `_REContract` | | ✓ | | | | |
| `_RETermType` | | ✓ | | | | |
| `_RETerm` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_TaxJurisdiction` | | ✓ | | | | |
| `_TaxJurisdictionCalcProcedure` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |
| `_FundsCenter` | | ✓ | | | | |
| `_CommitmentItem` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_BudgetPeriod` | | ✓ | | | | |
| `_Grant` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_FinMgmtArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REKeyAssgmt` | `I_REKeyAssgmt` | [1..1] |
| `_REContract` | `I_REContract` | [1..1] |
| `_RETermType` | `I_RETermType` | [1..1] |
| `_RETerm` | `I_RETerm` | [1..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_TaxJurisdiction` | `I_TaxJurisdiction` | [0..1] |
| `_TaxJurisdictionCalcProcedure` | `I_TaxJurisCalcProcedure` | [0..1] |
| `_Fund` | `I_Fund` | [0..1] |
| `_FundsCenter` | `I_FundsCenter` | [0..*] |
| `_CommitmentItem` | `I_CommitmentItem` | [0..*] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_BudgetPeriod` | `I_BudgetPeriod` | [0..1] |
| `_Grant` | `I_Grant` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_FinMgmtArea` | `I_FinancialManagementArea` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREORGASSTERM'
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Real Estate Organizational Assgmt Term'
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel: {
  representativeKey: 'RETermNumber',
  semanticKey: ['InternalRealEstateNumber', 'RETermType', 'RETermNumber', 'ValidityStartDate'],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION, 
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'REContrOrglAssgmtTerm'
}
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@VDM.viewType: #BASIC

define view entity I_REContrOrglAssgmtTerm
  as select from vitmoa as _REOrganizationalAssgmtTerm

  association [1..1] to I_REKeyAssgmt             as _REKeyAssgmt                  on  $projection.InternalRealEstateNumber = _REKeyAssgmt.InternalRealEstateNumber
  association [1..1] to I_REContract              as _REContract                   on  $projection.InternalRealEstateNumber = _REContract.InternalRealEstateNumber
  association [1..1] to I_RETermType              as _RETermType                   on  $projection.RETermType           = _RETermType.RETermType
                                                                                   and $projection.RealEstateObjectType = _RETermType.RealEstateObjectType
  association [1..1] to I_RETerm                  as _RETerm                       on  $projection.InternalRealEstateNumber = _RETerm.InternalRealEstateNumber
                                                                                   and $projection.RETermType               = _RETerm.RETermType
                                                                                   and $projection.RETermNumber             = _RETerm.RETermNumber
  association [0..1] to I_BusinessArea            as _BusinessArea                 on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_ProfitCenter            as _ProfitCenter                 on  $projection.ProfitCenter        = _ProfitCenter.ProfitCenter
                                                                                   and $projection.ControllingArea     = _ProfitCenter.ControllingArea
  //                                                                                   and _ProfitCenter.ValidityEndDate   >= $projection.ValidityStartDate
                                                                                   and _ProfitCenter.ValidityEndDate   >= $session.system_date
  //                                                                                   and _ProfitCenter.ValidityStartDate <= $projection.ValidityEndDate
                                                                                   and _ProfitCenter.ValidityStartDate <= $session.system_date
  association [0..1] to I_TaxJurisdiction         as _TaxJurisdiction              on  $projection.TaxJurisdiction         = _TaxJurisdiction.TaxJurisdiction
                                                                                   and $projection.TaxCalculationProcedure = _TaxJurisdiction.TaxJurisdictionCalcProcedure
  association [0..1] to I_TaxJurisCalcProcedure   as _TaxJurisdictionCalcProcedure on  $projection.TaxCalculationProcedure = _TaxJurisdictionCalcProcedure.TaxJurisdictionCalcProcedure
  association [0..1] to I_Fund                    as _Fund                         on  $projection.Fund                    = _Fund.Fund
                                                                                   and $projection.FinancialManagementArea = _Fund.FinancialManagementArea
  association [0..*] to I_FundsCenter             as _FundsCenter                  on  $projection.FundsCenter             = _FundsCenter.FundsCenter
                                                                                   and $projection.FinancialManagementArea = _FundsCenter.FinancialManagementArea
  association [0..*] to I_CommitmentItem          as _CommitmentItem               on  $projection.CommitmentItem          = _CommitmentItem.CommitmentItem
                                                                                   and $projection.FinancialManagementArea = _CommitmentItem.FinancialManagementArea
  association [0..1] to I_FunctionalArea          as _FunctionalArea               on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..1] to I_BudgetPeriod            as _BudgetPeriod                 on  $projection.BudgetPeriod = _BudgetPeriod.BudgetPeriod
  association [0..1] to I_Grant                   as _Grant                        on  $projection.REFundsManagementGrantID = _Grant.GrantID
  association [0..1] to I_ControllingArea         as _ControllingArea              on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_FinancialManagementArea as _FinMgmtArea                  on  $projection.FinancialManagementArea = _FinMgmtArea.FinancialManagementArea                                                                                                                                                                                                                                                                      
{
            @ObjectModel.foreignKey.association: '_REKeyAssgmt'
  key       intreno                                                    as InternalRealEstateNumber,
            @ObjectModel.foreignKey.association: '_RETermType'
  key       termtype                                                   as RETermType,
  key       termno                                                     as RETermNumber,
            @Semantics.businessDate.from: true
  key       cast(validfrom as rebdvdmvalidfrom  preserving type )      as ValidityStartDate,
            @Semantics.businessDate.to: true
            cast(validto as rebdvdmvalidto preserving type )           as ValidityEndDate,
            @ObjectModel.foreignKey.association: '_BusinessArea'
            gsber                                                      as BusinessArea,
//            @ObjectModel.foreignKey.association: '_ProfitCenter'
            prctr                                                      as ProfitCenter,
            cast(addobjnr as retmvdmraaddobjnr preserving type )       as REStatusObject,
            @ObjectModel.foreignKey.association: '_TaxJurisdiction'
            txjcd                                                      as TaxJurisdiction,
            @ObjectModel.foreignKey.association: '_Fund'
            cast(fund as bp_geber)                                     as Fund,
            @ObjectModel.foreignKey.association: '_FundsCenter'
            cast(fundscenter as fm_fictr)                              as FundsCenter,
//            @ObjectModel.foreignKey.association: '_CommitmentItem'
            cast( commitmentitem as fm_fipex preserving type )         as CommitmentItem,
            @ObjectModel.foreignKey.association: '_FunctionalArea'
            cast(functionalarea as fm_farea)                           as FunctionalArea,
//            @ObjectModel.foreignKey.association: '_Grant'
            cast(grantnumber   as reravdmgrantnumber  preserving type ) as REFundsManagementGrantID,
            //MEASURE
            @ObjectModel.foreignKey.association: '_BudgetPeriod'
            cast(budgetperiod as fm_budget_period)                     as BudgetPeriod,
            
            @ObjectModel.foreignKey.association: '_REObjectType'
            _REKeyAssgmt.RealEstateObjectType                          as RealEstateObjectType,
            @ObjectModel.foreignKey.association: '_ControllingArea'
            _REKeyAssgmt._CompanyCode.ControllingArea                  as ControllingArea,
            @ObjectModel.foreignKey.association: '_TaxJurisdictionCalcProcedure'
            _REKeyAssgmt._CompanyCode._Country.TaxCalculationProcedure as TaxCalculationProcedure,
            @ObjectModel.foreignKey.association: '_FinMgmtArea'
            _REKeyAssgmt._CompanyCode.FinancialManagementArea          as FinancialManagementArea,
            _REKeyAssgmt._CompanyCode.CompanyCode                      as CompanyCode,

            _REKeyAssgmt,
            _REKeyAssgmt._REObjectType,
            _RETermType,
            _RETerm,
            _BusinessArea,
            _ProfitCenter,
            _TaxJurisdiction,
            _Fund,
            _FundsCenter,
            _CommitmentItem,
            _FunctionalArea,
            _BudgetPeriod,
            _Grant,
            _ControllingArea,
            _FinMgmtArea,
            _TaxJurisdictionCalcProcedure,
            _REContract

} where intreno like 'IS%'
```
