---
name: I_MPPURCHASINGSOURCEITEM
description: "Mppurchasingsourceitem"
app_component: MM-PUR-SQ-SLI-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SQ
  - interface-view
  - item-level
  - component:MM-PUR-SQ-SLI-2CL
  - lob:Sourcing & Procurement
---
# I_MPPURCHASINGSOURCEITEM

**Mppurchasingsourceitem**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SQ-SLI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` | ✓ | |  | `matnr` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `SourceListRecord` | ✓ | |  | `zeord` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `CreatedByUserName` |  | |  | `ernam` |  |  |
| `ValidityStartDate` |  | |  | `vdatu` |  |  |
| `ValidityEndDate` |  | |  | `bdatu` |  |  |
| `Supplier` |  | |  | `lifnr` |  |  |
| `SupplierIsFixed` |  | |  | `flifn` |  |  |
| `PurchaseOutlineAgreement` |  | |  | `ebeln` |  |  |
| `PurchaseOutlineAgreementItem` |  | |  | `ebelp` |  |  |
| `PurOutlineAgreementIsFixed` |  | |  | `febel` |  |  |
| `SupplyingPlant` |  | |  | `reswk` |  |  |
| `IssgPlantIsFixed` |  | |  | `fresw` |  |  |
| `ManufacturerMaterial` |  | |  | `ematn` |  |  |
| `SourceOfSupplyIsBlocked` |  | |  | `notkz` |  |  |
| `SourceOfSupplyIsFixed` |  | |  | `cast( '' as flag )` |  |  |
| `SourceListStatus` |  | |  | `cast( '' as sl_status )` |  |  |
| `PurchasingOrganization` |  | |  | `ekorg` |  |  |
| `PurchasingDocumentCategory` |  | |  | `vrtyp` |  |  |
| `SourceListRecordCategory` |  | |  | `eortp` |  |  |
| `MRPSourcingControl` |  | |  | `autet` |  |  |
| `MRPArea` |  | |  | `cast('' as abap.char(10) )` |  |  |
| `OrderQuantityUnit` |  | |  | `meins` |  |  |
| `OriginSystem` |  | |  | `logsy` |  |  |
| `InventorySpecialStockType` |  | |  | `sobkz` |  |  |
| `LastChangeDateTime` |  | |  | `lastchangedatetime` |  |  |
| `_MPPurchasingSource` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_PurchaseContract` | | ✓ | | | | |
| `_PurchaseContractItem` | | ✓ | | | | |
| `_SupplyingPlant` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_MaterialPlanningUsage_SL` | | ✓ | | | | |
| `_MPPurchasingSourceStatus` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_LogicalSystem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MPPurchasingSource` | `I_MPPurchasingSource` | [1..1] |
| `_Material` | `I_Material` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_PurchaseContract` | `I_PurchaseContract` | [0..1] |
| `_PurchaseContractItem` | `I_PurchaseContractItem` | [0..1] |
| `_SupplyingPlant` | `I_Plant` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_MaterialPlanningUsage_SL` | `I_MaterialPlanningUsage_SL` | [0..1] |
| `_MPPurchasingSourceStatus` | `I_MPPurchasingSourceStatus` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [1..1] |
| `_LogicalSystem` | `I_LogicalSystem` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMPPRSRCITM'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Source List Item'
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_MPPurchasingSourceItem
  as select from eord

  association [1..1] to I_MPPurchasingSource       as _MPPurchasingSource       on  $projection.Material = _MPPurchasingSource.Material
                                                                                and $projection.Plant    = _MPPurchasingSource.Plant

  association [1..1] to I_Material                 as _Material                 on  $projection.Material = _Material.Material

  association [1..1] to I_Plant                    as _Plant                    on  $projection.Plant = _Plant.Plant

  association [0..1] to I_Supplier                 as _Supplier                 on  $projection.Supplier = _Supplier.Supplier

  association [0..1] to I_PurchaseContract         as _PurchaseContract         on  $projection.PurchaseOutlineAgreement = _PurchaseContract.PurchaseContract

  association [0..1] to I_PurchaseContractItem     as _PurchaseContractItem     on  $projection.PurchaseOutlineAgreement     = _PurchaseContractItem.PurchaseContract
                                                                                and $projection.PurchaseOutlineAgreementItem = _PurchaseContractItem.PurchaseContractItem

  association [0..1] to I_Plant                    as _SupplyingPlant           on  $projection.SupplyingPlant = _SupplyingPlant.Plant

  association [1..1] to I_PurchasingOrganization   as _PurchasingOrganization   on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization

  association [0..1] to I_MaterialPlanningUsage_SL as _MaterialPlanningUsage_SL on  $projection.MRPSourcingControl = _MaterialPlanningUsage_SL.MRPSourcingControl

  association [0..1] to I_MPPurchasingSourceStatus as _MPPurchasingSourceStatus on  $projection.SourceListStatus = _MPPurchasingSourceStatus.SourceListStatus

  association [1..1] to I_UnitOfMeasure            as _UnitOfMeasure            on  $projection.OrderQuantityUnit = _UnitOfMeasure.UnitOfMeasure

  association [0..1] to I_LogicalSystem            as _LogicalSystem            on  $projection.OriginSystem = _LogicalSystem.LogicalSystem

