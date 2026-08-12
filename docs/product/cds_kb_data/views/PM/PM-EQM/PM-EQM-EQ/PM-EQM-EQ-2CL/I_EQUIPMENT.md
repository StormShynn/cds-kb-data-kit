---
name: I_EQUIPMENT
description: "Equipment"
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - interface-view
  - equipment
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_EQUIPMENT

**Equipment**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Equipment` | ✓ | |  | `equnr` |  |  |
| `EquipmentOID` |  | |  | `equipmentoid` |  |  |
| `EquipmentCategory` |  | |  | `eqtyp` |  |  |
| `TechnicalObjectType` |  | |  | `eqart` |  |  |
| `Plant` |  | |  | `werk` |  |  |
| `Division` |  | |  | `sparte` |  |  |
| `StorageLocation` |  | |  | `lager` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `LastChangedByUser` |  | |  | `aenam` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `LastChangeDate` |  | |  | `aedat` |  |  |
| `AssetManufacturerName` |  | |  | `herst` |  |  |
| `ManufacturerPartTypeName` |  | |  | `typbz` |  |  |
| `ManufacturerCountry` |  | |  | `herld` |  |  |
| `ConstructionYear` |  | |  | `baujj` |  |  |
| `ConstructionMonth` |  | |  | `baumm` |  |  |
| `AcquisitionDate` |  | |  | `ansdt` |  |  |
| `Currency` |  | |  | `waers` |  |  |
| `AcquisitionValue` |  | |  | `answt` |  |  |
| `MaintObjectInternalID` |  | |  | `objnr` |  |  |
| `SerialNumber` |  | |  | `sernr` |  |  |
| `EquipUsagePeriodSequenceNumber` |  | |  | `eqlfn` |  |  |
| `Material` |  | |  | `matnr` |  |  |
| `Customer` |  | |  | `kunde` |  |  |
| `AuthorizationGroup` |  | |  | `begru` |  |  |
| `ManufacturerSerialNumber` |  | |  | `serge` |  |  |
| `UniqueItemIdentifier` |  | |  | `uii` |  |  |
| `UniqueItemIdentifierStrucType` |  | |  | `iuid_type` |  |  |
| `UniqueItemIdentifierRespPlant` |  | |  | `uii_plant` |  |  |
| `AssetSynchronizationRule` |  | |  | `act_change_aa` |  |  |
| `InventoryNumber` |  | |  | `invnr` |  |  |
| `GrossWeight` |  | |  | `brgew` |  |  |
| `GrossWeightUnit` |  | |  | `gewei` |  |  |
| `SizeOrDimensionText` |  | |  | `groes` |  |  |
| `Batch` |  | |  | `charge` |  |  |
| `OperationStartDate` |  | |  | `inbdt` |  |  |
| `Supplier` |  | |  | `elief` |  |  |
| `HasEquipmentData` |  | |  | `s_equi` |  |  |
| `EquipmentHasStockInformation` |  | |  | `cast( equi.s_eqbs as equipmenthasstockinformation preserving type )` |  |  |
| `MasterWarranty` |  | |  | `mganr` |  |  |
| `LastChangeDateTime` |  | |  | `changeddatetime` |  |  |
| `EquipmentFirstDeliveryDate` |  | |  | `auldt` |  |  |
| `ValidityStartDate` |  | | `_CurrentTimeSegment` | `ValidityStartDate` |  |  |
| `ValidityEndDate` |  | | `_CurrentTimeSegment` | `ValidityEndDate` |  |  |
| `MatlSrlNmbrLastGdsMvtDte` |  | |  | `datlwb` |  |  |
| `EquipmentEndOfUseDate` |  | |  | `endofuse` |  |  |
| `MaintenancePlan` |  | |  | `warpl` |  |  |
| `MeasuringPoint` |  | |  | `imrc_point` |  |  |
| `_EquipmentCategory` | | ✓ | | | | |
| `_TechnicalObjectType` | | ✓ | | | | |
| `_EquipmentText` | | ✓ | | | | |
| `_EquipmentTimeSeg` | | ✓ | | | | |
| `_CurrentTimeSegment` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_SerialNumberStockSegment` | | ✓ | | | | |
| `_StockSegment` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_ManufacturerCountry` | | ✓ | | | | |
| `_Batch` | | ✓ | | | | |
| `_MasterWarranty` | | ✓ | | | | |
| `_PlantMaintenancePartner` | | ✓ | | | | |
| `_MasterWrntyObjectAssgmt` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_GrossWeightUnit` | | ✓ | | | | |
| `_LinearAssetManagementData` | | ✓ | | | | |
| `_Status` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EquipmentCategory` | `I_EquipmentCategory` | [0..1] |
| `_TechnicalObjectType` | `I_TechnicalObjectType` | [0..1] |
| `_EquipmentText` | `I_EquipmentText` | [0..*] |
| `_EquipmentTimeSeg` | `I_EquipmentTimeSeg` | [0..*] |
| `_CurrentTimeSegment` | `I_EquipmentTimeSeg` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_SerialNumberStockSegment` | `I_SerialNumberStockSegment` | [0..1] |
| `_StockSegment` | `I_EquipmentStockSegment` | [0..1] |
| `_Material` | `I_Material` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_ManufacturerCountry` | `I_Country` | [0..1] |
| `_Batch` | `I_Batch` | [0..1] |
| `_MasterWarranty` | `I_MasterWarranty` | [0..1] |
| `_PlantMaintenancePartner` | `I_PlantMaintenancePartner` | [0..*] |
| `_MasterWrntyObjectAssgmt` | `I_MasterWrntyObjectAssgmt` | [0..*] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_GrossWeightUnit` | `I_UnitOfMeasure` | [0..1] |
| `_LinearAssetManagementData` | `I_LinearAssetManagementData` | [0..1] |
| `_Status` | `I_StatusObjectStatus` | [0..*] |
| `_EquipmentExtension` | `E_Equipment` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Equipment'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@AbapCatalog: { sqlViewName: 'IEQUIPMENT', compiler.compareFilter, preserveKey }

