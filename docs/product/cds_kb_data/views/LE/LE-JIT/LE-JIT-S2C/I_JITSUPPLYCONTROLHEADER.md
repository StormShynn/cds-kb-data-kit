---
name: I_JITSUPPLYCONTROLHEADER
description: "A set of fields in Just-In-Time processing defined for a combination of customer, plant, customer supply area, and component material that controls various aspects during the lifecycle of a JIT request. This CDS view provides the data to answer the following business questions: What supply control configurations exist for a specific plant and customer? What are the tolerance levels for overdelivery/underdelivery? Which action control is assigned to a supply control? What is the scheduling schema for a specific supply control? What are the production confirmation control settings? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITSUPPLYCONTROLHEADER')/$value
semantic_en: "A set of fields in Just-In-Time processing defined for a combination of customer, plant, customer supply area, and component material that controls various aspects during the lifecycle of a JIT request. This CDS view provides the data to answer the following business questions: What supply control configurations exist for a specific plant and customer? What are the tolerance levels for overdelivery/underdelivery? Which action control is assigned to a supply control? What is the scheduling schema for a specific supply control? What are the production confirmation control settings? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "JIT Supply Control — CDS view giao diện dựa trên njit_d_sc_hdr."
keywords:
  - "jit"
  - "supply"
  - "control"
  - "ship"
  - "party"
  - "customer"
  - "business"
  - "partner"
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
  - material
  - plan
  - product
---
# I_JITSUPPLYCONTROLHEADER

