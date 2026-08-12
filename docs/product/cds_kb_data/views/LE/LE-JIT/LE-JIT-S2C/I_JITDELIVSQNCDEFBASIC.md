---
name: I_JITDELIVSQNCDEFBASIC
description: "This CDS view provides the assignment of packing group specifications to delivery sequence groups. This view defines which packing group definitions are valid for a delivery sequence group within specific date ranges. This CDS view provides the data to answer the following business questions: Which packing group definitions are assigned to a delivery sequence group? What are the validity dates for each packing group assignment? What is the packing group usage type for each assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCDEFBASIC')/$value
semantic_en: "This CDS view provides the assignment of packing group specifications to delivery sequence groups. This view defines which packing group definitions are valid for a delivery sequence group within specific date ranges. This CDS view provides the data to answer the following business questions: Which packing group definitions are assigned to a delivery sequence group? What are the validity dates for each packing group assignment? What is the packing group usage type for each assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Delivery Sqnc Grp Packing Group Def — CDS view giao diện dựa trên njit_d_dsg_pgd."
keywords:
  - "delivery"
  - "sqnc"
  - "grp"
  - "packing"
  - "group"
  - "def"
  - "deliv"
  - "pckg"
  - "valid"
  - "date"
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
# I_JITDELIVSQNCDEFBASIC

**This CDS view provides the assignment of packing group specifications to delivery sequence groups. This view defines which packing group definitions are valid for a delivery sequence group within specific date ranges. This CDS view provides the data to answer the following business questions: Which packing group definitions are assigned to a delivery sequence group? What are the validity dates for each packing group assignment? What is the packing group usage type for each assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCDEFBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITDelivSqncGrpDefUUID` | ✓ | |  | `jitdelivsqncgrpdefuuid` | `RAW(16)` | NodeID |
| `JITDelivSqncGrpUUID` |  | |  | `jitdelivsqncgrpuuid` | `RAW(16)` | NodeID |
| `JITPckgGrpDefUUID` |  | |  | `jitpckggrpdefuuid` | `RAW(16)` | JIT key |
| `JITDelivSqncDefValidFromDate` |  | |  | `jitdelivsqncdefvalidfromdate` | `DATS(8)` | Field of validity start date type DATS |
| `JITDelivSqncDefValidToDate` |  | |  | `jitdelivsqncdefvalidtodate` | `DATS(8)` | Field of validity end date type DATS |
| `JITPackingGroupUsageType` |  | |  | `jitpackinggroupusagetype` | `CHAR(1)` | NJIT: Packing Group Usage Type |
| `_JITPackingGroupUsageType` | | ✓ | | | | |
| `_JITPackageGroupDefinition` | | ✓ | | | | |
| `_JITDelivSqncGrpHeaderBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITPackingGroupUsageType` | `I_JITPackingGroupUsageType` | [0..1] |
| `_JITPackageGroupDefinition` | `I_JITPckgGrpDef` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCDEFBASIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCDEFBASIC')/$value)*

```abap
@AccessControl              : { authorizationCheck      : #MANDATORY }
@Analytics                  : { dataCategory            : #DIMENSION,
                                internalName            : #LOCAL,
                                technicalName           : 'IJITDSGPGD'
                              }
@EndUserText.label          : 'Delivery Sqnc Grp Packing Group Def'
@Metadata.allowExtensions   :true
@ObjectModel: {
  modelingPattern           : #ANALYTICAL_DIMENSION,
  representativeKey         : 'JITDelivSqncGrpDefUUID',
  sapObjectNodeType.name    : 'JITDelivSqncGrpPackgGrpSpec',
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
define view entity I_JITDelivSqncDefBasic
  as select from njit_d_dsg_pgd
  association        to parent I_JITDelivSqncGrpHeaderBasic as _JITDelivSqncGrpHeaderBasic on $projection.JITDelivSqncGrpUUID = _JITDelivSqncGrpHeaderBasic.JITDelivSqncGrpUUID
  association [0..1] to I_JITPackingGroupUsageType          as _JITPackingGroupUsageType   on $projection.JITPackingGroupUsageType = _JITPackingGroupUsageType.JITPackingGroupUsageType
  association [0..1] to I_JITPckgGrpDef                     as _JITPackageGroupDefinition  on $projection.JITPckgGrpDefUUID = _JITPackageGroupDefinition.JITPckgGrpDefUUID
{
  key jitdelivsqncgrpdefuuid       as JITDelivSqncGrpDefUUID,
      @ObjectModel.foreignKey.association:'_JITDelivSqncGrpHeaderBasic'
      jitdelivsqncgrpuuid          as JITDelivSqncGrpUUID,
      @ObjectModel.foreignKey.association: '_JITPackageGroupDefinition'
      jitpckggrpdefuuid            as JITPckgGrpDefUUID,
      jitdelivsqncdefvalidfromdate as JITDelivSqncDefValidFromDate,
      jitdelivsqncdefvalidtodate   as JITDelivSqncDefValidToDate,
      @ObjectModel.foreignKey.association: '_JITPackingGroupUsageType'
      jitpackinggroupusagetype     as JITPackingGroupUsageType,
      _JITDelivSqncGrpHeaderBasic,
      _JITPackingGroupUsageType,
      _JITPackageGroupDefinition
}
```
