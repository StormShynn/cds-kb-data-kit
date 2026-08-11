---
name: I_IN_SUBCONTRGDOCDET
description: "This CDS view retrieves data records of reconciliation status and details of the Subcontracting challans for India. This CDS view provides the data to answer the following business questions: Which subcontracting challans are not yet reconciled? Which subcontracting challans are partially reconciled? Which subcontracting challans are fully reconciled? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-LOC-LO-IN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_SUBCONTRGDOCDET')/$value
semantic_en: "This CDS view retrieves data records of reconciliation status and details of the Subcontracting challans for India. This CDS view provides the data to answer the following business questions: Which subcontracting challans are not yet reconciled? Which subcontracting challans are partially reconciled? Which subcontracting challans are fully reconciled? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "India Subcontracting Document Detail — CDS view giao diện dựa trên j_1ig_subcon."
keywords:
  - "india"
  - "subcontracting"
  - "document"
  - "detail"
  - "purg"
  - "company"
  - "code"
  - "material"
  - "year"
  - "item"
  - "sequence"
  - "number"
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-LO-IN
  - contract
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-IN
  - interface-view
  - lob:finance
  - lob:logistics general
  - document
---
# I_IN_SUBCONTRGDOCDET

**This CDS view retrieves data records of reconciliation status and details of the Subcontracting challans for India. This CDS view provides the data to answer the following business questions: Which subcontracting challans are not yet reconciled? Which subcontracting challans are partially reconciled? Which subcontracting challans are fully reconciled? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-IN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_SUBCONTRGDOCDET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurgOrgCompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `MaterialDocument` | ✓ | |  | `mblnr` | `CHAR(10)` | Number of Material Document |
| `MaterialDocumentYear` | ✓ | |  | `mjahr` | `NUMC(4)` | Material Document Year |
| `MaterialDocumentItem` | ✓ | |  | `zeile` | `NUMC(4)` | Item in Material Document |
| `IN_SequenceNumber` | ✓ | |  | `seq_no` | `NUMC(4)` | Sequence number |
| `IN_SubcontrgDocNmbr` | ✓ | |  | `chln_inv` | `CHAR(10)` | Challan Number or Invoice Number for Subcontracting |
| `IN_SubcontractingDocumentItem` | ✓ | |  | `item` | `NUMC(6)` | Challan Item or Invoice Item for Subcontracting |
| `MaterialDocPostgDate` |  | |  | `budat` | `DATS(8)` | Posting Date in the Document |
| `GoodsMovementType` |  | |  | `bwart` | `CHAR(3)` | Movement Type (Inventory Management) |
| `Plant` |  | |  | `werks` | `CHAR(4)` | Plant |
| `QuantityInBaseUnit` |  | |  | `menge` | `QUAN(13)` | Quantity |
| `IN_GRItemRemainingQuantity` |  | |  | `gr_rqty` | `QUAN(13)` | GR Remaining Quantity |
| `BaseUnit` |  | |  | `meins` | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  | `ch_qty` | `QUAN(13)` | Quantity |
| `IN_ChallanItemOpenQuantity` |  | |  | `ch_oqty` | `QUAN(13)` | Challan Quantity Open for Reconciliation |
| `Material` |  | |  | `matnr` | `CHAR(40)` | Material Number |
| `ActiveSupplier` |  | |  | `lifnr` | `CHAR(10)` | Account Number of Supplier |
| `IN_SubcontrgItmRcnldQty` |  | |  | `rec_qty` | `QUAN(13)` | Challan Reconciled Quantity |
| `QuantityUnit` |  | |  | `rec_meins` | `UNIT(3)` | Base Unit of Measure |
| `IN_ChallanItemStatus` |  | |  | `status` | `CHAR(1)` | Subcontracting Status |
| `IssgOrRcvgStkIdfgSpclStkType` |  | |  | `sobkz` | `CHAR(1)` | Special Stock Indicator |
| `Batch` |  | |  | `charg` | `CHAR(10)` | Batch Number |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Supplier` | `lfa1` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_SUBCONTRGDOCDET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_SUBCONTRGDOCDET')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IINSUBCONTRGDET'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: 
   [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

@ObjectModel.usageType: {
sizeCategory: #L,
serviceQuality: #C,
dataClass: #MIXED }
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'India Subcontracting Document Detail'

define view I_IN_SubcontrgDocDet
as select from j_1ig_subcon as _SubcontrgDoc
association [0..1] to lfa1 as _Supplier on _SubcontrgDoc.lifnr = _Supplier.lifnr
{
key bukrs as PurgOrgCompanyCode,
key mblnr as MaterialDocument,
key mjahr as MaterialDocumentYear,
key zeile as MaterialDocumentItem,
key seq_no as IN_SequenceNumber,
key chln_inv as IN_SubcontrgDocNmbr,
key item as IN_SubcontractingDocumentItem,

budat as MaterialDocPostgDate,
bwart as GoodsMovementType,
werks as Plant,
@Semantics.quantity.unitOfMeasure:'BaseUnit'
menge as QuantityInBaseUnit,
@Semantics.quantity.unitOfMeasure:'BaseUnit'
gr_rqty as IN_GRItemRemainingQuantity,
meins as BaseUnit, 
@Semantics.quantity.unitOfMeasure:'BaseUnit'
ch_qty as Quantity,
@Semantics.quantity.unitOfMeasure:'BaseUnit'
ch_oqty as IN_ChallanItemOpenQuantity,
matnr as Material,
lifnr as ActiveSupplier,
@Semantics.quantity.unitOfMeasure:'QuantityUnit'
rec_qty as IN_SubcontrgItmRcnldQty,
rec_meins as QuantityUnit,
status as IN_ChallanItemStatus,
sobkz as IssgOrRcvgStkIdfgSpclStkType,
charg as Batch
}
where 
(
_SubcontrgDoc.lifnr <> ' '
and _Supplier.cvp_xblck <> 'X'
)
```