**A set of fields in Just-In-Time processing defined for a combination of customer, plant, customer supply area, and component material that controls various aspects during the lifecycle of a JIT request. This CDS view provides the data to answer the following business questions: What supply control configurations exist for a specific plant and customer? What are the tolerance levels for overdelivery/underdelivery? Which action control is assigned to a supply control? What is the scheduling schema for a specific supply control? What are the production confirmation control settings? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITSUPPLYCONTROLHEADER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplyControlUUID` | ✓ | |  | `supplycontroluuid` | `RAW(16)` | NodeID |
| `SupplyControlID` |  | |  | `supplycontrolid` | `CHAR(10)` | Supply Control |
| `ShipToParty` |  | |  | `shiptoparty` | `CHAR(10)` | Ship-to Party |
| `CustomerUUID` |  | |  | `customeruuid` | `RAW(16)` | NodeID |
| `BusinessPartnerUUID` |  | |  | `businesspartneruuid` | `RAW(16)` | Business Partner GUID |
| `Plant` |  | |  | `plant` | `CHAR(4)` | Plant |
| `CustSupplyArea` |  | |  | `custsupplyarea` | `CHAR(10)` | Customer Supply Area |
| `SupplyAreaUUID` |  | |  | `supplyareauuid` | `RAW(16)` | NodeID |
| `Material` |  | |  | `material` | `CHAR(40)` | Material Number |
| `JITActionCtrl` |  | |  | `jitactionctrl` | `CHAR(10)` | Action Control |
| `JITCallType` |  | |  | `jitcalltype` | `CHAR(1)` | Call Type |
| `JITSupplyControlStatus` |  | |  | `jitsupplycontrolstatus` | `CHAR(1)` | JIT Supply Control Status |
| `PartialDeliveryIsAllowed` |  | |  | `partialdeliveryisallowed` | `CHAR(1)` | Indicator : Partial Delivery |
| `JITUnderDeliveryToleranceInPct` |  | |  | `jitunderdeliverytoleranceinpct` | `DEC(5)` | NJIT Under Delivery Tolerance |
| `JITOverDeliveryToleranceInPct` |  | |  | `jitoverdeliverytoleranceinpct` | `DEC(5)` | NJIT Over Delivery Tolerance |
| `JITUnlimitedOverDelivIsAllowed` |  | |  | `jitunlimitedoverdelivisallowed` | `CHAR(1)` | NJIT Unlimited Over Delivery |
| `RepetitiveManufacturingIsAllwd` |  | |  | `repetitivemanufacturingisallwd` | `CHAR(1)` | Repetitive Manufacturing Allowed |
| `ProductionVersion` |  | |  | `productionversion` | `CHAR(4)` | Production Version: JIT |
| `JITExternalProcessingStatus` |  | |  | `jitexternalprocessingstatus` | `CHAR(4)` | JIT External Status at Supplier |
| `JITProdnConfirmationControl` |  | |  | `jitprodnconfirmationcontrol` | `CHAR(1)` | Execution of production confirmation |
| `JITEntryPointForScheduling` |  | |  | `jitentrypointforscheduling` | `CHAR(1)` | Scheduling entry schema |
| `AddressID` |  | |  | `addressid` | `CHAR(10)` | Address number of the ship-to party |
| `SchedulingSchema` |  | |  | `schedulingschema` | `CHAR(30)` | BPS – Schema |
| `JITDelivConfControl` |  | |  | `jitdelivconfcontrol` | `CHAR(1)` | Indicates the behavior for delivery confirmation |
| `CreationDateTime` |  | |  | `creationdatetime` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `CreatedByUser` |  | |  | `createdbyuser` | `CHAR(12)` | User Name |
| `LastChangeDateTime` |  | |  | `lastchangedatetime` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `LastChangedByUser` |  | |  | `lastchangedbyuser` | `CHAR(12)` | User Name |
| `_Customer` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_JITCustomerSupplyArea` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_JITActionCtrl` | | ✓ | | | | |
| `_JITCallType` | | ✓ | | | | |
| `_JITPartialDelivery` | | ✓ | | | | |
| `_JITSupplyControlStatus` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_ProductionVersion` | | ✓ | | | | |
| `_JITRepetitiveMfg` | | ✓ | | | | |
| `_JITProdnConfirmationControl` | | ✓ | | | | |
| `_JITDelivConfControl` | | ✓ | | | | |
| `_BusinessPartnerAddress` | | ✓ | | | | |
| `_JITCustomer` | | ✓ | | | | |
| `_SupplierExtStatus` | | ✓ | | | | |
| `_JITEntryPointForSchedg` | | ✓ | | | | |
| `_JITSchedulingSchema` | | ✓ | | | | |
| `_Description` | | ✓ | | | | |
| `_ToleranceLevel` | | ✓ | | | | |
| `_JITSupplyControlOffset` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Customer` | `I_Customer` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_JITCustomerSupplyArea` | `I_JITCustomerSupplyArea` | [0..1] |
| `_Material` | `I_Product` | [0..1] |
| `_JITActionCtrl` | `I_JITActionCtrl` | [0..1] |
| `_JITCallType` | `I_JITCallType` | [0..1] |
| `_JITPartialDelivery` | `I_JITPartialDelivery` | [0..1] |
| `_JITSupplyControlStatus` | `I_JITSupplyControlStatus` | [0..1] |
| `_CreatedByUser` | `I_UserContactCard` | [0..1] |
| `_LastChangedByUser` | `I_UserContactCard` | [0..1] |
| `_ProductionVersion` | `I_ProductionVersion` | [0..1] |
| `_JITRepetitiveMfg` | `I_JITRepetitiveMfg` | [0..1] |
| `_JITProdnConfirmationControl` | `I_JITProdnConfControl` | [0..1] |
| `_JITDelivConfControl` | `I_JITDelivConfControl` | [0..1] |
| `_BusinessPartnerAddress` | `I_BusinessPartnerAddress` | [0..1] |
| `_JITCustomer` | `I_JITCustomer` | [0..1] |
| `_SupplierExtStatus` | `I_SupplierExtStatus` | [0..1] |
| `_JITEntryPointForSchedg` | `I_JITEntryPointForSchedg` | [0..1] |
| `_JITSchedulingSchema` | `I_JITSchedulingSchema` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITSUPPLYCONTROLHEADER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITSUPPLYCONTROLHEADER')/$value)*

