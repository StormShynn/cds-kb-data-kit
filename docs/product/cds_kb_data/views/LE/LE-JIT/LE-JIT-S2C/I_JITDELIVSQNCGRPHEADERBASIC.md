---
name: I_JITDELIVSQNCGRPHEADERBASIC
description: "A Just-In-Time (JIT) delivery sequence group is a set of fields in JIT processing defined for a combination of customer, plant, and customer supply area. It controls various aspects during the lifecycle of a sequenced JIT call. This CDS view provides the data to answer the following business questions: What delivery sequence groups exist for a specific plant and customer? What is the status of each delivery sequence group? Which storage locations are assigned to a delivery sequence group? What sequence number check level is configured? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPHEADERBASIC')/$value
semantic_en: "A Just-In-Time (JIT) delivery sequence group is a set of fields in JIT processing defined for a combination of customer, plant, and customer supply area. It controls various aspects during the lifecycle of a sequenced JIT call. This CDS view provides the data to answer the following business questions: What delivery sequence groups exist for a specific plant and customer? What is the status of each delivery sequence group? Which storage locations are assigned to a delivery sequence group? What sequence number check level is configured? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Delivery Sequence Group — CDS view giao diện dựa trên njit_d_dsg_hdr."
keywords:
  - "delivery"
  - "sequence"
  - "group"
  - "deliv"
  - "sqnc"
  - "status"
  - "plant"
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
# I_JITDELIVSQNCGRPHEADERBASIC

**A Just-In-Time (JIT) delivery sequence group is a set of fields in JIT processing defined for a combination of customer, plant, and customer supply area. It controls various aspects during the lifecycle of a sequenced JIT call. This CDS view provides the data to answer the following business questions: What delivery sequence groups exist for a specific plant and customer? What is the status of each delivery sequence group? Which storage locations are assigned to a delivery sequence group? What sequence number check level is configured? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPHEADERBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITDelivSqncGrpUUID` | ✓ | |  | `jitdelivsqncgrpuuid` | `RAW(16)` | NodeID |
| `JITDelivSqncGrpID` |  | |  | `jitdelivsqncgrpid` | `CHAR(10)` | Delivery Sequence Group ID (Readable) |
| `ExtJITDelivSqncGrpID` |  | |  | `extjitdelivsqncgrpid` | `CHAR(30)` | External ID for Delivery Sequence Group |
| `JITDelivSqncGrpStatus` |  | |  | `jitdelivsqncgrpstatus` | `CHAR(1)` | Lifecycle Status for Deliv. Seq. Group |
| `Plant` |  | |  | `plant` | `CHAR(4)` | Plant |
| `Customer` |  | |  | `customer` | `CHAR(10)` | Ship-to Party |
| `CustSupplyArea` |  | |  | `custsupplyarea` | `CHAR(10)` | Customer Supply Area |
| `JITLogsIntegRlvtEntity` |  | |  | `jitlogsintegrlvtentity` | `CHAR(1)` | NJIT: Entity relevant for Logistics Integration |
| `JITSqncNumberCheckLevel` |  | |  | `jitsqncnumberchecklevel` | `CHAR(1)` | NJIT: Sequence Number Check Level |
| `ShippingStorageLocation` |  | |  | `shippingstoragelocation` | `CHAR(4)` | Storage Location |
| `JITCompMatlStorageLocation` |  | |  | `jitcompmatlstoragelocation` | `CHAR(4)` | Storage Location |
| `EWMStorageBinForPacking` |  | |  | `ewmstoragebinforpacking` | `CHAR(18)` | Storage Bin |
| `EWMStorageBinForStaging` |  | |  | `ewmstoragebinforstaging` | `CHAR(18)` | Storage Bin |
| `EWMWarehouse` |  | |  | `ewmwarehouse` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `CreatedByUser` |  | |  | `createdbyuser` | `CHAR(12)` | User Name |
| `CreationDateTime` |  | |  | `creationdatetime` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `LastChangedByUser` |  | |  | `lastchangedbyuser` | `CHAR(12)` | User Name |
| `LastChangeDateTime` |  | |  | `lastchangedatetime` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_DelivSqncGrpStatus` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_JITLogsIntegRlvtEntity` | | ✓ | | | | |
| `_JITCustomer` | | ✓ | | | | |
| `_JITSqncNumberCheckLevel` | | ✓ | | | | |
| `_Description` | | ✓ | | | | |
| `_DelivSqncSupCtrl` | | ✓ | | | | |
| `_JITDelivSqncNmbrSttg` | | ✓ | | | | |
| `_JITDelivSqncGrpSqncNmbrChk` | | ✓ | | | | |
| `_JITDelivSqncGrpSchedgEntry` | | ✓ | | | | |
| `_JITDelivSqncDefBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_UserContactCard` | [0..1] |
| `_LastChangedByUser` | `I_UserContactCard` | [0..1] |
| `_DelivSqncGrpStatus` | `I_JITDelivSqncGrpStatus` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_JITLogsIntegRlvtEntity` | `I_JITLogsIntegRlvtEntity` | [0..1] |
| `_JITCustomer` | `I_JITCustomer` | [0..*] |
| `_JITSqncNumberCheckLevel` | `I_JITSqncNumberCheckLevel` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPHEADERBASIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPHEADERBASIC')/$value)*