{
      //      //--[ GENERATED:012:GlBfhyJl7jY4iqjegx09IG
      //      @Consumption.valueHelpDefinition: [
      //        { entity:  { name:    'I_MaterialStdVH',
      //                     element: 'Material' }
      //        }]
      //      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Material'
  key matnr                      as Material,

      @ObjectModel.foreignKey.association: '_Plant'
  key werks                      as Plant,

  key zeord                      as SourceListRecord,

      @Semantics.businessDate.createdAt: true
      erdat                      as CreationDate,

      @Semantics.user.createdBy: true
      ernam                      as CreatedByUserName,

      @Semantics.businessDate.from: true
      vdatu                      as ValidityStartDate,

      @Semantics.businessDate.to: true
      bdatu                      as ValidityEndDate,

      //      //--[ GENERATED:012:GlBfhyJl7jY4iqjegx09IG
      //      @Consumption.valueHelpDefinition: [
      //        { entity:  { name:    'I_Supplier_Vh',
      //                     element: 'Supplier' }
      //        }]
      //      // ]--GENERATED
      @ObjectModel.text.association: '_Supplier'
      @ObjectModel.foreignKey.association: '_Supplier'
      lifnr                      as Supplier,

      flifn                      as SupplierIsFixed,

      //      //--[ GENERATED:012:GlBfhyJl7jY4iqjegx09IG
      //      @Consumption.valueHelpDefinition: [
      //        { entity:  { name:    'I_PurchaseContractStdVH',
      //                     element: 'PurchaseContract' }
      //        }]
      //      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_PurchaseContract'
      ebeln                      as PurchaseOutlineAgreement,

      ebelp                      as PurchaseOutlineAgreementItem,

      febel                      as PurOutlineAgreementIsFixed,

      @ObjectModel.foreignKey.association: '_SupplyingPlant'
      reswk                      as SupplyingPlant,

      fresw                      as IssgPlantIsFixed,

      ematn                      as ManufacturerMaterial,

      notkz                      as SourceOfSupplyIsBlocked,

      cast( '' as flag )         as SourceOfSupplyIsFixed,

      @ObjectModel.foreignKey.association: '_MPPurchasingSourceStatus'
      cast( '' as sl_status )    as SourceListStatus,

      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      ekorg                      as PurchasingOrganization,

      vrtyp                      as PurchasingDocumentCategory,

      eortp                      as SourceListRecordCategory,

      @ObjectModel.foreignKey.association: '_MaterialPlanningUsage_SL'
      autet                      as MRPSourcingControl,

      cast('' as abap.char(10) ) as MRPArea,

      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      @Semantics.unitOfMeasure: true
      meins                      as OrderQuantityUnit,

      @ObjectModel.foreignKey.association: '_LogicalSystem'
      logsy                      as OriginSystem,

      sobkz                      as InventorySpecialStockType,

      lastchangedatetime         as LastChangeDateTime,

      _MPPurchasingSource,

      /*Exposed Associations*/
      _Material,
      _Plant,
      _Supplier,
      _PurchaseContract,
      _PurchaseContractItem,
      _SupplyingPlant,
      _PurchasingOrganization,
      _MaterialPlanningUsage_SL,
      _MPPurchasingSourceStatus,
      _UnitOfMeasure,
      _LogicalSystem

}
where
     _Supplier.IsBusinessPurposeCompleted = ''
  or _Supplier.IsBusinessPurposeCompleted is null
```
