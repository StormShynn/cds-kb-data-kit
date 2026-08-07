---
name: I_SERVICECOSTRATE_2
description: Servicecostrate 2
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-OM
  - interface-view
  - service
  - component:CO-OM-2CL
  - lob:Controlling
---
# I_SERVICECOSTRATE_2

**Servicecostrate 2**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `AccountingCostRateUUID` | ✓ | |  |  |
| `Ledger` |  | | `_Rate` | `Ledger` |
| `CurrencyRole` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `ControllingArea` |  | |  |  |
| `CostCenter` |  | |  |  |
| `ActivityType` |  | |  |  |
| `IsIntercompanyRate` |  | |  |  |
| `ReceivingCompanyCode` |  | |  |  |
| `ServiceCostLevel` |  | |  |  |
| `PersonnelNumber` |  | |  |  |
| `WBSElementInternalID` |  | |  | `WBSElementInternalID_2` |
| `WBSElementExternalID` |  | |  | `WBSElementExternalID_2` |
| `WorkItem` |  | |  |  |
| `TimeSheetOvertimeCategory` |  | |  |  |
| `ValidityStartFiscalYear` |  | |  |  |
| `ValidityStartFiscalPeriod` |  | |  |  |
| `ValidityStartFiscalYearPeriod` |  | |  | `cast((concat( ValidityStartFiscalYear, ValidityStartFiscalPeriod )) as fins_fyearperiod)` |
| `ValidityStartDate` |  | |  |  |
| `ValidityEndFiscalYear` |  | |  |  |
| `ValidityEndFiscalPeriod` |  | |  |  |
| `ValidityEndFiscalYearPeriod` |  | |  | `cast((concat( ValidityEndFiscalYear, ValidityEndFiscalPeriod )) as fins_fyearperiod)` |
| `ValidityEndDate` |  | |  |  |
| `CostCtrActivityTypeQtyUnit` |  | |  |  |
| `Currency` |  | |  |  |
| `CostRateVarblAmount` |  | |  | `cast(CostRateTotalAmount - CostRateFixedAmount as fco_rate_varbl_amount)` |
| `CostRateScaleFactor` |  | |  |  |
| `LedgerForAuthorization` |  | |  |  |
| `_CompanyCode` | | ✓ | | |
| `_ReceivingCompanyCode` | | ✓ | | |
| `_Currency` | | ✓ | | |
| `_CostCenter` | | ✓ | | |
| `_CurrentCostCenter` | | ✓ | | |
| `_CostCtrActivityType` | | ✓ | | |
| `_CurrentCostCtrActyType` | | ✓ | | |
| `_WorkItem` | | ✓ | | |
| `_ServiceCostLevel` | | ✓ | | |
| `_CurrentServiceCostLevel` | | ✓ | | |
| `_Employment` | | ✓ | | |
| `_PersonWorkAgreement` | | ✓ | | |
| `_WBSElement` | | ✓ | | |
| `_WBSElementInternalID` | | ✓ | | |
| `_UnitOfMeasure` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ReceivingCompanyCode` | `I_CompanyCode` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CurrentCostCenter` | `I_CostCenter` | [0..1] |
| `_CostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_CurrentCostCtrActyType` | `I_CostCenterActivityType` | [0..1] |
| `_WorkItem` | `I_WorkItem` | [0..1] |
| `_ServiceCostLevel` | `I_ServiceCostLevel` | [0..*] |
| `_CurrentServiceCostLevel` | `I_ServiceCostLevel` | [0..1] |
| `_Employment` | `I_Employment` | [0..1] |
| `_PersonWorkAgreement` | `I_PersonWorkAgreement_1` | [1] |
| `_WBSElement` | `I_WBSElement` | [0..1] |
| `_WBSElementInternalID` | `I_WBSElementByInternalKey` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_Extension` | `E_AccountingCostRate` | [1..1] |

## Source Code

```abap
//@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@EndUserText.label: 'Service Cost Rate'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    usageType: {
        sizeCategory: #L,
        serviceQuality: #B,
        dataClass: #TRANSACTIONAL
    },
    supportedCapabilities: [
        #SQL_DATA_SOURCE,
        #CDS_MODELING_DATA_SOURCE,
        #CDS_MODELING_ASSOCIATION_TARGET,
        #EXTRACTION_DATA_SOURCE
    ]
}
@VDM.viewType: #BASIC

