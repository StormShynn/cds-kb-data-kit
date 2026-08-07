---
name: I_PCCACTLTGTCOSTCUBE
description: Pccactltgtcostcube
app_component: CO-PC-OBJ-PER-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-OBJ
  - interface-view
  - analytical
  - component:CO-PC-OBJ-PER-2CL
  - lob:Controlling
---
# I_PCCACTLTGTCOSTCUBE

**Pccactltgtcostcube**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-PER-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrderID` | ✓ | |  |  |  |  |
| `CompanyCode` | ✓ | |  |  |  |  |
| `ControllingArea` | ✓ | |  |  |  |  |
| `WorkCenterInternalID` | ✓ | |  |  |  |  |
| `OrderOperation` | ✓ | |  |  |  |  |
| `GLAccount` | ✓ | |  |  |  |  |
| `PartnerCostCtrActivityType` | ✓ | |  |  |  |  |
| `PartnerCostCenter` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `Product` | ✓ | |  |  |  |  |
| `UnitOfMeasure` | ✓ | |  |  |  |  |
| `Ledger` |  | |  | `cast( $parameters.P_Ledger as fins_ledger preserving type )` |  |  |
| `ProducedProduct` |  | |  |  |  |  |
| `WorkCenter` |  | | `_WorkCenter` | `WorkCenter` |  |  |
| `ChartOfAccounts` |  | |  |  |  |  |
| `OrderType` |  | |  |  |  |  |
| `OrderCategory` |  | |  |  |  |  |
| `DisplayCurrency` |  | |  |  |  |  |
| `CreditActlCostInDspCrcy` |  | |  |  |  |  |
| `DebitActlCostInDspCrcy` |  | |  |  |  |  |
| `CrdtActlFxdCostInDspCrcy` |  | |  |  |  |  |
| `DebitActlFxdCostInDspCrcy` |  | |  |  |  |  |
| `ActualQtyInCostSourceUnit` |  | |  |  |  |  |
| `CrdtTargetCostInDspCrcy` |  | |  |  |  |  |
| `DebitTargetCostInDspCrcy` |  | |  |  |  |  |
| `TargetQtyInCostSourceUnit` |  | |  |  |  |  |
| `_Plant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProducedProduct` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_PartnerCostCenter` | | ✓ | | | | |
| `_PartnerCostCtrActivityType` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ProducedProduct` | `I_Product` | [0..1] |
| `_Order` | `I_Order` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_PartnerCostCenter` | `I_CostCenter` | [0..*] |
| `_PartnerCostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Analytics: { dataCategory: #CUBE,
              internalName: #LOCAL }
@Metadata: { allowExtensions:true,
             ignorePropagatedAnnotations: true }
@ObjectModel: { usageType.sizeCategory: #XL,
                usageType.dataClass:  #MIXED,
                usageType.serviceQuality: #D,
                supportedCapabilities: [#ANALYTICAL_PROVIDER,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE],
                modelingPattern:#ANALYTICAL_CUBE}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Actual and Target Costs for PCC - Cube'
define view entity I_PCCActlTgtCostCube
  with parameters
    @EndUserText.label: 'From Fiscal Year Period'
    @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDate',
                               resultElement: 'FiscalYearPeriod',
                               binding:      [ { targetElement : 'CalendarDate'      , type : #SYSTEM_FIELD,  value : '#SYSTEM_DATE' } ,
                                               { targetElement : 'FiscalYearVariant' , type : #CONSTANT  ,  value : 'K4'     } ]
                             }
    P_FromFiscalYearPeriod : fins_fyearperiod,
    @EndUserText.label: 'To Fiscal Year Period'
    @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDate',
                               resultElement: 'FiscalYearPeriod',
                               binding:      [ { targetElement : 'CalendarDate'      , type : #SYSTEM_FIELD,  value : '#SYSTEM_DATE' } ,
                                               { targetElement : 'FiscalYearVariant' , type : #CONSTANT  ,  value : 'K4'     } ]
                             }
    P_ToFiscalYearPeriod   : fins_fyearperiod,
    @Consumption: { valueHelpDefinition: [{ entity:{name: 'I_Ledger', element :'Ledger'} }],
                    derivation: { lookupEntity: 'I_Ledger',
                                  resultElement: 'Ledger',
                                  binding: [ { targetElement: 'IsLeadingLedger', type: #CONSTANT, value: 'X'  } ]
                                }
                  }
    P_Ledger               : fins_ledger,
    @Consumption.defaultValue: '10'
    //@Consumption.valueHelpDefinition: [{ entity:{name: 'I_CurrencyRole', element :'CurrencyRole'} }]
    P_CurrencyRole         : fac_crcyrole,
    @Consumption.defaultValue: '000'
    P_TargetCostVariant    : fis_awvrs
  as select from P_PCCActlTgtCostAnlytlQry( P_FromFiscalYearPeriod    : $parameters.P_FromFiscalYearPeriod,
                                            P_ToFiscalYearPeriod      : $parameters.P_ToFiscalYearPeriod,
                                            P_Ledger                  : $parameters.P_Ledger,
                                            P_CurrencyRole            : $parameters.P_CurrencyRole,
                                            P_TargetCostVariant       : $parameters.P_TargetCostVariant )
  association [0..1] to I_Plant                      as _Plant                      on  $projection.Plant = _Plant.Plant
  association [0..1] to I_Product                    as _Product                    on  $projection.Product = _Product.Product
  association [0..1] to I_Product                    as _ProducedProduct            on  $projection.ProducedProduct = _ProducedProduct.Product
  association [0..1] to I_Order                      as _Order                      on  $projection.OrderID = _Order.OrderID
  association [0..1] to I_UnitOfMeasure              as _BaseUnit                   on  $projection.UnitOfMeasure = _BaseUnit.UnitOfMeasure
  association [0..*] to I_CostCenter                 as _PartnerCostCenter          on  $projection.ControllingArea   = _PartnerCostCenter.ControllingArea
                                                                                    and $projection.PartnerCostCenter = _PartnerCostCenter.CostCenter
  association [0..*] to I_CostCenterActivityType     as _PartnerCostCtrActivityType on  $projection.ControllingArea            = _PartnerCostCtrActivityType.ControllingArea
                                                                                    and $projection.PartnerCostCtrActivityType = _PartnerCostCtrActivityType.CostCtrActivityType
  association [0..1] to I_ChartOfAccounts            as _ChartOfAccounts            on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
  association [0..1] to I_GLAccountInChartOfAccounts as _GLAccountInChartOfAccounts on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                    and $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount
  association [0..1] to I_ControllingArea            as _ControllingArea            on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_WorkCenter                 as _WorkCenter                 on  $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID
                                                                                    and _WorkCenter.WorkCenterTypeCode   = 'A'
{
      @ObjectModel.foreignKey.association: '_Order'
  key OrderID,

      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,

      @ObjectModel.foreignKey.association: '_ControllingArea'
  key ControllingArea,

  key WorkCenterInternalID,

  key OrderOperation,

      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
  key GLAccount,

      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
  key PartnerCostCtrActivityType,

      @ObjectModel.foreignKey.association: '_PartnerCostCenter'
  key PartnerCostCenter,

      @ObjectModel.foreignKey.association: '_Plant'
  key Plant,

      @ObjectModel.foreignKey.association: '_Product'
  key Product,

      @ObjectModel.foreignKey.association: '_BaseUnit'
  key UnitOfMeasure,

      cast( $parameters.P_Ledger as fins_ledger preserving type ) as Ledger,

      @ObjectModel.foreignKey.association: '_ProducedProduct'
      ProducedProduct,

      _WorkCenter.WorkCenter,

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      ChartOfAccounts,

      OrderType,

      OrderCategory,

      DisplayCurrency,

      /////////////////////////////////////////////////////////////////
      //Key figures for Actual Costs
      /////////////////////////////////////////////////////////////////
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      CreditActlCostInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      DebitActlCostInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      CrdtActlFxdCostInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      DebitActlFxdCostInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'UnitOfMeasure'} }
      ActualQtyInCostSourceUnit,

      /////////////////////////////////////////////////////////////////
      //Key figures for Target Costs
      /////////////////////////////////////////////////////////////////
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      CrdtTargetCostInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      DebitTargetCostInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'UnitOfMeasure'} }
      TargetQtyInCostSourceUnit,

      _Order,
      _ControllingArea,
      _CompanyCode,
      _Plant,
      _Product,
      _ProducedProduct,
      _PartnerCostCtrActivityType,
      _PartnerCostCenter,
      _WorkCenter,
      _ChartOfAccounts,
      _GLAccountInChartOfAccounts,
      _BaseUnit
}
```
