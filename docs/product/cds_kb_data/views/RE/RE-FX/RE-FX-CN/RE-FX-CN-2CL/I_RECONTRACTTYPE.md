---
name: I_RECONTRACTTYPE
description: "Real Estate Contract Type"
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECONTRACTTYPE')/$value
semantic_en: "Real Estate Contract Type"
semantic_vi: "Real Estate Contract Type — CDS view giao diện dựa trên tivcncctadd."
keywords:
  - "real"
  - "estate"
  - "contract"
  - "type"
  - "condition"
  - "group"
  - "adjust"
  - "number"
  - "business"
  - "partner"
  - "role1"
tags:
  - RE
  - component:RE-FX-CN-2CL
  - contract
  - interface-view
  - RE-FX
  - RE-FX-CN
  - RE-FX-CN-2CL
---
# I_RECONTRACTTYPE

**Real Estate Contract Type**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECONTRACTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REContractType` | ✓ | |  | `smvart` | `CHAR(4)` | External Real Estate Contract Type |
| `REConditionGroup` |  | |  | `condgroup` | `CHAR(4)` | Condition Group |
| `REAdjustNumberGroup` |  | |  | `adjustnumberbeg` | `NUMC(4)` | Start of Group Number |
| `REAdjustNumber` |  | |  | `adjustnumberstep` | `NUMC(4)` | Interval Between Group Numbers |
| `REBusinessPartnerRole1` |  | |  | `bproletype1` | `CHAR(6)` | Business Partner: Role |
| `REBusinessPartnerRole2` |  | |  | `bproletype2` | `CHAR(6)` | Business Partner: Role |
| `REContractUserSupplier` |  | |  | `usersupplier` | `NUMC(1)` | Offerer (Customer), User (Vendor) |
| `REContractCategory` |  | |  | `category` | `NUMC(1)` | Real Estate Contract Category |
| `RECashFlowPeriod` |  | |  | `cfperiod` | `NUMC(2)` | Update Period of Cash Flow Items in Years |
| `RETaxType` |  | |  | `taxtype` | `CHAR(4)` | Default Value for Tax Type |
| `TaxGroup` |  | |  | `taxgroup` | `CHAR(20)` | Default Value for Tax Group |
| `REContractDepositType` |  | |  | `cntypedeposit` | `CHAR(4)` | Contract Type of Security Deposit Agreement |
| `REContractIsTaxFree` |  | |  | `istaxfree` | `CHAR(1)` | Tax-Exempt |
| `RENoticeProcedure` |  | |  | `ntprocdefault` | `CHAR(4)` | Notice Procedure: Default When Creating Contract |
| `REInfluenceHoldings` |  | |  | `cntypeusageind` | `CHAR(1)` | Influence on Changes in Holdings |
| `REFinanceDepositLevel` |  | |  | `cmcflevel` | `CHAR(2)` | Planning Level |
| `REIsPossessionDate` |  | |  | `ispossdenabled` | `CHAR(1)` | Possession Dates Active/Inactive |
| `REConditionGroupTotal` |  | |  | `condgroupsum` | `CHAR(4)` | Condition Group Total |
| `REHasNewCreationAssignment` |  | |  | `cuexcludeassign` | `CHAR(1)` | No New Creation or Assignment |
| `REIsExclForNewAssgmt` |  | |  | `cuexcludeassign` | `CHAR(1)` | No New Creation or Assignment |
| `NumberRangeInterval` |  | | `_ContractTypeFndn` | `NumberRangeInterval` | `CHAR(2)` | Number Range Number |
| `REUsageType` |  | | `_ContractTypeFndn` | `REUsageType` | `NUMC(1)` | Rental unit usage category indicator |
| `REContractTypeCategory` |  | | `_ContractTypeFndn` | `REContractTypeCategory` | `NUMC(1)` | Real Estate contract category |
| `REIsAreaBasedRent` |  | | `_ContractTypeFndn` | `REIsAreaBasedRent` | `CHAR(1)` | Rental based on area is not permitted |
| `REHasDistributionOnObject` |  | | `_ContractTypeFndn` | `REHasDistributionOnObject` | `CHAR(1)` | Indicator for automatic distribution on object |
| `_Text` | | ✓ | | | | |
| `_RETaxType` | | ✓ | | | | |
| `_RETaxGroup` | | ✓ | | | | |
| `_REFinanceDepositLevel` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_REContractTypeText` | [0..*] |
| `_RETaxType` | `I_RETaxType` | [1..*] |
| `_RETaxGroup` | `I_RETaxGroup` | [0..1] |
| `_REFinanceDepositLevel` | `I_PlanningLevel` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECONTRACTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECONTRACTTYPE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IRECONTYPE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Contract Type'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.representativeKey: ['REContractType']
@ObjectModel.semanticKey: ['REContractType']
@ObjectModel.sapObjectNodeType.name: 'RealEstateContractType'
//@ClientDependent: true
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true
//@Search.searchable: true
@ObjectModel.compositionRoot: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE]
                                        
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true
    }
}

