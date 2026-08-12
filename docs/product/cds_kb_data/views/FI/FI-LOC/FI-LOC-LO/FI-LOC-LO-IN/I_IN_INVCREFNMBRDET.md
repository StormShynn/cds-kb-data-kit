---
name: I_IN_INVCREFNMBRDET
description: "IN Invcrefnmbrdet"
app_component: FI-LOC-LO-IN
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - component:FI-LOC-LO-IN
  - lob:Finance
---
# I_IN_INVCREFNMBRDET

**IN Invcrefnmbrdet**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-IN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `IN_DocumentNumber` | ✓ | |  | `docno` |  |  |
| `FiscalYear` | ✓ | |  | `doc_year` |  |  |
| `IN_DocumentType` | ✓ | |  | `doc_type` |  |  |
| `IN_OfficialDocumentNumber` | ✓ | |  | `ltrim( odn, '0')` |  |  |
| `IN_InvoiceReferenceNumber` | ✓ | |  | `irn` |  |  |
| `IN_Version` | ✓ | |  | `version` |  |  |
| `BusinessPlace` |  | |  | `bupla` |  |  |
| `IN_OfficialDocumentNumberDate` |  | |  | `odn_date` |  |  |
| `IN_AcknowledgmentNumber` |  | |  | `ack_no` |  |  |
| `IN_AcknowledgmentDateTimeValue` |  | |  | `ack_date` |  |  |
| `IN_InvcRefNmbrStatus` |  | |  | `irn_status` |  |  |
| `IN_CancellationDateTimeValue` |  | |  | `cancel_date` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `CreatedAtDate` |  | |  | `erdat` |  |  |
| `TimeEntry` |  | |  | `erzet` |  |  |
| `IN_SignedInvoiceValue` |  | |  | `signed_inv` |  |  |
| `IN_SignedQRCodeValue` |  | |  | `signed_qrcode` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'I_IRNDETAILS'
@EndUserText.label: 'Invoice Reference Number for GST India'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType: {
    sizeCategory: #L,
    serviceQuality: #C,
    dataClass: #MIXED }
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@Metadata.ignorePropagatedAnnotations:true
define view I_IN_InvcRefNmbrDet as select from j_1ig_invrefnum
{
    key bukrs as CompanyCode,
    key docno as IN_DocumentNumber,
    key doc_year as FiscalYear,
    key doc_type as IN_DocumentType,
    @EndUserText.label: 'Official Document Number'    
    key ltrim( odn, '0') as IN_OfficialDocumentNumber,
    key irn as IN_InvoiceReferenceNumber,
    key version as IN_Version,
    bupla as BusinessPlace,
    odn_date as IN_OfficialDocumentNumberDate,
    ack_no as IN_AcknowledgmentNumber,
    ack_date as IN_AcknowledgmentDateTimeValue,
    irn_status as IN_InvcRefNmbrStatus,
    cancel_date as IN_CancellationDateTimeValue,
    ernam as CreatedByUser,
    erdat as CreatedAtDate,
    erzet as TimeEntry,
    signed_inv as IN_SignedInvoiceValue,
    signed_qrcode as IN_SignedQRCodeValue
}
```
