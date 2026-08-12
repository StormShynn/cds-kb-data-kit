---
name: I_ENGMNTPROJCHANGEDOCDEX
description: "Engmntprojchangedocdex"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeDocObject` | ✓ | |  |  | `CHAR(90)` | Object value |
| `ChangeDocObjectClass` | ✓ | |  |  | `CHAR(15)` | Object Class |
| `ChangeDocument` | ✓ | |  |  | `CHAR(10)` | Change Number of Document |
| `DatabaseTable` | ✓ | |  |  | `CHAR(30)` | Table Name |
| `ChangeDocTableKey` | ✓ | |  |  | `CHAR(70)` | Key of Modified Table Row |
| `ChangeDocDatabaseTableField` | ✓ | |  |  | `CHAR(30)` | Field Name |
| `ChangeDocItemChangeType` | ✓ | |  |  | `CHAR(1)` | Type of Change |
| `ChangeDocItemChangeTypeText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `DatabaseTableText` |  | |  |  | `CHAR(60)` | Short Description of Repository Objects |
| `ChangeDocGlobalFieldName` |  | |  |  | `CHAR(30)` | DD: Field Name Original Spelling |
| `ChangeTransactionCode` |  | |  |  | `CHAR(20)` | Transaction in which a change was made |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User Name of Person Making Change in Change Document |
| `UserName` |  | |  |  | `CHAR(80)` | User Description |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date of Change Document |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Change |
| `ChangeDocPreviousFieldValue` |  | |  |  | `CHAR(254)` | Old Content of Changed Field |
| `ChangeDocNewFieldValue` |  | |  |  | `CHAR(254)` | New Content of Changed Field |
| `ChangeDocPreviousStrFieldValue` |  | |  |  |  |  |
| `ChangeDocNewStrFieldValue` |  | |  |  |  |  |
| `EngagementProject` |  | |  |  | `CHAR(40)` | Engagement Project ID |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Work Package ID |

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