```abap
@AccessControl              : { authorizationCheck      : #MANDATORY,
                                personalData.blocking   : #REQUIRED,
                                privilegedAssociations  : ['_CreatedByUser','_LastChangedByUser' ]
                              }
@Analytics                  : { dataCategory            : #DIMENSION,
                                internalName            : #LOCAL,
                                technicalName           : 'IJITDSGHDR'
                              }
@EndUserText.label          : 'Delivery Sequence Group'
@Metadata.allowExtensions   :true
@ObjectModel: {
  modelingPattern           : #ANALYTICAL_DIMENSION,
  representativeKey         : 'JITDelivSqncGrpUUID',
  sapObjectNodeType.name    : 'JustInTimeDeliverySequenceGrp',
  supportedCapabilities     : [ #ANALYTICAL_DIMENSION,
                                #CDS_MODELING_ASSOCIATION_TARGET,
                                #CDS_MODELING_DATA_SOURCE,
                                #SQL_DATA_SOURCE
                              ],
  usageType                 : { dataClass               : #MASTER,
                                serviceQuality          : #A,
                                sizeCategory            : #S
                              }
}
@VDM.viewType               : #BASIC
define root view entity I_JITDelivSqncGrpHeaderBasic
  as select from njit_d_dsg_hdr
  composition [0..*] of I_JITDelivSqncDefBasic       as _JITDelivSqncDefBasic
  composition [0..*] of I_JITDelivSqncGrpDescBasic   as _Description
  composition [0..*] of I_JITDelivSqncSupCtrlBasic   as _DelivSqncSupCtrl
  composition [0..*] of I_JITDelivSqncNmbrSttgBasic  as _JITDelivSqncNmbrSttg
  composition [0..*] of I_JITDelivSqncGrpSqncNmbrChk as _JITDelivSqncGrpSqncNmbrChk
  composition [0..*] of I_JITDelivSqncGrpSchedgEntry as _JITDelivSqncGrpSchedgEntry
  association [0..1] to I_UserContactCard            as _CreatedByUser           on $projection.CreatedByUser = _CreatedByUser.ContactCardID
  association [0..1] to I_UserContactCard            as _LastChangedByUser       on $projection.LastChangedByUser = _LastChangedByUser.ContactCardID
  association [0..1] to I_JITDelivSqncGrpStatus      as _DelivSqncGrpStatus      on $projection.JITDelivSqncGrpStatus = _DelivSqncGrpStatus.JITDelivSqncGrpStatus
  association [0..1] to I_Customer                   as _Customer                on $projection.Customer = _Customer.Customer
  association [0..1] to I_Plant                      as _Plant                   on $projection.Plant = _Plant.Plant
  association [0..1] to I_JITLogsIntegRlvtEntity     as _JITLogsIntegRlvtEntity  on $projection.JITLogsIntegRlvtEntity = _JITLogsIntegRlvtEntity.JITLogsIntegRlvtEntity
  association [0..*] to I_JITCustomer                as _JITCustomer             on $projection.Customer = _JITCustomer.ShipToParty
  association [0..1] to I_JITSqncNumberCheckLevel    as _JITSqncNumberCheckLevel on $projection.JITSqncNumberCheckLevel = _JITSqncNumberCheckLevel.JITSqncNumberCheckLevel
{
      @ObjectModel.text.association:'_Description'
  key jitdelivsqncgrpuuid        as JITDelivSqncGrpUUID,
      jitdelivsqncgrpid          as JITDelivSqncGrpID,
      extjitdelivsqncgrpid       as ExtJITDelivSqncGrpID,
      @ObjectModel.foreignKey.association:'_DelivSqncGrpStatus'
      jitdelivsqncgrpstatus      as JITDelivSqncGrpStatus,
      @ObjectModel.foreignKey.association:'_Plant'
      plant                      as Plant,
      @ObjectModel.foreignKey.association:'_Customer'
      customer                   as Customer,
      custsupplyarea             as CustSupplyArea,
      @ObjectModel.foreignKey.association:'_JITLogsIntegRlvtEntity'
      jitlogsintegrlvtentity     as JITLogsIntegRlvtEntity,
      @ObjectModel.foreignKey.association:'_JITSqncNumberCheckLevel'
      jitsqncnumberchecklevel    as JITSqncNumberCheckLevel,
      shippingstoragelocation    as ShippingStorageLocation,
      jitcompmatlstoragelocation as JITCompMatlStorageLocation,
      ewmstoragebinforpacking    as EWMStorageBinForPacking,
      ewmstoragebinforstaging    as EWMStorageBinForStaging,
      ewmwarehouse               as EWMWarehouse,
      @Semantics.user.createdBy: true
      @ObjectModel.foreignKey.association:'_CreatedByUser'
      createdbyuser              as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      creationdatetime           as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      @ObjectModel.foreignKey.association:'_LastChangedByUser'
      lastchangedbyuser          as LastChangedByUser,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      lastchangedatetime         as LastChangeDateTime,
      _Description,
      _DelivSqncSupCtrl,
      _JITDelivSqncNmbrSttg,
      _DelivSqncGrpStatus,
      _CreatedByUser,
      _LastChangedByUser,
      _Customer,
      _Plant,
      _JITDelivSqncGrpSqncNmbrChk,
      _JITLogsIntegRlvtEntity,
      _JITDelivSqncGrpSchedgEntry,
      _JITCustomer,
      _JITDelivSqncDefBasic,
      _JITSqncNumberCheckLevel
}
```
