---
name: I_JITPCKGGRPDOCREFBASIC
description: "This CDS view provides document reference information for packing groups. It links packing groups to related business documents such as handling units and delivery documents. This CDS view provides the data to answer the following business questions: What documents are referenced by a packing group? What type of business transaction document is linked? What is the status of the referenced document? Which handling unit or delivery is associated? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDOCREFBASIC')/$value
semantic_en: "This CDS view provides document reference information for packing groups. It links packing groups to related business documents such as handling units and delivery documents. This CDS view provides the data to answer the following business questions: What documents are referenced by a packing group? What type of business transaction document is linked? What is the status of the referenced document? Which handling unit or delivery is associated? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "JIT Package Group Document Reference — CDS view giao diện dựa trên njit_d_pg_dref."
keywords:
  - "jit"
  - "package"
  - "group"
  - "document"
  - "reference"
  - "pckg"
  - "business"
  - "transaction"
  - "type"
  - "status"
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - delivery
  - document
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - transaction
---
# I_JITPCKGGRPDOCREFBASIC

**This CDS view provides document reference information for packing groups. It links packing groups to related business documents such as handling units and delivery documents. This CDS view provides the data to answer the following business questions: What documents are referenced by a packing group? What type of business transaction document is linked? What is the status of the referenced document? Which handling unit or delivery is associated? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDOCREFBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITDocRefUUID` | ✓ | |  | `jitdocrefuuid` | `RAW(16)` | NodeID |
| `JITPckgGrpUUID` |  | |  | `jitpckggrpuuid` | `RAW(16)` | NodeID |
| `BusinessTransactionDocType` |  | |  | `businesstransactiondoctype` | `CHAR(5)` | NJIT Business Transaction Document Type Code |
| `BusinessTransactionDocument` |  | |  | `businesstransactiondocument` | `CHAR(35)` | NJIT Business Transaction Document ID |
| `BusinessTransactionDocStatus` |  | |  | `businesstransactiondocstatus` | `CHAR(1)` | NJIT Business Transaction Document Status |
| `LogicalSystemID` |  | |  | `logicalsystemid` | `CHAR(10)` | Logical System |
| `LastChangeDateTime` |  | |  | `lastchangedatetime` | `DEC(21)` | Last Changed Date/Time |
| `Plant` |  | | `_HandlingUnitHeader` | `Plant` |  |  |
| `_HandlingUnitHeader` | | ✓ | | | | |
| `_DeliveryDocument` | | ✓ | | | | |
| `_JITBusTransDocType` | | ✓ | | | | |
| `_JITPckgGrpHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HandlingUnitHeader` | `I_HandlingUnitHeader` | [1..1] |
| `_DeliveryDocument` | `I_DeliveryDocument` | [1..1] |
| `_JITBusTransDocType` | `I_JITBusTransDocType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDOCREFBASIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDOCREFBASIC')/$value)*

```abap
@AccessControl                      : { authorizationCheck        : #CHECK,
                                        personalData.blocking     : #BLOCKED_DATA_EXCLUDED }
@Analytics                          : { dataCategory              : #DIMENSION,
                                        internalName              : #LOCAL }
@EndUserText.label                  : 'JIT Package Group Document Reference'
@Metadata.allowExtensions           : true
@ObjectModel                        : { modelingPattern           : #ANALYTICAL_DIMENSION,
                                        representativeKey         : 'JITDocRefUUID',
                                        sapObjectNodeType.name    : 'JITPackingGroupDocRef',
                                        supportedCapabilities     : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                                        usageType                 : { dataClass       : #TRANSACTIONAL,
                                                                      serviceQuality  : #A,
                                                                      sizeCategory    : #XL }
                                      }
@VDM.viewType                       : #BASIC

define view entity I_JITPckgGrpDocRefBasic
  as select from njit_d_pg_dref
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association        to parent I_JITPckgGrpHeader as _JITPckgGrpHeader    on  $projection.JITPckgGrpUUID = _JITPckgGrpHeader.JITPckgGrpUUID
  association [1..1] to I_HandlingUnitHeader      as _HandlingUnitHeader  on  $projection.BusinessTransactionDocument = _HandlingUnitHeader.HandlingUnitExternalID
                                                                              and $projection.BusinessTransactionDocType  = 'X'
  association [1..1] to I_DeliveryDocument        as _DeliveryDocument    on  $projection.BusinessTransactionDocument = _DeliveryDocument.DeliveryDocument
  association [0..1] to I_JITBusTransDocType      as _JITBusTransDocType  on  $projection.BusinessTransactionDocType = _JITBusTransDocType.BusinessTransactionDocType
{

  key jitdocrefuuid                as JITDocRefUUID,
      @ObjectModel.foreignKey.association: '_JITPckgGrpHeader'
      jitpckggrpuuid               as JITPckgGrpUUID,
      @ObjectModel.foreignKey.association: '_JITBusTransDocType'
      businesstransactiondoctype   as BusinessTransactionDocType,
      businesstransactiondocument  as BusinessTransactionDocument,
      businesstransactiondocstatus as BusinessTransactionDocStatus,
      logicalsystemid              as LogicalSystemID,
      @Semantics.systemDateTime.lastChangedAt: true
      lastchangedatetime           as LastChangeDateTime,

      //Association
      _HandlingUnitHeader.Plant,
      _JITPckgGrpHeader,
      _HandlingUnitHeader,
      _DeliveryDocument,
      _JITBusTransDocType
}
where
  businesstransactiondocstatus = '1'
```
