---
name: I_TAXAUTHORITYDOCUMENT
description: "Taxauthoritydocument"
app_component: CA-GTF-CSC-EDC
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EDCTaxAuthRecordUUID` | ✓ | |  | `record_guid` | `CHAR(32)` | Record GUID |
| `EDCTaxAuthSqncNmbr` |  | |  | `seq_nr` | `NUMC(3)` | Tax authority Record Sequence Number |
| `EDCCompany` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `EDCCountry` |  | |  | `country` | `CHAR(2)` | ISO Code of the Country/Region |
| `EDCCommonKey` |  | |  | `common_key` | `CHAR(120)` | Consistency Common Key |
| `EDCTaxAuthDocumentKey` |  | |  | `document_key` | `CHAR(40)` | Document Key |
| `EDCDocumentPeriod` |  | |  | `document_period` | `NUMC(6)` | eDocument Consistency: Document Period/Year |
| `EDCTaxAuthDocumentType` |  | |  | `document_type` | `CHAR(20)` | Document Type |
| `EDCBusinessPartnerID` |  | |  | `bptaxid` | `CHAR(60)` | Identification Number |
| `EDCTaxAuthStatus` |  | |  | `status` | `CHAR(20)` | Document Status |
| `EDCStatusChangeDate` |  | |  | `status_change_date` | `DATS(8)` | Status Change on(Date) |
| `EDCApplicationLogID` |  | |  | `appl_log_id` | `CHAR(100)` | Application Log: External Identification |
| `EDCCreatedByUser` |  | |  | `created_by` | `CHAR(12)` | Record Created by |
| `EDCCreatedOnDateTime` |  | |  | `created_on` | `DEC(15)` | Record Created On |
| `EDCChangedByUser` |  | |  | `changed_by` | `CHAR(12)` | Record Changed by |
| `EDCChangedOnDateTime` |  | |  | `changed_on` | `DEC(15)` | Record Changed On |
| `EDCTaxAuthStatusText` |  | | `_TaxAuthDocumentStatusText` | `EDCTaxAuthStatusText` | `CHAR(30)` | Consistency Document Status Description |
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
