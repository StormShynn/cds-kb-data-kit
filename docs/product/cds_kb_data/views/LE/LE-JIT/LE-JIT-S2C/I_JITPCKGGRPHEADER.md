---
name: I_JITPCKGGRPHEADER
description: "A Just-In-Time (JIT) packing group is a sequential collection of JIT call component groups to be delivered together. This CDS view provides the data to answer the following business questions: What packing groups exist for a specific customer and plant? What is the status of each packing group? What are the delivery and goods movement statuses? What is the sequence number range for a packing group? Which delivery sequence group is the packing group assigned to? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPHEADER')/$value
semantic_en: "A Just-In-Time (JIT) packing group is a sequential collection of JIT call component groups to be delivered together. This CDS view provides the data to answer the following business questions: What packing groups exist for a specific customer and plant? What is the status of each packing group? What are the delivery and goods movement statuses? What is the sequence number range for a packing group? Which delivery sequence group is the packing group assigned to? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Just In Time Packing Group — CDS view giao diện dựa trên njit_d_pg_hdr."
keywords:
  - "just"
  - "time"
  - "packing"
  - "group"
  - "pckg"
  - "status"
  - "ship"
  - "party"
tags:
  - LE
  - bo:businesspartner
  - component:LE-JIT-S2C
  - customer
  - delivery
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - plan
---
# I_JITPCKGGRPHEADER

