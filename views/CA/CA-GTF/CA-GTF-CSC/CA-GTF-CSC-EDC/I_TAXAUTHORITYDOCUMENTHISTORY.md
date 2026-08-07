---
name: I_TAXAUTHORITYDOCUMENTHISTORY
description: Taxauthoritydocumenthistory
app_component: CA-GTF-CSC-EDC
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - tax
  - document
  - component:CA-GTF-CSC-EDC
  - lob:Cross-Application Components
---
# I_TAXAUTHORITYDOCUMENTHISTORY

**Taxauthoritydocumenthistory**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `EDCTaxAuthRecordUUID` | ✓ | |  | `record_guid` |
| `EDCTaxAuthSqncNmbr` | ✓ | |  | `seq_nr` |
| `EDCCompany` |  | |  | `bukrs` |
| `EDCCountry` |  | |  | `country` |
| `EDCCommonKey` |  | |  | `common_key` |
| `EDCTaxAuthDocumentKey` |  | |  | `document_key` |
| `EDCDocumentPeriod` |  | |  | `document_period` |
| `EDCTaxAuthDocumentType` |  | |  | `document_type` |
| `EDCBusinessPartnerID` |  | |  | `bptaxid` |
| `EDCTaxAuthStatus` |  | |  | `status` |
| `EDCStatusChangeDate` |  | |  | `status_change_date` |
| `EDCApplicationLogID` |  | |  | `appl_log_id` |
| `EDCCreatedByUser` |  | |  | `created_by` |
| `EDCCreatedOnDateTime` |  | |  | `created_on` |
| `EDCChangedByUser` |  | |  | `changed_by` |
| `EDCChangedOnDateTime` |  | |  | `changed_on` |
| `_TaxAuthDoc` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TaxAuthDoc` | `I_TaxAuthorityDocument` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Tax Authority Document History'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
  dataClass: #TRANSACTIONAL,
  serviceQuality: #A,
  sizeCategory: #XXL
  }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]  
define view entity I_TaxAuthorityDocumentHistory as select from edctaxauthdochis as TaxAuthDocHis
 association [1..1] to I_TaxAuthorityDocument as _TaxAuthDoc on $projection.EDCTaxAuthRecordUUID = _TaxAuthDoc.EDCTaxAuthRecordUUID
 {
  key record_guid    as EDCTaxAuthRecordUUID,
  key seq_nr         as EDCTaxAuthSqncNmbr,
  bukrs              as EDCCompany,
  country            as EDCCountry,
  common_key         as EDCCommonKey,
  document_key       as EDCTaxAuthDocumentKey,
  document_period    as EDCDocumentPeriod,
  document_type      as EDCTaxAuthDocumentType,
  bptaxid            as EDCBusinessPartnerID,
  status             as EDCTaxAuthStatus,
  status_change_date as EDCStatusChangeDate,
  appl_log_id        as EDCApplicationLogID,
  created_by         as EDCCreatedByUser,
  created_on         as EDCCreatedOnDateTime,
  changed_by         as EDCChangedByUser,
  changed_on         as EDCChangedOnDateTime,
  
 /* associations */  
  _TaxAuthDoc
}
```
