---
name: I_IN_EWBILLDOCDET
description: IN Ewbilldocdet
app_component: FI-LOC-LO-IN
software_component: SAPSCORE
release_state: released
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
# I_IN_EWBILLDOCDET

**IN Ewbilldocdet**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-IN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `bukrs` |
| key `IN_DocumentType` | `doctyp` |
| key `IN_DocumentNumber` | `docno` |
| key `FiscalYear` | `gjahr` |
| key `IN_ElectronicWaybillNumber` | `ebillno` |
| `IN_EWbillGnrtdDate` | `egen_dat` |
| `IN_EWbillGnrtdTime` | `egen_time` |
| `IN_ValidFromDate` | `vdfmdate` |
| `IN_ValidFromTime` | `vdfmtime` |
| `IN_ValidToDate` | `vdtodate` |
| `IN_ValidToTime` | `vdtotime` |
| `IN_EWbillDocStatus` | `status` |
| `CreatedByUser` | `ernam` |
| `CreatedAtDate` | `erdat` |
| `LastChangeByUser` | `aenam` |
| `LastChangedDate` | `aedat` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'I_EWAYBILLDETL'
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
@EndUserText.label: 'Link EWbill to Document for GST India'
@Metadata.ignorePropagatedAnnotations:true
define view I_IN_EWbillDocDet 
  as select from j_1ig_ewaybill
{
      key bukrs as CompanyCode,
      key doctyp as IN_DocumentType,
      key docno as IN_DocumentNumber,
      key gjahr as FiscalYear,
      key ebillno as IN_ElectronicWaybillNumber,
      egen_dat as IN_EWbillGnrtdDate,
      egen_time as IN_EWbillGnrtdTime,
      vdfmdate as IN_ValidFromDate,
      vdfmtime as IN_ValidFromTime,
      vdtodate as IN_ValidToDate,
      vdtotime as IN_ValidToTime,
      status as IN_EWbillDocStatus,
      ernam as CreatedByUser,
      erdat as CreatedAtDate,
      aenam as LastChangeByUser,
      aedat as LastChangedDate
}
```