**A Just-In-Time (JIT) packing group is a sequential collection of JIT call component groups to be delivered together. This CDS view provides the data to answer the following business questions: What packing groups exist for a specific customer and plant? What is the status of each packing group? What are the delivery and goods movement statuses? What is the sequence number range for a packing group? Which delivery sequence group is the packing group assigned to? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPHEADER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITPckgGrpUUID` | ✓ | |  | `db_key` | `RAW(16)` | NodeID |
| `JITPckgGrpDefUUID` |  | |  | `pckg_grp_def_uuid` | `RAW(16)` | NodeID |
| `JITPckgGrpID` |  | |  | `pckg_grp_id` | `CHAR(20)` | Package Group ID |
| `JITPckgGrpStatus` |  | |  | `status` | `CHAR(1)` | Package Group Status |
| `ShipToParty` |  | |  | `kunnr` | `CHAR(10)` | Ship-to Party |
| `UnloadingPointName` |  | |  | `ablad` | `CHAR(25)` | Unloading Point |
| `ShippingPoint` |  | |  | `vstel` | `CHAR(4)` | Shipping Point / Receiving Point |
| `PlannedShippingDateTime` |  | |  | `planned_shipping_dt` | `DEC(21)` | Planned Shipping Date Time |
| `RequirementDateTime` |  | |  | `requirement_date` | `DEC(21)` | Requirement Date and Time |
| `DeliveryCreationDate` |  | |  | `ledat` | `DATS(8)` | Delivery Creation Date |
| `DeliveryCreationTime` |  | |  | `deliverycreationtime` | `TIMS(6)` | Field of type TIMS |
| `MaterialAvailabilityDateTime` |  | |  | `materialavailabilitydatetime` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `ProductionStartDate` |  | |  | `productionstartdate` | `DATS(8)` | Start Date for Production |
| `ProductionEndDate` |  | |  | `productionenddate` | `DATS(8)` | End Date for Production |
| `GrossWeight` |  | |  | `gross_weight` | `CHAR(10)` | Character Field with Length 10 |
| `WeightUnit` |  | |  | `gewei` | `UNIT(3)` | Unit of Weight |
| `CustSupplyArea` |  | |  | `cust_sup_area` | `CHAR(10)` | Customer Supply Area |
| `CustAssemblyLoc` |  | |  | `fldpo` | `CHAR(20)` | Assembly Location at Customer Site |
| `Plant` |  | |  | `werks` | `CHAR(4)` | Plant |
| `CreationDateTime` |  | |  | `crea_date_time` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `CreatedByUser` |  | |  | `crea_uname` | `CHAR(12)` | User Name |
| `ChangedOnDateTime` |  | |  | `lchg_date_time` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `LastChangedByUser` |  | |  | `lchg_uname` | `CHAR(12)` | User Name |
| `JITComponentIsReordered` |  | |  | `jitcomponentisreordered` | `CHAR(1)` | NJIT: Packing Group Usage Type |
| `JITPackageLevel` |  | |  | `jitpackagelevel` | `INT1(3)` | Packing Group Level |
| `HandlingUnitStatus` |  | |  | `hu_stat` | `CHAR(1)` | Handling Unit Status |
| `StorageLocation` |  | |  | `lgort` | `CHAR(4)` | Storage Location |
| `JITPackingGroupIsNested` |  | |  | `jitpackinggroupisnested` | `CHAR(1)` | Packing Group Nested Indicator |
| `JITArchivingStatus` |  | |  | `jitarchivingstatus` | `CHAR(2)` | Archiving Status |
| `CustomerUUID` |  | |  | `customeruuid` | `RAW(16)` | NodeID |
| `JITAltvHndlgUnitID` |  | |  | `jitaltvhndlgunitid` | `CHAR(20)` | Alternate Packing Group ID |
| `JITAltvHndlgUnitIDShrt` |  | |  | `jitaltvhndlgunitidshrt` | `CHAR(20)` | Alternate Packing Group ID Short |
| `RepetitiveManufacturingIsAllwd` |  | |  | `repetitivemanufacturingisallwd` | `CHAR(1)` | Repetitive Manufacturing Allowed |
| `DeliveryStatus` |  | |  | `deli_crea_stat` | `CHAR(1)` | Delivery Creation Status |
| `GoodsMovementStatus` |  | |  | `goods_mvmt_stat` | `CHAR(1)` | Goods Movement Status |
| `JITBillingStatus` |  | |  | `bill_stat` | `CHAR(1)` | Billing Status |
| `JITReleaseToProductionStatus` |  | |  | `r2p_stat` | `CHAR(1)` | Release to production status |
| `JITProdnConfirmationStatus` |  | |  | `cp_stat` | `CHAR(1)` | Confirm to production status |
| `JITReleaseForPackingStatus` |  | |  | `r2pck_stat` | `CHAR(1)` | Release for Packing Status |
| `JITPackingConfirmationStatus` |  | |  | `pack_stat` | `CHAR(1)` | Packing Status |
| `JITDelivSqncGrpID` |  | |  | `jitdelivsqncgrpid` | `CHAR(10)` | Delivery Sequence Group ID (Readable) |
| `JITDelivSqncGrpUUID` |  | |  | `jitdelivsqncgrpuuid` | `RAW(16)` | NodeID |
| `JITExtSequenceNumberFrom` |  | |  | `jitextsequencenumberfrom` | `CHAR(35)` | External Sequence Number |
| `JITExtSequenceNumberTo` |  | |  | `jitextsequencenumberto` | `CHAR(35)` | External Sequence Number |
| `JITFormattedSequenceNmbrFrom` |  | |  | `jitformattedsequencenmbrfrom` | `NUMC(35)` | Formatted sequence number |
| `JITFormattedSequenceNmbrTo` |  | |  | `jitformattedsequencenmbrto` | `NUMC(35)` | Formatted sequence number |
| `JITExtStatusUpdtdOn` |  | |  | `jitextstatusupdtdon` | `DEC(21)` | External Status Updated On |
| `JITIntStatusUpdtdOn` |  | |  | `jitintstatusupdtdon` | `DEC(21)` | Internal Processing Status Updated On |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_JITPckgGrpStatus` | | ✓ | | | | |
| `_JITPckgGrpDef` | | ✓ | | | | |
| `_JITPckgGrpHandlingUnitRef` | | ✓ | | | | |
| `_JITPackingGroupIsNested` | | ✓ | | | | |
| `_JITCallCompGroupBasic` | | ✓ | | | | |
| `_JITPckgGrpDeliveryRef` | | ✓ | | | | |
| `_JITInbCallComponentGroup` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_JITDelivSqncGrpHeaderBasic` | | ✓ | | | | |
| `_JITDeliveryStatus` | | ✓ | | | | |
| `_JITGoodsMovementStatus` | | ✓ | | | | |
| `_JITBillingStatus` | | ✓ | | | | |
| `_JITReleaseToProductionStatus` | | ✓ | | | | |
| `_JITProdnConfirmationStatus` | | ✓ | | | | |
| `_JITReleaseToPackingStatus` | | ✓ | | | | |
| `_JITPackingConfStatus` | | ✓ | | | | |
| `_JITHndlgUnitCrtnStatus` | | ✓ | | | | |
| `_ShippingPoint` | | ✓ | | | | |
| `_JITArchivingStatus` | | ✓ | | | | |
| `_JITPckgGrpItem` | | ✓ | | | | |
| `_JITPckgGrpCellCnsmpnSts` | | ✓ | | | | |
| `_JITPckgGrpDocRefBasic` | | ✓ | | | | |
| `_JITPckgGrpActionLogBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_JITPckgGrpStatus` | `I_JITPckgGrpStatus` | [0..1] |
| `_JITPckgGrpDef` | `I_JITPckgGrpDef` | [0..1] |
| `_JITPckgGrpHandlingUnitRef` | `I_JITPckgGrpHandlingUnitRef` | [0..1] |
| `_JITPackingGroupIsNested` | `I_JITPackingGroupIsNested` | [0..1] |
| `_JITCallCompGroupBasic` | `I_JITCallCompGroupBasic` | [0..*] |
| `_JITPckgGrpDeliveryRef` | `I_JITPckgGrpDeliveryRef` | [0..1] |
| `_JITInbCallComponentGroup` | `I_JITInbCallComponentGroup` | [0..*] |
| `_Plant` | `I_Plant` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_JITDelivSqncGrpHeaderBasic` | `I_JITDelivSqncGrpHeaderBasic` | [0..1] |
| `_JITDeliveryStatus` | `I_JITDeliveryStatus` | [0..1] |
| `_JITGoodsMovementStatus` | `I_JITGoodsMovementStatus` | [0..1] |
| `_JITBillingStatus` | `I_JITBillingStatus` | [0..1] |
| `_JITReleaseToProductionStatus` | `I_JITReleaseToProductionStatus` | [0..1] |
| `_JITProdnConfirmationStatus` | `I_JITProdnConfirmationStatus` | [0..1] |
| `_JITReleaseToPackingStatus` | `I_JITReleaseToPackingStatus` | [0..1] |
| `_JITPackingConfStatus` | `I_JITPackingConfStatus` | [0..1] |
| `_JITHndlgUnitCrtnStatus` | `I_JITHndlgUnitCrtnStatus` | [0..1] |
| `_ShippingPoint` | `I_ShippingPoint` | [0..1] |
| `_JITArchivingStatus` | `I_JITArchivingStatus` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPHEADER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPHEADER')/$value)*

