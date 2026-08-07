---
name: I_MATERIALSTOCKTIMESERIES
description: Material StockTIMESERIES
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - material
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
  - bo:Material
---
# I_MATERIALSTOCKTIMESERIES

**Material StockTIMESERIES**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PeriodType` | ✓ | |  |  |
| `EndDate` | ✓ | |  |  |
| `YearPeriod` | ✓ | |  |  |
| `Material` | ✓ | |  |  |
| `Plant` | ✓ | |  |  |
| `StorageLocation` | ✓ | |  |  |
| `Batch` | ✓ | |  |  |
| `Supplier` | ✓ | |  |  |
| `SDDocument` | ✓ | |  |  |
| `SDDocumentItem` | ✓ | |  |  |
| `WBSElementInternalID` | ✓ | |  |  |
| `Customer` | ✓ | |  |  |
| `InventoryStockType` | ✓ | |  |  |
| `InventorySpecialStockType` | ✓ | |  |  |
| `FiscalYearVariant` | ✓ | |  |  |
| `MaterialBaseUnit` | ✓ | |  |  |
| `CostEstimate` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `MatlWrhsStkQtyInMatlBaseUnit` |  | |  |  |
| `_Material` | | ✓ | | |
| `_CompanyCode` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_StorageLocation` | | ✓ | | |
| `_Supplier` | | ✓ | | |
| `_Customer` | | ✓ | | |
| `_InventoryStockType` | | ✓ | | |
| `_InventorySpecialStockType` | | ✓ | | |
| `_UnitOfMeasure` | | ✓ | | |
| `_FiscalYearVariant` | | ✓ | | |
| `_InvtryPrcByPeriodEndDate` | | ✓ | | |
| `_CurrentInvtryPrice` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Material` | `I_Material` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_InventoryStockType` | `I_InventoryStockType` | [1..1] |
| `_InventorySpecialStockType` | `I_InventorySpecialStockType` | [1..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [1..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |
| `_InvtryPrcByPeriodEndDate` | `I_InvtryPrcBasicByKeyDate` | [0..1] |
| `_CurrentInvtryPrice` | `I_CurrentMatlPriceByCostEst` | [0..1] |

## Source Code

```abap
@AccessControl: {
                  authorizationCheck: #CHECK,
                  personalData.blocking: #NOT_REQUIRED   --there are no BP references in table MATDOC with an EndOfPurpose state
                }
@EndUserText.label: 'Material Stock For Periods'
@ObjectModel: {
                 usageType:{
                              sizeCategory: #XXL,
                              serviceQuality: #D,
                              dataClass:#TRANSACTIONAL
                           },
                 modelingPattern: #ANALYTICAL_CUBE,
                 supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
              }
@VDM: {
         viewType: #COMPOSITE,
         lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Analytics.dataCategory:#CUBE
@Analytics.technicalName: 'IMATSTOCKTIMESER'
@Metadata: {
             ignorePropagatedAnnotations: true,
             allowExtensions: true
           }

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */

define view entity I_MaterialStockTimeSeries
  with parameters
    P_StartDate  : vdm_v_start_date,
    P_EndDate    : vdm_v_end_date,
    P_PeriodType : nsdm_period_type
  as select from P_MaterialStockTimeSeries(P_StartDate:  $parameters.P_StartDate,
                                           P_EndDate:    $parameters.P_EndDate,
                                           P_PeriodType: $parameters.P_PeriodType)

  association [1..1] to I_Material                  as _Material                  on  $projection.Material = _Material.Material
  association [1..1] to I_CompanyCode               as _CompanyCode               on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_Plant                     as _Plant                     on  $projection.Plant = _Plant.Plant
  association [0..1] to I_StorageLocation           as _StorageLocation           on  $projection.Plant           = _StorageLocation.Plant
                                                                                  and $projection.StorageLocation = _StorageLocation.StorageLocation
  association [0..1] to I_Supplier                  as _Supplier                  on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_Customer                  as _Customer                  on  $projection.Customer = _Customer.Customer
  association [1..1] to I_InventoryStockType        as _InventoryStockType        on  $projection.InventoryStockType = _InventoryStockType.InventoryStockType
  association [1..1] to I_InventorySpecialStockType as _InventorySpecialStockType on  $projection.InventorySpecialStockType = _InventorySpecialStockType.InventorySpecialStockType
  association [1..1] to I_UnitOfMeasure             as _UnitOfMeasure             on  $projection.MaterialBaseUnit = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_FiscalYearVariant         as _FiscalYearVariant         on  $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
  association [0..1] to I_InvtryPrcBasicByKeyDate   as _InvtryPrcByPeriodEndDate  on  $projection.CostEstimate = _InvtryPrcByPeriodEndDate.CostEstimate
  association [0..1] to I_CurrentMatlPriceByCostEst as _CurrentInvtryPrice        on  $projection.CostEstimate = _CurrentInvtryPrice.CostEstimate
{

      // Period
  key PeriodType,
      @Semantics.businessDate.at: true
      @Semantics.businessDate.to: false  -- switch of semantic inherited from one of the lower view in the stack  
  key EndDate,
  key YearPeriod,
      // Stock Identifier
      @ObjectModel.foreignKey.association: '_Material'
  key Material,
      @ObjectModel.foreignKey.association: '_Plant'
  key Plant,
      @ObjectModel.foreignKey.association: '_StorageLocation'
  key StorageLocation,
  key Batch,
      @ObjectModel.foreignKey.association: '_Supplier'
  key Supplier,
  key SDDocument,
  key SDDocumentItem,
  key WBSElementInternalID,
      @ObjectModel.foreignKey.association: '_Customer'
  key Customer,
      @ObjectModel.foreignKey.association: '_InventoryStockType'
  key InventoryStockType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
  key InventorySpecialStockType,
      // Stock Groups
      @Semantics.fiscal.yearVariant: true
  key FiscalYearVariant,
      // Units
  key MaterialBaseUnit,
      CostEstimate,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,

      // Quantity
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation : #SUM
      MatlWrhsStkQtyInMatlBaseUnit,

      // Associations for names and descriptions
      _UnitOfMeasure,
      _Material,
      _CompanyCode,
      _Plant,
      _StorageLocation,
      _Supplier,
      _Customer,
      _InventoryStockType,
      _InventorySpecialStockType,
      _FiscalYearVariant,
      _InvtryPrcByPeriodEndDate,
      _CurrentInvtryPrice
}
where
  PeriodType = $parameters.P_PeriodType
```