@AccessControl: {
  authorizationCheck:#CHECK,
  privilegedAssociations:['_CreatedByUser','_LastChangedByUser','_Status']
}
@ObjectModel.representativeKey: 'Equipment'
@ObjectModel.semanticKey:  [ 'Equipment' ]
@AccessControl.personalData.blocking: #REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L

@Metadata: { ignorePropagatedAnnotations, allowExtensions }
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]

define view I_Equipment 
  as select from equi
  association [0..1] to I_EquipmentCategory         as _EquipmentCategory         on  _EquipmentCategory.EquipmentCategory = $projection.EquipmentCategory
  association [0..1] to I_TechnicalObjectType       as _TechnicalObjectType       on  _TechnicalObjectType.TechnicalObjectType = $projection.TechnicalObjectType
  association [0..*] to I_EquipmentText             as _EquipmentText             on  _EquipmentText.Equipment = $projection.Equipment
  association [0..*] to I_EquipmentTimeSeg          as _EquipmentTimeSeg          on  _EquipmentTimeSeg.Equipment = $projection.Equipment
  association [0..1] to I_EquipmentTimeSeg          as _CurrentTimeSegment        on  _CurrentTimeSegment.Equipment                      = $projection.Equipment
                                                                                  and _CurrentTimeSegment.EquipUsagePeriodSequenceNumber = '001'
                                                                                  and _CurrentTimeSegment.ValidityEndDate                = '99991231'
  association [0..1] to I_Plant                     as _Plant                     on  $projection.Plant = _Plant.Plant
  association [0..1] to I_User                      as _CreatedByUser             on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                      as _LastChangedByUser         on  $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [0..1] to I_Currency                  as _Currency                  on  $projection.Currency = _Currency.Currency
  association [0..1] to I_Division                  as _Division                  on  $projection.Division = _Division.Division
  association [0..1] to I_StorageLocation           as _StorageLocation           on  $projection.StorageLocation = _StorageLocation.StorageLocation
                                                                                  and $projection.Plant           = _StorageLocation.Plant
  association [0..1] to I_SerialNumberStockSegment  as _SerialNumberStockSegment  on  $projection.Equipment = _SerialNumberStockSegment.Equipment
  association [0..1] to I_EquipmentStockSegment     as _StockSegment                on  _StockSegment.Equipment = $projection.Equipment
  
  association [0..1] to I_Material                  as _Material                  on  $projection.Material = _Material.Material
  association [0..1] to I_Customer                  as _Customer                  on  $projection.Customer = _Customer.Customer
  association [0..1] to I_Country                   as _ManufacturerCountry       on  $projection.ManufacturerCountry = _ManufacturerCountry.Country
  --  association [0..1] to I_BatchCrossPlant          as _BatchCrossPlant          on  $projection.Material = _BatchCrossPlant.Material
  --                                                                                and $projection.Batch    = _BatchCrossPlant.Batch
  association [0..1] to I_Batch                     as _Batch                     on  $projection.Plant    = _Batch.Plant
                                                                                  and $projection.Material = _Batch.Material
                                                                                  and $projection.Batch    = _Batch.Batch
  association [0..1] to I_MasterWarranty            as _MasterWarranty            on  $projection.MasterWarranty = _MasterWarranty.MasterWarranty
  association [0..*] to I_PlantMaintenancePartner   as _PlantMaintenancePartner   on  $projection.MaintObjectInternalID = _PlantMaintenancePartner.MaintObjectInternalID
  association [0..*] to I_MasterWrntyObjectAssgmt   as _MasterWrntyObjectAssgmt   on  $projection.MaintObjectInternalID = _MasterWrntyObjectAssgmt.ObjectInternalID
  association [0..1] to I_Supplier                  as _Supplier                  on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_UnitOfMeasure             as _GrossWeightUnit           on  $projection.GrossWeightUnit = _GrossWeightUnit.UnitOfMeasure
  association [0..1] to I_LinearAssetManagementData as _LinearAssetManagementData on  $projection.Equipment                           = _LinearAssetManagementData.LinearDataObjectKey
                                                                                  and _LinearAssetManagementData.LinearDataObjectType = 'IE'
  association [0..*] to I_StatusObjectStatus        as _Status                    on  $projection.MaintObjectInternalID = _Status.StatusObject

  -- Extensions, do not expose as association:
  association [0..1] to E_Equipment          as _EquipmentExtension          on _EquipmentExtension.Equipment = $projection.Equipment


