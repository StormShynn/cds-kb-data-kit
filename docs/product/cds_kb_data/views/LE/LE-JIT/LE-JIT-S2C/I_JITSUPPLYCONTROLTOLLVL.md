---
name: I_JITSUPPLYCONTROLTOLLVL
description: "This CDS view provides tolerance settings for JIT supply control configurations. It defines alarm and warning offsets based on tolerance date types, enabling monitoring and alerting based on delivery timing variances. This CDS view provides the data to answer the following business questions: What are the alarm offset settings for a supply control? What are the warning offset settings for a supply control? What tolerance date types are configured for a supply control? How many days/hours before an event should warnings be triggered? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITSUPPLYCONTROLTOLLVL')/$value
semantic_en: "This CDS view provides tolerance settings for JIT supply control configurations. It defines alarm and warning offsets based on tolerance date types, enabling monitoring and alerting based on delivery timing variances. This CDS view provides the data to answer the following business questions: What are the alarm offset settings for a supply control? What are the warning offset settings for a supply control? What tolerance date types are configured for a supply control? How many days/hours before an event should warnings be triggered? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "JIT Supply Control Tolerance — CDS view giao diện dựa trên njit_d_sc_tollvl."
keywords:
  - "jit"
  - "supply"
  - "control"
  - "tolerance"
  - "date"
  - "type"
  - "alarm"
  - "offset"
  - "days"
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
# I_JITSUPPLYCONTROLTOLLVL

**This CDS view provides tolerance settings for JIT supply control configurations. It defines alarm and warning offsets based on tolerance date types, enabling monitoring and alerting based on delivery timing variances. This CDS view provides the data to answer the following business questions: What are the alarm offset settings for a supply control? What are the warning offset settings for a supply control? What tolerance date types are configured for a supply control? How many days/hours before an event should warnings be triggered? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITSUPPLYCONTROLTOLLVL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplyControlToleranceUUID` | ✓ | |  | `supplycontroltoleranceuuid` | `RAW(16)` | NodeID |
| `JITToleranceDateType` |  | |  | `jittolerancedatetype` | `CHAR(1)` | NJIT : Date Type for Tolerance determination |
| `SupplyControlUUID` |  | |  | `supplycontroluuid` | `RAW(16)` | NodeID |
| `SupplyControlID` |  | |  | `supplycontrolid` | `CHAR(10)` | Supply Control |
| `AlarmOffsetInDays` |  | |  | `alarmoffsetindays` | `INT1(3)` | Second Reminder Offset In Days |
| `AlarmOffsetInHours` |  | |  | `alarmoffsetinhours` | `TIMS(6)` | Second Reminder Offset In Hours |
| `WarningOffsetInDays` |  | |  | `warningoffsetindays` | `INT1(3)` | First Reminder Offset In Days |
| `WarningOffsetInHours` |  | |  | `warningoffsetinhours` | `TIMS(6)` | First Reminder Offset In Hours |
| `_JITToleranceDateType` | | ✓ | | | | |
| `_JITSupplyControlHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITToleranceDateType` | `I_JITToleranceDateType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITSUPPLYCONTROLTOLLVL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITSUPPLYCONTROLTOLLVL')/$value)*

```abap
@AccessControl:{
     authorizationCheck       : #MANDATORY,
     personalData.blocking    : #REQUIRED
}
@Analytics                    : { dataCategory  : #DIMENSION,
                                  internalName  : #LOCAL }
@EndUserText.label            : 'JIT Supply Control Tolerance'
@Metadata.allowExtensions     : true
@ObjectModel: {
  modelingPattern             : #ANALYTICAL_DIMENSION,
  representativeKey           : 'SupplyControlToleranceUUID',
  sapObjectNodeType.name      : 'JITSupplyControlTolLvl' ,
  supportedCapabilities       : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
    usageType: {
         dataClass            : #MASTER,
         serviceQuality       : #A,
         sizeCategory         : #S
  }  
}
@VDM.viewType                 : #BASIC
define view entity I_JITSupplyControlTolLvl
  as select from njit_d_sc_tollvl
  association        to parent I_JITSupplyControlHeader as _JITSupplyControlHeader on $projection.SupplyControlUUID = _JITSupplyControlHeader.SupplyControlUUID
  association [0..1] to I_JITToleranceDateType          as _JITToleranceDateType   on $projection.JITToleranceDateType = _JITToleranceDateType.JITToleranceDateType
{
  key supplycontroltoleranceuuid as SupplyControlToleranceUUID,
      @ObjectModel.foreignKey.association: '_JITToleranceDateType'
      jittolerancedatetype       as JITToleranceDateType,
      @ObjectModel.foreignKey.association: '_JITSupplyControlHeader'
      /* start suppress warning shlporigin_not_inherited */
      supplycontroluuid          as SupplyControlUUID,
      /* end suppress warning shlporigin_not_inherited */
      supplycontrolid            as SupplyControlID,
      alarmoffsetindays          as AlarmOffsetInDays,
      alarmoffsetinhours         as AlarmOffsetInHours,
      warningoffsetindays        as WarningOffsetInDays,
      warningoffsetinhours       as WarningOffsetInHours,

      // Associations
      _JITSupplyControlHeader,
      _JITToleranceDateType
}
```
