---
name: I_ENGMNTPROJCHANGEDOCDEX
description: Engmntprojchangedocdex
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-CPD
  - CA-CPD-SS
  - interface-view
  - data-extraction
  - component:CA-CPD-SS
  - lob:Cross-Application Components
---
# I_ENGMNTPROJCHANGEDOCDEX

**Engmntprojchangedocdex**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ChangeDocObject` | `ChangeDocObject` |
| key `ChangeDocObjectClass` | `ChangeDocObjectClass` |
| key `ChangeDocument` | `ChangeDocument` |
| key `DatabaseTable` | `DatabaseTable` |
| key `ChangeDocTableKey` | `ChangeDocTableKey` |
| key `ChangeDocDatabaseTableField` | `ChangeDocDatabaseTableField` |
| key `ChangeDocItemChangeType` | `ChangeDocItemChangeType` |
| `ChangeDocItemChangeTypeText` | `ChangeDocItemChangeTypeText` |
| `DatabaseTableText` | `DatabaseTableText` |
| `ChangeDocGlobalFieldName` | `ChangeDocGlobalFieldName` |
| `ChangeTransactionCode` | `ChangeTransactionCode` |
| `CreatedByUser` | `CreatedByUser` |
| `UserName` | `UserName` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `ChangeDocPreviousFieldValue` | `ChangeDocPreviousFieldValue` |
| `ChangeDocNewFieldValue` | `ChangeDocNewFieldValue` |
| `ChangeDocPreviousStrFieldValue` | `ChangeDocPreviousStrFieldValue` |
| `ChangeDocNewStrFieldValue` | `ChangeDocNewStrFieldValue` |
| `EngagementProject` | `EngagementProject` |
| `WorkPackage` | `WorkPackage` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IENGMNTPRJCHGDOC'
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Change Documents in Engagement Projects'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@AbapCatalog.compiler.compareFilter: true
@AccessControl:{
    authorizationCheck: #PRIVILEGED_ONLY,
    personalData.blocking: #('TRANSACTIONAL_DATA')
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name: 'CommercialProject'
@ObjectModel.supportedCapabilities:  [ #EXTRACTION_DATA_SOURCE ]


@VDM.viewType: #COMPOSITE

@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'cdpos', role:#MAIN,
                    viewElement: ['ChangeDocObject', 'ChangeDocObjectClass', 'ChangeDocument', 'DatabaseTable', 'ChangeDocTableKey', 'ChangeDocDatabaseTableField', 'ChangeDocItemChangeType'],
                    tableElement: ['objectid', 'objectclas', 'changenr', 'tabname', 'tabkey', 'fname', 'chngind' ]
                },
                
                 {
                    table: 'cdhdr', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ChangeDocObjectClass', 'ChangeDocObject', 'ChangeDocument'],
                    tableElement: ['objectclas', 'objectid', 'changenr']
                 }
            ]
        }
    }
 }
 

define view I_EngmntProjChangeDocDEX as select from P_EngmntProjChangeDocWthPrj {
  key ChangeDocObject,
  key ChangeDocObjectClass,
  key ChangeDocument,
  key DatabaseTable,
  key ChangeDocTableKey,
  key ChangeDocDatabaseTableField,
  key ChangeDocItemChangeType,
  ChangeDocItemChangeTypeText,
  DatabaseTableText,
  ChangeDocGlobalFieldName,
  ChangeTransactionCode,
  CreatedByUser,
  UserName,
  CreationDate,
  CreationTime,
  ChangeDocPreviousFieldValue,
  ChangeDocNewFieldValue,
  ChangeDocPreviousStrFieldValue,
  ChangeDocNewStrFieldValue,
  EngagementProject,
  WorkPackage
}
```
