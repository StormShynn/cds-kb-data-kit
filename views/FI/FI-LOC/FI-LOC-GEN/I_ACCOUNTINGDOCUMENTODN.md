---
name: I_ACCOUNTINGDOCUMENTODN
description: Accounting DocumentUMENTODN
app_component: FI-LOC-GEN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-GEN
  - interface-view
  - accounting-document
  - document
  - component:FI-LOC-GEN
  - lob:Finance
---
# I_ACCOUNTINGDOCUMENTODN

**Accounting DocumentUMENTODN**

| Property | Value |
|---|---|
| App Component | `FI-LOC-GEN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast(AFDFDocumentKey1 as bukrs )` |
| `AccountingDocument` | ✓ | |  | `cast(AFDFDocumentKey2 as farp_belnr_d )` |
| `FiscalYear` | ✓ | |  | `cast(AFDFDocumentKey3 as gjahr )` |
| `OfficialDocumentNumberType` | ✓ | |  |  |
| `AFDFUniqueKeyUUID` |  | |  |  |
| `AFDFDocumentType` |  | |  |  |
| `AFDFRecordType` |  | |  |  |
| `OfficialDocumentNumberCountry` |  | |  |  |
| `OfficialDocumentNumber` |  | |  |  |
| `ODNLegalDateTimeText` |  | |  |  |
| `OfficialDocumentNumberIntType` |  | |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Accounting Document ODN'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel.usageType:{
    serviceQuality: #B,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
    }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

define view entity I_AccountingDocumentODN
  as select from I_AdditionalFiscalDataODN
{
  key cast(AFDFDocumentKey1 as bukrs )        as CompanyCode,
  key cast(AFDFDocumentKey2 as farp_belnr_d ) as AccountingDocument,
  key cast(AFDFDocumentKey3 as gjahr )        as FiscalYear,
  key OfficialDocumentNumberType,
      AFDFUniqueKeyUUID,
      AFDFDocumentType,
      AFDFRecordType,
      OfficialDocumentNumberCountry,
      OfficialDocumentNumber,
      ODNLegalDateTimeText,
      OfficialDocumentNumberIntType
}
where AFDFDocumentType = 'ADH'
```
