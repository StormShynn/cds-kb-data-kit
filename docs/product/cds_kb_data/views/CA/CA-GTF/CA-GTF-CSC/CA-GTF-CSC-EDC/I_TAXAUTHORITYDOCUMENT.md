---
name: I_TAXAUTHORITYDOCUMENT
description: "Taxauthoritydocument"
app_component: CA-GTF-CSC-EDC
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
  - tax
  - document
  - component:CA-GTF-CSC-EDC
  - lob:Cross-Application Components
---
# I_TAXAUTHORITYDOCUMENT

**Taxauthoritydocument**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EDCTaxAuthRecordUUID` | ✓ | |  | `record_guid` |  |  |
| `EDCTaxAuthSqncNmbr` |  | |  | `seq_nr` |  |  |
| `EDCCompany` |  | |  | `bukrs` |  |  |
| `EDCCountry` |  | |  | `country` |  |  |
| `EDCCommonKey` |  | |  | `common_key` |  |  |
| `EDCTaxAuthDocumentKey` |  | |  | `document_key` |  |  |
| `EDCDocumentPeriod` |  | |  | `document_period` |  |  |
| `EDCTaxAuthDocumentType` |  | |  | `document_type` |  |  |
| `EDCBusinessPartnerID` |  | |  | `bptaxid` |  |  |
| `EDCTaxAuthStatus` |  | |  | `status` |  |  |
| `EDCStatusChangeDate` |  | |  | `status_change_date` |  |  |
| `EDCApplicationLogID` |  | |  | `appl_log_id` |  |  |
| `EDCCreatedByUser` |  | |  | `created_by` |  |  |
| `EDCCreatedOnDateTime` |  | |  | `created_on` |  |  |
| `EDCChangedByUser` |  | |  | `changed_by` |  |  |
| `EDCChangedOnDateTime` |  | |  | `changed_on` |  |  |
| `EDCTaxAuthStatusText` |  | | `_TaxAuthDocumentStatusText` | `EDCTaxAuthStatusText` |  |  |
| `_TaxAuthDocHis` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TaxAuthDocHis` | `I_TaxAuthorityDocumentHistory` | [0..*] |
| `_TaxAuthDocumentStatusText` | `I_EDCTaxAuthDocStsTxt` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Tax Authority Document'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
  dataClass: #TRANSACTIONAL,
  serviceQuality: #A,
  sizeCategory: #XXL
  }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]  
define view entity I_TaxAuthorityDocument
  as select from edctaxauthdoc as TaxAuthDoc
  association [0..*] to I_TaxAuthorityDocumentHistory as _TaxAuthDocHis             on  $projection.EDCTaxAuthRecordUUID = _TaxAuthDocHis.EDCTaxAuthRecordUUID
  association [0..1] to I_EDCTaxAuthDocStsTxt         as _TaxAuthDocumentStatusText on  $projection.EDCTaxAuthDocumentType  = _TaxAuthDocumentStatusText.EDCTaxAuthDocumentType
                                                                                    and $projection.EDCTaxAuthStatus        = _TaxAuthDocumentStatusText.EDCTaxAuthStatus
                                                                                    and _TaxAuthDocumentStatusText.Language = $session.system_language
{
  key record_guid        as EDCTaxAuthRecordUUID,
      seq_nr             as EDCTaxAuthSqncNmbr,
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
      _TaxAuthDocumentStatusText.EDCTaxAuthStatusText,

      /* associations */
      _TaxAuthDocHis
}
```
