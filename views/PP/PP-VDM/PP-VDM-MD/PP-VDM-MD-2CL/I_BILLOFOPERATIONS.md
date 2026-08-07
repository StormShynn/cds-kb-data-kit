---
name: I_BILLOFOPERATIONS
description: "This CDS view helps you to retrieve header data (table PLKZ) of the manufacturing bill of operations This CDS view provides the data to answer the following business questions: Which bills of operations exist for a bill of operations type? What was the last change date and time for a manufacturing bill of operations? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLOFOPERATIONS')/$value
semantic_en: "This CDS view helps you to retrieve header data (table PLKZ) of the manufacturing bill of operations This CDS view provides the data to answer the following business questions: Which bills of operations exist for a bill of operations type? What was the last change date and time for a manufacturing bill of operations? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bill of Operations — CDS view giao diện dựa trên plkz."
keywords:
  - "bill"
  - "operations"
  - "type"
  - "group"
  - "variant"
  - "version"
  - "subtype"
tags:
  - PP
  - bo:companycode
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_BILLOFOPERATIONS

**This CDS view helps you to retrieve header data (table PLKZ) of the manufacturing bill of operations This CDS view provides the data to answer the following business questions: Which bills of operations exist for a bill of operations type? What was the last change date and time for a manufacturing bill of operations? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLOFOPERATIONS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  | `plnty` | `CHAR(1)` | Task List Type |
| `BillOfOperationsGroup` | ✓ | |  | `plnnr` | `CHAR(8)` | Key for Task List Group |
| `BillOfOperationsVariant` | ✓ | |  | `plnal` | `CHAR(2)` | Group Counter |
| `BillOfOperationsVersionType` |  | |  | `subtype` | `CHAR(1)` | Version Profile |
| `BillOfOperationsSubtype` |  | |  | `subtype` | `CHAR(1)` | Version Profile |
| `LastUsageDate` |  | |  | `abdat` | `DATS(8)` | Date of the Last Call |
| `NumberOfUsages` |  | |  | `abanz` | `DEC(4)` | Number of Calls |
| `HasChangeNumber` |  | |  | `flg_ecm` | `CHAR(1)` | Task list with change number |
| `HasParameterEffectivity` |  | |  | `flg_ecm_par` | `CHAR(1)` | Task list with parameter effectivity |
| `LastChangeDate` |  | |  | `aedat` | `DATS(8)` | Date of the last change made to the task list |
| `LastChangeTime` |  | |  | `aeuzeit` | `TIMS(6)` | Time of last change made to the task list |
| `LastChangedByUser` |  | |  | `cast(plkz.aenam as vdm_lastchangedbyuserid preserving type)` | `CHAR(12)` | Last Changed By User |
| `IsMarkedForDeletion` |  | |  | `delkz` | `CHAR(1)` | Indicator: Delete completely in reorganization run |
| `BillOfOperationsVariantDesc` |  | |  | `altext` | `CHAR(40)` | Describes a task list group counter |
| `RoutingIsReworkRouting` |  | |  | `rework` | `CHAR(1)` | Rework Routing |
| `ProdnProcgIsFlexible` |  | |  | `relaxed` | `CHAR(1)` | Flexible Processing |
| `BillOfOperationIsExecutedInMES` |  | |  | `execution_in_me` | `CHAR(1)` | Order Execution for this Routing to be Performed in SAP ME |
| `BillOfOperationsIsTrnsfdToERP` |  | |  | `erp_integration` | `CHAR(1)` | Planning for this Routing to be Performed in SAP ERP |
| `ShopFloorRtgTemplateCategory` |  | |  | `reference_template_category` | `CHAR(1)` | Template Category |
| `ShopFloorRoutingTemplateType` |  | |  | `reference_template_type` | `CHAR(1)` | Template Type |
| `ShopFloorRtgTemplateSubType` |  | |  | `reference_template_subtype` | `CHAR(1)` | Segment Validity |
| `ShopFloorRoutingTemplateOwner` |  | |  | `reference_template_owner` | `CHAR(12)` | Owner |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BillOfOperationsVersionType` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperationsChangeState` | | ✓ | | | | |
| `_BillOfOperationsSequence` | | ✓ | | | | |
| `_BOOMaterialAssignment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [1..1] |
| `_BillOfOperationsVersionType` | `I_BillOfOperationsVersionType` | [0..1] |
| `_BillOfOperationsGroup` | `I_BillOfOperationsGroup` | [1..1] |
| `_BillOfOperationsChangeState` | `I_BillOfOperationsChangeState` | [1..*] |
| `_BillOfOperationsSequence` | `I_BillOfOperationsSequence` | [1..*] |
| `_BOOMaterialAssignment` | `I_BOOMaterialAssignment` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLOFOPERATIONS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLOFOPERATIONS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPPBILLOFOPER'
@ObjectModel.compositionRoot: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@Analytics: {dataCategory: #DIMENSION}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'BillOfOperationsVariant'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Bill of Operations'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER }
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'ProductionRouting'
@Metadata.allowExtensions: true
//@AbapCatalog.preserveKey:true
@ObjectModel.supportedCapabilities:[#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET,#EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define view I_BillOfOperations
  as select from plkz

  association [1..1] to I_BillOfOperationsType        as _BillOfOperationsType        on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType
  association [0..1] to I_BillOfOperationsVersionType as _BillOfOperationsVersionType on  $projection.BillOfOperationsVersionType = _BillOfOperationsVersionType.BillOfOperationsVersionType
  association [1..1] to I_BillOfOperationsGroup       as _BillOfOperationsGroup       on  $projection.BillOfOperationsType  = _BillOfOperationsGroup.BillOfOperationsType
                                                                                      and $projection.BillOfOperationsGroup = _BillOfOperationsGroup.BillOfOperationsGroup
  -- to child: Change State of Root
  association [1..*] to I_BillOfOperationsChangeState as _BillOfOperationsChangeState on  $projection.BillOfOperationsType    = _BillOfOperationsChangeState.BillOfOperationsType
                                                                                      and $projection.BillOfOperationsGroup   = _BillOfOperationsChangeState.BillOfOperationsGroup
                                                                                      and $projection.BillOfOperationsVariant = _BillOfOperationsChangeState.BillOfOperationsVariant
  -- to child: Sequences
  association [1..*] to I_BillOfOperationsSequence    as _BillOfOperationsSequence    on  $projection.BillOfOperationsType    = _BillOfOperationsSequence.BillOfOperationsType
                                                                                      and $projection.BillOfOperationsGroup   = _BillOfOperationsSequence.BillOfOperationsGroup
                                                                                      and $projection.BillOfOperationsVariant = _BillOfOperationsSequence.BillOfOperationsVariant

  -- to child: Material to BOO assignment
  association [1..*] to I_BOOMaterialAssignment       as _BOOMaterialAssignment       on  $projection.BillOfOperationsType    = _BOOMaterialAssignment.BillOfOperationsType
                                                                                      and $projection.BillOfOperationsGroup   = _BOOMaterialAssignment.BillOfOperationsGroup
                                                                                      and $projection.BillOfOperationsVariant = _BOOMaterialAssignment.BillOfOperationsVariant



{
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key plkz.plnty                                                  as BillOfOperationsType,

      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key plkz.plnnr                                                  as BillOfOperationsGroup,
  key plkz.plnal                                                  as BillOfOperationsVariant,

      @ObjectModel.foreignKey.association: '_BillOfOperationsVersionType'
      plkz.subtype                                                as BillOfOperationsVersionType,

      plkz.subtype                                                as BillOfOperationsSubtype, //kept for compatibility reasons

      plkz.abdat                                                  as LastUsageDate,
      plkz.abanz                                                  as NumberOfUsages,

      plkz.flg_ecm                                                as HasChangeNumber,
      plkz.flg_ecm_par                                            as HasParameterEffectivity,

      -- Administrative Data
      @Semantics.systemDate.lastChangedAt: true
      plkz.aedat                                                  as LastChangeDate,
      plkz.aeuzeit                                                as LastChangeTime,
      @Semantics.user.lastChangedBy: true
      cast(plkz.aenam as vdm_lastchangedbyuserid preserving type) as LastChangedByUser,
      plkz.delkz                                                  as IsMarkedForDeletion,
      
      plkz.altext                                                 as BillOfOperationsVariantDesc,

      plkz.rework                                                 as RoutingIsReworkRouting,
      plkz.relaxed                                                as ProdnProcgIsFlexible,
      @Semantics.booleanIndicator:true
      plkz.execution_in_me                                        as BillOfOperationIsExecutedInMES,
      @Semantics.booleanIndicator:true
      plkz.erp_integration                                        as BillOfOperationsIsTrnsfdToERP,
      
      plkz.reference_template_category                            as ShopFloorRtgTemplateCategory,
      plkz.reference_template_type                                as ShopFloorRoutingTemplateType,
      plkz.reference_template_subtype                             as ShopFloorRtgTemplateSubType,
      plkz.reference_template_owner                               as ShopFloorRoutingTemplateOwner,

      // **************************** Associations *****************************

      _BOOMaterialAssignment,
      _BillOfOperationsChangeState,
      _BillOfOperationsGroup,
      _BillOfOperationsSequence,
      _BillOfOperationsType,
      _BillOfOperationsVersionType
}
```