```abap
@AccessControl                      : { authorizationCheck        : #CHECK,
                                        personalData.blocking     : #REQUIRED,
                                        privilegedAssociations    : ['_CreatedByUser','_LastChangedByUser' ] }
@Analytics                          : { dataCategory              : #DIMENSION,
                                        internalName              : #LOCAL }
@EndUserText.label                  : 'Just In Time Packing Group'
@Metadata.allowExtensions           : true
@ObjectModel                        : { modelingPattern           : #ANALYTICAL_DIMENSION,
                                        representativeKey         : 'JITPckgGrpUUID',
                                        sapObjectNodeType.name    : 'JustInTimePackingGroup',
                                        supportedCapabilities     : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                                        usageType                 : { dataClass       : #TRANSACTIONAL,
                                                                      serviceQuality  : #B,
                                                                      sizeCategory    : #XXL }
                                      }
@VDM.viewType                       : #BASIC

define root view entity I_JITPckgGrpHeader
  as select from njit_d_pg_hdr

  composition [0..*] of I_JITPckgGrpItem               as _JITPckgGrpItem
  composition [0..*] of I_JITPckgGrpCellCnsmpnSts      as _JITPckgGrpCellCnsmpnSts
  composition [0..*] of I_JITPckgGrpDocRefBasic        as _JITPckgGrpDocRefBasic
  composition [0..*] of I_JITPckgGrpActionLogBasic     as _JITPckgGrpActionLogBasic

  association [0..1] to I_User                         as _CreatedByUser                on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                         as _LastChangedByUser            on  $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [0..1] to I_Customer                     as _Customer                     on  $projection.ShipToParty = _Customer.Customer
  association [0..1] to I_JITPckgGrpStatus             as _JITPckgGrpStatus             on  $projection.JITPckgGrpStatus = _JITPckgGrpStatus.JITPckgGrpStatus
  association [0..1] to I_JITPckgGrpDef                as _JITPckgGrpDef                on  $projection.JITPckgGrpDefUUID = _JITPckgGrpDef.JITPckgGrpDefUUID
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_JITPckgGrpHandlingUnitRef    as _JITPckgGrpHandlingUnitRef    on  $projection.JITPckgGrpUUID = _JITPckgGrpHandlingUnitRef.JITPckgGrpUUID
  association [0..1] to I_JITPackingGroupIsNested      as _JITPackingGroupIsNested      on  $projection.JITPackingGroupIsNested = _JITPackingGroupIsNested.JITPackingGroupIsNested
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..*] to I_JITCallCompGroupBasic        as _JITCallCompGroupBasic        on  $projection.JITPckgGrpUUID = _JITCallCompGroupBasic.JITSuperPckgGrpUUID
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_JITPckgGrpDeliveryRef        as _JITPckgGrpDeliveryRef        on  $projection.JITPckgGrpUUID = _JITPckgGrpDeliveryRef.JITPckgGrpUUID
  association [0..*] to I_JITInbCallComponentGroup     as _JITInbCallComponentGroup     on  $projection.JITPckgGrpUUID = _JITInbCallComponentGroup.JITSuperPckgGrpUUID
  association [0..1] to I_Plant                        as _Plant                        on  $projection.Plant = _Plant.Plant
  association [0..1] to I_StorageLocation              as _StorageLocation              on  $projection.Plant           = _StorageLocation.Plant
                                                                                        and $projection.StorageLocation = _StorageLocation.StorageLocation
  association [0..1] to I_JITDelivSqncGrpHeaderBasic   as _JITDelivSqncGrpHeaderBasic   on  $projection.JITDelivSqncGrpUUID = _JITDelivSqncGrpHeaderBasic.JITDelivSqncGrpUUID

  association [0..1] to I_JITDeliveryStatus            as _JITDeliveryStatus            on  $projection.DeliveryStatus = _JITDeliveryStatus.DeliveryStatus
  association [0..1] to I_JITGoodsMovementStatus       as _JITGoodsMovementStatus       on  $projection.GoodsMovementStatus = _JITGoodsMovementStatus.GoodsMovementStatus
  association [0..1] to I_JITBillingStatus             as _JITBillingStatus             on  $projection.JITBillingStatus = _JITBillingStatus.JITBillingStatus
  association [0..1] to I_JITReleaseToProductionStatus as _JITReleaseToProductionStatus on  $projection.JITReleaseToProductionStatus = _JITReleaseToProductionStatus.JITReleaseToProductionStatus
  association [0..1] to I_JITProdnConfirmationStatus   as _JITProdnConfirmationStatus   on  $projection.JITProdnConfirmationStatus = _JITProdnConfirmationStatus.JITProdnConfirmationStatus
  association [0..1] to I_JITReleaseToPackingStatus    as _JITReleaseToPackingStatus    on  $projection.JITReleaseForPackingStatus = _JITReleaseToPackingStatus.JITReleaseToPackingStatus
  association [0..1] to I_JITPackingConfStatus         as _JITPackingConfStatus         on  $projection.JITPackingConfirmationStatus = _JITPackingConfStatus.JITPackingConfirmationStatus
  association [0..1] to I_JITHndlgUnitCrtnStatus       as _JITHndlgUnitCrtnStatus       on  $projection.HandlingUnitStatus = _JITHndlgUnitCrtnStatus.HandlingUnitStatus
  association [0..1] to I_ShippingPoint                as _ShippingPoint                on  $projection.ShippingPoint = _ShippingPoint.ShippingPoint
  association [0..1] to I_JITArchivingStatus           as _JITArchivingStatus           on  $projection.JITArchivingStatus = _JITArchivingStatus.JITArchivingStatus
{
  key db_key                         as JITPckgGrpUUID,
      pckg_grp_def_uuid              as JITPckgGrpDefUUID,
      pckg_grp_id                    as JITPckgGrpID,
      @ObjectModel.foreignKey.association: '_JITPckgGrpStatus'
      status                         as JITPckgGrpStatus,
      @ObjectModel.foreignKey.association: '_Customer'
      kunnr                          as ShipToParty,
      ablad                          as UnloadingPointName,
      @ObjectModel.foreignKey.association : '_ShippingPoint'
      vstel                          as ShippingPoint,
      planned_shipping_dt            as PlannedShippingDateTime,
      requirement_date               as RequirementDateTime,
      ledat                          as DeliveryCreationDate,
      deliverycreationtime           as DeliveryCreationTime,
      materialavailabilitydatetime   as MaterialAvailabilityDateTime,
      productionstartdate            as ProductionStartDate,
      productionenddate              as ProductionEndDate,
      gross_weight                   as GrossWeight,
      gewei                          as WeightUnit,
      cust_sup_area                  as CustSupplyArea,
      fldpo                          as CustAssemblyLoc,
      @ObjectModel.foreignKey.association: '_Plant'
      werks                          as Plant,
      @Semantics.systemDateTime.createdAt: true
      crea_date_time                 as CreationDateTime,
      @ObjectModel.foreignKey.association: '_CreatedByUser'
      @Semantics.user.createdBy: true
      crea_uname                     as CreatedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      lchg_date_time                 as ChangedOnDateTime,
      @ObjectModel.foreignKey.association: '_LastChangedByUser'
      @Semantics.user.lastChangedBy:true
      lchg_uname                     as LastChangedByUser,
      jitcomponentisreordered        as JITComponentIsReordered,
      jitpackagelevel                as JITPackageLevel, //CE2102
      @ObjectModel.foreignKey.association : '_JITHndlgUnitCrtnStatus'
      hu_stat                        as HandlingUnitStatus,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      lgort                          as StorageLocation,
      @ObjectModel.foreignKey.association: '_JITPackingGroupIsNested'
      jitpackinggroupisnested        as JITPackingGroupIsNested,
      //archiving_status             as Archiving, //Commenting for now as it is not yet approved.
      //jitarchivingstatus,
      @ObjectModel.foreignKey.association : '_JITArchivingStatus'
      jitarchivingstatus             as JITArchivingStatus,
      customeruuid                   as CustomerUUID,
      jitaltvhndlgunitid             as JITAltvHndlgUnitID,
      jitaltvhndlgunitidshrt         as JITAltvHndlgUnitIDShrt,
      repetitivemanufacturingisallwd as RepetitiveManufacturingIsAllwd,

      @ObjectModel.foreignKey.association : '_JITDeliveryStatus'
      deli_crea_stat                 as DeliveryStatus,
      @ObjectModel.foreignKey.association : '_JITGoodsMovementStatus'
      goods_mvmt_stat                as GoodsMovementStatus,
      @ObjectModel.foreignKey.association : '_JITBillingStatus'
      bill_stat                      as JITBillingStatus,
      @ObjectModel.foreignKey.association : '_JITReleaseToProductionStatus'
      r2p_stat                       as JITReleaseToProductionStatus,
      @ObjectModel.foreignKey.association : '_JITProdnConfirmationStatus'
      cp_stat                        as JITProdnConfirmationStatus,
      @ObjectModel.foreignKey.association : '_JITReleaseToPackingStatus'
      r2pck_stat                     as JITReleaseForPackingStatus,
      @ObjectModel.foreignKey.association : '_JITPackingConfStatus'
      pack_stat                      as JITPackingConfirmationStatus,

      jitdelivsqncgrpid              as JITDelivSqncGrpID,
      @ObjectModel.foreignKey.association: '_JITDelivSqncGrpHeaderBasic'
      jitdelivsqncgrpuuid            as JITDelivSqncGrpUUID,
      jitextsequencenumberfrom       as JITExtSequenceNumberFrom,
      jitextsequencenumberto         as JITExtSequenceNumberTo,
      jitformattedsequencenmbrfrom   as JITFormattedSequenceNmbrFrom,
      jitformattedsequencenmbrto     as JITFormattedSequenceNmbrTo,
      jitextstatusupdtdon            as JITExtStatusUpdtdOn,
      jitintstatusupdtdon            as JITIntStatusUpdtdOn,

      // Associations - Added for Enterprise Search
      _CreatedByUser,
      _LastChangedByUser,
      _Customer,
      _JITPckgGrpStatus,
      _JITPckgGrpDef,
      _JITPckgGrpHandlingUnitRef,
      _JITPackingGroupIsNested,
      _JITPckgGrpItem,
      _JITCallCompGroupBasic,
      _JITPckgGrpDeliveryRef,
      _JITInbCallComponentGroup,
      _Plant,
      _StorageLocation,
      _JITDelivSqncGrpHeaderBasic,
      _JITDeliveryStatus,
      _JITGoodsMovementStatus,
      _JITBillingStatus,
      _JITReleaseToProductionStatus,
      _JITProdnConfirmationStatus,
      _JITReleaseToPackingStatus,
      _JITPackingConfStatus,
      _JITHndlgUnitCrtnStatus,
      _ShippingPoint,
      _JITArchivingStatus,
      _JITPckgGrpCellCnsmpnSts,
      _JITPckgGrpDocRefBasic,
      _JITPckgGrpActionLogBasic
}
```