```abap
@AccessControl:{
    authorizationCheck     : #MANDATORY,
    personalData.blocking  : #REQUIRED,
    privilegedAssociations : ['_CreatedByUser','_LastChangedByUser' ]
}
@Analytics                 : { dataCategory  : #DIMENSION,
                               internalName  : #LOCAL }
@EndUserText.label         : 'JIT Supply Control'
@Metadata.allowExtensions  : true
@ObjectModel: {
  modelingPattern          : #ANALYTICAL_DIMENSION,
  representativeKey        : 'SupplyControlUUID',
  sapObjectNodeType.name   : 'JustInTimeSupplyControl',
  supportedCapabilities    : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
      usageType: {
         dataClass         : #MASTER,
         serviceQuality    : #A,
         sizeCategory      : #S
  }
}
@VDM.viewType              : #BASIC
define root view entity I_JITSupplyControlHeader
  as select from njit_d_sc_hdr
  composition [0..*] of I_JITSupplyControlDesc   as _Description
  composition [0..*] of I_JITSupplyControlTolLvl as _ToleranceLevel
  composition [0..*] of I_JITSupplyControlOffset as _JITSupplyControlOffset
  association [0..1] to I_Customer               as _Customer                    on  $projection.ShipToParty = _Customer.Customer
  association [0..1] to I_Plant                  as _Plant                       on  $projection.Plant = _Plant.Plant
  association [0..1] to I_JITCustomerSupplyArea  as _JITCustomerSupplyArea       on  $projection.SupplyAreaUUID = _JITCustomerSupplyArea.SupplyAreaUUID
  association [0..1] to I_Product                as _Material                    on  $projection.Material = _Material.Product
  association [0..1] to I_JITActionCtrl          as _JITActionCtrl               on  $projection.JITActionCtrl = _JITActionCtrl.JITActionCtrl
  association [0..1] to I_JITCallType            as _JITCallType                 on  $projection.JITCallType = _JITCallType.JITCallType
  association [0..1] to I_JITPartialDelivery     as _JITPartialDelivery          on  $projection.PartialDeliveryIsAllowed = _JITPartialDelivery.PartialDeliveryIsAllowed
  association [0..1] to I_JITSupplyControlStatus as _JITSupplyControlStatus      on  $projection.JITSupplyControlStatus = _JITSupplyControlStatus.JITSupplyControlStatus

  association [0..1] to I_UserContactCard        as _CreatedByUser               on  $projection.CreatedByUser = _CreatedByUser.ContactCardID
  association [0..1] to I_UserContactCard        as _LastChangedByUser           on  $projection.LastChangedByUser = _LastChangedByUser.ContactCardID
  association [0..1] to I_ProductionVersion      as _ProductionVersion           on  $projection.Material          = _ProductionVersion.Material
                                                                                 and $projection.Plant             = _ProductionVersion.Plant
                                                                                 and $projection.ProductionVersion = _ProductionVersion.ProductionVersion
  association [0..1] to I_JITRepetitiveMfg       as _JITRepetitiveMfg            on  $projection.RepetitiveManufacturingIsAllwd = _JITRepetitiveMfg.RepetitiveManufacturingIsAllwd
  association [0..1] to I_JITProdnConfControl    as _JITProdnConfirmationControl on  $projection.JITProdnConfirmationControl = _JITProdnConfirmationControl.JITProdnConfirmationControl
  association [0..1] to I_JITDelivConfControl    as _JITDelivConfControl         on  $projection.JITDelivConfControl = _JITDelivConfControl.JITDelivConfControl
  association [0..1] to I_BusinessPartnerAddress as _BusinessPartnerAddress      on  $projection.AddressID   = _BusinessPartnerAddress.AddressNumber
                                                                                 and $projection.ShipToParty = _BusinessPartnerAddress.BusinessPartner
  association [0..1] to I_JITCustomer            as _JITCustomer                 on  $projection.CustomerUUID = _JITCustomer.CustomerUUID
  association [0..1] to I_SupplierExtStatus      as _SupplierExtStatus           on  $projection.JITExternalProcessingStatus = _SupplierExtStatus.JITExtStatusAtSupplier
  association [0..1] to I_JITEntryPointForSchedg as _JITEntryPointForSchedg      on  $projection.JITEntryPointForScheduling = _JITEntryPointForSchedg.JITEntryPoint
  association [0..1] to I_JITSchedulingSchema    as _JITSchedulingSchema         on  $projection.Plant            = _JITSchedulingSchema.Plant
                                                                                 and $projection.JITCallType      = _JITSchedulingSchema.JITCallType
                                                                                 and $projection.SchedulingSchema = _JITSchedulingSchema.SchedulingSchema
{
      @ObjectModel.text.association: '_Description'
  key supplycontroluuid              as SupplyControlUUID,
      supplycontrolid                as SupplyControlID,
      @ObjectModel.foreignKey.association: '_Customer'
      shiptoparty                    as ShipToParty,
      @ObjectModel.foreignKey.association: '_JITCustomer'
      customeruuid                   as CustomerUUID,
      businesspartneruuid            as BusinessPartnerUUID,
      @ObjectModel.foreignKey.association: '_Plant'
      plant                          as Plant,
      custsupplyarea                 as CustSupplyArea,
      @ObjectModel.foreignKey.association: '_JITCustomerSupplyArea'
      supplyareauuid                 as SupplyAreaUUID,
      @ObjectModel.foreignKey.association: '_Material'
      material                       as Material,
      @ObjectModel.foreignKey.association: '_JITActionCtrl'
      jitactionctrl                  as JITActionCtrl,
      @ObjectModel.foreignKey.association: '_JITCallType'
      jitcalltype                    as JITCallType,
      @ObjectModel.foreignKey.association: '_JITSupplyControlStatus'
      jitsupplycontrolstatus         as JITSupplyControlStatus,
      @ObjectModel.foreignKey.association: '_JITPartialDelivery'
      partialdeliveryisallowed       as PartialDeliveryIsAllowed,
      jitunderdeliverytoleranceinpct as JITUnderDeliveryToleranceInPct,
      jitoverdeliverytoleranceinpct  as JITOverDeliveryToleranceInPct,
      jitunlimitedoverdelivisallowed as JITUnlimitedOverDelivIsAllowed,
      @ObjectModel.foreignKey.association: '_JITRepetitiveMfg'
      repetitivemanufacturingisallwd as RepetitiveManufacturingIsAllwd,
      productionversion              as ProductionVersion,
      @ObjectModel.foreignKey.association: '_SupplierExtStatus'
      jitexternalprocessingstatus    as JITExternalProcessingStatus,
      jitprodnconfirmationcontrol    as JITProdnConfirmationControl,
      @ObjectModel.foreignKey.association: '_JITEntryPointForSchedg'
      jitentrypointforscheduling     as JITEntryPointForScheduling,
      addressid                      as AddressID,
      @ObjectModel.foreignKey.association: '_JITSchedulingSchema'
      schedulingschema               as SchedulingSchema,
      @ObjectModel.foreignKey.association: '_JITDelivConfControl'
      jitdelivconfcontrol            as JITDelivConfControl,
      @Semantics.systemDateTime.createdAt: true
      creationdatetime               as CreationDateTime,
      @Semantics.user.createdBy: true
      @ObjectModel.foreignKey.association: '_CreatedByUser'
      createdbyuser                  as CreatedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      lastchangedatetime             as LastChangeDateTime,
      @Semantics.user.lastChangedBy:true
      @ObjectModel.foreignKey.association: '_LastChangedByUser'
      lastchangedbyuser              as LastChangedByUser,

      // Associations
      _Description,
      _ToleranceLevel,
      _Customer,
      _Plant,
      _JITCustomerSupplyArea,
      _Material,
      _JITActionCtrl,
      _JITCallType,
      _JITPartialDelivery,
      _JITSupplyControlStatus,
      _CreatedByUser,
      _LastChangedByUser,
      _ProductionVersion,
      _JITRepetitiveMfg,
      _JITProdnConfirmationControl,
      _JITDelivConfControl,
      _BusinessPartnerAddress,
      _JITSupplyControlOffset,
      _JITCustomer,
      _SupplierExtStatus,
      _JITEntryPointForSchedg,
      _JITSchedulingSchema
}
```