@Analytics:{
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
@ObjectModel.sapObjectNodeType.name: 'AccountingCostRate'


define view entity I_ServiceCostRate_2 
  as select from P_AccountingCostRate as _Rate
  
  association [0..1] to I_CompanyCode             as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_CompanyCode             as _ReceivingCompanyCode    on  $projection.ReceivingCompanyCode = _ReceivingCompanyCode.CompanyCode
  association [0..1] to I_Currency                as _Currency                on  $projection.Currency = _Currency.Currency
  association [0..*] to I_CostCenter              as _CostCenter              on  $projection.ControllingArea = _CostCenter.ControllingArea
                                                                              and $projection.CostCenter      = _CostCenter.CostCenter
  association [0..1] to I_CostCenter              as _CurrentCostCenter       on  $projection.ControllingArea          = _CurrentCostCenter.ControllingArea
                                                                              and $projection.CostCenter               = _CurrentCostCenter.CostCenter
                                                                              and _CurrentCostCenter.ValidityStartDate <= $session.system_date
                                                                              and _CurrentCostCenter.ValidityEndDate   >= $session.system_date
  association [0..*] to I_CostCenterActivityType  as _CostCtrActivityType     on  $projection.ControllingArea = _CostCtrActivityType.ControllingArea
                                                                              and $projection.ActivityType    = _CostCtrActivityType.CostCtrActivityType
  association [0..1] to I_CostCenterActivityType  as _CurrentCostCtrActyType  on  $projection.ControllingArea               = _CurrentCostCtrActyType.ControllingArea
                                                                              and $projection.ActivityType                  = _CurrentCostCtrActyType.CostCtrActivityType
                                                                              and _CurrentCostCtrActyType.ValidityStartDate <= $session.system_date
                                                                              and _CurrentCostCtrActyType.ValidityEndDate   >= $session.system_date
  association [0..1] to I_WorkItem                as _WorkItem                on  $projection.WorkItem = _WorkItem.WorkItem
  association [0..*] to I_ServiceCostLevel        as _ServiceCostLevel        on  $projection.ServiceCostLevel = _ServiceCostLevel.ServiceCostLevel
  association [0..1] to I_ServiceCostLevel        as _CurrentServiceCostLevel on  $projection.ServiceCostLevel               = _CurrentServiceCostLevel.ServiceCostLevel
                                                                              and _CurrentServiceCostLevel.ValidityStartDate <= $session.system_date
                                                                              and _CurrentServiceCostLevel.ValidityEndDate   >= $session.system_date
  association [0..1] to I_Employment              as _Employment              on  $projection.PersonnelNumber = _Employment.EmploymentInternalID
                                                                              and _Employment.StartDate       <= $session.system_date
                                                                              and _Employment.EndDate         >= $session.system_date
  association [1]    to I_PersonWorkAgreement_1   as _PersonWorkAgreement     on  $projection.PersonnelNumber = _PersonWorkAgreement.PersonWorkAgreement                                                                            
  association [0..1] to I_WBSElement              as _WBSElement              on  $projection.WBSElementExternalID = _WBSElement.WBSElement
  association [0..1] to I_WBSElementByInternalKey as _WBSElementInternalID    on  $projection.WBSElementInternalID = _WBSElementInternalID.WBSElementInternalID
  association [0..1] to I_UnitOfMeasure           as _UnitOfMeasure           on  $projection.CostCtrActivityTypeQtyUnit = _UnitOfMeasure.UnitOfMeasure
  association [1..1] to E_AccountingCostRate      as _Extension               on  $projection.AccountingCostRateUUID = _Extension.AccountingCostRateUUID
  
  
{

  key AccountingCostRateUUID,

      _Rate.Ledger,
      CurrencyRole,
      CompanyCode,
      ControllingArea,

      CostCenter,
      ActivityType,
      IsIntercompanyRate,
      ReceivingCompanyCode,
      ServiceCostLevel,
      PersonnelNumber,
      WBSElementInternalID_2 as WBSElementInternalID,
      WBSElementExternalID_2 as WBSElementExternalID,
      WorkItem,
      TimeSheetOvertimeCategory,
      @Semantics.fiscal.year: true
      ValidityStartFiscalYear,
      @Semantics.fiscal.period: true
      ValidityStartFiscalPeriod,
      @Semantics.fiscal.yearPeriod: true
      cast((concat( ValidityStartFiscalYear, ValidityStartFiscalPeriod )) as fins_fyearperiod) as ValidityStartFiscalYearPeriod,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      @Semantics.fiscal.year: true
      ValidityEndFiscalYear,
      @Semantics.fiscal.period: true
      ValidityEndFiscalPeriod,
      @Semantics.fiscal.yearPeriod: true
      cast((concat( ValidityEndFiscalYear, ValidityEndFiscalPeriod )) as fins_fyearperiod)     as ValidityEndFiscalYearPeriod,
      @Semantics.businessDate.to: true
      ValidityEndDate,

//      @Semantics.unitOfMeasure:true
      CostCtrActivityTypeQtyUnit,
//      @Semantics.currencyCode: true
      Currency,

      @Semantics.amount.currencyCode: 'Currency'
      cast(CostRateTotalAmount - CostRateFixedAmount as fco_rate_varbl_amount)                 as CostRateVarblAmount,
      CostRateScaleFactor,
      LedgerForAuthorization,

      _CompanyCode,
      _ReceivingCompanyCode,
      _CostCenter,
      _CurrentCostCenter,
      _CostCtrActivityType,
      _CurrentCostCtrActyType,
      _ServiceCostLevel,
      _CurrentServiceCostLevel,
      _Employment,
      _PersonWorkAgreement,
      _WorkItem,
      _WBSElement,
      _WBSElementInternalID,
      _Currency,
      _UnitOfMeasure
}
where
      CostRateIsDeleted       = ''
  and BusinessTransactionType = 'MSCR'
  and PlanningCategory        = 'PLN'
  and CurrencyRole            = '00'
```
