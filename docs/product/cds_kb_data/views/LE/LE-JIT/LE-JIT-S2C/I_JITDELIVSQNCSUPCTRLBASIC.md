---
name: I_JITDELIVSQNCSUPCTRLBASIC
description: "This CDS view provides the assignment of supply controls to delivery sequence groups. It establishes the relationship between delivery sequence groups and their associated supply control configurations. This CDS view provides the data to answer the following business questions: Which supply controls are assigned to a delivery sequence group? What is the supply control ID for each assignment? How many supply controls are linked to a delivery sequence group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCSUPCTRLBASIC')/$value
semantic_en: "This CDS view provides the assignment of supply controls to delivery sequence groups. It establishes the relationship between delivery sequence groups and their associated supply control configurations. This CDS view provides the data to answer the following business questions: Which supply controls are assigned to a delivery sequence group? What is the supply control ID for each assignment? How many supply controls are linked to a delivery sequence group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Delivery Sqnc Grp Supply Ctrl Assgmt — CDS view giao diện dựa trên njit_d_dsg_sc."
keywords:
  - "delivery"
  - "sqnc"
  - "grp"
  - "supply"
  - "ctrl"
  - "assgmt"
  - "deliv"
  - "control"
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - delivery
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
---
# I_JITDELIVSQNCSUPCTRLBASIC

**This CDS view provides the assignment of supply controls to delivery sequence groups. It establishes the relationship between delivery sequence groups and their associated supply control configurations. This CDS view provides the data to answer the following business questions: Which supply controls are assigned to a delivery sequence group? What is the supply control ID for each assignment? How many supply controls are linked to a delivery sequence group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCSUPCTRLBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITDelivSqncSupCtrlUUID` | ✓ | |  | `jitdelivsqncsupctrluuid` | `RAW(16)` | NodeID |
| `JITDelivSqncGrpUUID` |  | |  | `jitdelivsqncgrpuuid` | `RAW(16)` | NodeID |
| `SupplyControlUUID` |  | |  | `supplycontroluuid` | `RAW(16)` | NodeID |
| `SupplyControlID` |  | |  | `supplycontrolid` | `CHAR(10)` | Supply Control |
| `_JITSupplyControl` | | ✓ | | | | |
| `_JITDelivSqncGrpHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITSupplyControl` | `I_JITSupplyControlHeader` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCSUPCTRLBASIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCSUPCTRLBASIC')/$value)*

```abap
@AccessControl              : { authorizationCheck      : #MANDATORY }
@Analytics                  : { dataCategory            : #DIMENSION,
                                internalName            : #LOCAL,
                                technicalName           : 'IJITDSGSC'
                              }
@EndUserText.label          : 'Delivery Sqnc Grp Supply Ctrl Assgmt'
@Metadata.allowExtensions   :true
@ObjectModel: {
  modelingPattern           : #ANALYTICAL_DIMENSION,
  representativeKey         : 'JITDelivSqncSupCtrlUUID',
  sapObjectNodeType.name    :'JITDelivSqncGrpSupCtrlAssgmt',
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
define view entity I_JITDelivSqncSupCtrlBasic
  as select from njit_d_dsg_sc
  association        to parent I_JITDelivSqncGrpHeaderBasic as _JITDelivSqncGrpHeader on $projection.JITDelivSqncGrpUUID = _JITDelivSqncGrpHeader.JITDelivSqncGrpUUID
  association [1..1] to I_JITSupplyControlHeader            as _JITSupplyControl      on $projection.SupplyControlUUID = _JITSupplyControl.SupplyControlUUID
{
  key jitdelivsqncsupctrluuid as JITDelivSqncSupCtrlUUID,
      /* start suppress warning shlporigin_not_inherited */
      @ObjectModel.foreignKey.association:'_JITDelivSqncGrpHeader'
      jitdelivsqncgrpuuid     as JITDelivSqncGrpUUID,
      @ObjectModel.foreignKey.association:'_JITSupplyControl'
      supplycontroluuid       as SupplyControlUUID,
      /* end suppress warning shlporigin_not_inherited */
      supplycontrolid         as SupplyControlID,
      _JITDelivSqncGrpHeader,
      _JITSupplyControl
}
```
