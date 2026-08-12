---
name: I_BANKCHANGEDOCUMENT
description: "Bankchangedocument"
app_component: CA-BK-BNK-2CL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-BK
  - CA-BK-BNK
  - interface-view
  - bank
  - document
  - component:CA-BK-BNK-2CL
  - lob:Cross-Application Components
  - bo:Bank
---
# I_BANKCHANGEDOCUMENT

**Bankchangedocument**

| Property | Value |
|---|---|
| App Component | `CA-BK-BNK-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankCountry` | ✓ | |  |  | `CHAR(3)` | Country/Region Key |
| `BankInternalID` | ✓ | |  |  | `CHAR(15)` | Bank Keys |
| `ChangeDocument` | ✓ | |  |  | `CHAR(10)` | Change Number of Document |
| `ChangeDocTableKey` | ✓ | |  |  | `CHAR(70)` | Key of Modified Table Row |
| `ChangeDocDatabaseTableField` | ✓ | |  |  | `CHAR(30)` | Field Name |
| `DatabaseTableFieldName` | ✓ | |  |  | `CHAR(40)` | Long Field Label |
| `ChangeDocItemChangeTypeText` | ✓ | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `DatabaseTable` | ✓ | |  |  | `CHAR(30)` | Table Name |
| `ChangeDocTransactionCode` | ✓ | |  |  | `CHAR(20)` | Transaction in which a change was made |
| `ChangeDocItemChangeType` |  | |  |  | `CHAR(1)` | Change Document Type of Change |
| `ChangeDocObjectClass` |  | |  |  | `CHAR(15)` | Bank Change Document Object Class |
| `ChangeDocNewFieldValue` |  | |  |  | `CHAR(254)` | New contents of changed field |
| `ChangeDocPreviousFieldValue` |  | |  |  | `CHAR(254)` | Old contents of changed field |
| `DatabaseFieldTechnicalName` |  | |  | `cast(ChangeDocDatabaseTableField as bf_bank_change_doc_tech_field preserving type )` | `CHAR(30)` | Change Document technical field |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Changed By |
| `CreationDate` |  | |  |  | `DATS(8)` | Changed On |
| `CreationTime` |  | |  |  | `TIMS(6)` | Changed At |
| `CreationDateTime` |  | |  | `cast(dats_tims_to_tstmp(CreationDate, CreationTime, abap_system_timezone($session.client, 'NULL'), $session.client, 'NULL') as timestamp preserving type )` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Manage Banks Basic Change Logs'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
  serviceQuality: #C,
  sizeCategory : #XXL,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@VDM.viewType: #COMPOSITE
define view entity I_BankChangeDocument
  as select from P_BankChangeDocs
{
  key BankCountry,
  key BankInternalID,
  key ChangeDocument,
  key ChangeDocTableKey,
      @ObjectModel.text.element: [ 'DatabaseTableFieldName' ]
  key ChangeDocDatabaseTableField,
      @Semantics.text:true
  key DatabaseTableFieldName,
      @ObjectModel.text.element: [ 'ChangeDocItemChangeType' ]
  key ChangeDocItemChangeTypeText,
  key DatabaseTable,
  key ChangeDocTransactionCode,
      @Semantics.text:true
      ChangeDocItemChangeType,
      ChangeDocObjectClass,
      ChangeDocNewFieldValue,
      ChangeDocPreviousFieldValue,
      cast(ChangeDocDatabaseTableField as  bf_bank_change_doc_tech_field preserving type ) as DatabaseFieldTechnicalName,
      CreatedByUser,
      CreationDate,
      CreationTime,
      cast(dats_tims_to_tstmp(CreationDate, CreationTime, abap_system_timezone($session.client, 'NULL'),
            $session.client, 'NULL') as timestamp preserving type )                        as CreationDateTime
}
where
  (
          DatabaseTable                 =  'BNKA'
  )
  or(
          DatabaseTable                 =  'ADRC'
    and   not(
        ChangeDocDatabaseTableField     =  'KEY'
        and length( ChangeDocTableKey ) =  21
      )
    and   not(
        ChangeDocItemChangeType         =  'E'
        and ChangeDocDatabaseTableField <> 'ADDRORIGIN'
      )
  )
```
