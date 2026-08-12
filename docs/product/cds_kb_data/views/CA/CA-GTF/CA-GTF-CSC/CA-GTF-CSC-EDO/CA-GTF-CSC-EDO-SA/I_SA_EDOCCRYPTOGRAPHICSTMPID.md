---
name: I_SA_EDOCCRYPTOGRAPHICSTMPID
description: "SA Edoccryptographicstmpid"
app_component: CA-GTF-CSC-EDO-SA
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-SA
  - lob:Cross-Application Components
---
# I_SA_EDOCCRYPTOGRAPHICSTMPID

**SA Edoccryptographicstmpid**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-SA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SA_EDocLgclSolnUUID` | ✓ | |  | `egs_id` |  |  |
| `SA_EDocCryptographicSqncNmbr` | ✓ | |  | `csid_seq_no` |  |  |
| `SA_EDocValidityStartDate` | ✓ | |  | `from_date` |  |  |
| `SA_EDocValidityEndDate` |  | |  | `to_date` |  |  |
| `SA_EDocInvoiceSequenceNumber` |  | |  | `icv` |  |  |
| `SA_EDocPrevInvoiceHashBinary` |  | |  | `prev_inv_hash` |  |  |
| `SA_EDocComplianceRequestId` |  | |  | `c_csid_req_id` |  |  |
| `SA_EDocProductionRequestId` |  | |  | `p_csid_req_id` |  |  |
| `SA_EDocElectronicGnrtdSolnSts` |  | |  | `status` |  |  |
| `SA_EDocCertSigningReqDtaBinary` |  | |  | `csr` |  |  |
| `SA_EDocComplianceStampIdBinary` |  | |  | `c_csid` |  |  |
| `SA_EDocProdnStmpIdBinary` |  | |  | `p_csid` |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'eDocument KSA  CSID Information'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #TRANSACTIONAL},
  supportedCapabilities: [ #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,  
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #UI_PROVIDER_PROJECTION_SOURCE ],
  modelingPattern: #NONE
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
                           
define view entity I_SA_EDocCryptographicStmpId as select from edosacsid
{
  key egs_id          as SA_EDocLgclSolnUUID,
  key csid_seq_no     as SA_EDocCryptographicSqncNmbr,
  key from_date       as SA_EDocValidityStartDate,
      to_date         as SA_EDocValidityEndDate,
      icv             as SA_EDocInvoiceSequenceNumber,
      prev_inv_hash   as SA_EDocPrevInvoiceHashBinary,
      c_csid_req_id   as SA_EDocComplianceRequestId,
      p_csid_req_id   as SA_EDocProductionRequestId,
      status          as SA_EDocElectronicGnrtdSolnSts,
      csr             as SA_EDocCertSigningReqDtaBinary,
      c_csid          as SA_EDocComplianceStampIdBinary,
      p_csid          as SA_EDocProdnStmpIdBinary 
}
```
