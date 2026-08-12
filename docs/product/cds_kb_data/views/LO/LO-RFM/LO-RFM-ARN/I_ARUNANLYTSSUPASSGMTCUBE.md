---
name: I_ARUNANLYTSSUPASSGMTCUBE
description: "Assignment Results - Cube"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSUPASSGMTCUBE')/$value
semantic_en: "Assignment Results - Cube"
semantic_vi: "Assignment Results - Cube — CDS view tổng hợp dựa trên I_SupDmndAllDocAssgmt."
keywords:
  - "assignment"
  - "results"
  - "cube"
  - "plant"
  - "material"
  - "storage"
  - "location"
  - "batch"
  - "requirement"
  - "type"
tags:
  - LO
  - component:LO-RFM-ARN
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# I_ARUNANLYTSSUPASSGMTCUBE

**Assignment Results - Cube**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSUPASSGMTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `Material` | ✓ | |  |  | `CHAR(40)` | Material Number |
| `StorageLocation` | ✓ | |  |  | `CHAR(4)` | Storage Location |
| `Batch` | ✓ | |  |  | `CHAR(10)` | Batch Number |
| `RequirementType` | ✓ | |  |  | `CHAR(2)` | Requirement Type |
| `RequirementDocumentNumber` | ✓ | |  |  | `CHAR(10)` | Purchasing requirement document |
| `RequirementDocumentItem` | ✓ | |  |  | `CHAR(6)` |  |
| `SupProtTimeBucketUUID` | ✓ | |  |  | `RAW(16)` |  |
| `AssignedSupplyType` | ✓ | |  |  | `CHAR(1)` | ARun Stock Source |
| `SupplyNumber` | ✓ | |  |  | `CHAR(12)` |  |
| `SupplyItem` | ✓ | |  |  | `CHAR(6)` |  |
| `SupplyScheduleLine` | ✓ | |  |  | `CHAR(4)` |  |
| `RequestedDate` | ✓ | |  |  | `DATS(8)` | Requested date |
| `ProductAvailabilityDate` | ✓ | |  |  | `DATS(8)` | Material Staging/Availability Date |
| `SupplyDeliveryDate` | ✓ | |  |  | `DATS(8)` | Confirmed Delivery Date for Future Receipts |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Schedule Line Date |
| `ARunSupDlyHrznInWeeks` |  | |  |  | `CHAR(2)` |  |
| `SupAssgmtSource` |  | |  |  | `CHAR(1)` | ARun Stock Source |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarMonthName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `CalendarWeek` |  | |  |  | `CHAR(63)` |  |
| `CalendarDay` |  | |  |  | `NUMC(2)` | Calendar Day |
| `AssignedQuantityInBaseUnit` |  | |  |  | `QUAN(13)` | Assigned Quantity by ARun |
| `NormalAssignedQuantityInBsUnt` |  | |  |  | `QUAN(13)` | Assigned Quantity by ARun |
| `PreviewAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `ARunTmpAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `MaterialType` |  | |  |  | `CHAR(4)` | Material Type |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `SupplyProtectionName` |  | |  |  | `CHAR(60)` | Name |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `SupAssgmtAggrgQtyUnit` |  | |  | `cast( ' ' as meins )` | `UNIT(3)` | Base Unit of Measure |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `_Product` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
| `_SalesOrg` | | ✓ | | | | |
| `_DistrChnl` | | ✓ | | | | |
| `_Divn` | | ✓ | | | | |
| `_SalesDist` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_Rqmt` | | ✓ | | | | |
| `_SupType` | | ✓ | | | | |
| `_SupSrce` | | ✓ | | | | |
| `_SupDlyHrzn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [0..1] |
| `_ProductGroup` | `I_ProductGroup` | [0..1] |
| `_ProductType` | `I_Producttype` | [0..1] |
| `_SalesOrg` | `I_SalesOrganization` | [0..1] |
| `_DistrChnl` | `I_DistributionChannel` | [0..1] |
| `_Divn` | `I_Division` | [0..1] |
| `_SalesDist` | `I_SalesDistrict` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Rqmt` | `I_SupDmndAllDocRqmtType` | [0..1] |
| `_SupType` | `I_SupDmndAllDocSupType` | [0..1] |
| `_SupSrce` | `I_SupDmndAllDocSupSource` | [0..1] |
| `_SupDlyHrzn` | `I_ARunSupDlyHrznText` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSUPASSGMTCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSUPASSGMTCUBE')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: {
  dataCategory: #CUBE,
  internalName:#LOCAL
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #REQUIRED
}
@AbapCatalog: {
  sqlViewName: 'IARNALYSTSUPASMT',
  compiler.compareFilter: true,
  preserveKey:true
 }
@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XXL
   },
      supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
   modelingPattern: #ANALYTICAL_CUBE
}
@Metadata:{
  allowExtensions:              true,
  ignorePropagatedAnnotations:  true
}
@EndUserText.label: 'Assignment Results - Cube'
define view I_ARunAnlytsSupAssgmtCube
  as select from I_SupDmndAllDocAssgmt as Assgmt
  association [0..1] to I_Product                as _Product      on $projection.Material = _Product.Product
  association [0..1] to I_ProductGroup           as _ProductGroup on $projection.MaterialGroup = _ProductGroup.MaterialGroup
  association [0..1] to I_Producttype            as _ProductType  on $projection.MaterialType = _ProductType.ProductType
  association [0..1] to I_SalesOrganization      as _SalesOrg     on $projection.SalesOrganization = _SalesOrg.SalesOrganization
  association [0..1] to I_DistributionChannel    as _DistrChnl    on $projection.DistributionChannel = _DistrChnl.DistributionChannel
  association [0..1] to I_Division               as _Divn         on $projection.Division = _Divn.Division
  association [0..1] to I_SalesDistrict          as _SalesDist    on $projection.SalesDistrict = _SalesDist.SalesDistrict
  association [0..1] to I_Plant                  as _Plant        on $projection.Plant = _Plant.Plant
  association [0..1] to I_CompanyCode            as _CompanyCode  on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Customer               as _Customer     on $projection.Customer = _Customer.Customer
  association [0..1] to I_UnitOfMeasure          as _BaseUnit     on $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_SupDmndAllDocRqmtType  as _Rqmt         on $projection.RequirementType = _Rqmt.RequirementType
  association [0..1] to I_SupDmndAllDocSupType   as _SupType      on $projection.AssignedSupplyType = _SupType.AssignedSupplyType
  association [0..1] to I_SupDmndAllDocSupSource as _SupSrce      on $projection.SupAssgmtSource = _SupSrce.SupAssgmtSource
  association [0..1] to I_ARunSupDlyHrznText     as _SupDlyHrzn   on $projection.ARunSupDlyHrznInWeeks = _SupDlyHrzn.ARunSupDlyHrznInWeeks
{
      @ObjectModel.foreignKey.association: '_Plant'
  key Assgmt.Plant,
      @ObjectModel.foreignKey.association: '_Product'
  key Assgmt.Material,
  key Assgmt.StorageLocation,
  key Assgmt.Batch,
      @ObjectModel.foreignKey.association: '_Rqmt'
  key Assgmt.RequirementType,
  key Assgmt.RequirementDocumentNumber,
  key Assgmt.RequirementDocumentItem,
  key Assgmt.SupProtTimeBucketUUID,
      @ObjectModel.foreignKey.association: '_SupType'
  key Assgmt.AssignedSupplyType,
  key Assgmt.SupplyNumber,
  key Assgmt.SupplyItem,
  key Assgmt.SupplyScheduleLine,
  key Assgmt.RequestedDate,
  key Assgmt.ProductAvailabilityDate,
  key Assgmt.SupplyDeliveryDate,
      Assgmt.RequestedDeliveryDate,
      @ObjectModel.foreignKey.association: '_SupDlyHrzn'
      ARunSupDlyHrznInWeeks,
      @ObjectModel.foreignKey.association: '_SupSrce'
      SupAssgmtSource,
      @Semantics.calendar.year: true
      Assgmt.CalendarYear,
      @Semantics.calendar.month: true
      @ObjectModel.text.element: 'CalendarMonthName'
      Assgmt.CalendarMonth,
      @Semantics.text: true
      Assgmt.CalendarMonthName,
      @Semantics.calendar.week: true
      Assgmt.CalendarWeek,
      @Semantics.calendar.dayOfMonth: true
      Assgmt.CalendarDay,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      Assgmt.AssignedQuantityInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      Assgmt.NormalAssignedQuantityInBsUnt,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      Assgmt.PreviewAssignedQuantityInBsUnt,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SupAssgmtAggrgQtyUnit'
      Assgmt.ARunTmpAssignedQuantityInBsUnt,
      @ObjectModel.foreignKey.association: '_BaseUnit'
      Assgmt.BaseUnit,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      Assgmt.MaterialGroup,
      @ObjectModel.foreignKey.association: '_ProductType'
      Assgmt.MaterialType,
      Assgmt.CrossPlantConfigurableProduct,
      Assgmt.SupplyProtectionName,
      @ObjectModel.foreignKey.association: '_SalesOrg'
      Assgmt.SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistrChnl'
      Assgmt.DistributionChannel,
      @ObjectModel.foreignKey.association: '_Divn'
      Assgmt.Division,
      @ObjectModel.foreignKey.association: '_SalesDist'
      Assgmt.SalesDistrict,
      @ObjectModel.foreignKey.association: '_Customer'
      Assgmt.Customer,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      Assgmt.CompanyCode,
      @Semantics.unitOfMeasure: true
      cast( ' ' as meins ) as SupAssgmtAggrgQtyUnit,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      Assgmt.NetPriceAmount,
      @Semantics.currencyCode: true
      Assgmt.DocumentCurrency,
      Assgmt.RequirementSegment,
      //Associations
      _Product,
      _ProductGroup,
      _ProductType,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SupSrce,
      _SalesOrg,
      _DistrChnl,
      _Divn,
      _SalesDist,
      _Plant,
      _CompanyCode,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Customer,
      _BaseUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SupType,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Rqmt,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SupDlyHrzn
}
```
