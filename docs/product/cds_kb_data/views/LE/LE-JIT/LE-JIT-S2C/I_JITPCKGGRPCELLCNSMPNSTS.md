---
name: I_JITPCKGGRPCELLCNSMPNSTS
description: "This CDS view provides cell consumption status information for packing groups. It tracks the filling status of cells within packing groups. This CDS view provides the data to answer the following business questions: What is the completion status of the packing group? How many cells have been filled? What is the total number of cells in the packing group? What packing product is being used? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPCELLCNSMPNSTS')/$value
semantic_en: "This CDS view provides cell consumption status information for packing groups. It tracks the filling status of cells within packing groups. This CDS view provides the data to answer the following business questions: What is the completion status of the packing group? How many cells have been filled? What is the total number of cells in the packing group? What packing product is being used? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "JIT Packing Group Consumption — CDS view giao diện dựa trên njit_d_pg_cnsmpn."
keywords:
  - "jit"
  - "packing"
  - "group"
  - "consumption"
  - "transaction"
  - "pckg"
  - "completion"
  - "status"
  - "total"
  - "number"
  - "cnsmd"
  - "cell"
  - "count"
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - product
---
# I_JITPCKGGRPCELLCNSMPNSTS

**This CDS view provides cell consumption status information for packing groups. It tracks the filling status of cells within packing groups. This CDS view provides the data to answer the following business questions: What is the completion status of the packing group? How many cells have been filled? What is the total number of cells in the packing group? What packing product is being used? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPCELLCNSMPNSTS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransactionUUID` | ✓ | |  | `db_key` | `RAW(16)` | NodeID |
| `JITPckgGrpUUID` |  | |  | `parent_key` | `RAW(16)` | NodeID |
| `CompletionStatus` |  | |  | `completion_status` | `CHAR(1)` | Package Group Consumption Status |
| `TotalNumberOfCnsmdCellCnt` |  | |  | `count_filled_cell` | `INT4(10)` |  |
| `TotalNumberOfCellCount` |  | |  | `count_total_cell` | `INT4(10)` |  |
| `JITPackggProdID` |  | |  | `pckg_product` | `CHAR(40)` | Slot Group: Product (Package/Component Group Material) |
| `JITPckgGrpCellUUID` |  | |  | `jitpckggrpcelluuid` | `RAW(16)` | NodeID |
| `JITPckgGrpParentCellCnsmpnUUID` |  | |  | `jitpckggrpparentcellcnsmpnuuid` | `RAW(16)` | NodeID |
| `_JITPckgGrpHeader` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPCELLCNSMPNSTS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPCELLCNSMPNSTS')/$value)*

```abap
@AccessControl                      : { authorizationCheck        : #CHECK,
                                        personalData.blocking     : #REQUIRED }
@Analytics                          : { dataCategory              : #DIMENSION,
                                        internalName              : #LOCAL }
@EndUserText.label                  : 'JIT Packing Group Consumption'
@Metadata.allowExtensions           : true
@ObjectModel                        : { modelingPattern           : #ANALYTICAL_DIMENSION,
                                        representativeKey         : 'TransactionUUID',
                                        sapObjectNodeType.name    : 'JITPackingGroupConsumption',
                                        supportedCapabilities     : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                                        usageType                 : { dataClass       : #TRANSACTIONAL,
                                                                      serviceQuality  : #A,
                                                                      sizeCategory    : #XXL }
                                      }
@VDM.viewType                       : #BASIC

define view entity I_JITPckgGrpCellCnsmpnSts
  as select from njit_d_pg_cnsmpn
  association to parent I_JITPckgGrpHeader as _JITPckgGrpHeader on $projection.JITPckgGrpUUID = _JITPckgGrpHeader.JITPckgGrpUUID
{

  key db_key                         as TransactionUUID,
      @ObjectModel.foreignKey.association : '_JITPckgGrpHeader'
      parent_key                     as JITPckgGrpUUID,
      completion_status              as CompletionStatus,
      count_filled_cell              as TotalNumberOfCnsmdCellCnt,
      count_total_cell               as TotalNumberOfCellCount,
      pckg_product                   as JITPackggProdID,
      jitpckggrpcelluuid             as JITPckgGrpCellUUID,
      jitpckggrpparentcellcnsmpnuuid as JITPckgGrpParentCellCnsmpnUUID,

      // Associations
      _JITPckgGrpHeader
}
```