// Double Maintenance with I_REContractType_2 required

define view  I_REContractType
  as select from tivcncctadd          as _ContractType
    join         I_REContractTypeFndn as _ContractTypeFndn on _ContractType.smvart = _ContractTypeFndn.REContractType
  association [0..*] to I_REContractTypeText as _Text on $projection.REContractType = _Text.REContractType
  association [1..*] to I_RETaxType          as _RETaxType             on $projection.RETaxType = _RETaxType.RETaxType
  association [0..1] to I_RETaxGroup         as _RETaxGroup            on $projection.TaxGroup = _RETaxGroup.TaxGroup
  association [0..1] to I_PlanningLevel      as _REFinanceDepositLevel on $projection.REFinanceDepositLevel = _REFinanceDepositLevel.PlanningLevel
{
      @ObjectModel.text.association: '_Text'
  key smvart           as REContractType,
      //gcvarnr as REScreenSequence,
      condgroup        as REConditionGroup,
//      nrnroff          as NumberRangeInterval,
      //home_url as REContractHomepage,
      adjustnumberbeg  as REAdjustNumberGroup,
      adjustnumberstep as REAdjustNumber,
      bproletype1      as REBusinessPartnerRole1,
      bproletype2      as REBusinessPartnerRole2,
      //bpappl as REApplicationCategory,
      usersupplier     as REContractUserSupplier,
      category         as REContractCategory,
      cfperiod         as RECashFlowPeriod,
      //optmeth as REOptionRateMethod,
//      @ObjectModel.foreignKey.association: '_RETaxType'
      taxtype          as RETaxType,
      @ObjectModel.foreignKey.association: '_RETaxGroup'
      taxgroup         as TaxGroup,
      cntypedeposit    as REContractDepositType,
      istaxfree        as REContractIsTaxFree,
      //nooptmeth as REIsOptionRateMethodRequired,
      //coseprof as RESettlementProfile,
      ntprocdefault    as RENoticeProcedure,
      cntypeusageind   as REInfluenceHoldings,
      @ObjectModel.foreignKey.association: '_REFinanceDepositLevel'
      cmcflevel        as REFinanceDepositLevel,
      //currencyassign as RECurrenyAssignment,
      ispossdenabled   as REIsPossessionDate,
      condgroupsum     as REConditionGroupTotal,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'REIsExclForNewAssgmt'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'REIsExclForNewAssgmt'      
      cuexcludeassign  as REHasNewCreationAssignment,
      cuexcludeassign  as REIsExclForNewAssgmt,
        
      _ContractTypeFndn.NumberRangeInterval,  
      _ContractTypeFndn.REUsageType,
      _ContractTypeFndn.REContractTypeCategory,
      _ContractTypeFndn.REIsAreaBasedRent,
      _ContractTypeFndn.REHasDistributionOnObject,

      _RETaxType,
      _RETaxGroup,
      _REFinanceDepositLevel,
      
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text


}
where
  _ContractTypeFndn.REIsNewContractType = 'X'
```
