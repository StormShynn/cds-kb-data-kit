---
name: I_COSTCENTER
description: "Cost Center"
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-OM
  - interface-view
  - cost-center
  - component:CO-OM-2CL
  - lob:Controlling
  - bo:CostCenter
---
# I_COSTCENTER

**Cost Center**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` | ✓ | |  | `kokrs` |  |  |
| `CostCenter` | ✓ | |  | `kostl` |  |  |
| `ValidityEndDate` | ✓ | |  | `datbi` |  |  |
| `ValidityStartDate` |  | |  | `datab` |  |  |
| `IsBlkdForPrimaryCostsPosting` |  | |  | `bkzkp` |  |  |
| `IsBlockedForPlanPrimaryCosts` |  | |  | `pkzkp` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `BusinessArea` |  | |  | `gsber` |  |  |
| `CostCenterCategory` |  | |  | `kosar` |  |  |
| `CostCtrResponsiblePersonName` |  | |  | `verak` |  |  |
| `CostCtrResponsibleUser` |  | |  | `verak_user` |  |  |
| `CostCenterCurrency` |  | |  | `waers` |  |  |
| `CostingSheet` |  | |  | `kalsm` |  |  |
| `TaxJurisdiction` |  | |  | `txjcd` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `LogicalSystem` |  | |  | `logsystem` |  |  |
| `CostCenterCreationDate` |  | |  | `ersda` |  |  |
| `CostCenterCreatedByUser` |  | |  | `usnam` |  |  |
| `IsBlkdForSecondaryCostsPosting` |  | |  | `bkzks` |  |  |
| `IsBlockedForRevenuePosting` |  | |  | `bkzer` |  |  |
| `IsBlockedForCommitmentPosting` |  | |  | `bkzob` |  |  |
| `IsBlockedForPlanSecondaryCosts` |  | |  | `cast(pkzks as fis_pkzks preserving type)` |  |  |
| `IsBlockedForPlanRevenues` |  | |  | `cast(pkzer as fis_pkzer preserving type)` |  |  |
| `CostCenterAllocationMethod` |  | |  | `vmeth` |  |  |
| `ConsumptionQtyIsRecorded` |  | |  | `mgefl` |  |  |
| `Department` |  | |  | `abtei` |  |  |
| `SubsequentCostCenter` |  | |  | `nkost` |  |  |
| `ConditionUsage` |  | |  | `kvewe` |  |  |
| `ConditionApplication` |  | |  | `kappl` |  |  |
| `CostCenterAccountingOverhead` |  | |  | `koszschl` |  |  |
| `Country` |  | |  | `land1` |  |  |
| `FormOfAddress` |  | |  | `anred` |  |  |
| `AddressName` |  | |  | `name1` |  |  |
| `AddressAdditionalName` |  | |  | `name2` |  |  |
| `CostCenterAddrName3` |  | |  | `name3` |  |  |
| `CostCenterAddrName4` |  | |  | `name4` |  |  |
| `CityName` |  | |  | `ort01` |  |  |
| `District` |  | |  | `ort02` |  |  |
| `StreetAddressName` |  | |  | `stras` |  |  |
| `POBox` |  | |  | `pfach` |  |  |
| `PostalCode` |  | |  | `pstlz` |  |  |
| `POBoxPostalCode` |  | |  | `pstl2` |  |  |
| `Region` |  | |  | `regio` |  |  |
| `Language` |  | |  | `spras` |  |  |
| `TeleboxNumber` |  | |  | `telbx` |  |  |
| `PhoneNumber1` |  | |  | `telf1` |  |  |
| `PhoneNumber2` |  | |  | `telf2` |  |  |
| `FaxNumber` |  | |  | `telfx` |  |  |
| `TeletexNumber` |  | |  | `teltx` |  |  |
| `TelexNumber` |  | |  | `telx1` |  |  |
| `DataCommunicationPhoneNumber` |  | |  | `datlt` |  |  |
| `CostCenterPrinterDestination` |  | |  | `drnam` |  |  |
| `CostCenterStandardHierArea` |  | |  | `khinr` |  |  |
| `CostCollector` |  | |  | `cckey` |  |  |
| `CostCenterIsComplete` |  | |  | `kompl` |  |  |
| `IsStatisticalCostCenter` |  | |  | `cast(stakz as fins_xkostl_stat preserving type)` |  |  |
| `ObjectInternalID` |  | |  | `objnr` |  |  |
| `CostCenterFunction` |  | |  | `funkt` |  |  |
| `CostCenterAlternativeFunction` |  | |  | `afunk` |  |  |
| `FunctionalArea` |  | |  | `func_area` |  |  |
| `ActyIndepFormulaPlanningTmpl` |  | |  | `cpi_templ` |  |  |
| `ActyDepdntFormulaPlanningTmpl` |  | |  | `cpd_templ` |  |  |
| `ActyIndependentAllocationTmpl` |  | |  | `sci_templ` |  |  |
| `ActyDependentAllocationTmpl` |  | |  | `scd_templ` |  |  |
| `ActlIndepStatisticalKeyFigures` |  | |  | `ski_templ` |  |  |
| `ActlDepStatisticalKeyFigures` |  | |  | `skd_templ` |  |  |
| `JointVenture` |  | |  | `vname` |  |  |
| `JointVentureRecoveryCode` |  | |  | `recid` |  |  |
| `JointVentureEquityType` |  | |  | `etype` |  |  |
| `JointVentureObjectType` |  | |  | `jv_otype` |  |  |
| `JointVentureClass` |  | |  | `jv_jibcl` |  |  |
| `JointVentureSubClass` |  | |  | `jv_jibsa` |  |  |
| `BudgetCarryingCostCenter` |  | |  | `budget_carrying_cost_ctr` |  |  |
| `AvailabilityControlProfile` |  | |  | `avc_profile` |  |  |
| `AvailabilityControlIsActive` |  | |  | `avc_active` |  |  |
| `Fund` |  | |  | `fund` |  |  |
| `GrantID` |  | |  | `grant_id` |  |  |
| `FundIsFixAssigned` |  | |  | `fund_fix_assigned` |  |  |
| `GrantIDIsFixAssigned` |  | |  | `grant_fix_assigned` |  |  |
| `FunctionalAreaIsFixAssigned` |  | |  | `func_area_fix_assigned` |  |  |
| `CostCenterCreationTime` |  | |  | `created_at` |  |  |
| `CostCenterLastChangedByUser` |  | |  | `last_changed_by` |  |  |
| `CostCenterLastChangedOnDate` |  | |  | `last_changed_on` |  |  |
| `CostCenterLastChangedAtTime` |  | |  | `last_changed_at` |  |  |
| `_ControllingArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_CostCenterHierarchyNode` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_CostCenterCategory` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_CostingSheetProcedure` | | ✓ | | | | |
| `_UserRespContactCard` | | ✓ | | | | |
| `_UserCrtedContactCard` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_AvailabilityCtrlProfile` | | ✓ | | | | |
| `_ActivityBasedCostingTmplCpi` | | ✓ | | | | |
| `_ActivityBasedCostingTmplCpd` | | ✓ | | | | |
| `_ActivityBasedCostingTmplSci` | | ✓ | | | | |
| `_ActivityBasedCostingTmplScd` | | ✓ | | | | |
| `_ActivityBasedCostingTmplSki` | | ✓ | | | | |
| `_ActivityBasedCostingTmplSkd` | | ✓ | | | | |
| `_LastChangedByUserContactCard` | | ✓ | | | | |
| `_JointVenture` | | ✓ | | | | |
| `_JointVentureRecovery` | | ✓ | | | | |
| `_JointVentureEquityType` | | ✓ | | | | |
| `_JointVentureObjectType` | | ✓ | | | | |
| `_JointVentureClass` | | ✓ | | | | |
| `_JointVentureSubClass` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |
| `_Grant` | | ✓ | | | | |
| `_BudgetCarryingCostCenter` | | ✓ | | | | |
| `_BudgetCostCenterHier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_ControllingArea` | [1] |
| `_Text` | `I_CostCenterText` | [0..*] |
| `_CostCenterHierarchyNode` | `I_CostCenterHierarchyNode` | [0..*] |
| `_Currency` | `I_Currency` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_CostCenterCategory` | `I_CostCenterCategory` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_CostingSheetProcedure` | `I_CostingSheetProcedure` | [0..1] |
| `_UserRespContactCard` | `I_UserContactCard` | [0..1] |
| `_UserCrtedContactCard` | `I_UserContactCard` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_AvailabilityCtrlProfile` | `I_AvailabilityCtrlProfile` | [0..1] |
| `_Extension` | `E_CostCenter` | [1..1] |
| `_ActivityBasedCostingTmplCpi` | `I_ActivityBasedCostingTmpl` | [0..1] |
| `_ActivityBasedCostingTmplCpd` | `I_ActivityBasedCostingTmpl` | [0..1] |
| `_ActivityBasedCostingTmplSci` | `I_ActivityBasedCostingTmpl` | [0..1] |
| `_ActivityBasedCostingTmplScd` | `I_ActivityBasedCostingTmpl` | [0..1] |
| `_ActivityBasedCostingTmplSki` | `I_ActivityBasedCostingTmpl` | [0..1] |
| `_ActivityBasedCostingTmplSkd` | `I_ActivityBasedCostingTmpl` | [0..1] |
| `_LastChangedByUserContactCard` | `I_UserContactCard` | [0..1] |
| `_JointVenture` | `I_JointVenture` | [0..1] |
| `_JointVentureRecovery` | `I_JointVentureRecovery` | [0..1] |
| `_JointVentureEquityType` | `I_JointVentureEquityType` | [0..1] |
| `_JointVentureObjectType` | `I_JntVntrCostCtrType` | [0..1] |
| `_JointVentureClass` | `I_JntIntrstBillgClass` | [0..1] |
| `_JointVentureSubClass` | `I_JntIntrstBillgSubclass` | [0..1] |
| `_Fund` | `I_Fund` | [0..*] |
| `_Grant` | `I_Grant` | [0..1] |
| `_BudgetCarryingCostCenter` | `I_CostCenter` | [0..*] |
| `_BudgetCostCenterHier` | `I_BudgetCostCenterHierarchy` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFICOSTCENTER'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true

@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}

@ObjectModel.representativeKey: 'CostCenter'
@ObjectModel.sapObjectNodeType.name: 'CostCenter'

@AccessControl.authorizationCheck: #CHECK
//@AccessControl.personalData.blocking: #REQUIRED -> Not needed for user in ADRP because no XBLCK field like in BUT000 or KNA1/LFA1
@AccessControl.privilegedAssociations: [ '_UserRespContactCard', '_UserCrtedContactCard', '_LastChangedByUserContactCard' ]

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Cost Center'
@VDM.viewType: #BASIC

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ObjectModel.usageType: {
  dataClass: #ORGANIZATIONAL,
  serviceQuality: #A,
  sizeCategory: #L
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Consumption.filter.businessDate.at: true
define view I_CostCenter
  as select from csks

  association [1]    to I_ControllingArea           as _ControllingArea              on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..*] to I_CostCenterText            as _Text                         on  $projection.ControllingArea = _Text.ControllingArea
                                                                                     and $projection.CostCenter      = _Text.CostCenter
                                                                                     and $projection.ValidityEndDate = _Text.ValidityEndDate
  association [0..*] to I_CostCenterHierarchyNode   as _CostCenterHierarchyNode      on  $projection.ControllingArea = _CostCenterHierarchyNode.ControllingArea
                                                                                     and $projection.CostCenter      = _CostCenterHierarchyNode.CostCenter
  association [0..1] to I_Currency                  as _Currency                     on  $projection.CostCenterCurrency = _Currency.Currency
  association [0..1] to I_CompanyCode               as _CompanyCode                  on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_BusinessArea              as _BusinessArea                 on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..*] to I_ProfitCenter              as _ProfitCenter                 on  $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
                                                                                     and $projection.ControllingArea = _ProfitCenter.ControllingArea

  association [0..1] to I_FunctionalArea            as _FunctionalArea               on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..1] to I_CostCenterCategory        as _CostCenterCategory           on  $projection.CostCenterCategory = _CostCenterCategory.CostCenterCategory
  association [0..1] to I_Country                   as _Country                      on  $projection.Country = _Country.Country
  association [0..1] to I_Region                    as _Region                       on  $projection.Region  = _Region.Region
                                                                                     and $projection.Country = _Region.Country
  association [0..1] to I_CostingSheetProcedure     as _CostingSheetProcedure        on  _CostingSheetProcedure.ConditionUsage        = 'A'
                                                                                     and _CostingSheetProcedure.ConditionApplication  = 'KA'
                                                                                     and _CostingSheetProcedure.CostingSheetProcedure = $projection.CostingSheet
  association [0..1] to I_UserContactCard           as _UserRespContactCard          on  $projection.CostCtrResponsibleUser = _UserRespContactCard.ContactCardID
  association [0..1] to I_UserContactCard           as _UserCrtedContactCard         on  $projection.CostCenterCreatedByUser = _UserCrtedContactCard.ContactCardID

  association [0..1] to I_Language                  as _Language                     on  $projection.Language = _Language.Language
  association [0..1] to I_AvailabilityCtrlProfile   as _AvailabilityCtrlProfile      on  $projection.AvailabilityControlProfile = _AvailabilityCtrlProfile.AvailabilityControlProfile
  association [1..1] to E_CostCenter                as _Extension                    on  $projection.ControllingArea = _Extension.ControllingArea
                                                                                     and $projection.CostCenter      = _Extension.CostCenter
                                                                                     and $projection.ValidityEndDate = _Extension.ValidityEndDate

  association [0..1] to I_ActivityBasedCostingTmpl  as _ActivityBasedCostingTmplCpi  on  _ActivityBasedCostingTmplCpi.ControllingArea              = $projection.ControllingArea
                                                                                     and _ActivityBasedCostingTmplCpi.ActivityBasedCostingEnvrmt   = 'CPI'
                                                                                     and _ActivityBasedCostingTmplCpi.ActivityBasedCostingTemplate = $projection.ActyIndepFormulaPlanningTmpl

  association [0..1] to I_ActivityBasedCostingTmpl  as _ActivityBasedCostingTmplCpd  on  _ActivityBasedCostingTmplCpd.ControllingArea              = $projection.ControllingArea
                                                                                     and _ActivityBasedCostingTmplCpd.ActivityBasedCostingEnvrmt   = 'CPD'
                                                                                     and _ActivityBasedCostingTmplCpd.ActivityBasedCostingTemplate = $projection.ActyDepdntFormulaPlanningTmpl

  association [0..1] to I_ActivityBasedCostingTmpl  as _ActivityBasedCostingTmplSci  on  _ActivityBasedCostingTmplSci.ControllingArea              = $projection.ControllingArea
                                                                                     and _ActivityBasedCostingTmplSci.ActivityBasedCostingEnvrmt   = 'SCI'
                                                                                     and _ActivityBasedCostingTmplSci.ActivityBasedCostingTemplate = $projection.ActyIndependentAllocationTmpl

  association [0..1] to I_ActivityBasedCostingTmpl  as _ActivityBasedCostingTmplScd  on  _ActivityBasedCostingTmplScd.ControllingArea              = $projection.ControllingArea
                                                                                     and _ActivityBasedCostingTmplScd.ActivityBasedCostingEnvrmt   = 'SCD'
                                                                                     and _ActivityBasedCostingTmplScd.ActivityBasedCostingTemplate = $projection.ActyDependentAllocationTmpl

  association [0..1] to I_ActivityBasedCostingTmpl  as _ActivityBasedCostingTmplSki  on  _ActivityBasedCostingTmplSki.ControllingArea              = $projection.ControllingArea
                                                                                     and _ActivityBasedCostingTmplSki.ActivityBasedCostingEnvrmt   = 'SKI'
                                                                                     and _ActivityBasedCostingTmplSki.ActivityBasedCostingTemplate = $projection.ActlIndepStatisticalKeyFigures

  association [0..1] to I_ActivityBasedCostingTmpl  as _ActivityBasedCostingTmplSkd  on  _ActivityBasedCostingTmplSkd.ControllingArea              = $projection.ControllingArea
                                                                                     and _ActivityBasedCostingTmplSkd.ActivityBasedCostingEnvrmt   = 'SKD'
                                                                                     and _ActivityBasedCostingTmplSkd.ActivityBasedCostingTemplate = $projection.ActlDepStatisticalKeyFigures

  association [0..1] to I_UserContactCard           as _LastChangedByUserContactCard on  $projection.CostCenterLastChangedByUser = _LastChangedByUserContactCard.ContactCardID

  association [0..1] to I_JointVenture              as _JointVenture                 on  $projection.CompanyCode  = _JointVenture.CompanyCode
                                                                                     and $projection.JointVenture = _JointVenture.JointVenture

  association [0..1] to I_JointVentureRecovery      as _JointVentureRecovery         on  $projection.CompanyCode              = _JointVentureRecovery.CompanyCode
                                                                                     and $projection.JointVentureRecoveryCode = _JointVentureRecovery.JointVentureRecoveryCode

  association [0..1] to I_JointVentureEquityType    as _JointVentureEquityType       on  $projection.CompanyCode            = _JointVentureEquityType.CompanyCode
                                                                                     and $projection.JointVentureEquityType = _JointVentureEquityType.JointVentureEquityType

  association [0..1] to I_JntVntrCostCtrType        as _JointVentureObjectType       on  $projection.CompanyCode            = _JointVentureObjectType.CompanyCode
                                                                                     and $projection.JointVentureObjectType = _JointVentureObjectType.JntVntrCostCtrType

  association [0..1] to I_JntIntrstBillgClass       as _JointVentureClass            on  $projection.CompanyCode       = _JointVentureClass.CompanyCode
                                                                                     and $projection.JointVentureClass = _JointVentureClass.JntIntrstBillgClass

  association [0..1] to I_JntIntrstBillgSubclass    as _JointVentureSubClass         on  $projection.CompanyCode          = _JointVentureSubClass.CompanyCode
                                                                                     and $projection.JointVentureClass    = _JointVentureSubClass.JntIntrstBillgClass
                                                                                     and $projection.JointVentureSubClass = _JointVentureSubClass.JntIntrstBillgSubClass

  association [0..*] to I_Fund                      as _Fund                         on  $projection.Fund = _Fund.Fund

  association [0..1] to I_Grant                     as _Grant                        on  $projection.GrantID = _Grant.GrantID

  association [0..*] to I_CostCenter                as _BudgetCarryingCostCenter     on  _BudgetCarryingCostCenter.ControllingArea   = $projection.ControllingArea
                                                                                     and _BudgetCarryingCostCenter.CostCenter        = $projection.BudgetCarryingCostCenter
//                                                                                     and _BudgetCarryingCostCenter.ValidityStartDate <= $session.system_date
//                                                                                     and _BudgetCarryingCostCenter.ValidityEndDate   >= $session.system_date

  association [0..*] to I_BudgetCostCenterHierarchy as _BudgetCostCenterHier         on  _BudgetCostCenterHier.ControllingArea   = $projection.ControllingArea
                                                                                     and _BudgetCostCenterHier.CostCenter        = $projection.CostCenter
//                                                                                     and _BudgetCostCenterHier.ValidityStartDate <= $session.system_date
//                                                                                     and _BudgetCostCenterHier.ValidityEndDate   >= $session.system_date
{
      @ObjectModel.foreignKey.association: '_ControllingArea'
      //key cast( kokrs as fis_kokrs )  as ControllingArea,
  key kokrs                                           as ControllingArea,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_CostCenterHierarchyNode'
  key kostl                                           as CostCenter,
      @Semantics.businessDate.to: true
  key datbi                                           as ValidityEndDate,
      @Semantics.businessDate.from: true
      datab                                           as ValidityStartDate,
      bkzkp                                           as IsBlkdForPrimaryCostsPosting,
      pkzkp                                           as IsBlockedForPlanPrimaryCosts,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs                                           as CompanyCode,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      gsber                                           as BusinessArea,
      @ObjectModel.foreignKey.association: '_CostCenterCategory'
      kosar                                           as CostCenterCategory,
      verak                                           as CostCtrResponsiblePersonName,
      @ObjectModel.foreignKey.association: '_UserRespContactCard'
      verak_user                                      as CostCtrResponsibleUser,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_Currency'
      waers                                           as CostCenterCurrency,
      @ObjectModel.foreignKey.association: '_CostingSheetProcedure'
      kalsm                                           as CostingSheet,
      txjcd                                           as TaxJurisdiction,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      prctr                                           as ProfitCenter,
      werks                                           as Plant,
      logsystem                                       as LogicalSystem,
      @Semantics.systemDate.createdAt: true
      ersda                                           as CostCenterCreationDate,
      @Semantics.user.createdBy: true
      @ObjectModel.foreignKey.association: '_UserCrtedContactCard'
      usnam                                           as CostCenterCreatedByUser,
      bkzks                                           as IsBlkdForSecondaryCostsPosting,
      bkzer                                           as IsBlockedForRevenuePosting,
      bkzob                                           as IsBlockedForCommitmentPosting,
      cast(pkzks as fis_pkzks preserving type)        as IsBlockedForPlanSecondaryCosts,
      cast(pkzer as fis_pkzer preserving type)        as IsBlockedForPlanRevenues,
      vmeth                                           as CostCenterAllocationMethod,
      mgefl                                           as ConsumptionQtyIsRecorded,
      abtei                                           as Department,
      nkost                                           as SubsequentCostCenter,
      kvewe                                           as ConditionUsage,
      kappl                                           as ConditionApplication,
      koszschl                                        as CostCenterAccountingOverhead,
      @ObjectModel.foreignKey.association: '_Country'
      land1                                           as Country,
      anred                                           as FormOfAddress,
      name1                                           as AddressName,
      name2                                           as AddressAdditionalName,
      name3                                           as CostCenterAddrName3,
      name4                                           as CostCenterAddrName4,
      ort01                                           as CityName,
      ort02                                           as District,
      stras                                           as StreetAddressName,
      pfach                                           as POBox,
      pstlz                                           as PostalCode,
      pstl2                                           as POBoxPostalCode,
      @ObjectModel.foreignKey.association: '_Region'
      regio                                           as Region,
      @ObjectModel.foreignKey.association: '_Language'
      spras                                           as Language,
      telbx                                           as TeleboxNumber,
      telf1                                           as PhoneNumber1,
      telf2                                           as PhoneNumber2,
      telfx                                           as FaxNumber,
      teltx                                           as TeletexNumber,
      telx1                                           as TelexNumber,
      datlt                                           as DataCommunicationPhoneNumber,
      drnam                                           as CostCenterPrinterDestination,
      khinr                                           as CostCenterStandardHierArea,
      cckey                                           as CostCollector,
      kompl                                           as CostCenterIsComplete,
      cast(stakz as fins_xkostl_stat preserving type) as IsStatisticalCostCenter,
      objnr                                           as ObjectInternalID,
      funkt                                           as CostCenterFunction,
      afunk                                           as CostCenterAlternativeFunction,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      func_area                                       as FunctionalArea,
      @ObjectModel.foreignKey.association: '_ActivityBasedCostingTmplCpi'
      cpi_templ                                       as ActyIndepFormulaPlanningTmpl,
      @ObjectModel.foreignKey.association: '_ActivityBasedCostingTmplCpd'
      cpd_templ                                       as ActyDepdntFormulaPlanningTmpl,
      @ObjectModel.foreignKey.association: '_ActivityBasedCostingTmplSci'
      sci_templ                                       as ActyIndependentAllocationTmpl,
      @ObjectModel.foreignKey.association: '_ActivityBasedCostingTmplScd'
      scd_templ                                       as ActyDependentAllocationTmpl,
      @ObjectModel.foreignKey.association: '_ActivityBasedCostingTmplSki'
      ski_templ                                       as ActlIndepStatisticalKeyFigures,
      @ObjectModel.foreignKey.association: '_ActivityBasedCostingTmplSkd'
      skd_templ                                       as ActlDepStatisticalKeyFigures,
      vname                                           as JointVenture,
      recid                                           as JointVentureRecoveryCode,
      etype                                           as JointVentureEquityType,
      jv_otype                                        as JointVentureObjectType,
      jv_jibcl                                        as JointVentureClass,
      jv_jibsa                                        as JointVentureSubClass,
      budget_carrying_cost_ctr                        as BudgetCarryingCostCenter,
      avc_profile                                     as AvailabilityControlProfile,
      avc_active                                      as AvailabilityControlIsActive,

      fund                                            as Fund,
      grant_id                                        as GrantID,
      fund_fix_assigned                               as FundIsFixAssigned,
      grant_fix_assigned                              as GrantIDIsFixAssigned,
      func_area_fix_assigned                          as FunctionalAreaIsFixAssigned,

      @Semantics.systemTime.createdAt: true
      created_at                                      as CostCenterCreationTime,
      @ObjectModel.foreignKey.association: '_LastChangedByUserContactCard'
      @Semantics.user.lastChangedBy
      last_changed_by                                 as CostCenterLastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      last_changed_on                                 as CostCenterLastChangedOnDate,
      @Semantics.systemTime.lastChangedAt: true
      last_changed_at                                 as CostCenterLastChangedAtTime,

      _ControllingArea,
      _Text,
      _CostCenterHierarchyNode,
      _Currency,
      _CompanyCode,
      _BusinessArea,
      @Consumption.filter.businessDate.at: true
      _ProfitCenter,
      _FunctionalArea,
      _CostCenterCategory,
      _Country,
      _Region,
      _CostingSheetProcedure,
      _Language,
      _AvailabilityCtrlProfile,
      _UserRespContactCard,
      _UserCrtedContactCard,
      _ActivityBasedCostingTmplCpi,
      _ActivityBasedCostingTmplCpd,
      _ActivityBasedCostingTmplSci,
      _ActivityBasedCostingTmplScd,
      _ActivityBasedCostingTmplSki,
      _ActivityBasedCostingTmplSkd,
      _LastChangedByUserContactCard,
      _JointVenture,
      _JointVentureRecovery,
      _JointVentureEquityType,
      _JointVentureObjectType,
      _JointVentureClass,
      _JointVentureSubClass,
      _Fund,
      _Grant,
      @ObjectModel.association.toHierarchy: true
      _BudgetCostCenterHier,
      _BudgetCarryingCostCenter
}
```
