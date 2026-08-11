---
name: I_JITDELIVSQNCGRPSCHEDGENTRY
description: "This CDS view provides scheduling configuration entries for delivery sequence groups. It defines the entry points for scheduling and the scheduling schema to be used based on external processing status. This CDS view provides the data to answer the following business questions: What scheduling entries exist for a delivery sequence group? What is the entry point for scheduling for each external status? Which scheduling schema is used for each entry? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPSCHEDGENTRY')/$value
semantic_en: "This CDS view provides scheduling configuration entries for delivery sequence groups. It defines the entry points for scheduling and the scheduling schema to be used based on external processing status. This CDS view provides the data to answer the following business questions: What scheduling entries exist for a delivery sequence group? What is the entry point for scheduling for each external status? Which scheduling schema is used for each entry? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Delivery Sqnc Grp Schedule Entry — CDS view giao diện dựa trên njit_d_dsg_bps."
keywords:
  - "delivery"
  - "sqnc"
  - "grp"
  - "schedule"
  - "entry"
  - "deliv"
  - "schedg"
  - "status"
  - "supplier"
  - "point"
  - "scheduling"
  - "schema"
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - delivery
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - bo:businesspartner
---
# I_JITDELIVSQNCGRPSCHEDGENTRY

**This CDS view provides scheduling configuration entries for delivery sequence groups. It defines the entry points for scheduling and the scheduling schema to be used based on external processing status. This CDS view provides the data to answer the following business questions: What scheduling entries exist for a delivery sequence group? What is the entry point for scheduling for each external status? Which scheduling schema is used for each entry? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPSCHEDGENTRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITDelivSqncGrpSchedgEntryUUID` | ✓ | |  | `jitdelivsqncgrpschedgentryuuid` | `RAW(16)` | NodeID |
| `JITDelivSqncGrpUUID` |  | |  | `jitdelivsqncgrpuuid` | `RAW(16)` | NodeID |
| `JITExtStatusAtSupplier` |  | |  | `jitextstatusatsupplier` | `CHAR(4)` | JIT External Status at Supplier |
| `JITEntryPointForScheduling` |  | |  | `jitentrypointforscheduling` | `CHAR(1)` | Scheduling entry schema |
| `SchedulingSchema` |  | |  | `schedulingschema` | `CHAR(30)` | BPS – Schema |
| `_SupplierExtStatus` | | ✓ | | | | |
| `_JITEntryPointForSchedg` | | ✓ | | | | |
| `_SchedulingSchema` | | ✓ | | | | |
| `_JITDelivSqncGrpHeaderBasic` | | ✓ | | | | |
| `_JITDelivSqncGrpSchedgActy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierExtStatus` | `I_SupplierExtStatus` | [0..1] |
| `_JITEntryPointForSchedg` | `I_JITEntryPointForSchedg` | [0..1] |
| `_SchedulingSchema` | `I_SchedulingSchema` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPSCHEDGENTRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPSCHEDGENTRY')/$value)*

```abap
@AccessControl              : { authorizationCheck      : #MANDATORY }
@Analytics                  : { dataCategory            : #DIMENSION,
                                internalName            : #LOCAL
                              }
@EndUserText.label          : 'Delivery Sqnc Grp Schedule Entry'
@Metadata.allowExtensions   :true
@ObjectModel: {
  modelingPattern           : #ANALYTICAL_DIMENSION,
  representativeKey         : 'JITDelivSqncGrpSchedgEntryUUID',
  sapObjectNodeType.name    : 'JITDelivSqncGrpSchedgEntry',
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
define view entity I_JITDelivSqncGrpSchedgEntry
  as select from njit_d_dsg_bps
  association        to parent I_JITDelivSqncGrpHeaderBasic as _JITDelivSqncGrpHeaderBasic on $projection.JITDelivSqncGrpUUID = _JITDelivSqncGrpHeaderBasic.JITDelivSqncGrpUUID
  composition [0..*] of I_JITDelivSqncGrpSchedgActy         as _JITDelivSqncGrpSchedgActy
  association [0..1] to I_SupplierExtStatus                 as _SupplierExtStatus          on $projection.JITExtStatusAtSupplier = _SupplierExtStatus.JITExtStatusAtSupplier
  association [0..1] to I_JITEntryPointForSchedg            as _JITEntryPointForSchedg     on $projection.JITEntryPointForScheduling = _JITEntryPointForSchedg.JITEntryPoint
  association [0..1] to I_SchedulingSchema                  as _SchedulingSchema           on $projection.SchedulingSchema = _SchedulingSchema.SchedulingSchema
{
  key jitdelivsqncgrpschedgentryuuid as JITDelivSqncGrpSchedgEntryUUID,
      @ObjectModel.foreignKey.association:'_JITDelivSqncGrpHeaderBasic'
      jitdelivsqncgrpuuid            as JITDelivSqncGrpUUID,
      @ObjectModel.foreignKey.association:'_SupplierExtStatus'
      jitextstatusatsupplier         as JITExtStatusAtSupplier,
      @ObjectModel.foreignKey.association: '_JITEntryPointForSchedg'
      jitentrypointforscheduling     as JITEntryPointForScheduling,
      @ObjectModel.foreignKey.association: '_SchedulingSchema'
      schedulingschema               as SchedulingSchema,
      _JITDelivSqncGrpHeaderBasic,
      _JITDelivSqncGrpSchedgActy,
      _SupplierExtStatus,
      _JITEntryPointForSchedg,
      _SchedulingSchema
}
```