{
      @ObjectModel.text.association: '_EquipmentText'
  key equi.equnr           as Equipment,
      equi.equipmentoid    as EquipmentOID,


      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_EquipmentCategoryStdVH',
                     element: 'EquipmentCategory' }
        }]

      @ObjectModel.foreignKey.association: '_EquipmentCategory'
      equi.eqtyp           as EquipmentCategory,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_TechnicalObjectTypeStdVH',
                     element: 'TechnicalObjectType' }
        }]

      @ObjectModel.foreignKey.association: '_TechnicalObjectType'
      equi.eqart           as TechnicalObjectType,
      @ObjectModel.foreignKey.association: '_Plant'
      equi.werk            as Plant,
      @ObjectModel.foreignKey.association: '_Division'
      equi.sparte          as Division,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      equi.lager           as StorageLocation,

      // Admin data
      @Semantics.user.createdBy: true
      equi.ernam           as CreatedByUser,
      @Semantics.user.lastChangedBy: true
      equi.aenam           as LastChangedByUser,
      @Semantics.systemDate.createdAt : true
      equi.erdat           as CreationDate,
      @Semantics.systemDate.lastChangedAt: true
      equi.aedat           as LastChangeDate,

      equi.herst           as AssetManufacturerName,
      equi.typbz           as ManufacturerPartTypeName,
      @Semantics.address.country: true
      @ObjectModel.foreignKey.association: '_ManufacturerCountry'
      equi.herld           as ManufacturerCountry,

      equi.baujj           as ConstructionYear,
      equi.baumm           as ConstructionMonth,

      equi.ansdt           as AcquisitionDate,

      @Semantics.currencyCode:true
      equi.waers           as Currency,

      @Semantics.amount.currencyCode: 'Currency'
      @DefaultAggregation: #SUM
      equi.answt           as AcquisitionValue,

      equi.objnr           as MaintObjectInternalID,
      equi.sernr           as SerialNumber,
      equi.eqlfn           as EquipUsagePeriodSequenceNumber,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]

      @ObjectModel.foreignKey.association: '_Material'
      equi.matnr           as Material,
      @ObjectModel.foreignKey.association: '_Customer'
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      equi.kunde           as Customer,
      equi.begru           as AuthorizationGroup,
      equi.serge           as ManufacturerSerialNumber,

      equi.uii             as UniqueItemIdentifier,
      equi.iuid_type       as UniqueItemIdentifierStrucType,
      equi.uii_plant       as UniqueItemIdentifierRespPlant,

      equi.act_change_aa   as AssetSynchronizationRule,

      equi.invnr           as InventoryNumber,
      @Semantics.quantity.unitOfMeasure: 'GrossWeightUnit'
      @DefaultAggregation:#SUM
      equi.brgew           as GrossWeight,
      @ObjectModel.foreignKey.association: '_GrossWeightUnit'
      @Semantics.unitOfMeasure: true
      equi.gewei           as GrossWeightUnit,
      equi.groes           as SizeOrDimensionText,

      equi.charge          as Batch,

      equi.inbdt           as OperationStartDate,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Supplier_VH',
                     element: 'Supplier' }
        }]
     @ObjectModel.foreignKey.association: '_Supplier'
      equi.elief           as Supplier,
      equi.s_equi          as HasEquipmentData,
      cast( equi.s_eqbs as equipmenthasstockinformation preserving type ) as EquipmentHasStockInformation,
      @ObjectModel.foreignKey.association: '_MasterWarranty'
      equi.mganr           as MasterWarranty,
      
      equi.changeddatetime as LastChangeDateTime,
      equi.auldt as EquipmentFirstDeliveryDate,
      _CurrentTimeSegment.ValidityStartDate,
      _CurrentTimeSegment.ValidityEndDate,
      equi.datlwb as MatlSrlNmbrLastGdsMvtDte,
      equi.endofuse as EquipmentEndOfUseDate,
      equi.warpl    as MaintenancePlan,
      equi.imrc_point as MeasuringPoint,

      // Propagate associations
      _MasterWarranty,
      _CreatedByUser,
      _LastChangedByUser,
      _EquipmentText,
      _EquipmentCategory,
      _TechnicalObjectType,
      _EquipmentTimeSeg,
      _StockSegment,
      _Currency,
      _Plant,
      _Division,
      _StorageLocation,
      _SerialNumberStockSegment,
      _Material,
      _Customer,
      _ManufacturerCountry,
      --_BatchCrossPlant: see BCP 1880093140
      _Batch,
      _CurrentTimeSegment,
      _PlantMaintenancePartner,
      _MasterWrntyObjectAssgmt,
      _Supplier,
      _LinearAssetManagementData,
      _GrossWeightUnit,
      _Status
}
```
